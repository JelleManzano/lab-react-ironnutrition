import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFormFood from './components/AddFormFood';
import { Row, Divider, Button } from 'antd';
import { useState } from 'react';

function App() {
  const [foodList, setFoodList] = useState(foods);

  const addNewFood = (eachFoodElem) => {
    const copy = [...foodList, eachFoodElem]

    setFoodList(copy)
  }
  return (
    <div className="App">
      <Button> Hide Form / Add New Food </Button>
      <AddFormFood addNewFood={addNewFood} />
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodList.map((eachFood) => {
          return (
            <div key={eachFood.name}>
              <FoodBox eachFood={eachFood} />
            </div>
          );
        })}
      </Row>
    </div>
  );
}

export default App;
