import './App.css';
import React from 'react';
import {Divider, Segment, Grid, Container} from 'semantic-ui-react';
import Header from './components/Header/Header';
import  InputForm  from './components/Input/Input';
import NumberDisplay from './components/NumberDisplay/NumberDisplay';
import ColorDisplay from './components/ColorDisplay/ColorDisplay';
import {connect} from 'react-redux';



const App = ({currentColor, currentNumber}) => {
  return (
    <React.Fragment> 
      <Header />
      <Segment>
        <Grid style={{height: '300px'}}columns={2} relaxed="very">
          <Grid.Column>
      <NumberDisplay />
      </Grid.Column>
          <Grid.Column>
      <ColorDisplay />
      </Grid.Column>
      </Grid>
      <Divider vertical/>
      </Segment>
      <Container>
      <InputForm currentNumber={currentNumber} currentColor={currentColor} />
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  currentNumber: state.currentNumber,
  currentColor: state.currentColor
})


export default connect(mapStateToProps)(App);
