import React from 'react'

interface NavbarProps {
  title?: string
}

const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <nav>
      <h1>{props.title}</h1>
    </nav>
  )
}

export default Navbar;
