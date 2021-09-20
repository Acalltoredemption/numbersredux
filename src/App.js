import './App.css';
import React from 'react';
import {Divider, Segment, Grid, Container} from 'semantic-ui-react';
import Header from './components/Header/Header';
import  InputForm  from './components/Input/Input';
import NumberDisplay from './components/NumberDisplay/NumberDisplay';
import ColorDisplay from './components/ColorDisplay/ColorDisplay';




const App = () => {
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
      <InputForm/>
      </Container>
    </React.Fragment>
  );
}



export default App;
