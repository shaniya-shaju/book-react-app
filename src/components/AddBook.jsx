import React from 'react'
import Navigation from './Navigation'

const AddBook = () => {
  return (
    <div>
     <Navigation />
<div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <h2 className="text-center mb-4">ADD BOOK</h2>

            <div className="row g-3">

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Book Code / ISBN</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Author</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Publisher</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Category / Genre</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Edition</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Number of Copies</label>
                <input type="number" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Price</label>
                <input type="number" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Publication Year</label>
                <input type="number" className="form-control" />
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Shelf Location</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col col-12">
                <button className="btn btn-success">SUBMIT</button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AddBook