import { Button, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { theme } from "../../theme";
import SingleCard from "./SingleCard";

const UseStyles = makeStyles({
    text: {
        marginBottom: theme.spacing(10)
    },
    inputField: {
        marginTop: theme.spacing(1)
    }
})



function JoinCompanyItem(): JSX.Element {
    
    const InputField = (title: string, type: string, placeholder: string) => {
        return <div className={classes.inputField}>
            <Typography className={classes.text} variant="subtitle2" gutterBottom color={theme.palette.primary.light}>
                {title}
            </Typography>
            <TextField type={type} placeholder={placeholder} fullWidth required />
        </div>

    }
    const classes = UseStyles();
    return (
        <SingleCard
            title="Join Our Community"
            content={
                <div>
                    <Typography 
                    className={classes.text} 
                    variant="subtitle1" 
                    align="center" 
                    gutterBottom>
                        Have your own buisness?
                        <br />
                        CouponStock gives an opportunity to every company submit their coupons for free.
                        <br />
                        Register now and start adding coupons!
                        <br/>
                    </Typography>

                    <Typography fontWeight={theme.typography.fontWeightBold} align="center" color="secondary" >
                        Register:
                    </Typography>

                    {InputField("company name:", "", "company")}

                    {InputField("email:", "email", "company@email.com")}

                    {InputField("password:", "password", "password")}

                    {InputField("image:", "url", "http://image.jpg")}

                    <Button 
                    sx={{marginBlock: theme.spacing(2)}} 
                    variant="contained" 
                    fullWidth 
                    size="large" 
                    >
                        Submit
                    </Button>
                </div>
            }
        />
    );
}

export default JoinCompanyItem;