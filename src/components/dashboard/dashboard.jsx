import React from 'react'
import SideBar from './sideBar'
import Cards from './cards'
import Table from './table'

export default function Dashboard() {
  return (
       <>
       <header>
        <SideBar></SideBar>
        <Cards></Cards>
        <Table></Table>


       </header>
   
       </>
  )
}
