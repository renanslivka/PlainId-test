import React, { useState, useEffect } from "react";
import {
  fetchTitlesByDepartment,
  saveData,
  fetchData,
} from "./../../services/dataService";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { FormControl, InputLabel } from "@material-ui/core";
import ActivityIndicator from "./../ActivityIndicator/ActivityIndicator";
import "./Form.css";

const Form = () => {
  const [departments, setDepartments] = useState();
  const [department, setDepartment] = useState();
  const [title, setTitle] = useState();
  const [fullName, setFullName] = useState({
    firstName: "Loading...",
    lastName: "Loading...",
  });
  const [isDisabledTitle, setIsDisabledTitle] = useState(true);

  useEffect(() => {
    fetchData().then((response) => {
      setFullName(response);
    });
  }, []);

  const handleChangeName = (e) => {
    const value = e.target.value;
    setFullName({
      ...fullName,
      [e.target.name]: value,
    });
  };

  const handleSelectedDepartment = (e) => {
    setDepartment(e.target.value);
    setIsDisabledTitle(false);
    fetchTitlesByDepartment(e.target.value).then((response) => {
      setDepartments(response);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    saveData(fullName).then((response) => {
      alert(
        `Success!!
          First Name: ${fullName.firstName} 
          Last Name: ${fullName.lastName}
          Department: ${department}
          Title: ${title}`
      );
    });
  };

  return (
    <Container maxWidth="xs">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={fullName.firstName}
            label="First Name"
            name="firstName"
            onChange={handleChangeName}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Last Name"
            value={fullName.lastName}
            name="lastName"
            onChange={handleChangeName}
          />
          <br />

          <FormControl required variant="outlined" className="FormControl">
            <InputLabel>Department</InputLabel>
            <Select onChange={handleSelectedDepartment} label="Department">
              <MenuItem value="qa">qa</MenuItem>
              <MenuItem value="development">development</MenuItem>
            </Select>
          </FormControl>

          <FormControl required variant="outlined" className="FormControl">
            <InputLabel>Title</InputLabel>
            <Select
              onChange={(e) => setTitle(e.target.value)}
              disabled={isDisabledTitle}
              label="Title"
            >
              {departments === undefined ? (
                <ActivityIndicator />
              ) : (
                departments.map((vlaue, key) => {
                  return (
                    <MenuItem key={key} value={vlaue}>
                      {vlaue}
                    </MenuItem>
                  );
                })
              )}
            </Select>
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="btn"
          >
            Register
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Form;
