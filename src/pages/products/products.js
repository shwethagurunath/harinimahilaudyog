import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import ayya from './image/ayya.jpeg';
import bangbang from './image/bangbang.jpeg';
import ckesarsingle from './image/ckesarsingle.jpeg';
import ckesargroup from './image/coniokesar.jpeg';
import cmangogroup from './image/cmangogroup.jpeg';
import cmixedfruitgroup from './image/cmixedfruitgroup.jpeg';
import cmixfruit from './image/cmixfruit.jpeg';
import coniobs from './image/coniobutterscotch.jpeg';
import coniopa from './image/coniopineapple.jpeg';
import coniopagroup from './image/cpineapplegroup.jpeg';
import crose from './image/crose.jpeg';
import panipuri from './image/panipuri.jpg';

import MediaCard from './productcard';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 'full',
      flexGrow: 1,
      display: 'flex',
      padding: '10px'
    },

}));

const productList = [
    {
        title: "Ayya Appalam",
        img:[
            './images/ayya.jpeg'
        ,
        './images/ayya.jpeg'
        ],
        text: "Ayya Appalam"
    },
    // {
    //     title: "Chocolo Theo Bang Bang Hazlenut Chocolates",
    //     img:[bangbang],
    //     text: "Bang Bang Chocolates"
    // },
    // {
    //     title: "Conio Kesar Chocolates",
    //     img:[ckesarsingle],
    //     text: "Conio Kesar"
    // },
    // {
    //     title: "Conio Kesar Chocolates",
    //     img:[ckesargroup],
    //     text: "Conio Kesar"
    // },
    // {
    //     title: "Conio Mango",
    //     img:[cmangogroup],
    //     text: "Conio"
    // }
    // {
    //     title: "Conio Mixed Fruit",
    //     img:cmixfruit,
    //     text: "Conio Mixed Fruit"
    // },
    // {
    //     title: "Conio Mixed Fruit",
    //     img:cmixedfruitgroup,
    //     text: "Conio Mixed Fruit"
    // },
    // {
    //     title: "Conio Butter Scotch",
    //     img:coniobs,
    //     text: "Conio Butter Scotch"
    // },
    // {
    //     title: "Conio PineApple",
    //     img:coniopa,
    //     text: "Conio PineApple"
    // },
    // {
    //     title: "Conio PineApple",
    //     img:coniopagroup,
    //     text: "Conio PineApple"
    // },
    // {
    //     title: "Conio Rose",
    //     img:crose,
    //     text: "Conio Rose"
    // },
    // {
    //     title: "Pani Puri",
    //     img:panipuri,
    //     text: "Pani Puri"
    // },
]


const ProductsComponent = () => {
    const classes= useStyles();
    return (
        <div >
            {
                productList.map((item) => (
                    <MediaCard item={item} ></MediaCard>
                ))
            }
        </div>

    );
};

export default ProductsComponent;