import React from 'react';
import './Cars.css';


const Cars = ({ cars }) => {
    return (
      <div>
        <h2>Who lives in my garage?</h2>
        <ul className="cars-container">
          {cars.map((car) => (
            <li key={car.id} className="cars-list-item">
              I am a {car.make}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default Cars;
