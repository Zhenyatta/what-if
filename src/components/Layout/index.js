import React from "react";
import './index.css';

const Layout = ({children}) => {
    return(
        <>
            <div className="container">
                    {children} 
            </div>
            <div className="conatiner-mask" />
        </>
    )
}

export default Layout;