import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className='pa2 tr' >
			<input 
				className = 'pa3 ba b--black bg-lightest-blue'
				style = {{ width:'300px'}}
				type='search' 
				placeholder='search comics'
				onChange = {searchChange}
			/>
		</div>
	);
}

export default SearchBox;