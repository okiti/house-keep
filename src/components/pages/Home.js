import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  withStyles,
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  margin: {
    margin: theme.spacing(1)
  }
}));
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: "#f44336"
    }
  }
});

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700]
    }
  }
}))(Button);

export default function Home() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container spacing={3} theme={theme}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div>
                <h1>Home-Service</h1>
                <h3>Hire the Best Care for your Home</h3>
                <p>
                  Someone out there will treat your home as if it belongs to
                  them. Hire a one-time or recurring service today.
                </p>
                <ColorButton
                  variant="contained"
                  color="primary"
                  className={classes.margin}
                >
                  Hire/Book Services
                </ColorButton>
                <ColorButton
                  variant="contained"
                  color="primary"
                  className={classes.margin}
                >
                  Apply to Render Service
                </ColorButton>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div>
                <h1>How it works</h1>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <div>
                <img src="" alt="" />
                <h3>Register/Sign Up</h3>
                <p>
                  Register on our website to become involved and also experience
                  the best services we have to offer.
                </p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <div>
                <img src="" alt="" />
                <h3>Find your Matches</h3>
                <p>
                  Reach out to potential hire through our platform by checking
                  out their staff profile
                </p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <div>
                <img src="" alt="" />
                <h3>Find your Matches</h3>
                <p>
                  Reach out to potential hire through our platform by checking
                  out their staff profile
                </p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <div>
                <img src="" alt="" />
                <h3>Shortlist your Favorite and Hire</h3>
                <p>
                  Now you are all set for the last step. Click the profile that
                  stands out to you an click the hire button. Easy!!!{" "}
                </p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div>
                <h1>Our Services</h1>
                <div>
                  <img src="" alt="" />
                  <h3>Trust Staff</h3>
                  <p>
                    We provide the most trusted services for your safety and
                    also for the security
                  </p>
                </div>
                <div>
                  <img src="" alt="" />
                  <h3>Note on User Profile</h3>
                  <p>
                    Write private notes on users' profiles to remember special
                    details about communications or interviews you've had with
                    them
                  </p>
                </div>
                <div>
                  <img src="" alt="" />
                  <h3>Best Customer Service</h3>
                  <p>
                    Enjoy access to a world class customer support team
                    dedicated to helping you find the perfect match for you.
                  </p>
                </div>
                <div>
                  <img src="" alt="" />
                  <h3>Fast Service and Secure</h3>
                  <p>
                    Get fast service based on time of booking and details
                    provided by the user.
                  </p>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div>
                <h3>Who we are</h3>
                <p>
                  Homeservice.com is your go to online service for finding
                  professional personnel to keep your home up and running. Our
                  website is a job posting service focused on connecting people
                  with a community of qualified professionals for home cleaning,
                  maintenance, management, e.t.c . So whether you’re looking for
                  a cook, cleaner, nanny, gardener, baby sitter, driver, butler,
                  electrician, e.t.c or you’re a professional looking for work—
                  Homeservice.com can help!
                </p>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
