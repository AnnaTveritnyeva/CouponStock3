import { Button, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { theme } from "../../theme";
import SingleCard from "./SingleCard";

const UseStyles = makeStyles({
    text: {
        marginBottom: theme.spacing(10)
    }
})

function JoinCompanyItem(): JSX.Element {
    const marginTop = { marginTop: theme.spacing(1) }

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

                    </Typography>

                    <Typography fontWeight={theme.typography.fontWeightBold} align="center" sx={{ marginBlock: theme.spacing(2) }}>
                        Register:
                    </Typography>

                    <TextField
                        label="company name" variant="outlined"
                        placeholder={"company"} required
                        sx={marginTop} fullWidth
                    />
                    <TextField
                        label="email" type="email" variant="outlined"
                        placeholder={"company@email.com"} required
                        sx={marginTop} fullWidth
                    />
                    <TextField
                        label="password" type="password"
                        variant="outlined" required
                        sx={marginTop} fullWidth
                    />
                    <TextField
                        label="image" type="url" variant="outlined"
                        placeholder={"http://image.jpg"} required
                        sx={marginTop} fullWidth
                    />

                    <Button
                        sx={{ marginBlock: theme.spacing(2) }}
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