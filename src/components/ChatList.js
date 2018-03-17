import React, {Component} from 'react';
import {FirebaseTable} from '../Constants';
import ChatItem from './ChatItem';

export default class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: []
    };
  }

  componentWillMount() {
    const app = this.props.db.database().ref(FirebaseTable);
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });
  }

  getData(values) {
    if (values) {
      const chats = Object.keys(values)
        .map(key => Object.assign({}, values[key], {key}));
      this.setState({chats});
    }
  }

  render() {
    const chatNodes = this.state.chats.map(
      chat => (
          <div key={chat.key}>
            <ChatItem chat={chat.text} mine={this.props.guid === chat.guid}/>
          </div>
      ));
    return (
      <div>
        {chatNodes}
      </div>
    );
  }
}