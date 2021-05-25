import React from "react";

export default FormData = () => {
  console.log("start of the form component");
  return (
    <form>
      <div>
        <label for="car_make">What is the car make? </label>
        <input name="car_make"></input>
      </div>

      <div>
        <label for="car_model">What is the car model? </label>
        <input id="car_model"></input>
      </div>
      <button type="submit">submit</button>
    </form>
  );
};
