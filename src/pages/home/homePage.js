import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import history from '../../history';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    
    imgPath:
      'https://i.ebayimg.com/images/g/jRkAAOSwvEZgATRf/s-l640.jpg',
  },
  {
    
    imgPath:
      'https://5.imimg.com/data5/SELLER/Default/2020/8/ZW/OU/EQ/38556475/new-product-500x500.jpeg',
  },
  {
    
    imgPath:
      'https://blog.pureindianfoods.com/wp-content/uploads/category/daals-category-banner.jpg',
  },
  {
    
    imgPath:
      'https://i.pinimg.com/564x/09/c3/a7/09c3a7f6809a3739a97996952af271b0.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 'full',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
  },
  button:{
    background: 'lightgray',
    cursor: 'pointer',

  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 'full',
    overflow: 'hidden',
    width: '100%',
    textAlign: 'center',
  },
  content: {
      textAlign: 'center',
      fontStyle:'arial',
      fontSize: 'medium',
      alignItems: 'center',
      justifyContent: 'center',
      justifyItems: 'center',
      width : '300hv',
  }
}));

function HomeComponent() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
      variant="dots"
      steps={4}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 3}>
          
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          
        </Button>
        }
      />
      <p className={classes.content}>
          Harini Mahila Udyog was started way back in 2007. 
          Since then we have been distributors across Karnataka for various 
          products of the food indstry and stationary to Big Industries.
      </p>
      <Button className={classes.button} onClick={() => history.push("/contact")}>
          Contact US
        </Button>
    </div>

  );
}

export default HomeComponent;
