import React from 'react'
import "./App.css"
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/Intro"
import Trending from "./components/Trending"
import Otomotif from "./components/Otomotif"
import Footer from './components/footer'

import "./style/landingPage.css"

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className="trending">
        <Trending />
      </div>

      <div className="otomotif">
        <Otomotif />
      </div>
      <Footer/>
    </div>
  )
}

export default App
