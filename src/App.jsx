import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className='background: #F6F2F'><h1>Work <span id="id1">Remotely</span> in your home or any other places with
    <span id="id2"> Figma</span> </h1>
    <p className='font-family: Roboto;
font-size: 18px;
font-weight: 400;
line-height: 21.09px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
'>Want to start your career in design? Join the Figma community — improve your skills and knowledge.</p>
<button className='button
'>Subscribe</button>
    </div>
    </>
  )
}

export default App
