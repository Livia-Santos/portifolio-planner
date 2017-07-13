import React from 'react'
import Project from './Projects'
import { Image } from 'react';

export default function ProjectList({
  items,
  skills,
  url
}) {
  return (
    <div>
    <h3>Livia Melquiades dos Santos</h3>
      <img src={require('./avatar.jpeg')}/>

    {
      items.map((item, index) => (
        <Project  key={index}
          title={item.title}
          skills={item.skills}
          url={item.url}
        />
      ))
    }
    </div>
  )
}
