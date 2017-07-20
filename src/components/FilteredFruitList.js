import React from 'react';

const FilteredFruitList = ({ fruit, filter }) => {
  const fruitList = !filter ?  fruit : fruit.filter(item => item.fruit_type === filter);

  return (
      <ul className="fruit-list">
        {fruitList.map((fruit, index) => <li key={index}>{fruit.char}</li>)}
      </ul>
  );
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: []
}


export default FilteredFruitList;

// {const list = props.fruits.filter(i => i.fruit_type === props.filter).map((fruit))
//   <li key={index}>{fruit.char}</li>)}
