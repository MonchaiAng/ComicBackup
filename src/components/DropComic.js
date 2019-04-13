import React from 'react';
import DropComic2 from './DropComic2';
import DropEp2 from './DropEp2';
import './dropListEpisodes.css';
class DropComic extends React.Component {
	constructor(props) {
		super(props)
  	}
  	render(){
  		const { id, ep, data, nameep, onRouteChange } = this.props;
		return (
			<div>
				<ul class="tl dropdown">
					<li class="dropbtn">Solo Leveling</li>
						<li class="dropdown-content">
				{
					data.map((user, i) =>{
						return (
							<div>
								<DropComic2
									key ={i}
									_id={data[i]._id}
									name={data[i].name}
									onRouteChange={onRouteChange}
								/>
							</div>
						);
					})
				}
					</li>
				</ul>
				<ul class=" ep tl dropdown">
					<li class="dropbtn">Ep.1:I Got into Trouble as Soon as I Arrived </li>
						<li class="dropdown-content">
				{
					nameep.map((user, i) =>{
						return (
							<div>
								<DropEp2
									key ={i}
									count={1}
									name={nameep[i].name}
									onRouteChange={onRouteChange}
								/>
							</div>
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