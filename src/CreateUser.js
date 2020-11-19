import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

import "./CreateUser.css";

function CreateUser(props) {
  console.log("CreateUser props: ", props);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    if (props.currentUser == null) {
      setFirstName("");
      setLastName("");
      setPhoneNo("");
      setEmail("");
      setBirthday("");
    } else {
      setFirstName(props.currentUser.firstName);
      setLastName(props.currentUser.lastName);
      setPhoneNo(props.currentUser.PhoneNo);
      setEmail(props.currentUser.email);
      setBirthday(props.currentUser.birthday);
    }
  }, [props.currentUser]);

  if (props.userAction !== null) {
    return (
      <div className="user-popup-container">
        <div className="user-popup">
          <div
            className="close-update-popup"
            onClick={() => props.setUserAction(null, null)}
          >
            x
          </div>

          <h1>{props.userAction}</h1>

          <label>First name:</label>
          <input
            type="text"
            defaultValue="Reset"
            name="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />

          <label>Last name:</label>
          <input
            type="text"
            defaultValue="Reset"
            name="lastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />

          <label>PhoneNo:</label>
          <input
            type="text"
            defaultValue="Reset"
            value={PhoneNo}
            onChange={(e) => {
              setPhoneNo(e.target.value);
            }}
          />

          <label>Email:</label>
          <input
            type="text"
            defaultValue="Reset"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label>Birthday:</label>

          <input
            type="text"
            defaultValue="Reset"
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
                if (props.userAction === "Add User") {
                  props.addUser(firstName, lastName, PhoneNo, email, birthday);
                } else if (props.userAction === "Update User") {
                  props.updateSingleUser(
                    props.currentUser.id,
                    firstName,
                    lastName,
                    PhoneNo,
                    email,
                    birthday
                  );
                }
                props.setUserAction(null, null);
              }}
            >
              {props.userAction}
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
