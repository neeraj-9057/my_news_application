import React from 'react'
import loading from './spinner.gif'

const Loading = () => {
    return (
      <div className='text-center'>
        <img className="my-3" src={loading} alt=""  />
      </div>
    )

}
export default Loading
