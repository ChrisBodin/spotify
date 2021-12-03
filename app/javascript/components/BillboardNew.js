import React from 'react';

const BillboardNew = ({ billboard }) => {

  const { name } = billboard
  const defaultName = name ? name : ""
  return (
    <>
      <h1>Create new Billboard</h1><form action="/billboards" method="post">
        <input
          type="text"
          placeholder="Billboard name"
          required
          defaultValue={defaultName}
          name="sub[name" />
        <button type="submit">Add Billboard</button>
      </form><a href="/billboards">Back to Billboards</a>
    </>
  )
}

export default BillboardNew