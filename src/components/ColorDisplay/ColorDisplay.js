import React from 'react';
import {Grid, Icon} from 'semantic-ui-react';

const ColorDisplay = () => {
    return(
        <Grid centered columns={2}>
            <Grid.Column style={{textAlign: 'center', paddingTop: '100px'}}>
            <Icon name="paint brush" size="huge" color="yellow" />
            </Grid.Column>
            <Grid.Column style={{textAlign: 'center', paddingTop: '100px'}}>
                Color
            </Grid.Column>
        </Grid>
    )
}

export default ColorDisplay;