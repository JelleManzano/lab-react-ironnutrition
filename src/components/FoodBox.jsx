import { Card, Col, Button } from 'antd';


function FoodBox(props) {
  const { name, calories, image, servings } = props.eachFood;
  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <div>
        <Button onClick={() => props.deleteFood(name)} type="primary"> Delete </Button>
        </div>
      </Card>
    </Col>
  );
}

export default FoodBox;
