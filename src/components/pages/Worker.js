import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Logo from "../../asset/logo.png";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/Temmietayo/house-keep">
        Home-Service
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  bigAvatar: {
    margin: theme.spacing(1),
    width: 60,
    height: 60,
    background: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

export default function Worker() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    cook: true,
    cleaner: false,
    gardener: false,
    driver: false,
    butler: false,
    electrician: false,
    tutor: false,
    sitter: false,
    mechanic: false,

  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { cook, cleaner, gardener, driver, butler, electrician, tutor, sitter, mechanic } = state;
  const error = [cook, cleaner, gardener, driver, butler, electrician, tutor, sitter, mechanic].filter(v => v).length !== 2;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.bigAvatar} alt="Home-Service" src={Logo} />
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="number"
                label="Mobile Number"
                name="number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="address"
                label=" Address"
                type="text"
                id="address"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                Open Menu
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.root}>
                <FormControl
                  required
                  error={error}
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">Pick at most two</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={cook}
                          onChange={handleChange("cook")}
                          value="cook"
                        />
                      }
                      label="Cook"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={cleaner}
                          onChange={handleChange("cleaner")}
                          value="cleaner"
                        />
                      }
                      label="Cleaner"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={gardener}
                          onChange={handleChange("gardener")}
                          value="gardener"
                        />
                      }
                      label="Gardener"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={driver}
                          onChange={handleChange("driver")}
                          value="driver"
                        />
                      }
                      label="Driver"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={butler}
                          onChange={handleChange("butler")}
                          value="butler"
                        />
                      }
                      label="Butler"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={electrician}
                          onChange={handleChange("electrician")}
                          value="electrician"
                        />
                      }
                      label="Electrician"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={tutor}
                          onChange={handleChange("tutor")}
                          value="tutor"
                        />
                      }
                      label="Tutor"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={sitter}
                          onChange={handleChange("sitter")}
                          value="sitter"
                        />
                      }
                      label="Baby Sitter"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={mechanic}
                          onChange={handleChange("mechanic")}
                          value="mechanic"
                        />
                      }
                      label="Mechanic"
                    />
                  </FormGroup>
                  <FormHelperText>You can pick only 2 Roles</FormHelperText>
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I accept the Terms & Conditions and Privacy Policy."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            startIcon={<AddCircleIcon />}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
