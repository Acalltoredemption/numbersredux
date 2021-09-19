import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

const NumberDisplay = () => {
    return (
        <Grid centered columns={2}>
            <Grid.Column style={{textAlign: 'center', paddingTop: '100px'}}>
            <Icon name="numbered list" size="huge" color="yellow" />
            </Grid.Column>
            <Grid.Column style={{textAlign: 'center', paddingTop: '100px'}}>
                Number
            </Grid.Column>
        </Grid>
    )
}

export default NumberDisplay;