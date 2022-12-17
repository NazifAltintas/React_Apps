import React from 'react';

const myFavCity = 'Vancouver is my favorite city'

function Body(){
    return <div>
        <button className='btn'>Click Me!!!</button>

        <div className='favCity'>
        {myFavCity}
        </div>
        <img src='https://st3.depositphotos.com/1020618/13308/i/1600/depositphotos_133081938-stock-photo-close-up-of-kebab-sandwich.jpg' className='img'></img>
        
    </div>

}

export default Body;