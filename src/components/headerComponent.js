import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import logo from '../components/logo.png';
import history from '../history';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #597346 30%, #bdbfbb 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(244, 245, 242, .3)',
      color: 'white',
      height: 60,
      padding: '0 30px',
      display: 'flex'
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
        fontWeight: 'bold',
        fontFamily: 'arial',
        cursor: 'pointer',
        padding: '10px',
        width: 100,
        outline: 'none',
        "&:hover": {
            backgroundColor: "#FFF"
        }
    },
    headerDivision: {
        height: 60,
        display: 'flex'
    }
  });


const HeaderComponent = () => {
    const classes = useStyles();
    return (
        <div >
            <div className={classes.root}>
                <div class={classes.headerDivision}>
                    <img  src={logo} alt='logo' onClick={() => history.push("/")}></img>
                    <h1 > Harini Mahila Udyog</h1>
                </div>
                <div class={classes.headerDivision}>
                    <button className={classes.button} onClick={() => history.push("/")}>
                        Home
                    </button>
                    <button className={classes.button} onClick={() => history.push("/products")}>
                        Products
                    </button>
                    <button className={classes.button} onClick={() => history.push("/paripoorna")}>
                    Paripoorna Products
                    </button>
                    <button className={classes.button} onClick={() => history.push("/about")}>
                        About Us
                    </button>
                    <button className={classes.button} onClick={() => history.push("/contact")}>
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;