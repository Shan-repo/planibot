import React  from "react"; 
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

  
  const Resources = [
    { value: 'Shanavas', label: 'Shanavas' },

  ];

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    containers: {
      height: '100%',
      float: 'right'
  },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    

  root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  }));
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://www.planittesting.com/au/home">
          Planit Testing
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


export default function Homepage() {
    const classes = useStyles();
    const history = useHistory();
    const getResume = () => history.push('resume');
    return ( 
      
      <div className={classes.containers}>
      <iframe 
            style={{float:'right',maxWidth:500,width:'100%', height:'100%', overflow:'visible'}}
            src="https://powerva.microsoft.com/webchat/bots/41606844-637c-4f67-bb0b-879bbbafe63d"    
        />

  </div>

    );  
    
 
}