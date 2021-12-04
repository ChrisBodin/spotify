import React from 'react';

const SongEdit = ({ artist , song }) => {

  const { id } = artist
  const { name, album } = song
  const defaultName = name ? name : ""
  const defaultAlbum = album ? album : ""
  return (
    <>
      <h1>Edit Song from the Artist </h1>
      <form action={`/artists/${id}/songs/${song.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <label>Name</label>
        <input 
          type="text"
          required 
          defaultValue={defaultName}
          name="song[name]"
        />
        <label>Description</label>
        <textarea
          required 
          defaultValue={defaultAlbum}
          name="song[album]"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default SongEdit;