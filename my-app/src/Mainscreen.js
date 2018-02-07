import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Mainscreen extends Component {
  constructor(props) {
    super(props);
    this.handleCheck = this.handleCheck.bind(this);
    this.state = {
      isLoaded: true,
    };

  }
  handleCheck(e) {
    this.setState({
      user: e.currentTarget.currentTarget.getAttribute('data-id')
    })
  }

  render() {
    const list = this.props.list;

    return (
        <div>
            {list.map((results, i) => (
                  <Link to={results.name.first + "-" + results.name.last} data-id={i} onClick={this.props.handleCheck} style={{ textDecoration: 'none', color:'black' }}>
                    <div className="personInfoWrapper">
                      <div className="personInfo">
                        <div className="image"><img src={results.picture.large} alt=""/></div>
                             <ul className="homepageList">
                               <li><span>First Name:</span><p className="names">{results.name.first}</p></li>
                               <li><span>Second Name:</span><p className="names">{results.name.last}</p></li>
                               <li><span>City:</span><p className="names">{results.location.city}</p></li>
                             </ul>
                        </div>
                    </div>
                  </Link>
                                )
                    )
              }
        </div>
    );
  }
}

export default Mainscreen;
