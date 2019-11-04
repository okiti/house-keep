import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default function Contact() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "",
    multiline: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <div>
      <CssBaseline />
      <Container fixed style={{ backgroundColor: "", height: "100vh" }}>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-name"
            label="Name"
            className={classes.textField}
            value={values.name}
            onChange={handleChange("name")}
            margin="normal"
            variant="outlined"
            fullWidth
            required
            style={{ width: "50%" }}
          />
          <TextField
            required
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            style={{ width: "50%" }}
            fullWidth
          />
          <TextField
            required
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows="10"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            fullWidth
            style={{ width: "50%" }}
          />
        </form>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>send</Icon>}
        >
          Send
        </Button>
      </Container>
    </div>
  );
}
