import React, { useState } from 'react'
import StudentTable from './components/studentTable/StudentTable'
import { students } from './StudentsDb'

function App() {
  const [fontSize, setFontSize] = useState(20)
  const [actBtn, setActBtn] = useState('M')

  const fontChng = {
    fontSize: `${fontSize}px`
  }

  const actBtnStyl=(btn)=>{
    return {
      fontWeight: actBtn === btn ? 'bold' : 'normal', 
    }
  }

  return (
    <>
      <div className='App'>
        <h1>Students Information Portal</h1>
        <hr />
        <div>
          <button
            type='button'
            onClick={() => {
              setFontSize(16)
              setActBtn('S')
            }}
            style={actBtnStyl('S')}
            >
            S
          </button>

          <button
            type='button'
            onClick={() => {
              setFontSize(20)
              setActBtn('M')
            }}
            style={actBtnStyl('M')}
            >
            M
          </button>

          <button
            type='button'
            onClick={() => {
              setFontSize(24)
              setActBtn('L')
            }}
            style={actBtnStyl('L')}
            >
            L
          </button>
        </div>
        <hr />
        <table width="100%" style={fontChng}>
          <tbody>
            <tr>
              <td>
                <StudentTable students={students} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
