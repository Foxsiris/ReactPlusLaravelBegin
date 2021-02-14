import React from "react";
import classes from './navigation.module.scss'
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <div className={classes.navigation}>
            <div>
                <Link to="/courses">Мои курсы</Link>
            </div>
            <div>
                <Link to="/shop">Магазин</Link>
            </div>
            <div>
                <Link to="/news">Новости</Link>
            </div>
        </div>
    )
}

export default Navbar