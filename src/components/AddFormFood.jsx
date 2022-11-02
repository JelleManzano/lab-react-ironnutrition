import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm(props) {
  const [newFoodName, setFoodName] = useState('');
  const [newFoodImage, setFoodImage] = useState('');
  const [newFoodCalories, setFoodCalories] = useState(0);
  const [newFoodServings, setFoodServings] = useState(0);

  const updateFoodName = (event) => {
    setFoodName(event.target.value);
  };
  const updateFoodImage = (event) => {
    setFoodImage(event.target.value);
  };
  const updateFoodCalories = (event) => {
    setFoodCalories(event.target.value);
  };
  const updateFoodServings = (event) => {
    setFoodServings(event.target.value);
  };

  const handleNewFood = (event) => {
    event.preventDefault();

    const newFoodObj = {
      name: newFoodName,
      image: newFoodImage,
      calories: newFoodCalories,
      servings: newFoodServings,
    };
    props.addNewFood(newFoodObj);

    setFoodName('');
    setFoodImage('');
    setFoodCalories(0);
    setFoodServings(0);
  };
  return (
    <form onSubmit={handleNewFood}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={newFoodName} type="text" onChange={updateFoodName} />

      <label>Image</label>
      <Input value={newFoodImage} type="text" onChange={updateFoodImage} />

      <label>Calories</label>
      <Input
        value={newFoodCalories}
        type="number"
        onChange={updateFoodCalories}
        min={0}
      />

      <label>Servings</label>
      <Input
        value={newFoodServings}
        type="number"
        onChange={updateFoodServings}
        min={0}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
