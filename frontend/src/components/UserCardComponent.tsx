import React from 'react';
import { CardProps } from '../types';

const UserCardComponent: React.FC<CardProps> = ({name, city='?', country='?', favorite_sport='?'})=>{
    return(
        <div className='card'>
            <h2>{name}</h2>
            <h3>City: {city}</h3>
            <h3>Country: {country}</h3>
            <h3>Favorite sport: {favorite_sport}</h3>
        </div>
    )
}

export default UserCardComponent