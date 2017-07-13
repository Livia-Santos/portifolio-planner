import React from 'react'

export default function Project({
  title,
  skills,
  url
}) {
  return (
    <div>
      <h2>{ title }</h2>
      <h3> Skills: {skills.join(", ")}</h3>
        <a href={url}> {url} </a>
      <hr/>
    </div>
  )
}
