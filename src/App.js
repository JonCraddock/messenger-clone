import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel,Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  // useState = variable in REACT, short term and reset upon page refresh.
  // useEffect = block of code run on a condition 

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
    return () => {}
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name.'));
    return () => {}
  }, []/*Condition..*/)

  const sendMessage = (event) =>{
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input name="input" value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>

    </div>
  );
}

export default App;
