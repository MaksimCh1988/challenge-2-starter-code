import meals from './dummy-meals';
import styles from './MealList.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const MealsList = (props) => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {meals.map((meal) => (
            <MealItem key={meal.id} name={meal.name} id={meal.id} description={meal.description} price={meal.price} />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default MealsList;
