import React from 'react';

const ArtistNew = ({ sub, topic }) => {

  const { id, name } = billboard
  const { name, description } = artist
  const defaultName = name ? name : ""
  const defaultDescription = description ? description : ""
  return (
    <>
      <h1>New Artist from the Billboard {name}</h1>
      <form action={`/billboards/${id}/artists`} method="post">
        <label>Name</label>
        <input 
          type="text"
          required 
          defaultValue={defaultName}
          name="artist[name]"
        />
        <label>Description</label>
        <input 
          type="text"
          required 
          defaultValue={defaultDescription}
          name="artist[description]"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default ArtistNew;