import { ButtonGroup, Grid, IconButton, Toolbar, Typography, Drawer, MenuList, Popper, Box, Divider, MenuItem } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { SyntheticEvent, useState } from "react";
import Logo from "../../../assets/logo.svg.png";
import CloseIcon from '@mui/icons-material/Close';
import { useHistory } from "react-router-dom";
import { theme } from "../../../theme";
import { getUserRole } from "../../../redux/selector";
import { Role } from "../../../model/Role";
import { FaShoppingCart, FaUser } from "react-icons/fa"
import { TiThMenu } from "react-icons/ti"
import { CategoriesMenu, CopmaniesMenu, UserMenu } from "./MenuComponents";

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
    },
    icons: {
        marginRight: theme.spacing(3),
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
    menu: {
        [theme.breakpoints.up("sm")]: {
            display: 'none'
        }
    },
    logoSVG: {
        height: '3rem',
        [theme.breakpoints.down("sm")]: {
            height: '30px'
        }
    },
    optionBox: {
        backgroundColor: "white",
        borderRadius: '15px',

    }
})


function MainBar(): JSX.Element {
    const [phoneMenuOpen, setPhoneMenuOpen] = useState<boolean>(false)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const classes = UseStyles();
    const history = useHistory();

    const openMenu = () => {
        setPhoneMenuOpen(true);
    }

    const closeMenu = () => {
        setPhoneMenuOpen(false);
    }

    const handleUserClick = () => {
        getUserRole() === Role.GUEST ? history.push("/login") : history.push("/user")
    }

    const handleOpenUserMenu = (args: SyntheticEvent) => {
        setAnchorEl(args.currentTarget as HTMLElement);
    }

    const handleCloseUserMenu = () => {
        setAnchorEl(null);
    };

    return (
        <Toolbar className={classes.toolbar} >
            <Grid className={classes.gridContainer} container >
                <Grid item sm={1} />
                <Grid className={classes.gridLeft} item xs={11} sm={7}>
                    <div className={classes.menu}>
                        <IconButton
                            className={classes.icons}
                            onClick={openMenu}
                            sx={{ color: theme.palette.common.black }}
                            size="medium"
                        >
                            <TiThMenu />
                        </IconButton>
                    </div>

                    <div className={classes.logo} onClick={() => history.push("/home")}>
                        <Typography variant="h3"
                            align="center"
                            fontFamily="Kanit"
                            color={theme.palette.common.black}
                            fontWeight={theme.typography.fontWeightMedium}
                        >
                            Coupon
                            <img src={Logo} className={classes.logoSVG} alt="" />
                            Stock
                        </Typography>
                    </div>
                </Grid>

                <Grid className={classes.gridRight} item xs={1} sm={3}>
                    <div className={classes.icons}>
                        <ButtonGroup >
                            <IconButton
                                sx={{ color: theme.palette.secondary.contrastText }}
                                onClick={() => history.push("/cart")}
                                size="medium"
                            >
                                <FaShoppingCart />
                            </IconButton >
                            <IconButton
                                style={{ color: theme.palette.common.black }}
                                onClick={handleUserClick}
                                size="medium"
                                onMouseEnter={handleOpenUserMenu}
                                sx={{
                                    [theme.breakpoints.down("sm")]: {
                                        display: 'none'
                                    }
                                }}
                            >
                                <FaUser />
                            </IconButton>
                        </ButtonGroup>
                    </div>
                </Grid>
                <Grid item sm={1} />
            </Grid>

            <Popper
                open={open}
                anchorEl={anchorEl}
                onClick={handleCloseUserMenu}
                onMouseLeave={handleCloseUserMenu}
                placement="bottom"
                color="primary"
            >
                <Box className={classes.optionBox}>
                    <UserMenu />
                </Box>
            </Popper>

            <Drawer
                variant="temporary"
                open={phoneMenuOpen}
                sx={{ width: "100vw", display: 'flex' }}
            >
                <MenuList sx={{ width: "100vw" }} onClick={closeMenu}>
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'end' }}>
                        <IconButton onClick={closeMenu} >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <MenuItem onClick={() => history.push("/allCoupons")} sx={{ padding: theme.spacing(1) }}>
                        All Coupons
                    </MenuItem>
                    <Typography
                        variant="h6"
                        fontWeight={theme.typography.fontWeightMedium}
                        sx={{ padding: theme.spacing(1) }}
                    >
                        Categories
                    </Typography>
                    <Divider />
                    <CategoriesMenu />
                    <Typography
                        variant="h6"
                        fontWeight={theme.typography.fontWeightMedium}
                        sx={{ padding: theme.spacing(1) }}
                    >
                        Companies
                    </Typography>
                    <Divider />
                    <CopmaniesMenu />
                    <Typography
                        variant="h6"
                        fontWeight={theme.typography.fontWeightMedium}
                        sx={{ padding: theme.spacing(1) }}
                    >
                        User
                    </Typography>
                    <Divider />
                    <UserMenu />
                </MenuList>
            </Drawer>
        </Toolbar>
    );
}

export default MainBar;
