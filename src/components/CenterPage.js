import React, { Component } from 'react';
import { Tabs, Tab, Paper, Link, Grid } from '@material-ui/core';
import BathroomDisplay from './BathroomDisplay';
import Axios from 'axios';

function determineDorm(index){
  let tmp = "Err: No Index";
  console.log(index);
  switch(index){
    case 0:
      tmp = "Loomis";
      break;
    case 1:
      tmp = "Mathias";
      break;
    case 2:
      tmp = "South";
  }
  return tmp;
}

class CenterPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: 0,
      bathroomJSON: [],
      renderBathrooms: true,
      dorm: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  getBathrooms(tmp){
    Axios.get("https://ccbcb.herokuapp.com/CC/" + tmp).then(response =>  {
                // console.log("RESS " + response.data)
                if(Array.isArray(response.data)){
                  this.setState({bathroomJSON: response.data,
                                renderBathrooms: true});
                }else{
                  this.setState({renderBathrooms: false});
                }
          });
  }

  postStatus(bathroom_num, dorm, codeHash){
    Axios.post("https://ccbcb.herokuapp.com/CC/" + dorm + "/" + bathroom_num).then(response => {
                    console.log("POST Status res: " + response)
                  });
  }

  handleChange(event, newValue){
    this.setState({
      value: newValue,
      dorm: determineDorm(newValue)
    },
    () => {
      this.getBathrooms(this.state.dorm)
    });
  }

  componentDidMount(){
    this.setState({
      dorm: determineDorm(0)
    });
    this.interval = setInterval(() => {
      this.getBathrooms(this.state.dorm);
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render(){

    const shouldRender = this.state.renderBathrooms;
    let content;
    if(this.state.renderBathrooms){
      content = <BathroomDisplay bathroomJSON={this.state.bathroomJSON}
                                  switchHandler={this.postStatus}
                                  dorm={this.state.dorm}/>;
    }else{
      content = <p>No Bathrooms</p>;
    }

    return(
      <div>
        <Paper>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered>
            <Tab label="Loomis" />
            <Tab label="Mathias" />
            <Tab label="South" />
          </Tabs>
        </Paper>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          >
          <Grid>
            <Link href="https://www.coloradocollege.edu/offices/housing-and-conferences/on-campus-housing/traditional-halls/loomis.html">
              If you need to find out what bathroom number correllates to your area, use the floor plans.
            </Link>
          </Grid>

          {content}
        </Grid>
      </div>
    );
  }
}

export default CenterPage;
