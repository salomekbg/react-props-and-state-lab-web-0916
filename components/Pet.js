const React = require('react');

class Pet extends React.Component {
  constructor(props) {
    super(props);

    this.props.gender === "female" ? this.gender = "♀" : this.gender = "♂"
    this.handleAdoption = this.handleAdoption.bind(this)
  }

  handleAdoption(){
    this.props.onAdoptPet(this.props.id)
  }

  render() {
    let btn;
    if (this.props.isAdopted === "true"){
      btn = <button className="ui disabled button">Already adopted</button>
    } else{
      btn = <button className="ui primary button" onClick={this.handleAdoption}>Adopt pet</button>
    }
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.name} (gender: {this.gender})</a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {btn}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
