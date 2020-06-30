import React from 'react';
import './App.css';
import SocialPage from "./components/social/socialPage";
import AddIcon from '@material-ui/icons/Add';
import PersistentDrawerLeft from "./components/navtool";
import SearchCard from "./components/duckSearch";
import Fab from "@material-ui/core/Fab";
import UtilPage from "./components/uitlpage/util";
import TodoPanel from "./components/todo/todoPanel"


function App() {
  return (
    <div className="App">
        <PersistentDrawerLeft/>

      <div className="content">

          <div className="search">
              <SearchCard/>
          </div>
          <div className="maincol">

              <div className="cardcont">
                <div className="toto">
                  <TodoPanel />
                </div>
                <div className="social">
                  <UtilPage />
                </div>
              </div>


              <div className="add">
                  <Fab color="primary" aria-label="add">
                      <AddIcon />
                  </Fab>
              </div>

          </div>





      </div>


    </div>
  );
}

export default App;
