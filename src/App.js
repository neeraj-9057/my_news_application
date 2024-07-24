
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


export class App extends Component {
  pageSize = 20

  state = {
    progress: 0
  }

  setProgress = (progress)=>{
    this.setState({
      progress: progress
    })
  }

  apiKey = process.env.REACT_APP_API_KEY

  render() {
    return (
      <div>

        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
       
       <Router>
       <Navbar/>

       <Routes>
       <Route exact path="/" element= { <NewsComponent apiKey={this.apiKey}  setProgress={this.setProgress}  key= "general" pageSize={this.pageSize} country="in"  category= "general" />}/>
       <Route exact path="/business" element= { <NewsComponent apiKey={this.apiKey}  setProgress={this.setProgress}  key = "business" pageSize={this.pageSize} country="in"  category= "business" />}/>
       <Route exact path="/entertainment" element= { <NewsComponent apiKey={this.apiKey}  setProgress={this.setProgress}  key = "entertainment" pageSize={this.pageSize} country="in"  category= "entertainment" />}/>
       <Route exact path="/health" element= { <NewsComponent apiKey={this.apiKey}  setProgress={this.setProgress}  key = "health" pageSize={this.pageSize} country="in"  category= "health" />}/>
       <Route exact path="/science" element= { <NewsComponent apiKey={this.apiKey}  setProgress={this.setProgress}  key = "science" pageSize={this.pageSize} country="in"  category= "science" />}/>
       <Route exact path="/sports" element= { <NewsComponent apiKey={this.apiKey}  setProgress={this.setProgress}  key = "sports" pageSize={this.pageSize} country="in"  category= "sports" />}/>
       <Route exact path="/technology" element= { <NewsComponent apiKey={this.apiKey}  setProgress={this.setProgress}  key = "technology" pageSize={this.pageSize} country="in"  category= "technology" />}/>
       {/* <Route exact path="/general" element= { <NewsComponent apiKey={this.apiKey}  setProgress={this.setProgress}  key = "general" pageSize={this.pageSize} country="in"  category= "general" />}/> */}



       </Routes>


      </Router>

      </div>

     
      
    )
  }
}

export default App;
