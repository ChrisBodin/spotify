import React from 'react';

const Songs = ({ artist, songs  }) => {

  const { id, name } = artist
  const url = '/artists/${id}/songs/'
  return(
    <>
      <h1>All Songs from {name}</h1>
      <a href={`/artists/${id}/songs/new`}>Add new songs</a>
      { songs.map( (song) => (
        <>
          <h3>{song.name}</h3>
             <a href={`${url}${song.id}`}>Show</a>
             <a href={`${url}${song.id}/edit`}>Edit</a>
             <a href={`${url}${song.id}`} data-method="delete">
            Delete
          </a>
        </>
      ))}
    </>
  )
}

export default Songs;