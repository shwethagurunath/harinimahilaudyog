import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    maps:
    {
    width: '100%',
    height: '100%',
    },
  }));

const MapContainer = () => {
    const classes=useStyles();
    return (
        <div>
            <Map
          google={this.props.google}
          zoom={8}
          
          initialCenter={{ lat: 47.444, lng: -122.176}}>
            <Marker position={{ lat: 48.00, lng: -122.00}} />
            </Map>
        

        </div>
    );
};

export default MapContainer;