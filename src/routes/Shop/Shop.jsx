import React from "react";
import classes from "../../style.module.scss";
import Navbar from "../../modules/Navigation/Navbar";
import Header from "../../modules/Navigation/Header";

function Shop(){
    return(
        <div className={classes.main}>
            <div className={classes.main_navigation}>
                <Navbar/>
            </div>
            <div className={classes.main_content}>
                <Header/>
            </div>
        </div>
    )
}

export default Shop