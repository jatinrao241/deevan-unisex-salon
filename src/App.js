import React from "react";
import "./App.css";
import { dataSetForBasicData } from './ImportFiles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VideoPage from './components/GalleryVideoFunction/VideoPage';
import MainPageData from "./MainPageData";


const App = () => {

  return (
    <>
    <div className="body-image">
        <img
          src={dataSetForBasicData.BackgroundImage}
          alt="bgjwl"
          className="body-fix-image"
        />
        <Router basename={`/${dataSetForBasicData.FolderName}`}>      
          <Switch>
            <Route exact path="/" component={MainPageData} />
            <Route path="/video/:videoUrl" component={VideoPage} />
            <Route path="*" component={MainPageData} />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
