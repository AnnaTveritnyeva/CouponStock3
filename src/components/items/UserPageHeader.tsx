import { Box, Button, Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { Logout } from "../../redux/selector";
import { theme } from "../../theme";

interface UserPageHeaderProps {
    name: string;
    email: string;
    img?: string;
    coupons?: number;
    userPage:boolean;
}


const UseStyles = makeStyles({
    gridContainer: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        marginBlock: theme.spacing(3),
        height: '150px',
        [theme.breakpoints.down("sm")]: {
            height: '100px'
        },
    },
    mainGrid: {
        display: 'inline-flex',
        justifyContent: 'flex-start',
    },
    mainText: {
        width:'100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        //alignContent: 'center'
    },
    mainTextName: {

    },
    mainTextEmail: {

    },
    mainTextCoupons: {
        marginTop: theme.spacing(1)
    },
    mainImage: {
        //height: '100%',
        height: '150px',
        [theme.breakpoints.down("sm")]: {
            height: '100px'
        },
        backgroundColor: 'white',
        marginRight: theme.spacing(2)
    },
    logoutGrid: {
        display: 'flex',
        justifyContent: 'center'
    },
    logoutButton: {
height:'25%',
    }

})

function UserPageHeader(props: UserPageHeaderProps): JSX.Element {
    const classes = UseStyles();
    return (
        <Grid
            container
            className={classes.gridContainer}
        >
            <Grid className={classes.mainGrid} item xs={10}>
                {props.img !== undefined ?
                    <img className={classes.mainImage} src={props.img} alt=""/> : <div></div>
                }
                <Box className={classes.mainText}>
                    <Typography className={classes.mainTextName} variant="h3">
                        {props.name}
                    </Typography >
                    <Typography className={classes.mainTextEmail} variant="subtitle2" gutterBottom >
                        {props.email}
                    </Typography>
                    <Typography className={classes.mainTextCoupons} variant="body2" >
                        {props.coupons !== undefined ? "total coupons: " + props.coupons : ""}
                    </Typography>
                </Box>
            </Grid>
            <Grid className={classes.logoutGrid} item xs={2}>
               {props.userPage?<Button className={classes.logoutButton} variant="contained" color="primary" size="small" 
               onClick={()=>Logout()}
               >
                    logout
                </Button>:
                <div>
                    </div>} 
            </Grid>
        </Grid>
    );
}

export default UserPageHeader;