import React, {Fragment} from 'react'
import {Provider} from 'react-redux'
import store from './store'
import Header from './components/Header'
import Search from  './components/Search'
import VideosList from "./components/VideosList"
import VideoPlayer from './components/VideoPlayer'
import VideoHistory from './components/VideoHistory'



function App() {
  return (
    <Provider store = {store}>
      <Fragment>
        <Header/>
        <VideoHistory/>
        <Search/> 
        <VideoPlayer/> 
        <VideosList/>
     
      </Fragment>
    </Provider>
  );
}

export default App;
