import React from 'react'
import IMovie from '../interface/IMovie.interface'
import like from '../assets/imgs/like.png';
import likeOn from '../assets/imgs/like-on.png';

interface PropType {
    onLikeClick: Function,
    isLike: boolean
}

export const LikeButton = ({ onLikeClick, isLike }: PropType) => {

    const getIsLiked = () => {
        return isLike ? likeOn : like
    }

    return (
        <section className="like-button">
            <button onClick={() => onLikeClick()}>
                <img className='heart' src={getIsLiked()} />
            </button>
        </section>
    )
}
