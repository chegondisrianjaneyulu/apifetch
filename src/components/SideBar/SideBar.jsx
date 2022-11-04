import React from 'react'

export default function SideBar(props) {
 const {data} = props
 const {id,name} = data
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}
