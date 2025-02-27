const Item = ({ item, deleteItem}) => {
    return (
      <li>
        {item.name}
        
        <button onClick={() => deleteItem(item.id)}>Delete</button>
      </li>
    );
  };
  
  export default Item;
  