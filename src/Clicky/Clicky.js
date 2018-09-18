import React from 'react'

import './Clicky.css'

 const Clicky =(props)=> (

            //everything you want in the clicky is a value to add to array and on click, a function to handle the logic in app.js
            //classname is only for css purposes
            <div value={props.id} onClick={()=>props.click(props.id)} className='clicky'>
                <img className='clickyimg' src={props.image} alt='img should be here' />
            </div>
 )
       
    
export default Clicky