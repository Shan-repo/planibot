import React  from "react"; 

import 'bootstrap/dist/css/bootstrap.css';

import Link from '@material-ui/core/Link';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { useHistory } from "react-router-dom";

  
 

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

  function webchat () {
     const styleOptions = {
               // Add styleOptions to customize web chat canvas
               hideUploadButton: true
            };

            // Add your BOT ID below
            var BOT_ID = "41606844-637c-4f67-bb0b-879bbbafe63d"; 

            var theURL = "https://powerva.microsoft.com/api/botmanagement/v1/directline/directlinetoken?botId=" + BOT_ID;

            const store = window.WebChat.createStore(
               {},
               ({ dispatch }) => next => action => {
                   if (action.type === "DIRECT_LINE/CONNECT_FULFILLED") {
                      dispatch({
                          meta: {
                               method: "keyboard",
                           },
                           payload: {
                               activity: {
                                     channelData: {
                                          postBack: true,
                                     },
                                      //Web Chat will show the 'Greeting' System Topic message which has a trigger-phrase 'hello'
                                      name: 'startConversation',
                                      type: "event"
                                 },
                            },
                            type: "DIRECT_LINE/POST_ACTIVITY",
                       });
                 }
                 return next(action);
              }
           );
           fetch(theURL)
                .then(response => response.json())
                .then(conversationInfo => {
                    window.WebChat.renderWebChat(
                        {
                            directLine: window.WebChat.createDirectLine({
                                token: conversationInfo.token,
                            }),
                            store: store,
                            styleOptions: styleOptions
                        },
                        document.getElementById('webchat')
                    );
                })
                .catch(err => console.error("An error occurred: " + err));

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
