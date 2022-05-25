import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import Account from "./Account";
import Notifications from "./Notifications";
import WritePost from "./WritePost";

//erro boxShadow
//Styles Home
const useStyles = makeStyles({
    img: {
        maxHeight: 55
    },
    grow: {
        flexGrow: 1
    },
    userSection: {
        display: 'flex',
        alignItems: 'center'
    },
    appBar:{ 
      boxShadow: 'none'
    }
});

function Header() {
    const classes = useStyles();

    return(
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar>
                <img src="/images/logo.png" alt="logo" className={classes.img}/>

                <div className={classes.grow}></div>
                
                <div className={classes.userSection}>
                    <WritePost/>

                    <Box ml={2}>
                        <Notifications/>
                    </Box>
                    
                    <Box ml={2}>
                        <Account/>
                    </Box>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;