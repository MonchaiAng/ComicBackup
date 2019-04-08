import React from 'react';
import Epdata from './EpData';
import Comment from './Comment';

const EpComment = ({data, dataEp, onRouteChange}) => {
		return (
			<div>
				<tr>
					<td>
						<Epdata data = {data} dataEp = {dataEp} onRouteChange={onRouteChange}/>
					</td>
					<td>
						<Comment/>
						{/*<div className='table_div' >
						<table className ='asd ' width = '400px' heigth="80px">
							<tr className = 'trEp'>
								<td width = '10%'>
									<img alt='comics' src= "https://cdn.myanimelist.net/images/characters/10/100701.jpg" width = '50px' height='50px' />
								</td>
								<td width = '35%'>
								<tr>
										<p className = 'tl'>Monchai</p>

								</tr>
								<tr>
										<p className = 'tl'>สนุกมากครับ</p>
								</tr>
								</td>
								<td width = '5%'>
								</td>
							</tr>
						</table>
					</div>*/}
					</td>
				</tr>
			</div>
	);
};

export default EpComment;