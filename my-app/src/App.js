import React, { Component } from 'react';
import Mainscreen from './Mainscreen';
import Secondscreen from './Secondscreen';
import {  Switch, Route } from 'react-router-dom';
import './css/main.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.updateUser = this.updateUser.bind(this);
    this.state = {
      isLoaded: true,
      list:[],
      user:0
    };

  }
 // https://randomuser.me/api/?results=100
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=100")
      .then(res => res.json())
      .then(
        (outcome) => {
          this.setState({
            isLoaded: true,
            list: outcome.results
          });
        }
      )
  }
  updateUser(e){
    this.setState({
      user:e.currentTarget.getAttribute('data-id')
    })
  }

  render() {
    const list = this.state.list;
    function PathUrl() {
      list.map(function(url){
        return (url.name.first + "-" + url.name.last)
      })
    }
    return (
        <div id="wrapperApp">
        <Switch>
          <Route exact path="/" render={()=><Mainscreen list={this.state.list} handleCheck={this.updateUser} user={this.state.user}/>}/>
          <Route exact path={PathUrl()} render={()=><Secondscreen list={this.state.list} user={this.state.user}/>}/>
        </Switch>
        </div>

    );
  }
}

export default App;
