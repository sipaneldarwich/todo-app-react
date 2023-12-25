import React from 'react'

function Todo() {
  return (
    <div className='mt-2'>
        <div className="row">
            <div class="col form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                    First Todo
                </label>
            </div>
            <div className='ml-auto'>   
                <button className='text-danger'>X</button>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Todo