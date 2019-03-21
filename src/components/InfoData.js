import React from 'react';
import BoxEp from '../containers/BoxEp.css';

const InfoData = ({data}) => {
		return (
			<div>
					<tr>
						<th width = '330px' height = '385px' className = 'tc' valign="middle">
							<img alt='comics' src= {data.img} width = '250px' height='350px' />
						</th>
						<div width = '300px'>
							<h1>{data.name}</h1>
							<td width = '100px' valign="top">
								<h3>Author(s)</h3>
								<h3>Artist(s)</h3>
								<h3>View(s)</h3>
								<h3>Status</h3>
								<h3>Tag(s)</h3>
							</td>
							<td valign="top" >
								<h3>{data.author}</h3>
								<h3>{data.artist}</h3>
								<h3>{data.view}</h3>
								<h3>{data.status}</h3>
								<h3>{data.tag}</h3>
							</td>
						</div>
							<td className = 'tr'width = '600px'>
								<button className = 'pa2'type= 'button'>Add to Favourite</button>
							</td>
					</tr>
					<div >
						<tr>
							<td width='800px'>
								<div className ='ma4' >
									<h1>Summary</h1>
									<p className='brief'>{data.brief}</p>
								</div>
							</td>
						</tr>
					</div>
		
			</div>	
	);
};

export default InfoData;