import { useState } from 'react'


import './Header.css'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
  <ul>
    <li>About</li>
    <li>Features</li>
    <li>Pricing</li>
    <li>Gallery</li>
    <li>Team</li>
    {/* <li><button id="id3">Sing In</button></li> */}
  </ul>
    </>
  )
}

export default Header