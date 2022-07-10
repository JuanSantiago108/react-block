import React from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import NavigationComponent from './components/NavigationComponent'
import MainComponent from './components/MainComponent';
import SubComponent from './components/SubComponent';
import AdvertisementComponent from './components/AdvertisementComponent';

function App() {
  return (
    <div className="App" class="appContainer">
        <HeaderComponent class="headerBox"/>
        <NavigationComponent class = "navigation" />
        <MainComponent class = "mainContainer" >
            <SubComponent class = "subBox" />
            <SubComponent />
            <SubComponent />
            <AdvertisementComponent class = "advertismentBox" />
        </MainComponent>
    </div>
  );
}

export default App;
