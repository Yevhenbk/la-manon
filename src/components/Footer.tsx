import React from 'react'

interface FooterProps {
  content?: string
}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer>
      <p className="">{props.content}</p>
    </footer>
  )
}

export default Footer
