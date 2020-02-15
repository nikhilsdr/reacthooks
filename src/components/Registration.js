import React, { useState, useEffect} from 'react';


const Registration=(props)=>{

const [resources, setResources]=useState('jjjj');
const addNewuser=()=>{
  console.log(resources);
  setResources('hhhhh');
}

const showregform= ()=>{
  console.log(props);
  return (<div>
    <div>===My Reg Form===</div>
    <div><input type="text" id="username"/>
<button onClick={ addNewuser }>Add</button>

    </div>
    </div>
  );
}

const showuserlist= ()=>{
  console.log(props);
  return (
    <div>===Userlist===</div>
  );
}


const showform= ()=>{
  if(props.myresoure==='POST'){
    return showregform();
  }
  else if(props.myresoure==='TODO'){
    return showuserlist();
  }
}



return(
  <div>This is registration Compo { props.myresoure }
{ showform() }
  </div>
      );

}

export default Registration;
