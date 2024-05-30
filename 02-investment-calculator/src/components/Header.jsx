import React from 'react'
import HeaderImg from '../assets/investment-calculator-logo.png'

const Header = () => {
  return (
    <header id='header'>
      <img src={HeaderImg} alt='Investment calculator' />
      <h1>Investment Calculator</h1>
    </header>
  )
}

export default Header
