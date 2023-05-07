import React from "react";
import Card from "../UI/Card";
import classes from './Meals.module.css'
import QuantityForm from "./QuantityForm";

const DummyMeals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest figh and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy....and green",
    price: 18.99,
  },
];

const Meals = () => {
  return (
    <section>
      <Card>
        <ul>
          {DummyMeals.map((meal) => (
              <div className={classes.meals}>
                <div>
                  <h3>{meal.name}</h3>
                <div className={classes.desc}>{meal.description}</div>
                <div className={classes.price}>{`$${meal.price.toFixed(2)}`}</div>
                </div>
                <div>
                  <QuantityForm />
                </div>
                
              </div>
              
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default Meals;
