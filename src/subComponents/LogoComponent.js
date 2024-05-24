import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'
import { motion } from 'framer-motion'
import PortLogo from '../assets/Images/logo-transparent.png'



const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico',cursive;

position: fixed;
left: 2rem;
top: 2rem;
z-index:3;
`

const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <img className="pic" src={PortLogo} alt="Logo" width={100}/>
      </motion.div>
    </Logo>
  )
}

export default LogoComponent
