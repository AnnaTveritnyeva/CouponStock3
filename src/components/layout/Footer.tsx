import { ButtonGroup, Grid, IconButton, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Logo from "../../assets/logo.svg.png"
import { theme } from "../../theme";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai"
import { CategoryValue } from "../../model/Category";
import { useHistory } from "react-router-dom";
import { GetCompanies } from "../../redux/selector";
const UseStyles = makeStyles({
    footer: {
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(6),
        display: 'flex',
        flexDirection: 'column'
    },
    logoSVG: {
        height: '30px',
        [theme.breakpoints.down("md")]: {
            height: '23px'
        }
    },
    link: {
        cursor: 'pointer'
    },
    onlyWebText: {
        [theme.breakpoints.down("md")]: {
            display: 'none'
        }
    }
})

function Footer(): JSX.Element {
    const classes = UseStyles();
    const history = useHistory();

    return (
        <footer className={classes.footer}>
            <Grid container >
                <Grid item xs={12} md={3}>
                    <Typography
                        className={classes.link}
                        variant="h5"
                        align="center"
                        color={theme.palette.secondary.contrastText}
                        fontWeight={theme.typography.fontWeightMedium}
                        onClick={() => history.push("/home")}
                    >
                        Coupon
                        <img src={Logo} className={classes.logoSVG} alt="couponLogo" />
                        Stock
                    </Typography>
                    <Typography variant="body2" color={theme.palette.common.black} align="center">
                        <br />
                        Made by Anna Tveritnyeva
                        <br />
                        Fullstack Java Developer
                        <br />
                        2022
                        <br /><br />
                    </Typography>
                    <ButtonGroup>
                        <IconButton size="large" href="https://github.com/AnnaTveritnyeva">
                            <AiFillGithub />
                        </IconButton>
                        <IconButton size="large" href="https://www.linkedin.com/in/anna-tveritnyeva">
                            <AiFillLinkedin />
                        </IconButton>
                        <IconButton size="large" href="mailto:atveretniv@gmail.com">
                            <AiFillMail />
                        </IconButton>
                    </ButtonGroup>
                </Grid>

                <Grid item md={3} className={classes.onlyWebText}>
                    <Typography
                        variant="h6"
                        color={theme.palette.secondary.dark}
                        fontWeight={theme.typography.fontWeightMedium}
                        align="center"
                    >
                        COUPONS
                    </Typography>
                    <br />
                    {CategoryValue.map(category =>
                        <Link
                            className={classes.link}
                            onClick={() => history.push({ pathname: "/category/:" + category, state: category })}
                            color={theme.palette.common.black}
                        >
                            <Typography variant="body2" align="center">
                                {category} coupons
                            </Typography>
                        </Link>
                    )}
                </Grid>
                <Grid item md={3} className={classes.onlyWebText}>
                    <Typography
                        variant="h6"
                        color={theme.palette.secondary.dark}
                        fontWeight={theme.typography.fontWeightMedium}
                        align="center"
                    >
                        COMPANIES
                    </Typography>
                    <br />
                    {GetCompanies().slice(0, 5).map(company =>
                        <Link
                            className={classes.link}
                            onClick={() => history.push({ pathname: "/company/:" + company.name, state: company })}
                            color={theme.palette.common.black}
                        >
                            <Typography variant="body2" align="center">
                                {company.name} coupons
                            </Typography>
                        </Link>
                    )}
                </Grid>
                <Grid item md={3} className={classes.onlyWebText}>
                    <Typography
                        variant="h6"
                        color={theme.palette.secondary.dark}
                        fontWeight={theme.typography.fontWeightMedium}
                        align="center"
                    >
                        ABOUT
                    </Typography>
                    <Typography
                        variant="body2"
                        color={theme.palette.common.black}
                        align="center"
                    >
                        <br />
                        CouponStock makes it easier to save money and find customers.
                        We help our customers to find the best offer the can get.
                        And we give each company an apportunity to add their coupons to our website.
                    </Typography>
                </Grid>
            </Grid>
        </footer>
    );
}

export default Footer;