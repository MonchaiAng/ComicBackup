import React from 'react';

const EpDataList =({ch, img, date ,name}) =>{
	return(	
		<div>
			<div className='table_div'>
				<table className ='bg-light-green ' width = '700px'>
					<tr className = 'trEp'>
						<td width = '10%'>
							<img alt='comics' src= {img} width = '70px' height='70px' />
						</td>
						<td width = '35%'>
							<p className = 'tl'>Episodes{ch}: {name}</p>
						</td>
						<td width = '30%'>
							<p className = 'tr'>{date}</p>
						</td>
						<td width = '5%'>
						</td>
					</tr>
				</table>
			</div>
		</div>
	);
}
export default EpDataList;