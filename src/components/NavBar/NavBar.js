import React, {Component} from "react";
import {Tabs, Tab} from '@material-ui/core';
import { withRouter } from "react-router-dom";


class Navbar extends Component {

 handleCallToRouter = (value) => {
   this.props.history.push(value);
 }

  render () {
     return (
      <Tabs
        value={this.props.history.location.pathname}
        onChange={this.handleCallToRouter}
        >
        <Tab
          label="Home"
          value="/map"
        >
        
        </Tab>
        <Tab
          label="Portfolio"
          value="/calendar"
            >
          
        </Tab>
      </Tabs>           
    )
  }
}

export default withRouter(Navbar);  

const links = [
    {
        page:"calendar",
        text:"Calendar"
    },
    {
        page:"map",
        text:"Map"
    },
    {
        page:"tasks",
        text:"Tasks"
    },
    {
        page:"athletics",
        text:"Athletics"
    },
    {
        page:"projects",
        text:"Projects"
    },
    {
        page:"music",
        text:"Music"
    },

]