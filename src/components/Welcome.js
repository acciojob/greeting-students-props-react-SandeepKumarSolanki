// write code for Welcome component here

import React from 'react'

const Welcome = ({name}) => {
  return (
    <div>
      <h1>Hey ! </h1>
      <h2>Welcome to School.</h2>
      <p>{name}</p>
    </div>
  )
}

export default Welcome

