import React from "react";

const Billboard = ({ billboard }) => {
  
  const { id, name, created_at, description } = Billboard
  return (
    <>
      <h3>{name}</h3>
      <p>
        Created: {created_at}, id: {id}
        {description}
      </p>
      <a href='/'>Back</a>
      <br />
      <a href={`/billboards/${id}/artists`}>Go to artists</a>
    </>
  )
}

export default Billboard;