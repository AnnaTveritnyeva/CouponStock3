import { AppBar } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { useEffect } from "react";
import store from "../../redux/store";
import MainBar from "../items/appbar/MainBar";
import MenuBar from "../items/appbar/MenuBar";

const UseStyles = makeStyles({
    appbar: {
        boxShadow: '0px 3px 2px 0px #444444',
        width: '100%'
    }
})

function Navbar(): JSX.Element {
    const classes = UseStyles();
    
    return (
        <AppBar className={classes.appbar} position="static">
            <MainBar />
            <MenuBar />
        </AppBar>
    );
}

export default Navbar;