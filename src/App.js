import "./App.css";

import CreateUser from "./CreateUser";
import Users from "./Users";
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
      return item.id != userId;
    });
    this.setUsers(users);
    this.setState({ users: this.getUsers() });
  }

  updateSingleUser = (userId) => {
    let users = this.getUsers();
    users = users.filter((item) => {
      return item.id != userId;
    });
    this.setUsers(users);
    this.setState({ users: this.getUsers() });
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
    return (
      <div className="App">


        <CreateUser addUser={this.addUser} showUserPopup={this.showUserPopup} showPopup={this.state.showPopup} />
        < Button variant='outlined' className="add-user" onClick={() => {
          this.showUserPopup(true);
          // props.updateSingleUser(user.id)
        }}>Add user</Button>

        <input type='search' placeholder='Search Users' onChange = { e => console.log(e.target.value) } />
        <Users users={this.state.users} deleteSingleUser={this.deleteSingleUser} updateSingleUser={this.updateSingleUser} showUserPopup={this.showUserPopup} />
      </div>
    );
  }
}

export default App;
