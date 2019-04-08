import React from 'react';
import DropEp2 from './DropEp2'
;const DropEp = ({ data, onRouteChange}) => {
	console.log({data})
	return (
		<div>
			<ul class="tl dropdown">
				<li class="dropbtn">Ep:Start </li>
					<li class="dropdown-content">
			{
				data.map((user, i) =>{
					return (
						<div>
							<DropEp2
								key ={i}
								name={data[i].name}
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

export default DropEp;