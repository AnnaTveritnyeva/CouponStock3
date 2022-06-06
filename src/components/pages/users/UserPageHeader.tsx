import { theme } from "../../../theme";
import makeStyles from "@mui/styles/makeStyles";
import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import { Logout } from "../../../redux/selector";
import { useHistory } from "react-router-dom";

interface UserPageHeaderProps {
    name: string;
    email?: string
    img?: string;
    text?: string;
    userPage: boolean;
}


const UseStyles = makeStyles({
    gridContainer: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        marginBlock: theme.spacing(3),
        height: '150px',
        [theme.breakpoints.down("sm")]: {
            height: '120px'
        },
    },
    mainGrid: {
        display: 'inline-flex',
        justifyContent: 'flex-start',
    },
    mainText: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    mainTextCoupons: {
        marginTop: theme.spacing(1)
    },
    imageBox: {
        display: 'flex',
        flexWrap: 'wrap',
        height: '150px',
        width: '180px',
        backgroundColor: 'white',
        marginRight: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            height: '120px',
            width: '160px'
        },
        [theme.breakpoints.down("sm")]: {
            height: '70px',
            width: '90px'
        },
    },
    logoutGrid: {
        display: 'flex',
        justifyContent: 'right'
    },
    logoutButton: {
        height: '30%',
    }

})

function UserPageHeader(props: UserPageHeaderProps): JSX.Element {
    const classes = UseStyles();
    const history = useHistory()
    return (
        <Grid
            container
            className={classes.gridContainer}
        >
            <Grid className={classes.mainGrid} item xs={10}>
                {props.img !== undefined &&
                    <CardMedia className={classes.imageBox} image={props.img} />
                    }

                <Box className={classes.mainText}>
                    <Typography variant='h3' fontWeight={theme.typography.fontWeightMedium}>
                        {props.name}
                    </Typography >

                    <Typography className={classes.mainTextCoupons} variant="subtitle2" >
                        {props.email !== undefined ? props.email : ""}
                    </Typography>

                    <Typography className={classes.mainTextCoupons} variant="body2" >
                        {props.text !== undefined && props.text}
                    </Typography>
                </Box>
            </Grid>
            <Grid className={classes.logoutGrid} item xs={2}>
                {props.userPage &&
                    <Button
                        className={classes.logoutButton}
                        onClick={() => {
                            Logout()
                            history.push("/home")
                        }}
                        variant="contained"
                        color="secondary"
                        sx={{
                            fontFamily: 'Kanit',
                            fontWeight: theme.typography.fontWeightMedium,
                            color: theme.palette.secondary.light,
                        }}

                        size="large">
                        logout

                    </Button>}
            </Grid>
        </Grid>
    );
}

export default UserPageHeader;
