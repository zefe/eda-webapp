import React, { Fragment } from 'react';
import Header from '../../components/Headers/HeaderDashboard';
function Layout(props) {
    return (
        <Fragment>
            {/* <Header /> */}
            {props.children}
        </Fragment>
    )
}

export default Layout;