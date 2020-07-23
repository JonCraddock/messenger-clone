import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel,Input } from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {username: 'Jane', text:'Hello'},
    {username: 'Jane', text:'How are you?'}
  ]);
  const [username, setUsername] = useState('');

  // useState = variable in REACT, short term and reset upon page refresh.
  // useEffect = block of code run on a condition 

  useEffect(() => {
    //If condition is blank, code runs ONCE when the app component loads
    setUsername(prompt('Please enter your name.'));
    return () => {
      //cleanup
    }
  }, []/*Condition..*/)

  const sendMessage = (event) =>{
    event.preventDefault();
    setMessages([
      ...messages, { username: username,text: input }
    ]);
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

      {
        /*
          messages.map(message => (
              <Message username={message.username} text={message.text} />
          ))
        */
        messages.map(message => (
          <Message username={username} message={message} />
        ))
      }
    </div>
  );
}

export default App;
