import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faBusinessTime, faMailBulk, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { makeStyles } from '@material-ui/core/styles';
import { GoogleApiWrapper, Map } from 'google-maps-react';
import React from 'react';

import MapContainer from './mapcontainer';

const useStyles = makeStyles((theme) => ({
    content: {
        fontStyle:'arial',
        fontSize: 'medium',
        justifyItems: 'left',
        textAlign:'left',
        paddingLeft:20
    },
    text:
    {
        paddingLeft:30
    },
    icons:{
        display: 'flex'
    },
    iconImage:{
        paddingRight:10
    },
    maps:
    {
        width: 240,
        height: 300,
        paddingRight : 20,
        paddingLeft: 20
    }
}));


const ContactComponent = () => {
    const classes=useStyles();
    return (
        <div >
            <div className={classes.content}>
                <div className= {classes.icons}>
                <h3>
                 <FontAwesomeIcon  className={classes.iconImage} icon={faAddressCard} />
                Location:</h3>
                </div>
                <div className={classes.text}>
                    No.4282, Ground Floor, 4th Phase,
                </div>
                <div className={classes.text}>
                    Girinagar, Sharadha Devi Road, Banashankari 1st Stage,
                </div>
                <div className={classes.text}>
                    Bangalore - 560085
                    Karnataka, India
                </div>
                <div >
                <p>

                    <h3  >
                    <FontAwesomeIcon  className={classes.iconImage} icon={faMobileAlt} />
                        Phone No:</h3>
                   <div className={classes.text}> Mr. Rama Murthy      :+91 9739911445 </div>
                   <div className={classes.text}> Mrs. Parimala Murthy :+91 9902957413 </div>
                   <div className={classes.text}> Mr. Srinath          :+91 9606937336 </div>
                   <p>
                    <h3  >
                    <FontAwesomeIcon  className={classes.iconImage} icon={faMailBulk} />
                        Email Us At:</h3>
                                <div className={classes.text}><a href= "mailto: sales.harinimu@gmail.com ">sales.harinimu@gmail.com</a></div>
                                <div className={classes.text}> <a href="mailto: harinimktg@gmail.com">harinimktg@gmail.com</a></div>
                                <div className={classes.text}><a href="mailto: Paripoornamktg@gmail.com">Paripoornamktg@gmail.com</a></div>
                    </p>
                </p>
                </div>
                <h3>
                <FontAwesomeIcon  className={classes.iconImage} icon={faBusinessTime} />
                    Timings:</h3>
                <p>
                    <div className={classes.text}>Monday : 10:00 am - 6:00pm</div>
                    <div className={classes.text}> Tuesday : 10:00 am - 6:00pm</div>
                    <div className={classes.text}>Wednesday : 10:00 am - 6:00pm</div>
                    <div className={classes.text}> Thursday : 10:00 am - 6:00pm</div>
                    <div className={classes.text}> Friday : 10:00 am - 6:00pm</div>
                    <div className={classes.text}> Saturday : 10:00 am - 6:00pm</div>
                    <div className={classes.text}> Sunday : 10:00 am - 6:00pm </div>
                </p>
            </div >
            <div className={classes.maps}>
            <MapContainer className={classes.maps} ></MapContainer>
            </div>
        </div>
    );
};

export default ContactComponent;