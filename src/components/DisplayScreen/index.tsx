import React from 'react'

interface props {
  input: string;
  result: string;
}
const DisplayScreen = ({input, result}:props) => {
  return (
    <div className='h-[7.5rem] flex flex-col justify-between items-end px-2 py-5 shadow-inner shadow-blue-50 rounded-lg dark:shadow-black'>
      <p className='text-3xl text-blue-800 font-semibold'>{input}</p>
      <p className='text-lg font-semibold'>{result}</p>
    </div>
  )
}
export default DisplayScreen;