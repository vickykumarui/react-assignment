import React, {Component} from 'react';
import Output from './Output/Output';
import './App.css';
import Input from './Input/Input';

class App extends Component {
  state = {
    users: [
      { userName: 'vicky'},
      { userName: 'vivek'},
      { userName: 'vikram'}
    ],
    activeElementIndex: 0

  }

  changeUsernameHandler = (event,idx) =>{
     // this.state.users.userName[idx] = event.target.value;
     const currentIndex = idx || idx === 0 ? idx : this.state.activeElementIndex;
     const newUser = this.state.users;
     newUser[currentIndex].userName = event.target.value;
      this.setState({
        users: newUser
      })
  }

  updateActiveIndex = (currentActiveIndex) =>{
    // this.state.activeElementIndex = currentActiveIndex;
    this.setState({
    activeElementIndex: currentActiveIndex
    });
  }
  render() {

    let inputArr = [];
    for(let i = 0; i< this.state.users.length; i++){
      inputArr.push( <Input key = {i} idx = {i} userName = {this.state.users[i].userName} changed = { this.changeUsernameHandler } />)
    }

    return (
      <div className="App">
       change to component
      
       {inputArr}
       <Input activeIdx = {this.state.activeElementIndex} userName = {this.state.users[this.state.activeElementIndex].userName} changed = { this.changeUsernameHandler }/>
       <Output idx = "0" userName = {this.state.users[0].userName} changeActiveIndex = {this.updateActiveIndex} />
       <Output idx = "1" userName = {this.state.users[1].userName} changeActiveIndex = {this.updateActiveIndex} />
       <Output idx = "2" userName = {this.state.users[2].userName} changeActiveIndex = {this.updateActiveIndex}  />
      </div>
    );

  } 
}

export default App;
