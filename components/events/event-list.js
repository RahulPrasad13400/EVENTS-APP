import React from 'react'
import EventItem from './event-item'

export default function EventList({items}) {
  return (
    <ul>
     {items.map((item)=> <EventItem item={item} key={item.id} /> )}
    </ul>
  )
}
