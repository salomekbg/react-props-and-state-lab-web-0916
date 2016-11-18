const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {

  render() {
    let pets = this.props.pets.map(pet => {
      var that = this
      that.props.adoptedPets.includes(pet.id) ? that.adopted = "true" : that.adopted = "false"
      return <Pet id={pet.id} name={pet.name} gender={pet.gender} type={pet.type} age={pet.age} weight={pet.weight} onAdoptPet={that.props.onAdoptPet} isAdopted={that.adopted} />
    })
    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

module.exports = PetBrowser;
