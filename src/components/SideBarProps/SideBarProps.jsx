import React from 'react'
import SideBar from '../SideBar/SideBar'

export default function SideBarProps() {
  const data = [{id:1,name:'Home'},{id:2,name:'File'},{id:3,name:'ContactUs'}]
  return (
    <ul>
        {data.map(() => (
            <SideBar data={data}/>
        ))}
    </ul>
  )
}
