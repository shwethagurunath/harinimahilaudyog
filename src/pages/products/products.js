import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import MediaCard from './productcard';

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

const conioProducts = [
    
    {
        title: "Chocolo Theo Bang Bang Hazlenut Chocolates",
        img:[
            './productImages/bangbang.jpeg'
        ,
        '/productImages/bangbang.jpeg'
        ],
        text: "Bang Bang Chocolates"
    },
    {
        title: "Conio Kesar Chocolates",
        img:[
            './productImages/ckesarsingle.jpeg'
        ,
        '/productImages/coniokesar.jpeg'
        ],
        text: "Conio Kesar"
    },
    {
        title: "Conio Mango",
        img:[
            './productImages/cmangogroup.jpeg'
        ,
        '/productImages/cmangogroup.jpeg'
        ],
        text: "Conio"
    },
    {
        title: "Conio Mixed Fruit",
        img:[
            './productImages/cmixedfruitgroup.jpeg'
        ,
        '/productImages/cmixfruit.jpeg'
        ],
        text: "Conio Mixed Fruit"
    },
    {
        title: "Conio Butter Scotch",
        img:[
            './productImages/coniobutterscotch.jpeg'
        ,
        '/productImages/coniobutterscotch.jpeg'
        ],
        text: "Conio Butter Scotch"
    },
    {
        title: "Conio PineApple",
        img:[
            './productImages/coniopineapple.jpeg'
        ,
        '/productImages/cpineapplegroup.jpeg'
        ],
        text: "Conio PineApple"
    },
    {
        title: "Conio Rose",
        img:[
            './productImages/crose.jpeg'
        ,
        '/productImages/crose.jpeg'
        ],
        text: "Conio Rose"
    }
]

    const jalaniProducts = 
    [{
        title: "Pani Puri",
        img:[
            './productImages/panipuri.jpg'
        ,
        '/productImages/panipuri.jpg'
        ],
        text: "Pani Puri"
    }]

    const ayyaProducts = [{
        title: "Ayya Appalam",
        img:[
            './productImages/ayya.jpeg'
        ,
        '/productImages/ayyalabel.jpeg'
        ],
        text: "Ayya Appalam"
    }]


const ProductsComponent = () => {
    const classes= useStyles();
    return (
        <div >
            <h1>Conio Products</h1>
            <div className={classes.productcard}> 
                
            {
                conioProducts.map((item) => (
                    <MediaCard item={item} ></MediaCard>
                ))
            }
            </div>
            <h1>Jalani Products</h1>
            <div className={classes.productcard}>
            
            {
                jalaniProducts.map((item) => (
                    <MediaCard item={item} ></MediaCard>
                ))
            }
            </div>
            <h1>Ayya Products</h1>
            <div>
            
            {
                ayyaProducts.map((item) => (
                    <MediaCard item={item} ></MediaCard>
                ))
            }
            </div>
        </div>
        

    );
};

export default ProductsComponent;