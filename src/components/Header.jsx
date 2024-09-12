import React from 'react'
import {Link } from "react-router-dom"
function header() {
  return (
    <div>
      <Link to={"/Order"}>
      <button>Gönder</button>
      </Link>
    </div>
  )
}

export default header
