import React, { Fragment } from 'react';

function Layout(props) {
    return (
        <Fragment>
            {/* Navlink */}
            {props.children}
        </Fragment>
    )
}

export default Layout;