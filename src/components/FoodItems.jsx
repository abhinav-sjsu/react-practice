import Item from "./Item";

export default function FoodItems() {
  let foodItems = ["Ghee", "Dal", "Roti", "Green Vegetable", "Salad", "Milk"];

  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
}
