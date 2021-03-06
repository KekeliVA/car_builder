import React from "react";

// "export default const carDisplay" returns me an error that says "parsing error, only functions and classes are allowed export by default
// if I take away the const it says "carDisplay is not defined"
// after some research I found that export default is already creating a variable called default, so it's as if I'm defining two variables on the same line
// solution: I'll do a named export or export default at the end of my component here
const carDisplay = (props) => {
  // this prints an empty array
  console.log("props: " + JSON.stringify(props));
  console.log("props.cars hopefully: " + props.cars);
  // Need to get the data from the form component into this component, map over the data, display
  // cannot read property 'map' of undefined
  // is this happening because it's trying to map out an empty array? does this cause it to become undefined?
  // do I need to do a check to see if cars are present before mapping?
  // shouldn't it not break if there's an empty array?

  // component didn't end up displaying any data because nothing was being returned from a render function
  // created renderCars to give carDisplay something to render and avoid mucking up code with extra parens and brackets
  // const renderCars = (props) => {
  return props.cars.map((car, i) => {
    console.log(car);
    return (
      <div className="carList" key={i}>
        <div>{car.make}</div>
        <div>{car.model}</div>
      </div>
    );
  }); // I know that using iteration as a key is bad practice, just using it as this is a simple project/exercise. will update later, perhaps generate a random number for an id;
};

// return <div>{renderCars(props)}</div>;
// };

export default carDisplay;
