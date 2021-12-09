import { FilmsApp } from "../pages/FilmsApp";

interface IRoutes {
    path: string,
    component: any
}

const routes: IRoutes[] = [
    {
        path: '/',
        component: FilmsApp,
    }
]

export default routes;
