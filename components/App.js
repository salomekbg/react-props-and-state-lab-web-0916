const { getAll } = require('../data/pets');
const ALL_PETS = getAll();
const ADOPTED_PETS = [ALL_PETS[0].id];

const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor() {
    super();

    this.onAdoptPet = this.onAdoptPet.bind(this);

    this.onFindPetsClick = this.onFindPetsClick.bind(this);

    this.onChangeType = this.onChangeType.bind(this);


    this.state = {
      pets: ALL_PETS,
      adoptedPets: ADOPTED_PETS,
      filters: {
        type: 'all'
      }
    };
  }

  onAdoptPet(id) {
    this.setState ({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  onFindPetsClick() {
    console.log("fetch")
  }

  onChangeType(type){
    console.log(type)
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters type={this.state.filters} onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
