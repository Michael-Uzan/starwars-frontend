import IMovie from "../interface/IMovie.interface"
export const storageService = {
    query,
    get,
    post,
    put,
    remove,
}

async function query(entityType: string, delay = 200): Promise<any> {
    const entities = JSON.parse(localStorage.getItem(entityType) || 'null')
    return new Promise((resolve) => setTimeout(resolve, delay, entities))
}

async function get(entityId: string, entityType: string): Promise<IMovie> {
    const entities = await query(entityType)
    const entity = entities.find((entity: any) => entity?._id === entityId)
    if (!entity) throw new Error(`Cannot get, Item ${entityId} of type: ${entityType} does not exist`)
    return entity;
}

async function post(newEntity: any, entityType: string): Promise<IMovie> {
    newEntity = {
        ...newEntity,
        _id: _makeId()
    }
    const entities = await query(entityType)
    entities.push(newEntity)
    _save(entities, entityType)
    return newEntity
}

async function put(updatedEntity: any, entityType: string): Promise<IMovie> {
    const entities = await query(entityType)
    const idx = entities.findIndex((entity: any) => entity._id === updatedEntity._id)
    if (idx < 0) { throw new Error(`Cannot update item, id "${updatedEntity.id}" was not found `) }
    entities[idx] = updatedEntity
    _save(entities, entityType)
    return updatedEntity
}

async function remove(entityId: number, entityType: string): Promise<boolean> {
    const entities = await query(entityType)
    const idx = entities.findIndex((entity: any) => entity._id === entityId)
    if (idx !== -1) entities.splice(idx, 1)
    else throw new Error(`Cannot remove, item id "${entityId}"" of type: ${entityType} does not exist`)
    _save(entities, entityType)
    return true;
}


function _save(entities: IMovie[], entityType: string) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length: number = 5): number {
    var txt = ''
    var possible = '0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return +txt
}