import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Logo from "../../asset/logo.png";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import Divider from "@material-ui/core/Divider";
import ButtonBase from "@material-ui/core/ButtonBase";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

export default function SimpleContainer() {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={6}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={Logo} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={3}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Name: Abiola Abdulwaheed
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Skills: Electrican, Driver
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Work Experience: 5 years
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Rating
                  </Typography>
                  <Rating name="half-rating" value={2.5} precision={0.5} />
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="body2" gutterBottom>
                  Mobile No: 080133610881
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Email: abiola@treplabs.co
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Container>
  );
}
