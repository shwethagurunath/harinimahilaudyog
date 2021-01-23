import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    maps:
    {
    width: 100,
    height: 100,
    },
  }));

const MapContainer = (props) => {
    const classes=useStyles();
    return (
        <div className={classes.maps}>
            <Map
          google={props.google}
          zoom={18}
          
          initialCenter={{ lat: 12.93957920961317, lng: 77.54818308204653}}>
            <Marker position={{ lat: 12.93957920961317, lng: 77.54818308204653}} />
           
            </Map>
        

        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBnPIf_EZlhikOkrjsa7HWV_g-a3z60sgU'
  })(MapContainer);