import React, {useState} from 'react';
import "./SearchBar.css";
// const SearchBox = ({ searchfield, searchChange }) => {
//   return (
//     <div className='pa2'>
//       <input
//         className='pa3 ba b--green bg-lightest-blue'
//         type='search'
//         placeholder='search'
//         onChange={e=>searchChange(e.target.value)} //accept the event argument and pass the extracted value from the input to searchChange prop function.
//       />
//     </div>
//   );
// }

// export default SearchBox;





const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState(''); // this is now a piece of state 

    const handleInputChange = (event) => { // the event argument is the event object that is passed to the function
        setSearchValue(event.target.value);
    }

    const handleClick = () => {
        setSearchValue('');
    }

    // const isEmpty = true;
    
    // if (searchValue !== '') {
    //     isEmpty = false;
    // }
    const shouldDisplayClearButton = searchValue !== '';

    const filteredResults = props.products.filter((product) => {
        return product.toLowerCase().includes(searchValue.toLowerCase());
    }
    );


    return (
        <div>
            <input type='search' value={searchValue} onChange={handleInputChange} />
            {/* {} this is a conditional statement */}
            {shouldDisplayClearButton&& <button onClick={handleClick} >x</button>}
            {filteredResults.map((product) => {
                return <li key={product}>{product}</li>
            })}
        </div>
    );
}
 


export default SearchBar;