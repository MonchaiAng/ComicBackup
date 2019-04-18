import React from 'react';
import DropComic2 from './DropComic2';
import DropEp2 from './DropEp2';
import './dropListEpisodes.css';
class DropComic extends React.Component {
	constructor(props) {
		super(props)
  	}
  	render(){
  		const { id, ep, namebook, nameEpisode, data, nameep, onRouteChange, names} = this.props;
		return (
			<div>
				<ul className="tl dropdown">
					<li className="dropbtn">{namebook}</li>
						<li className="dropdown-content">
				{
					data.map((user, i) =>{
						return (
							<DropComic2
								key ={i}
								_id={data[i]._id}
								name={data[i].name}
								onRouteChange={onRouteChange}
							/>
						);
					})
				}
					</li>
				</ul>
				<ul className=" ep tl dropdown">
					<li className="dropbtn">Ep.{ep}:{nameEpisode} </li>
						<li className="dropdown-content">
				{
					nameep.map((user, i) =>{
						return (
							<DropEp2
								key ={i}
								count={i+1}
								id = {nameep[i].id}
								ch = {nameep[i].ch}
								name={nameep[i].name}
								onRouteChange={onRouteChange}
							/>
						);
					})
				}
					</li>
				</ul>
			</div>
		);
	}
}
export default DropComic;