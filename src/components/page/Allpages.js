import React from 'react';
import Allpages2 from './Allpages2';

const Allpages = ({ data, size }) => {		//แก้ render state ใหม่
	if(typeof(data.length)!='undefined'){
		return (
			<div>
				{
					data.map((user, i) =>{
						return (
							<Allpages2 
								key ={i}
								page={data[i]}
								count ={i+1}
								size= {size}
							/>
						);
					})
				}
			</div>
		);
	}else{
		return (
			<div>
				
			</div>
		);
	}
}

export default Allpages;