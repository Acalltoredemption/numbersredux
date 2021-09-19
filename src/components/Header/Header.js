import React from 'react';
import {Icon} from 'semantic-ui-react';

const Header = () => {
    return ( 
        <React.Fragment>
            <div className="header_styles">
            <Icon name="react" size="massive" color="yellow" />
            <h1>Redux Tester</h1>
            </div>
        </React.Fragment>
    )
}

export default Header;