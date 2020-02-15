import React from 'react';

class App extends React.Component {
state={ resourse:'post', loading:false }

showPost=()=>{
  this.setState({resourse:'POST'});
}

showTodo=()=>{
  this.setState({resourse:'TODO'});
}

render(){
  return (
    <div className="App">
        <h2>Hello World!</h2>
        <button onClick={this.showPost}>POST</button>
        <button onClick={this.showTodo}>TO DO</button>
        {this.state.resourse}
    </div>
  );
}

}

export default App;
