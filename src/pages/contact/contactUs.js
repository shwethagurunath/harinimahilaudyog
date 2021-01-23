import { makeStyles} from '@material-ui/core/styles';
import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './mapcontainer';

const useStyles = makeStyles((theme) => ({
    content: {
        textAlign: 'center',
        fontStyle:'arial',
        fontSize: 'medium',
        alignItems: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
        width : '300px',
    },
    timings: {
        width: '240px',
    },
}));


const ContactComponent = () => {
    const classes=useStyles();
    return (
        <div className={classes.content}>
            <p>
                Harini Mahila Udyog,
                No.4282, 1st Floor, 4th Phase, Girinagar, Sharadha Devi Road, Banashankari 1st Stage, Bangalore - 560085
            </p>
            <p className={classes.timings}>  
                Monday : 8:00 am - 8:00pm
                Tuesday : 8:00 am - 8:00pm
                Wednesday : 8:00 am - 8:00pm
                Thursday : 8:00 am - 8:00pm
                Friday : 8:00 am - 8:00pm
                Saturday : 8:00 am - 8:00pm
                Sunday : 8:00 am - 8:00pm 
            </p>
        </div>
    );
};

export default ContactComponent;