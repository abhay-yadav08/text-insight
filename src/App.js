import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'

export default function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    }
    else {
      setTheme("light");
    }
  }


  return (
    < >
      <div className={`vh-100 bg-${theme === "light" ? "white" : "black"} text-${theme === "light" ? "black" : "white"}`}>

        <Navbar title={"textInsight"} theme={theme} toggleTheme={toggleTheme} />

        <div className='container my-3'>
          <TextForm heading={"Enter text to analyze"} theme={theme} />
        </div>

        {/* <About /> */}
      </div>

    </>
  )
}
