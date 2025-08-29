import React from 'react'

interface MainBoardProps {
  title?: string
}

const MainBoard: React.FC<MainBoardProps> = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

export default MainBoard
