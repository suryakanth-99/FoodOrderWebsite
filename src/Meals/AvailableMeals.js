import React, {useEffect, useState} from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealListItem from './MealListItem/MealListItem';



const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(()=> {
    const fetchMeals = async () => {
    const response = await fetch('https://http-post-c7f37-default-rtdb.firebaseio.com/Meals.json');
    console.log(response);
    if(!response.ok)
    {
      throw new Error('something went wrong')
    }
    const data = await response.json();
    
    const DUMMY_MEALS = [];
    for(const key in data)
        {
      DUMMY_MEALS.push({
        id : key,
        name : data[key].name,
        description : data[key].description,
        price : data[key].price

      })
    }
    setMeals(DUMMY_MEALS);
  }

    fetchMeals().catch(error => {
      setIsLoading(false)
      setError(error.message);
      console.log(isLoading);
    });
    setIsLoading(false);
    console.log(isLoading);
  
  }, [isLoading]);
  if(isLoading)
  {
    return <section className ={classes.MealsLoading}>
    {console.log('hello')}
      <p>Loading....</p>
    </section>
  }
  if(error)
  {
    return <section className={classes.MealsError}> 
      <p>{error}</p>
    </section>
  }
  const content = <ul>
  {meals.map(items => 
  <MealListItem key={items.id} 
  id={items.id}
      name={items.name}
      description={items.description}
      price={items.price}
  />)}
  </ul>
    
       return (
        <section className={classes.meals}>
        <Card>
        {content}
            
        </Card>
        </section>
    )

}

export default AvailableMeals;
