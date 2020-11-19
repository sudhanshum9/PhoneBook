import "./App.css";

import CreateUser from "./CreateUser";
import Users from "./Users";
import Searchbox from './Searchbox'

import React, { Component } from "react";
import { Button } from '@material-ui/core'


class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      showPopup: false,
      seachField: ''
    };
   ;

  }

  componentDidMount() {
    this.updateUsersFromDB()
  }

  showUserPopup = (flag, updateUser = null) => {
    this.setState({
      showPopup: flag
    })
  }
  updateUsersFromDB = () => {
    let users = this.getUsers();
    this.setState({ users });
  };

  addUser = (firstName, lastName, PhoneNo, email, birthday) => {
    console.log(this.state.users);
    let users = this.getUsers();
    users = [
      ...users,
      {
        firstName,
        lastName,
        PhoneNo,
        email,
        birthday,
        id: new Date().getTime(),
      },
    ];
    this.setUsers(users);
    this.setState({ users: this.getUsers() });
  };

  deleteSingleUser = (userId) => {
    let users = this.getUsers();
    users = users.filter((item) => {
      return item.id !== userId;
    });
    this.setUsers(users);
    this.setState({ users: this.getUsers() });
  }

  updateSingleUser = (userId,e) => {
    const index = this.state.users.findIndex((user) => {
      return user.id === userId
    })
    const user = Object.assign({},this.state.users[index])

    user.firstName = e.target.value.firstName
    user.lastName = e.target.value.lastName
    user.PhoneNo = e.target.value.PhoneNo
    user.email = e.target.value.email
    user.birthday = e.target.value.birthday

    const users = Object.assign([],this.state.users)

    users[index] =user;

    this.setState({users : users})

    
  }

  setUsers = (users) => {
    window.localStorage.setItem("users", JSON.stringify(users));
  };

  getUsers = () => {
    console.log(window.localStorage.getItem("users"))
    if (window.localStorage.getItem("users")) {

      let x = JSON.parse(window.localStorage.getItem("users"));
      console.log(' value of x ===', x)
      return x

    } else {
      return [];
    }
  };

  deleteUsers = () => {
    window.localStorage.removeItem("users");
  };

  render() {
    const { showCreateUser } = this.state;

    const {users,seachField } = this.state;
    const filteredUsers = users.filter( user => user.firstName.toLowerCase().includes(seachField.toLowerCase()) )
    return (
      <div className="App">
      
      
      <CreateUser   addUser={this.addUser} showUserPopup={this.showUserPopup} showPopup={this.state.showPopup} />
        < Button variant='outlined' className="add-user" onClick={() => {
          this.showUserPopup(true);
         
          // props.updateSingleUser(user.id)
        }}>Add user</Button>
        
        
        <Searchbox  placeholder='Search Users' handleChange= {e => this.setState({ seachField : e.target.value })} />
        <Users users={filteredUsers} deleteSingleUser={this.deleteSingleUser} updateSingleUser={this.updateSingleUser} showUserPopup={this.showUserPopup} />
      </div>
    );
  }
}

export default App;
