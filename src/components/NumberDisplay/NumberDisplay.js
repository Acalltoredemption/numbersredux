import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import {connect} from 'react-redux';

const NumberDisplay = ({currentNumber}) => {
    return (
        <Grid centered columns={2}>
            <Grid.Column style={{textAlign: 'center', paddingTop: '100px'}}>
            <Icon name="numbered list" size="huge" color="yellow" />
            </Grid.Column>
            <Grid.Column style={{textAlign: 'center', paddingTop: '100px'}}>
                Number = {currentNumber && currentNumber}
            </Grid.Column>
        </Grid>
    )
}

const mapStateToProps = state => ({
    currentNumber: state.currentNumber
})

export default connect(mapStateToProps)(NumberDisplay);