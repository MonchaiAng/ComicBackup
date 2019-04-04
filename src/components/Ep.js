import React from 'react';
import '../containers/BoxEp.css';

const Ep =({id ,name,namebook ,img, view}) =>{
	return(
		<div>
			<div className='table_div'>
				<table className ='bg-light-green ' width = '350px'>
					<tr className = 'trEp'>
						<td width = '15%'>
							<img alt='comics' src= {img} width = '70px' height='70px' />
						</td>
						<td width = '40%'>
							<p className = 'tl'>{namebook} {name}</p>
						</td>
						<td width = '30%'>
							<p className = 'tr'>{view}</p>
						</td>
						<td width = '5%'>
						</td>
					</tr>
				</table>
			</div>
		</div>
	);
}
export default Ep;