import React from 'react'

function Header() {
    console.log("header render")
  return (
    <>
    <h2>header</h2>
    </>
  )
}

export default React.memo(Header)