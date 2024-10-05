import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";
export default function MealsGrid({ meals }) {
  return (
    <div className={classes.meals}>
      {meals.map((meal) => (
        <MealItem key={meal.id} {...meal} />
      ))}
    </div>
  );
}
