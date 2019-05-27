import React from 'react';
import EpDataList from './EpDataList';

const EpData = ({data, dataEp, history, onRouteChange}) => {
		return (
			<div className ='ma4'>
						<h1>Episodes</h1>
						{
							dataEp.map((user, i) =>{
							return (
							<EpDataList 
								key ={i}
								_id={dataEp[i]._id}
								id={dataEp[i].id}
								ch={dataEp[i].ch} 
								img={dataEp[i].img}
								date={dataEp[i].date}
								name={dataEp[i].name}
								namebook={dataEp[i].namebook} 
								history={history}
								onRouteChange={onRouteChange}
							/>
							);
							})
						}
			</div>
	);
};

export default EpData;