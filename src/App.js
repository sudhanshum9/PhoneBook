import "./App.css";

import CreateUser from "./CreateUser";
import Users from "./Users";
import Searchbox from "./Searchbox";

import React, { Component } from "react";
import { Button } from "@material-ui/core";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      userAction: null,
      seachField: "",

      currentUser: {
        firstName: "",
        lastName: "",
        PhoneNo: "",
        email: "",
        birthday: "",
      },
    };
  }

  componentDidMount() {
    this.updateUsersFromDB(); //used to give data from local db
  }

// setUserAction is used to define the user action and the current user on which the changes are taking place
  setUserAction = (flag, currentUser) => {
    this.setState({
      userAction: flag,
      currentUser: currentUser,
    });
    // console.log('setUserAction currentUser: ', currentUser)
  };
// updateUsersFromDB is used to add new users to the LS
  updateUsersFromDB = () => {
    let users = this.getUsers();
    this.setState({ users });
  };
  // addUser is the func resp. for creating the new user and storing it in ls
  addUser = (firstName, lastName, PhoneNo, email, birthday) => {
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
// deleteSingleUser used to delete a user permanetly
  deleteSingleUser = (userId) => {
    let users = this.getUsers();
    users = users.filter((item) => {
      return item.id !== userId;
    });
    this.setUsers(users);
    this.setState({ users: this.getUsers() });
  };
// updateSingleUser is used to update the predifined user
  updateSingleUser = (
    userId,
    firstName,
    lastName,
    PhoneNo,
    email,
    birthday
  ) => {
    let users = this.getUsers();

    const userIndex = users.findIndex((user) => {
      return user.id === userId;
    });

    users[userIndex] = { firstName, lastName, PhoneNo, email, birthday };

    this.setUsers(users);

    this.setState({ users: users });
  };
  // setUsers used to save the data to ls
  setUsers = (users) => {
    window.localStorage.setItem("users", JSON.stringify(users));
  };
// getUsers gives the users list from the Ls
  getUsers = () => {
    if (window.localStorage.getItem("users")) {
      let x = JSON.parse(window.localStorage.getItem("users"));
      return x;
    } else {
      return [];
    }
  };

 

  render() {
    const { users, seachField } = this.state;
    const filteredUsers = users.filter((user) =>
      user.firstName.toLowerCase().includes(seachField.toLowerCase())
    );
    return (
      <div className="App">
      <style>{'body { background-color: #c1c1c1; }'}</style>
        <CreateUser
          addUser={this.addUser}
          setUserAction={this.setUserAction}
          userAction={this.state.userAction}
          updateSingleUser={this.updateSingleUser}
          currentUser={this.state.currentUser}
        />
        <div className="adduser">
        <Button
          variant="outlined"
          
          onClick={() => {
            this.setUserAction("Add User", null);
            // props.updateSingleUser(user.id)
          }}
        >
          Add User
        </Button>
        </div>

        <Searchbox
          placeholder="Search Users"
          handleChange={(e) => this.setState({ seachField: e.target.value })}
        />
        <Users
          users={filteredUsers}
          deleteSingleUser={this.deleteSingleUser}
          setUserAction={this.setUserAction}
        />
      </div>
    );
  }
}

export default App;
