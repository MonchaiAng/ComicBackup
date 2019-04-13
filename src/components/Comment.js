import React from 'react';
import ShowComment from './ShowComment';

class Comment extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      comment: '',
	      allcomment: []
	    }
  	}
  	onCommentChange = (event) => {
    	this.setState({comment: event.target.value})
  	}
  	onSubmit = () => {
  		this.setState({comment: this.state.comment})
	    fetch('http://localhost:3000/addcomment', {
	      method: 'post',
	      headers: {'Content-Type': 'application/json'},
	      body: JSON.stringify({
	      	comic: this.props.data._id,
	        email: this.props.email,
	        comment : this.state.comment,
	      })
	    })
  	}
  	componentDidMount() {
		fetch('http://localhost:3000/showcomment', {
	      method: 'post',
	      headers: {'Content-Type': 'application/json'},
	      body: JSON.stringify({
	      	comic: this.props.data._id,
	      })
	    })
	    .then(response => response.json())
    	.then(data => {
	    	this.setState({allcomment: data})
	    })
	}	
	render(){
		const { data, email} = this.props;
		const { allcomment } = this.state;
		return(	
			<div className = 'ma4' >
				<h1>Comment</h1>
				<div>
					<tr>
						<td width='300px' className='tr'>
							<textarea rows="4" cols="45"
							onChange={this.onCommentChange}
							></textarea>
							<button onClick={this.onSubmit} >Post</button>
							<br/>
							<ShowComment data ={allcomment} />
						</td>
					</tr>
				</div>
			</div>
		);
	}
}
export default Comment;