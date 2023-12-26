/* eslint-disable no-undef */
import { useState } from 'react'
import './App.css'

function App() {
    const [color, setColor] = useState('#000000')

    return (
        <div className='container'>
            <h2>GET COLOR EXTENSION</h2>
            <div className="color-view" style={{ backgroundColor: color || '#000' }}></div>
            <input value={color} onChange={e => setColor(e.target.value)} />
        </div>
    )
}

export default App
