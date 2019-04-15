import React, { Component } from 'react';
import BoxEp from '../containers/BoxEp.css';

class InfoData extends Component{
	constructor(props){	
		super(props)
		this.state={
			added:0
		}
	}
	componentWillMount() {
		console.log("InfoData")
		console.log(this.props.data)
		fetch('http://localhost:3000/favorites', {
	      method: 'post',
	      headers: {'Content-Type': 'application/json'},
	       body: JSON.stringify({
	       	comic: this.props.data._id,
	       	user: this.props.user
	      })
	    })
	    .then(response => response.json())
	    .then(data => {
	      this.setState({added:data})
	    })
	}
	onAdd = () =>{
		fetch('http://localhost:3000/addfavorite', {
	      method: 'post',
	      headers: {'Content-Type': 'application/json'},
	       body: JSON.stringify({
	       	comic: this.props.data._id,
	       	email:this.props.user
	      })
	    })
	    this.setState({added:1})
	}

	onRemove = () =>{
		fetch('http://localhost:3000/removefavorite', {
	      method: 'post',
	      headers: {'Content-Type': 'application/json'},
	       body: JSON.stringify({
	       	comic: this.props.data._id,
	       	email:this.props.user
	      })
	    })
	    this.setState({added:0})
	}

		render(){
		const { data,user } = this.props; 
		const { added } = this.state;
		return (
			<div>
					<tr>
						<th width = '330px' height = '385px' className = 'tc' valign="middle">
							<img alt='comics' src= {data.img} width = '250px' height='350px' />
						</th>
						<div>
							<h1 className="tl">{data.name}</h1>
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
							{
								added == 0?
								(
									<button className = 'pa2'type= 'button' onClick={this.onAdd}> Add to Favourite</button>
								):
									<button className = 'pa2'type= 'button' onClick={this.onRemove}> Un Favourite</button>
							}
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
	}
};

export default InfoData;