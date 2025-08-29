import React from 'react'

interface CardProps {
  title?: string
  description?: string
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div>
      <h2 className="">{props.title}</h2>
      <p className="">{props.description}</p>
    </div>
  )
}

export default Card
