import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import { DOG_BREED } from '../DogBreedConstants';
import styles from './Main.css';

export default class Main extends React.Component {
  state = {
    value: DOG_BREED.CORGI,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div className={styles.header}>
        <header className={styles.centerTitle}>
          <div className={styles.inputContainer}>
            <h1>Dog Pictures</h1>
            <SelectField
              floatingLabelText="Breed"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <MenuItem value={DOG_BREED.CORGI} primaryText={DOG_BREED.CORGI} />
              <MenuItem value={DOG_BREED.HUSKY} primaryText={DOG_BREED.HUSKY} />
              <MenuItem value={DOG_BREED.LABRADOR} primaryText={DOG_BREED.LABRADOR} />
              <MenuItem value={DOG_BREED.SHIBA_INU} primaryText={DOG_BREED.SHIBA_INU} />
              <MenuItem value={DOG_BREED.SAMOYEDS} primaryText={DOG_BREED.SAMOYEDS} />
            </SelectField>
            <br />
            <RaisedButton 
              label="GIVE ME DOGS" 
              secondary={true} 
              className={styles.button}
              onClick={() => window.location = `${window.location}dogs/${this.state.value}`} />
          </div>
        </header>
      </div>
    );
  }
}