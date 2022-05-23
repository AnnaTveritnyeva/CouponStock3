import { useHistory } from 'react-router-dom';
import { Coupon } from '../../model/Coupon';
import { addCouponToCart } from '../../redux/actions/UserActions';
import store from '../../redux/store';
import { theme } from '../../theme';
import makeStyles from "@mui/styles/makeStyles";
import { Button, ButtonGroup, Card, CardMedia, Grid, Typography } from '@mui/material';
import { CustomerAxios } from '../../axios';
import notify from '../../utils/Notify';

interface CouponItemProps {
    coupon: Coupon;
}

const UseStyles = makeStyles({
    card: {
        display: 'flex',
        width: '100%',
        height: '180px',
        marginBottom: theme.spacing(4),
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
        backgroundColor: '#e8e4e6',
        justifyContent: 'center',
        alignItems: 'center',
        justifyItems: 'center'
    },
    image: {
        height: '180px',
        width: '180px',
        [theme.breakpoints.down("sm")]: {
            height: '100px',
            width: '100px',

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
        justifyContent: 'center'
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        flexWrap: 'wrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        marginLeft: theme.spacing(1)



    },
    gridContainer: {
        display: 'flex'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2),
        justifyContent: 'space-between',
    },
    description: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        "-webkit-line-clamp": 3,
        "-webkit-box-orient": "vertical",
        [theme.breakpoints.down("sm")]: {
            display: 'none',
        }
    }

});

function CouponItem(props: CouponItemProps): JSX.Element {
    const history = useHistory();

    const handleClick = () => {
        history.push({ pathname: "/coupon/:" + props.coupon.id, state: props.coupon });
    }

    const handleBuyNow = (coupon: Coupon) => {
        CustomerAxios.addPurchase(coupon)
            .then(res => notify.success(coupon.title + " successfully purchased!"))
            .catch(err => notify.error(err.response.data))
    }

    const classes = UseStyles();
    return (
        <Card className={classes.card}>
            <div onClick={handleClick}>
                <CardMedia
                    className={classes.image}
                    image={props.coupon.image}
                    title={props.coupon.title}
                />
            </div>

            <Grid className={classes.gridContainer} container >
                <Grid item className={classes.content} xs={8} onClick={handleClick}>

                    <div className={classes.text} >
                        <Typography variant="h6"
                            fontSize={theme.breakpoints.down("md") && "14px"}
                            fontWeight={theme.typography.fontWeightBold} gutterBottom
                        >
                            {props.coupon.title}
                        </Typography>
                        <Typography
                            className={classes.description}
                            variant="body2"
                            gutterBottom
                        >
                            {props.coupon.description}
                        </Typography>
                        <Typography
                            variant="caption"
                            align="right"
                            color={theme.palette.primary.light
                            }
                            fontWeight={theme.typography.fontWeightMedium}
                        >
                            only {props.coupon.amount} left!
                        </Typography>
                    </div>
                </Grid>

                <Grid item className={classes.buttonBox} xs={4} >
                    <div>
                        <ButtonGroup
                            orientation='vertical'
                            variant='text'
                            sx={{ borderRadius: '15px' }}
                        >
                            <Button
                                size="large"
                                sx={{
                                    fontFamily: 'Kanit',
                                    paddingInline: theme.spacing(1),
                                    color: theme.palette.secondary.main,
                                    [theme.breakpoints.down("md")]: {
                                        display: 'none'
                                    }
                                }}
                                onClick={() => handleBuyNow(props.coupon)}
                            >
                                <Typography
                                    variant='subtitle2'
                                    fontWeight={theme.typography.fontWeightMedium}
                                >
                                    buy now
                                </Typography>

                            </Button>
                            <Button
                                size="large"
                                sx={{
                                    fontFamily: 'Kanit',
                                    fontWeight: theme.typography.fontWeightMedium,
                                    paddingInline: theme.spacing(1),
                                    color: theme.palette.secondary.dark
                                }}
                                onClick={() => store.dispatch(addCouponToCart(props.coupon))}
                            >
                                <Typography
                                    variant='body2'
                                    fontWeight={theme.typography.fontWeightMedium}
                                >
                                    add to cart
                                </Typography>
                            </Button>
                        </ButtonGroup>
                    </div>
                </Grid>
            </Grid>
        </Card>
    );
}

export default CouponItem;