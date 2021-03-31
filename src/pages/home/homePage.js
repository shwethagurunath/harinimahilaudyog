import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import SimpleCardComponent from "../../components/SimpleCardComponent/simpleCardComponent";
import history from "../../history";
import amazon from "../home/amazon.png";
import chaipoint from "../home/chaipoint.jpg";
import delivery from "../home/delivery.png";
import kial from "../home/kial.jpg";
import ourGoal from "../home/ourGoal.jpg";
import ourMission from "../home/ourmission.jpg";
import ourVision from "../home/ourvision.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        imgPath: "/productImages/coniokesar.jpeg",
    },
    {
        imgPath: "/productImages/cmangogroup.jpeg",
    },
    {
        imgPath: "./productImages/cmixedfruitgroup.jpeg",
    },
    {
        imgPath: "/productImages/panipuri.jpg",
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "full",
        flexGrow: 1
    },
    header: {
        display: "flex",
        alignItems: "center",
        backgroundColor: theme.palette.background.default,
    },
    button: {
        background: "lightgray",
        cursor: "pointer",
    },
    img: {
        height: 255,
        display: "block",
        width: 800,
        overflow: "hidden",
        textAlign: "center",
        margin: "auto",
    },
    content: {
        textAlign: "center",
        fontStyle: "arial",
        fontSize: "medium",
        alignItems: "center",
        justifyContent: "center",
        justifyItems: "center",
        width: "300hv",
    },
    text: {
        display: "flex",
    },
    clients: {
        display: "flex",
        width: 800,
    },
    simpleCardBlock: {
        display: "flex",
        padding: 10,
        margin: "auto",
        width: "75%",
    },
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

    const ourVisionText = "Our vision is to be an qualitative, efficient, cost effective FMCG, super stockist and distributor of high quality goals with no bounds.";
    const ourMissionText = "We encourage young aspiring people who wish to have the right commitment, long term goals and proper attitude.";
    const ourGoalText = "Offering wholesome, fairly priced and ethnically diverse food option";

    return (
        <div className={classes.root}>
            <Paper square elevation={0} className={classes.header}>
                <Typography>{tutorialSteps[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
                {tutorialSteps.map((step, index) => (
                    <div key={step.label}>{Math.abs(activeStep - index) <= 2 ? <img className={classes.img} src={step.imgPath} alt={step.label} /> : null}</div>
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
                        {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    </Button>
                }
            />
            <div className="card">
                <div className={classes.simpleCardBlock}>
                    <SimpleCardComponent cardTitle={"Our Mission"} cardText={ourMissionText} cardImg={ourMission}></SimpleCardComponent>
                    <SimpleCardComponent cardTitle={"Our Vision"} cardText={ourVisionText} cardImg={ourVision}></SimpleCardComponent>
                    <SimpleCardComponent cardTitle={"Our Goal"} cardText={ourGoalText} cardImg={ourGoal}></SimpleCardComponent>
                </div>
            </div>
            <Button className={classes.button} onClick={() => history.push("/contact")}>
                Contact Us
            </Button>
            <div>
                <h3>Our Clients</h3>
                <div className={classes.clients}>
                    <div>
                        <img src={amazon}></img>
                    </div>

                    <div>
                        <img src={chaipoint}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;
