import { ButtonGroup, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Logo from "../../assets/logo.svg.png"

import { theme } from "../../theme";
import {AiFillGithub, AiFillLinkedin, AiFillMail} from "react-icons/ai"



const UseStyles = makeStyles({
    footer: {
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(6),
        display: 'flex',
        flexDirection: 'column'
    },
    footerText: {
        color: theme.palette.secondary.main
    },
    logoSVG: {
        height: '30px',
        [theme.breakpoints.down("md")]: {
            height: '23px'
        }
    }
})

function Footer(): JSX.Element {
    const classes = UseStyles();

    return (
        <footer className={classes.footer}>
            <div>
                <Typography variant="h5"
                    align="center"
                    //fontFamily="Orelega One"
                    color={theme.palette.secondary.contrastText}
                    fontWeight={theme.typography.fontWeightMedium}
                >
                    Coupon
                    <img src={Logo} className={classes.logoSVG} alt=""/>
                    Stock
                </Typography>
            </div>
            <div>
                <Typography className={classes.footerText} variant="subtitle1" align="center" component="p">
                    Something here to give the footer a purpose!
                </Typography>
                <ButtonGroup>
                <IconButton size="large" href="https://github.com/AnnaTveritnyeva">
                <AiFillGithub/>
                </IconButton>
                <IconButton size="large" href="https://www.linkedin.com/in/anna-tveritnyeva">
                <AiFillLinkedin/>
                </IconButton>
                <IconButton size="large" >
                <AiFillMail/>
                </IconButton>
                </ButtonGroup> 
            </div>
        </footer>
    );
}

export default Footer;