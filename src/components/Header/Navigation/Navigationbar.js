import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Brand from './Brand/Brand';
import Drawer from './Drawer/swipeDraw';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  AppBar:{
    backgroundColor:'black',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.down(700)]: {
       display:'none',
      },
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },

  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
   
  },
  menu:{
    marginLeft:'auto',
    marginRight:0,
    [theme.breakpoints.down(700)]: {
        margin:'auto',
       },
    [theme.breakpoints.down(500)]: {
        display:'none',
       },   
  },
  drawer:{
      marginLeft:'auto',
      marginRight:0,
    [theme.breakpoints.down(499)]: {
        display:'?',
       },
       [theme.breakpoints.up(500)]: {
        display:'none',
       },
  }
}));

export default function NavigationBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar  className={classes.AppBar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer"
          >
           <Brand/>
          </IconButton>
         
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>
          <div  className={classes.drawer}>
              <Drawer/>
          </div>
          <div className={classes.menu}>
            <Button color="secondary">Acceuil</Button>
            <Button color="inherit">Connexion</Button>
            <Button color="inherit">Contacts</Button>
            <Button color="inherit">A propos</Button>
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
