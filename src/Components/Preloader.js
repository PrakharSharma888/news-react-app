import React, { Component } from 'react'
import loader from '../Assests/preloader.gif'

export class Preloader extends Component {

  render() {
    return (
      <div className='text-center'>
        <img width='80px' height="80px" src={loader} alt='loading...'></img>
      </div>
    )
  }
}

export default Preloader
