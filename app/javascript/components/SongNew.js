import React from 'react';

const SongNew = ({ artist, song }) => {

  const { id } = artist
  const { name,  album } = song
  const defaultName = name ? name : ""
  const defaultAlbum = album ? album: ""
  return (
    <>
      <h1>New Song from the Artist </h1>
      <form action={`/artists/${id}/songs`} method="post">
        <label>Name</label>
        <input 
          type="text"
          required 
          defaultValue={defaultName}
          name="song[name]"
        />
        <label>Album</label>
        <input 
          type="text"
          required 
          defaultValue={defaultAlbum}
          name="song[album]"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default SongNew;