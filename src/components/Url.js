import React from 'react';  
//import 'firebase/firestore';
import firebase from './FireStore';

class Url extends React.Component {
    constructor() {
        super();
        this.state = {
         url:""
        };
      }
      updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
      addUrl = e => {
        const db = firebase.firestore();
        db.settings({
        timestampsInSnapshots: true
  });
        const userRef = db.collection("users").add({
        url: this.state.url
  });  
        this.setState({
        url:""
  });
        };
                render() {
            return (
                <form onSubmit={this.addUrl}>
                <input
                    type="text"
            name="url"
            onChange={this.updateInput}
            value={this.state.url}
          />
          <button type="submit">Submit</button>
        </form>
        );
      }
   }
export default Url;