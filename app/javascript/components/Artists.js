import React from 'react';

const Artists = ({ billboard, artists }) => {

  const { name } = sub 
  const url = `/billboards/${id}/artists/`
  return(
    <>
      <h1>All artists from {name}</h1>
      <a href={`/billboards/${name}/topics/new`}>Add new artist</a>
      { artists.map( (artist) => (
       <>
       <h3>{artist.rank}</h3>
       <a href={`${url}${artist.id}`}>Show</a>
       <a href={`${url}${artist.id}/edit`}>Edit</a>
       <a href={`${url}${artist.id}`} data-method="delete">
         Delete
       </a>
      </>
      )) }
    </>
  )
}