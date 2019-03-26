import React, { Fragment } from 'react'

const Navbar = ({
  incrementPage,
  decrementPage,
  setPageNumber,
  history,
  pageNumber
}) => {
  return (
    <Fragment>
      <button
        onClick={event => setPageNumber(1, event, history)}
        type="submit"
        className="btn btn-primary"
        disabled={pageNumber === 1}
      >
        First
      </button>
      <button
        onClick={event => decrementPage(event, history)}
        type="submit"
        className="btn btn-primary"
        disabled={pageNumber === 1}
      >
        Previous
      </button>
      <button
        onClick={event => incrementPage(event, history)}
        type="submit"
        className="btn btn-primary"
        disabled={pageNumber === 162}
      >
        Next
      </button>
      <button
        onClick={event => setPageNumber(162, event, history)}
        type="submit"
        className="btn btn-primary"
        disabled={pageNumber === 162}
      >
        Last
      </button>
    </Fragment>
  )
}

export default Navbar
