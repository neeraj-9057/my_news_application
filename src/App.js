
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


const App = ()=> {
   const pageSize = 20
   const apiKey = process.env.REACT_APP_API_KEY
   const [progress, setProgress] = useState(0)

    return (
      <div>

        <LoadingBar
        color='#f11946'
        progress={progress}
      />
       
       <Router>
       <Navbar/>

       <Routes>
       <Route exact path="/" element= { <NewsComponent apiKey={apiKey}  setProgress={setProgress}  key= "general" pageSize={pageSize} country="in"  category= "general" />}/>
       <Route exact path="/business" element= { <NewsComponent apiKey={apiKey}  setProgress={setProgress}  key = "business" pageSize={pageSize} country="in"  category= "business" />}/>
       <Route exact path="/entertainment" element= { <NewsComponent apiKey={apiKey}  setProgress={setProgress}  key = "entertainment" pageSize={pageSize} country="in"  category= "entertainment" />}/>
       <Route exact path="/health" element= { <NewsComponent apiKey={apiKey}  setProgress={setProgress}  key = "health" pageSize={pageSize} country="in"  category= "health" />}/>
       <Route exact path="/science" element= { <NewsComponent apiKey={apiKey}  setProgress={setProgress}  key = "science" pageSize={pageSize} country="in"  category= "science" />}/>
       <Route exact path="/sports" element= { <NewsComponent apiKey={apiKey}  setProgress={setProgress}  key = "sports" pageSize={pageSize} country="in"  category= "sports" />}/>
       <Route exact path="/technology" element= { <NewsComponent apiKey={apiKey}  setProgress={setProgress}  key = "technology" pageSize={pageSize} country="in"  category= "technology" />}/>
       {/* <Route exact path="/general" element= { <NewsComponent apiKey={apiKey}  setProgress={setProgress}  key = "general" pageSize={pageSize} country="in"  category= "general" />}/> */}

       </Routes>
      </Router>
      </div>
    
    )
}

export default App;
