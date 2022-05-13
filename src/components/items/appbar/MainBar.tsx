import { Badge, ButtonGroup, Grid, IconButton, InputBase, Toolbar, Typography, alpha, Button, Drawer, MenuList } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import { Search } from "@mui/icons-material";
import { SyntheticEvent, useEffect, useState } from "react";
import Logo from "../../../assets/logo.svg.png";
import CloseIcon from '@mui/icons-material/Close';
import { useHistory } from "react-router-dom";
import { theme } from "../../../theme";
import { GetCartCoupons, GetNumOfCartCoupons, getUserRole, Logout } from "../../../redux/selector";
import { Role } from "../../../model/Role";
import { CategoriesMenu, CopmaniesMenu, UserMenu } from "./SideBar";
import store from "../../../redux/store";
import notify from "../../../utils/Notify";




const UseStyles = makeStyles({
    toolbar: {
        display: 'flex',
        justifyContent: "space-between",

    },
    gridContainer: {
        marginBottom: theme.spacing(4),
        paddingTop: theme.spacing(1),
        [theme.breakpoints.down("md")]: {
            marginBottom: theme.spacing(2),
        }

    },
    gridLeft: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    gridRight: {
        display: 'flex', justifyContent: 'flex-end',
        alignItems: 'center',
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        }
    },
    icons: {
        marginRight: theme.spacing(1),
    },
    logo: {
        height: '40%',
        display: 'flex',
        alignItems: 'center',
        left: '50vw',
        marginLeft: theme.spacing(1),
        [theme.breakpoints.down("md")]: {
            marginLeft: theme.spacing(1)
        },
        "&:hover": {
            cursor: "pointer"
        }
    },
    search: {
        marginLeft: theme.spacing(5),
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#AFC2C2',
        borderRadius: "15px",
        [theme.breakpoints.down("md")]: {
            display: 'none'
        },
        "&:hover": {
            backgroundColor: theme.palette.common.white,
        }
    },
    searchInput: {
        color: theme.palette.common.white,
        marginLeft: theme.spacing(1),
        width: '100%'
    },
    badge: {

    },
    menu: {
        [theme.breakpoints.up("sm")]: {
            display: 'none'
        }

    },
    loginButton: {
        backgroundColor: theme.palette.secondary.main,


    },
    logoSVG: {
        height: '3rem',
        [theme.breakpoints.down("md")]: {
            height: '30px'
        }
    }

})






function MainBar(): JSX.Element {
    const classes = UseStyles();
    const history = useHistory();
    const [phoneMenuOpen, setPhoneMenuOpen] = useState<boolean>(false)


    function RightSection() {
        switch (getUserRole()) {
            case Role.GUEST:
                return "Login";
            case Role.ADMIN:
                return "Admin"
            case Role.COMPANY:
                return "User"
            case Role.CUSTOMER:
                return "User"
        }
    }

    const openMenu = () => {
        setPhoneMenuOpen(true);
    }

    const closeMenu = () => {
        setPhoneMenuOpen(false);
    }

    const handleLogoClick = (args: SyntheticEvent) => {
        console.log("go to home")
    }

    const handleUserClick = () => {
        getUserRole() === Role.GUEST ? history.push("/login") : history.push("/user")
    }



useEffect(()=>{

},[GetNumOfCartCoupons])

    return (
        <Toolbar className={classes.toolbar} >
            <Grid className={classes.gridContainer} container >
                <Grid item sm={1}>

                </Grid>
                <Grid className={classes.gridLeft} item xs={12} sm={7}>
                    <div className={classes.menu}>
                        <IconButton className={classes.icons} onClick={openMenu}
                            sx={{ color: alpha(theme.palette.primary.contrastText, 0.9) }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>

                    <div className={classes.logo} onClick={() => history.push("/home")}>
                        <Typography variant="h3"
                            align="center"
                            fontFamily="Orelega One"
                            color={theme.palette.secondary.contrastText}
                            fontWeight={theme.typography.fontWeightLight}
                        //fontStyle="italic"
                        >
                            Coupon
                            <img src={Logo} className={classes.logoSVG} alt="" />
                            Stock

                        </Typography>
                    </div>
                    <div className={classes.search}>
                        <Search color="primary" />
                        <InputBase placeholder="search our coupons..." className={classes.searchInput} />
                    </div>
                </Grid>
                <Grid className={classes.gridRight} item sm={3}>



                    <div className={classes.icons}>

                        <ButtonGroup >
                            <IconButton

                                sx={{ color: alpha(theme.palette.secondary.contrastText, 0.8) }}
                                onClick={() => history.push("/cart")}>

                                <Badge 
                                    className={classes.badge}
                                    badgeContent={GetNumOfCartCoupons()}
                                    color="secondary"
                                >
                                    <ShoppingCartTwoToneIcon />
                                </Badge>
                            </IconButton >
                        </ButtonGroup>

                    </div>
                    <Button className={classes.loginButton} style={{ backgroundColor: theme.palette.primary.dark, color: theme.palette.primary.contrastText, borderRadius: "20px" }}
                        startIcon={<PersonOutlineTwoToneIcon />}
                        onClick={handleUserClick}
                    >
                        {RightSection()}
                    </Button>
                    <Button style={{ backgroundColor: theme.palette.primary.dark, color: theme.palette.primary.contrastText, borderRadius: "20px" }}
                        onClick={() => { Logout() 
                        history.push("/home")
                        }}>
                        Logout
                    </Button>

                    {/* {RightSection()} */}
                </Grid>
                <Grid item sm={1}>

                </Grid>
            </Grid>

            <Drawer
                variant="temporary"
                open={phoneMenuOpen}
                //closeAfterTransition
                sx={{ width: "100vw" }}
            >
                <MenuList sx={{ width: "100vw" }} >
                    {/* {RightSection()} */}
                    <IconButton onClick={closeMenu}>
                        <CloseIcon />
                    </IconButton>
                    <CategoriesMenu />
                    <CopmaniesMenu />
                    <UserMenu />
                </MenuList>
            </Drawer>


        </Toolbar>
    );
}

export default MainBar;