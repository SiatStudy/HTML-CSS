function Food(prop){

  function onDropFood(e){
    e.preventDefault();
    const types = prop.img.food;
    const id = prop.img.id;
    const src = prop.img.src;
    if (types !== prop.category) {
      alert(`${types} is not ${prop.category}`);
      return;
    }
    prop.setImg({...prop.img, id : id, src : src});
  }

  function onDragOver(e){
    e.preventDefault();
  }

  return (
    <div>
      <h3>{prop.category}</h3>
      <ul id={prop.category} onDragOver={onDragOver} onDrop={onDropFood}>
        {}
      </ul>
    </div>
  )
}

export default Food;