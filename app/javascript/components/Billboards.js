import React from 'react';

const Billboards = ({ billboards }) => {
  return (
    <>
      <h1>Billboards Page</h1>
      
      <a href="/billboards/new">
        <button className="btn btn-dark">Add Billboard</button>
      </a>

      { billboards.map( (billboard) => (
        <>
          <h3>{billboard.name}</h3>
          <a href={`/billboards/${billboard.id}`}>Show</a>
          <a href={`/billboards/${billboard.id}/edit`}>Edit</a>
          <a href={`/billboards/${billboard.id}`} data-method='delete'>
            Delete
          </a>
        </>
      )) }
    </>
  )
}

export default Billboards