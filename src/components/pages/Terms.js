import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

const Terms = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
    <Typography variant="h3" gutterBottom>
    Terms of Services
      </Typography>
      <Typography variant="h6" gutterBottom>
      Welcome to Home-Service!
      </Typography>
      <Typography variant="body1" gutterBottom>
      Home-Service builds technologies and services that enable people to
        connect with each other, build relationship and grow skills. These Terms
        govern your use of Home-Service, except where we expressly state that
        separate terms (and not these) apply. These Services are provided to you
        by https://github.com/Temmietayo/house-keep.
      </Typography>
      <Typography variant="body1" gutterBottom>
      We don't charge you to use Home-Service covered by these Terms. Instead,
        Individuals, Businesses and Organisations pay us to hire services on
        these platform. By using our Products, you agree that we can show you
        profiles that we think will be relevant to you and your interests. We
        use your personal data to help determine which profiles to show you.
    </Typography>
      <Typography variant="body1" gutterBottom>
      We don't sell your personal data to advertisers, and we don't share
        information that directly identifies you (such as your name, email
        address or other contact information) with advertisers unless you give
        us specific permission. We provide employees with reports about the
        performance of their job done that help them understand where more
        effort is needed by them.{" "}
      </Typography>
    </div>
  );
};

export default Terms;
