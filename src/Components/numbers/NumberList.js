import React from 'react'

export default function NumberList(props) {
    
  return (
    <div>
        NumberList
        {props.numbers.map((number)=>
            <li key={number.toString()}>{number}</li>
        )}
    </div>
  )
}
