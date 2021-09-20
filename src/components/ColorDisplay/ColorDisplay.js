import React from 'react';
import {Grid, Icon} from 'semantic-ui-react';
import {connect} from 'react-redux';

const ColorDisplay = ({currentColor}) => {
    return(
        <Grid centered columns={2}>
            <Grid.Column style={{textAlign: 'center', paddingTop: '100px'}}>
            <Icon name="paint brush" size="huge" color="yellow" />
            </Grid.Column>
            <Grid.Column style={{textAlign: 'center', paddingTop: '100px'}}>
                Color = {currentColor && currentColor}
            </Grid.Column>
        </Grid>
    )
}

const mapStateToProps = state => ({
    currentColor: state.currentColor
})

export default connect(mapStateToProps)(ColorDisplay);