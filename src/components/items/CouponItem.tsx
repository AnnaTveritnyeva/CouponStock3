import React from 'react';
import { useHistory } from 'react-router-dom';
import { Coupon } from '../../model/Coupon';
import { addCouponToCart } from '../../redux/actions/UserActions';
import store from '../../redux/store';
import { theme } from '../../theme';
import makeStyles from "@mui/styles/makeStyles";
import { Box, Button, Card, CardMedia, Divider, Grid, Typography } from '@mui/material';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

interface CouponItemProps {
    coupon: Coupon;
}

const UseStyles = makeStyles({
    card: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        height: '200px',
        marginBottom: theme.spacing(4),
        border: '1.5px solid black',
        "&:hover": {
            boxShadow: '0px 0px 3px 0px #333333'

        },
        [theme.breakpoints.down("sm")]: {
            height: '120px'
        },
    },
    imageBox: {

        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'center',
        //justifyContent: 'center',
        backgroundColor: '#e8e4e6',
    },
    image: {
        height: '200px',
        width: '200px',
        [theme.breakpoints.down("sm")]: {
            height: '120px',
            width: '120px',

        },
    },
    buttonBox: {
        width: '100%',
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderLeft: '5px dashed #e8e4e6',
        borderColor: theme.palette.secondary.light,
        paddingInline: theme.spacing(4)
    },
    imageGrid: {

    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        flexWrap: 'wrap',
        //justifyContent:'space-between',



    },
    gridContainer: {
        //display: 'flex'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(3),
        // alignItmes:'center',
        justifyContent: 'space-between',
    }

});

function CouponItem(props: CouponItemProps): JSX.Element {
    const history = useHistory();

    const handleClick = () => {
        history.push({ pathname: "/coupon/:" + props.coupon.id, state: props.coupon });
    }

    const classes = UseStyles();
    return (
        <Card className={classes.card}>
            <Grid className={classes.gridContainer} container >
               
                <Grid className={classes.imageGrid} item xs={3}  onClick={handleClick}>
                    <CardMedia className={classes.image} image={props.coupon.image} title={props.coupon.title} />
                </Grid>
                <Divider />
                <Grid item className={classes.content} xs={6} sm={6} onClick={handleClick}>

                    <Box className={classes.text} sx={{ padding: '0' }}>
                        <Typography variant="h6" fontWeight={theme.typography.fontWeightBold} gutterBottom>
                            {props.coupon.title}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            {props.coupon.description}
                        </Typography>

                    </Box>

                </Grid>
              
                <Grid item className={classes.buttonBox} xs={3} sm={3}>
                    <div>
                        <Button
                            variant="contained"
                            style={{ backgroundColor: theme.palette.primary.dark }}
                            size="medium"
                            startIcon={<ShoppingCartTwoToneIcon />}
                            sx={{ marginBottom: theme.spacing(1) }}
                            onClick={() => store.dispatch(addCouponToCart(props.coupon))}
                        >
                            Get This Deal
                            <br />
                        </Button>
                        <Typography variant="subtitle2" align="center" color={theme.palette.primary.light} >
                            only {props.coupon.amount} left!
                        </Typography>
                        <Typography variant="caption" align="right" color={theme.palette.secondary.dark}>
                            {/* after reloading shows the date not formated */}
                            expiration date: { props.coupon.endDate}
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Card>
    );
}

export default CouponItem;