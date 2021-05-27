import React from "react";
import CarDisplay from "./Car_Display";

// TODO: Move to another file and import here
import Car from "../Car";

// component representing the form and collection of its data
class CarFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carMake: "",
      carModel: "",
      cars: [],
    };

    // console.log("cars array: " + this.state.cars.length);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCarMakeChange = this.handleCarMakeChange.bind(this);
    this.handleCarModelChange = this.handleCarModelChange.bind(this);
  }

  // this is the handler function referenced by the button form onClick
  // when the form is submitted the default behavior of the form is prevented
  // I need to find a way to get the value of the fields into the function
  // after that I believe I can pass it down to constructor of the Car class
  // once I'm certain a new class is being created on form submission
  // I can update the state and render the array of objects
  handleSubmit(event) {
    // need to get the form data into variables that can be passed down
    // is this redundant with the class? I mean, it definitely needs the data to make a new
    // class properly
    // but maybe there's a way I can just do this in one go
    event.preventDefault();
    const car = new Car(this.state.carMake, this.state.carModel);
    this.setState({ cars: [...this.state.cars, car] }, () => {
      return;
    });
  }

  handleCarMakeChange(event) {
    this.setState({ carMake: event.target.value });
  }

  handleCarModelChange(event) {
    this.setState({ carModel: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label for="car_make">What is the car make? </label>
            <input
              name="car_make"
              value={this.state.carMake}
              onChange={this.handleCarMakeChange}
            ></input>
          </div>

          <div>
            <label for="car_model">What is the car model? </label>
            <input
              id="car_model"
              value={this.state.carModel}
              onChange={this.handleCarModelChange}
            ></input>
          </div>
          <button>submit</button>
        </form>
        {/* {console.log("checking cars: " + this.state.cars.length)} */}
        {/* Okay, so the length is able to be printed, which means even at this point cars isn't undefined. 
        I'm presuming it's becoming undefined from when the addition of my car-list prop and the Car_display.js file */}
        <CarDisplay cars={this.state.cars} />
      </div>
    );
  }
}

export default CarFormComponent;
