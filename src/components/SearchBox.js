import React, { Fragment } from 'react';

const SearchBox = ({search}) => {
    return(
        <div className='pa2'>
            <input 
            className='pa3 ba ba--green bg-lightest-blue'
            type='search' 
            placeholder='search robots'
            onChange={search}
             />
        </div>
    );
}

export default SearchBox;