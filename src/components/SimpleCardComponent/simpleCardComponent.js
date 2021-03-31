import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: 10,
        borderColor: "black",
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
}));

const SimpleCardComponent = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={props.cardImg} title={props.cardTitle} />
            <CardContent>
                <Typography variant="h5" color="textPrimary" component="p">
                    {props.cardTitle}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.cardText}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SimpleCardComponent;
