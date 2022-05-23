import makeStyles from "@mui/styles/makeStyles";
import { Box, Divider, Grid, Popper, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { theme } from "../../../theme";
import SideBar from "./SideBar";
import { useHistory } from "react-router-dom";



const UseStyles = makeStyles({
    menuBar: {
        backgroundColor: theme.palette.primary.contrastText,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        }
    },
    optionBox: {
        backgroundColor: "white",
        width: '100%',
        borderBottomRightRadius:'15px',
        borderBottomLeftRadius:'15px'
    }
})

enum MenuBarOptions{
Home="Home",
Coupons= "Coupons",
Categories = "Categories",
Stores = "Stores"
}


function MenuBar(): JSX.Element {
    const classes = UseStyles();
    const [option, setOption] = useState<string | null>(null)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const history= useHistory();

    const tabsDivider = () => {
        return <Divider
            orientation="vertical"
            variant="middle"
            flexItem
        />
    }

    const handleOpenMenu = (args: SyntheticEvent) => {

        setAnchorEl(args.currentTarget as HTMLElement);
       setOption((args.currentTarget as HTMLElement).textContent)
       
    }

    const handleOptionChange = (menuOption:MenuBarOptions) => {
        setOption(menuOption)
       
    }

    const handleClose = () => {
        setAnchorEl(null);
        setOption(null)
    };

    return (


        <Box className={classes.menuBar} >
            <Grid container>
                <Grid item sm={1}>

                </Grid>
                <Grid item sm={10}>

                    <Tabs
                        value={option}
                        textColor="secondary"
                        indicatorColor="secondary"
                        variant="fullWidth"
                        sx={{ display: 'flex', width: '100%', justifyItems: 'space-evenly', 
                    }}
                    >
                        {tabsDivider()}
                        <Tab
                            value={MenuBarOptions.Home}
                            label={MenuBarOptions.Home}
                            onClick={()=>{handleOptionChange(MenuBarOptions.Home)
                                history.push("/home")
                            }}
                        />
                        {tabsDivider()}
                        <Tab
                            value={MenuBarOptions.Categories}
                            label={MenuBarOptions.Categories}
                            onMouseEnter={handleOpenMenu}
                            
                        /> 
                        {tabsDivider()}
                        <Tab
                            value={MenuBarOptions.Stores}
                            label={MenuBarOptions.Stores}
                            onMouseEnter={handleOpenMenu}
                            
                            
                        />
                        {tabsDivider()}
                        <Tab
                            value={MenuBarOptions.Coupons}
                            label={MenuBarOptions.Coupons}
                            onClick={()=>{handleOptionChange(MenuBarOptions.Coupons)
                                history.push("/allCoupons")
                            }}
                        />
                        {tabsDivider()}
                    </Tabs>

                    <Popper
                        open={open}
                        anchorEl={anchorEl}
                        onClick={handleClose}
                        onMouseLeave={handleClose}
                        placement="bottom"
                        color="primary"
                        sx={{ width: '20.8%' }}
                    >
                        <Box className={classes.optionBox}>
                            <SideBar option={option} />
                        </Box>
                    </Popper>

                </Grid>
                <Grid item sm={1}>

                </Grid>
            </Grid>
        </Box>


    );
}

export default MenuBar;
