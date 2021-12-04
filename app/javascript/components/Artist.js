import React from 'react';

const Artist = ({ billboard, artist }) => {

  const { } = billboard
  const { id, name, description } = artist
  return (
    <>
      <h1>Artist: {name}</h1>
      <p>
        {description}
      </p>
      <a href='/'>Back</a>
      <a href={`/artists/${id}/songs`}>Go to songs</a>
    </>
  )
}

export default Artist;