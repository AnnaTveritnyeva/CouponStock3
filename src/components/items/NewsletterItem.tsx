import "./NewsletterItem.css";
import makeStyles from "@mui/styles/makeStyles";
import { Box, Button, TextField, Typography } from "@mui/material";
import { theme } from "../../theme";
import SingleCard from "./SingleCard";


const UseStyles = makeStyles({
    inputBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: theme.spacing(3)
    },
    okButton: {
        width: '10%'
    },
})

function NewsletterItem(): JSX.Element {
    const classes = UseStyles();
    return (
        <SingleCard title="Email Newsletter"
            content={
                <div>
                    <Typography variant="subtitle1" >
                        Sign up for our email newsletter and get notified about hot and popular coupons.
                    </Typography>
                    <Box className={classes.inputBox}>
                        <TextField placeholder="Enter email adress..." sx={{ width: '75%' }}/>
                        <Button className={classes.okButton} variant="contained" >
                            Ok
                        </Button >
                    </Box>
                    <Typography variant="caption" align="center">
                        (No more than a couple of emails per month)
                    </Typography>
                </div>
            }
        />
    );
}

export default NewsletterItem;