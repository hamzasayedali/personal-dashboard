import './App.css';
import React from 'react';
import {Switch, Route, BrowserRouter, Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {Container, Tab, Tabs, AppBar, Typography} from '@material-ui/core';

import Calendar from './components/Calendar/Calendar';
import MapPage from './components/Map/Map';
import Tasks from './components/Tasks/Tasks';
import Error from './components/Error/Error';
import Navbar from './components/NavBar/NavBar';

//import pages from './pages.js';

const pages = [
  {
      page:"calendar",
      text:"Calendar",
      component: Calendar,
  },
  {
      page:"map",
      text:"Map",
      component: MapPage,
  },
  {
      page:"tasks",
      text:"Tasks",
      component: Tasks,
  },
  {
      page:"athletics",
      text:"Athletics",
      component: MapPage,
  },
  {
      page:"projects",
      text:"Projects",
      component: MapPage,
  },
  {
      page:"music",
      text:"Music",
      component: MapPage,
  },

]

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

class App extends React.Component {

  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render(){
    return (
      
        
      <BrowserRouter>
      <Container disableGutters={true} maxWidth='xl'>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            fullWidth
          >
            {
              pages.map((item)=>(
                <Tab label={item.text} component={Link} to={`/${item.page}`} />
              ))
            }
            
          </Tabs>
        </AppBar>
  
        <Switch>
          {
            pages.map((item)=>(
              <Route path={`/${item.page}`} component={item.component}/>
            ))
          }
          
        </Switch>
        </Container>
    </BrowserRouter>
      
  
      
    );
  }
  
}

export default App;
