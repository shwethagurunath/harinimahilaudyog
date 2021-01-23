import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import MediaCard from '../products/productcard';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 'full',
      flexGrow: 1,
      display: 'flex',
      padding: '10px',
      textAlign:'center'
    },
    productcard:{
        display: 'flex',
        flexWrap: 'wrap'
    }

}));

const tapeProducts = 
[
    {
        title: "1 inch Tape",
        img:[
            '/paripoornaProducts/1inch.jpg'
        ,
        './paripoornaProducts/1inchgroup.jpg'
        ],
        text: "1 inch transparent"
    },
    {
        title: "2 inch",
        img:[
            './paripoornaProducts/2inch.jpg'
        ,
        './paripoornaProducts/2inchgroup.jpg'
        ],
        text: "2 inch transparent"
    },
    {
        title: "3 inch",
        img:[
            './paripoornaProducts/3inch.jpg'
        ,
        './paripoornaProducts/3inchgroup.jpg'
        ],
        text: "3 inch transparent "
    }
]

    const cottonProducts = 
    [{
        title: "Cotton Waste Products",
        img:[
            './paripoornaProducts/cottonwaste.jpg'
        ,
        './paripoornaProducts/cottonwaste1.jpg'
        ],
        text: "Cotton Water Products"
    },
    {
        title: "Pure Cotton Waste Products",
        img:[
            './paripoornaProducts/purecottonwaste.jpg'
        ,
        './paripoornaProducts/purecottonwastesingle.jpg'
        ],
        text: "Pure Cotton Waste"
    }
    ]

    const glovesProducts = 
    [{
        title: "Gloves",
        img:[
            './paripoornaProducts/gloves.jpg'
        ,
        './paripoornaProducts/gloves1.jpg'
        ],
        text: "Gloves"
    }]


const ParipoornaComponent = () => {
    const classes= useStyles();
    return (
        <div >
            <h1>Tape Products</h1>
            <div className={classes.productcard}> 
                
            {
                tapeProducts.map((item) => (
                    <MediaCard item={item} ></MediaCard>
                ))
            }
            </div>
            <h1>Cotton Products</h1>
            <div className={classes.productcard}>
            
            {
                cottonProducts.map((item) => (
                    <MediaCard item={item} ></MediaCard>
                ))
            }
            </div>
            <h1>Glove Products</h1>
            <div>
            
            {
                glovesProducts.map((item) => (
                    <MediaCard item={item} ></MediaCard>
                ))
            }
            </div>
        </div>
    );
};

export default ParipoornaComponent;