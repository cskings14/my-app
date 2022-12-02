import React, {useEffect, useState} from 'react';
import CountButton from "./CountButton/CountButton";
import SearchBar from "./SearchBar/SearchBar";



const App = () => {

  const [productsState, setProductsState] = useState([]);

  useEffect(() => {

    fetch('https://fakestoreapi.com/products') // this is a request to the fake store api
            .then(res=>res.json()) // we get this date and convert it to json
            .then(productsDict=> { // we then make productsDict the new state
              const newProductsState = productsDict.map((product) => {
                return product.title;
              })
              setProductsState(newProductsState);
            })
  }, []);

  const myItem = 'bruh';

  const hasProducts = productsState.length > 0;

  return (
    <ul>
      {hasProducts ? <SearchBar products={productsState} /> : <h1>Loading</h1>}
      

  

      {/* <li>{myItem}</li>
      <li> item 254 {myItem.toUpperCase()}</li> */}
      <li><CountButton incrementBy={1} buttonColor={'blue'} /></li>
      <li><CountButton incrementBy={5} buttonColor={'red'} /></li>
      <li><CountButton incrementBy={5} buttonColor={'green'} /></li> {/* this will render two CountButton independent of each other */}
      <SearchBar products={[
        'Pre Workout',
        'Post Workout',
        'Whey Protein',
        'Mass Gainer',
      ]} />
    </ul>
  );

};


export default App; // this will make the App component available for other files to use