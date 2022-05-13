import { Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import LoginForm from "../forms/LoginForm";

interface LoginProps {
    additionalText?: string
}

const UseStyles = makeStyles({

});

function LoginPage(props: LoginProps): JSX.Element {
    const classes = UseStyles();

    function additionalText() {
        if (typeof (additionalText) !== undefined) {
            return <Typography>
                {props.additionalText}
            </Typography>
        }
    }
    return (
        <div>
            <Typography variant="h3" align="center">
                Login
            </Typography>
            {additionalText()}
            <LoginForm />
        </div>
    )
}

export default LoginPage;