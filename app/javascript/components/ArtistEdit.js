import React from 'react';

const ArtistEdit = ({ billboard, artist }) => {

  const { id } = billboard 
  const { name, description } = artist
  const defaultName = name ? name : ""
  const defaultDescription = description ? description : ""
  return (
    <>
      <h1>New artist from the Billboard {name}</h1>
      <form action={`/billboards/${id}/artists/${artist.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <label>Name</label>
        <input 
          type="text"
          required 
          defaultValue={defaultName}
          name="artist[name]"
        />
        <label>Description</label>
        <textarea
          required 
          defaultValue={defaultDescription}
          name="artist[description]"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default ArtistEdit;