import React from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import Typography from "@material-ui/core/Typography";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PhoneIcon from "@material-ui/icons/Phone";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import Box from "@material-ui/core/Box";
import Register from "../pages/Register";
import SignIn from "../pages/Sign In";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Specify from "../pages/Register";
import Help from "../pages/Help";
import Profile from "../pages/Profile";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
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

export default function Navbar() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab label="Home page" icon={<HomeIcon />} {...a11yProps(0)} />
            <Tab label="Register" icon={<PersonAddIcon />} {...a11yProps(1)} />
            <Tab
              label="Sign In"
              icon={<AccountCircleIcon />}
              {...a11yProps(2)}
            />
            <Tab label="Profile" icon={<PersonPinIcon />} {...a11yProps(3)} />
            <Tab
              label="Book Service"
              icon={<ImportContactsIcon />}
              {...a11yProps(4)}
            />
            <Tab label="Contact Us" icon={<PhoneIcon />} {...a11yProps(5)} />
            <Tab label="Help" icon={<HelpIcon />} {...a11yProps(6)} />
            <Tab label="Help" icon={<HelpIcon />} {...a11yProps(7)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Home />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Register />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SignIn />
        </TabPanel>
        <TabPanel value={value} index={3}>
          Profile
        </TabPanel>
        <TabPanel value={value} index={4}>
          Book Service
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Contact />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <Help />
        </TabPanel>
        <TabPanel value={value} index={7}>
          <Profile />
        </TabPanel>
      </div>
    </ThemeProvider>
  );
}
