import { faFacebookSquare , faInstagramSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import history from '../history';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #597346 30%, #bdbfbb 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(244, 245, 242, .3)',
      color: 'white',
      height: 40,
      padding: '0 30px',
      display:'flex',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 0
    },
    display: {
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: '50px',
        width: '50px',
        padding: '5px',
        cursor: 'pointer',
    },
    title:{
       textAlign:'center',
        fontFamily: 'arial',
        fontSize:'title',
        textDecorationColor: 'Green',
        padding: '5px',
    },
    button:{
        background: 'transparent',
        border: 'transparent',
        textAlign: 'center',
        fontFamily: 'arial',
        borderStyle: 'rounded',
        cursor: 'pointer',
        padding: '10px',
    }
  });
  

const FooterComponent = () => {
    const classes = useStyles();
    return (
        <div >
            {/* Bottom Tabbar */}
            <div className={classes.root}>
                <button className={classes.button} onClick={() => history.push("/feedback")}>
                Feedback
                </button>
                <button className={classes.button} onClick={() => history.push("/contact")}>
                Contact Us
                </button>
                <button className={classes.button} onClick={() => 'https://www.facebook.com/groups/346027936766782'}>
                <FontAwesomeIcon  className={classes.iconImage} icon={faFacebookSquare} /> 
                </button>
                <button className={classes.button} onClick={() => history.push("/products")}>
                <FontAwesomeIcon  className={classes.iconImage} icon={faInstagramSquare} />  
                </button>
                <button className={classes.button} onClick={() => history.push("/products")}>
                <FontAwesomeIcon  className={classes.iconImage} icon={faWhatsappSquare} />  
                </button>
                <button className={classes.button} onClick={() => history.push("/privacy")}>
                Privacy Policy
                </button>
                <button className={classes.button} onClick={() => history.push("/terms")}>
                    Terms and Conditions
                </button>
                <button className={classes.button} onClick={() => history.push("/disclaimer")}>
                    Disclaimer
                </button>
            </div>
            
        </div>
    );
};

export default FooterComponent;