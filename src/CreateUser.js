import React, { useState } from "react";
import { Button } from "@material-ui/core";

import "./CreateUser.css";

function CreateUser(props) {
  console.log(props);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  if (props.showPopup) {
    return (
      <div className="user-popup-container">
        <div className="user-popup">
          <div
            className="close-update-popup"
            onClick={() => props.showUserPopup(false)}
          >
            X
          </div>

          <label>First name:</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />

          <label>Last name:</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />

          <label>PhoneNo:</label>
          <input
            type="telphone"
            name="PhoneNo"
            value={PhoneNo}
            onChange={(e) => {
              setPhoneNo(e.target.value);
            }}
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label>Birthday:</label>

          <input
            type="text"
            name="birthday"
            value={birthday}
            onChange={(e) => {
              setBirthday(e.target.value);
            }}
          />
          <div className="addbutton">
            <Button
              variant="outlined"
              type="submit"
              value="add"
              onClick={() => {
                props.addUser(firstName, lastName, PhoneNo, email, birthday);
                props.showUserPopup(false);
              }}
            >
              Add User
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default CreateUser;
