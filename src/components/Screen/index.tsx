import React from 'react'

interface props {
  input: string;
}
export const Screen = ({input}: props) => {
  return (
    <div>
      <p>{input}</p>
      <p>{}</p>
    </div>
  )
}
