import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFormFood from './components/AddFormFood';
import { Row, Divider, Button } from 'antd';
import { useState } from 'react';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [searchInput, setSearchInput] = useState(foods);

  const addNewFood = (eachFoodElem) => {
    const copy = [...foodList, eachFoodElem];

    setFoodList(copy);
    setSearchInput(copy);
  };

  const handleSearchChange = (event) => {
    const copy = foodList.filter((elem) => {
      return elem.name.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setSearchInput(copy);
  };

  const deleteFood = (name) => {
    const filteredFood = searchInput.filter((eachFood) => {
      if (eachFood.name === name)  {
        return false
      } else {
        return true
      }
    })
    setFoodList(filteredFood)
    setSearchInput(filteredFood)
  }
  return (
    <div className="App">
      <Button> Hide Form / Add New Food </Button>

      <AddFormFood addNewFood={addNewFood} />
      <h3>Search</h3>
      <input type="text" onChange={handleSearchChange} />
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {searchInput.map((eachFood) => {
          return (
            <div key={eachFood.name}>
              <FoodBox eachFood={eachFood} deleteFood={deleteFood}/>
            </div>
          );
        })}
      </Row>
    </div>
  );
}

export default App;
