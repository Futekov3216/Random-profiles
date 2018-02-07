import React, { Component } from 'react';
function ShowHide(isVisible) {
  const dblock = {display:'block'};
  const dnone = {display:'none'};
if (isVisible) {
  return dblock
  }
  return dnone
  }
class Secondscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
      isShow: false
    };
    this.clickListener = this.clickListener.bind(this);
  }
  componentDidMount (){
     let el = document.getElementById('personG').getAttribute('data-g');
     let male = "male";
     if(el === male){
       document.getElementById('morePinfo').style.backgroundColor = "hsla(240, 100%, 50%, 0.1)";
     }else{
       document.getElementById('morePinfo').style.backgroundColor = "hsla(0, 100%, 50%, 0.1)";
     }

  }

  clickListener() {
    this.setState(function(prevState) {
      return {isShow: !prevState.isShow};
    });
  }
  render() {
    const list = this.props.list;
    const user = this.props.user;
    return(
      <div id="morePinfo">
        <div className="image">
          <img src={list[user].picture.large} alt="profilepic"/>
        </div>
        <ul>
         <li><p className="personalName">{list[user].name.first} {list[user].name.last}</p></li>
         <li>{list[user].name.title}</li>
         <li onClick={this.clickListener}>{list[user].email}</li>
         <li>{list[user].phone}</li>
         <li>{list[user].location.city}</li>
         <li>{list[user].location.street}</li>
         <li id="personG" data-g={list[user].gender}>{list[user].gender}</li>
        </ul>
        <div className="formWrapper" style={ShowHide(this.state.isShow)}>
          <form method="post">
            <div className="labelWrapper">
             <label>TO</label>
             <input type="text" name="" value={list[user].email}/>
            </div>
            <textarea name="name" rows="8" cols="80" style={{display:'block'}}></textarea>
            <button type="button" className="submitBtn" name="submit">SUBMIT</button>
          </form>
        </div>
     </div>
    );
  }
}
export default Secondscreen;
