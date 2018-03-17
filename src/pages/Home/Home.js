import React, {Component} from 'react';
import firebase from 'firebase';
import guid from 'guid';
import Header from '../../components/Header';
import ChatBox from '../../components/ChatBox';
import ChatList from '../../components/ChatList';

class Home extends Component {
  constructor(props){
    super(props);
    this.onClick2 = this.onClick2.bind(this);
  }

  componentWillMount() {
    this.guid = guid.create();
    firebase.initializeApp({
      apiKey: "AIzaSyC8GNo7_qRndlBP2osx9ht_pF7gnh6VOg0",
      authDomain: "tekadept-react-chat.firebaseapp.com",
      databaseURL: "https://tekadept-react-chat.firebaseio.com",
      projectId: "tekadept-react-chat",
      storageBucket: "tekadept-react-chat.appspot.com",
      messagingSenderId: "346211959633"
    });
  }

  onClick = event => {
    event.preventDefault();
    console.log('Clicked', this);
  };

  onClick2(event) {
    event.preventDefault();
    console.log('NUMBER TWO CLICKED', this);
  }

  render() {
    return (
      <div>
        <Header title='Firebase Chat App' nerd='Troy' onClick={this.onClick2}/>
        <ChatList db={firebase} guid={this.guid.value}/>
        <ChatBox db={firebase} guid={this.guid.value}/>
      </div>
    );
  }
}

export default Home;