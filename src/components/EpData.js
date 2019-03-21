import React from 'react';
import EpDataList from './EpDataList';

const EpData = ({data}) => {
		return (
			<div className ='ma4'>
						<h1>Episodes</h1>
						{
							data.map((user, i) =>{
							return (
							<EpDataList 
								key ={i}
								ch={data[i].ch} 
								img={data[i].img}
								date={data[i].date}
								name={data[i].name} 
							/>
							);
							})
						}
			</div>
	);
};

export default EpData;