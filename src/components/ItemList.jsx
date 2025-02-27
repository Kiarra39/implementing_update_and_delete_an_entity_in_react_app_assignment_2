import Item from "./Item";

const ItemList = ({ items, deleteItem }) => {
  if (!items.length) {
    return <p>No items available.</p>;
  }

  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} deleteItem={deleteItem} />
      ))}
    </ul>
  );
};

export default ItemList;
