import React from 'react'
import { Route } from 'react-router-dom';
import Products from './Products';
import "./Home.css";

const Home = () => {
  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image' src='https://m.media-amazon.com/images/I/71KYCbyaqML._SX3000_.jpg' alt='Hero image'/>
        <Products />
      </div>
    </div>
  )
}

export default Home
