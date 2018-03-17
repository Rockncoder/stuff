import React, {Component} from 'react';
import {FirebaseTable} from '../Constants';


export default class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: ''
    }
  }

  onKeyUp = event => {
    const text = event.target.value.trim();
    if (event.keyCode === 13 && text !== '') {
      event.preventDefault();
      const dbCon = this.props.db.database().ref(FirebaseTable);
      dbCon.push({
        text,
        guid: this.props.guid,
      });
      this.setState({
        chat: ''
      });
    }
  };

  onChange = event => {
    this.setState({
      chat: event.target.value
    });
  };

  render() {
    return (
      <form>
        <textarea
          cols="100"
          onChange={this.onChange}
          value={this.state.chat}
          onKeyUp={this.onKeyUp}
        >
        </textarea>
      </form>
    )
  }
}