import React, {useState} from 'react';
import Registration from './Registration';

function App(){

const [resource,setResource] = useState('post');
const [username,adduser] = useState('my user name');
  return (
    <div className="App">
        <h2>Hello World!</h2>
        <button onClick={()=> setResource('POST') }>POST</button>
        <button onClick={()=> setResource('TODO') }>TO DO</button>
        { resource }
        <Registration myresoure={resource} />
{ resource }
    </div>
  );

}

export default App;
