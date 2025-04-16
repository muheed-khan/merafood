import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
<>
<footer className="py-5 w-100">
  <div className="d-flex justify-content-between flex-wrap">
    {/* Left: Section Links */}
    <div className="col-md-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link to="/" className="nav-link p-0 text-muted">Home</Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/login" className="nav-link p-0 text-muted">Features</Link>
        </li>
      </ul>
    </div>

    {/* Right: Newsletter Form */}
    <div className="col-md-5">
      <form>
        <h5>Subscribe to our newsletter</h5>
        <p>Monthly digest of what's new and exciting from us.</p>
        <div className="d-flex w-100 gap-2">
          <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
          <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
          <button className="btn btn-primary" type="button">Subscribe</button>
        </div>
      </form>
    </div>
  </div>

  {/* Bottom line */}
  <div className="d-flex justify-content-between py-4 my-4 border-top">
    <p>© 2021 Company, Inc. All rights reserved.</p>
  </div>
</footer>


</>

)
}
