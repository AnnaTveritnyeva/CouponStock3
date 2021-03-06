import { Container, IconButton, Modal, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { theme } from "../../theme";
import LoginForm from "../forms/LoginForm";
import ClearIcon from '@mui/icons-material/Clear';

const UseStyles = makeStyles({
    container: {
        borderRadius: '5%',
        height: "500px",
        width: "500px",
        backgroundColor: 'white',
        position: "absolute",
        bottom: '0',
        left: '0',
        top: '0',
        right: '0',
        margin: 'auto',
        paddingInline: theme.spacing(10)
    },

});


interface LoginItemProps {
    open: boolean,
    close: any
}

function LoginItem(props: LoginItemProps): JSX.Element {
    const classes = UseStyles();

    return (
        <Modal open={props.open}>
            <Container className={classes.container} sx={{ width: '50vw' }}>
                <IconButton onClick={props.close}>
                    <ClearIcon />
                </IconButton>
                <Typography variant="h3" align="center">
                    Login
                </Typography>
                <Typography>
                    Have customer account in CouponStock?
                    <br/>
                    Sign in and start saving money!
                </Typography>
                <LoginForm />
            </Container>
        </Modal>

    )
}

export default LoginItem;