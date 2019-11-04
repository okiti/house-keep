import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Button from "@material-ui/core/Button";
import User from "./User";
import Worker from "./Worker";
import { makeStyles } from "@material-ui/core/styles";

export default class Specify extends Component {
  constructor() {
    super();
    this.state = {
      buttonId: null
    };
    this.setButton = this.setButton.bind(this);
  }
  setButton(id) {
    this.setState({ buttonId: id });
  }
  render() {
    return (
      <div>
        {this.state.buttonId === 1 && <User />}
        {this.state.buttonId === 2 && <Worker />}
        {this.state.buttonId !== 1 && this.state.buttonId !== 2 && <User />}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.state.buttonId === 1}
              onClick={() => this.setButton(1)}
              startIcon={<AddCircleIcon />}
              value="User"
              ref="button"
            >
              Sign Up as User
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.state.buttonId === 2}
              onClick={() => this.setButton(2)}
              startIcon={<AddCircleIcon />}
              value="Worker"
              ref="button1"
            >
              Sign Up as Worker
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}
