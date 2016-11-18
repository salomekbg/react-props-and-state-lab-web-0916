const { getAll } = require('../data/pets');
const ALL_PETS = getAll();
const ADOPTED_PETS = [];

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
      filteredPets: ALL_PETS,
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
    if (this.state.filters.type === 'all') {
      this.setState({
        filteredPets: ALL_PETS
      })
    } else {
      this.setState({
        filteredPets: this.state.pets.filter((pet) => {
          return pet.type === this.state.filters.type
        })
      })
    }
    debugger
  }

  onChangeType(petType){
    this.setState({
      filters: {type: petType}
    })
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
              <PetBrowser pets={this.state.filteredPets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
