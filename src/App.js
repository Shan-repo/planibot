import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content,Footer,FooterSection,FooterLinkList} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'react-mdl/extra/material.css';
import  'react-mdl/extra/material.js';

function App() {
  const history = useHistory();
  const getResume = () => history.push('/');

  return (
    
    <div className="demo-big-content">
    <Layout >
        <Header title="Plabot" scroll onClick={getResume}>
            {/* <Navigation>
            <Link to="/resume">Resume</Link>
            </Navigation> */}
        </Header>

        <Content  style={{background: 'url(https://cdn.planittesting.com/planit/media/siteimages/backgrounds/training-bg.jpg?ext=.jpg) center / cover'}}>
            
            <Main></Main>
        </Content>
        
    </Layout>
</div>

  );
}

export default App;
