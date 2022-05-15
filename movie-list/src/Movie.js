import React from 'react'
import star from './images/star.png'


export default function Movie(props) {

  function addStars(rating) {
    let stars = []
    for (let i = 0; i < rating; i++ ){
        stars.push(<img src={star} width="30px" alt="star"></img>)
    }
    return stars
}

  return (
    <li className='list-group-item'>
        {props.item.title}<span className='float-end'>{addStars(props.item.rating)}<button className='btn btn-sm btn-danger mx-3' onClick={() => props.deleteMovie(props.item.id)}>X</button></span>
    </li>
  )
}


