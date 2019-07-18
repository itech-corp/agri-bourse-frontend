import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import LockIcon from "@material-ui/icons/Lock";
import InfoIcon from "@material-ui/icons/Info";
import FacebookIcon from "mdi-material-ui/FacebookBox";
import WhatsappIcon from "mdi-material-ui/Whatsapp";
import TwitterIcon from "mdi-material-ui/TwitterBox";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

export default function SwipeDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const IconList =[<HomeIcon />,<FingerprintIcon />,<LockIcon />,<InfoIcon />,<TwitterIcon />,<FacebookIcon />,<WhatsappIcon />];
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >  
      <List>
        {["Acceuil", "Connexion", "S'incrire", "A propos"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {IconList[index]}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography  color="textPrimary" align='center'>
          Nous suivre
      </Typography>
      <List>
        {["Twitter", "Facebook", "Whatsapp"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {IconList[index + 4]}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="Menu"
        onClick={toggleDrawer("right", true)}
      >
        <MenuIcon />
      </IconButton>

      <SwipeableDrawer
        anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </SwipeableDrawer>
    </div>
  );
}
