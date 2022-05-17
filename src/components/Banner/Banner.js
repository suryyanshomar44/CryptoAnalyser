import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel';

const useStyles = makeStyles(() => ({
    banner: {
        backgroundImage: "url(./banner2.jpg)",
    },
    bannerContent : {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
    },
    tagLine: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center"
    }
}))

const Banner = () => {
    const classes = useStyles();
    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagLine}>
                    <Typography 
                        variant='h2'
                        style={{
                            fontWeight: "bold",
                            marginTop: "15",
                            fontFamily: "Montserrat",
                        }}
                    >
                        Crypto Tracker
                    </Typography>
                    <Typography 
                        variant='subtitle1'
                        style={{
                            color: "darkgrey",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat",
                        }}
                    >
                        Get all the Information regarding your favorite Crypto Currency
                    </Typography>
                </div>
                <Carousel/>
            </Container>
           
        </div>
    )
}

export default Banner
