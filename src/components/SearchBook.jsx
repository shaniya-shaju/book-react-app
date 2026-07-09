import React from 'react'
import Navigation from './Navigation'

const SearchBook = () => {
  return (
    <div>
        <Navigation />
        <div className="container">
    <div className="row">
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <h2 className="text-center mb-4">SEARCH BOOK</h2>

        <div className="row g-3">

          <div className="col col-12">
            <label className="form-label">Book Code / ISBN</label>
            <input type="text" className="form-control" />
          </div>

          <div className="col col-12">
            <button className="btn btn-success">SEARCH</button>
          </div>

        </div>

      </div>
    </div>
  </div>
</div>
  )
}

export default SearchBook