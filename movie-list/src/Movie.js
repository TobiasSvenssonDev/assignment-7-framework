import React from 'react'


export default function Movie(props) {
  return (
    <li className='list-group-item'>
        {props.item.title}<span className='float-end'>{props.item.rating}<button className='btn btn-sm btn-danger mx-3' onClick={() => props.deleteMovie(props.item.id)}>X</button></span>
    </li>
  )
}
