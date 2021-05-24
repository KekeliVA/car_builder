import React from "react";

export default FormData = () => {
    console.log("start of the form component");
    return (
        <form>
            <input id="car_make"></input>
            <input id="car_model"></input>
            <button type="submit"></button>
        </form>
    )
}