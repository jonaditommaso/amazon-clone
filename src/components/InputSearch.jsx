import React, { useState } from 'react';
import '../styles/inputSearch.css';

const InputSearch = () => {
    const [term, setTerm] = useState('');

    return ( 
        <input 
            type="text" 
            className="inputSearch"
            value={term}
            onChange={e => setTerm(e.target.value)}  
        />
    );
}
 
export default InputSearch;

