import React from 'react';
import ShowComment from './showcomment/ShowComment';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

class Comment extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      comment: '',
	      allcomment: [],
	      comic:''
	    }
  	}
  	onCommentChange = (event) => {
    	this.setState({comment: event.target.value})
  	}
  	onSubmit = () => {
  		if(this.state.comment!= ""){
  			let timerInterval
			Swal.fire({
			  title: 'Posting!',
			  html: 'Finish in <strong></strong> seconds.',
			  timer: 500,
			  onBeforeOpen: () => {
			    Swal.showLoading()
			    timerInterval = setInterval(() => {
			      Swal.getContent().querySelector('strong')
			        .textContent = Swal.getTimerLeft()
			    }, 100)
			  },
			  onClose: () => {
			    clearInterval(timerInterval)
			  }
			}).then((result) => {
			  if (
			    // Read more about handling dismissals
			    result.dismiss === Swal.DismissReason.timer
			  ) {
			    console.log('I was closed by the timer')
			  }
			})
		    fetch('http://localhost:3000/addcomment', {
		      method: 'post',
		      headers: {'Content-Type': 'application/json'},
		      body: JSON.stringify({
		      	comic: this.props.data._id,
		        email: this.props.email,
		        comment : this.state.comment,
		      })
		    })
		    this.setState({comment:''})
		}
		this.setState({comic:this.props.data._id})
		this.componentDidMount();
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
	componentWillReceiveProps(){
		this.componentDidMount();
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
							<ShowComment data ={allcomment}/>
						</td>
					</tr>
				</div>
			</div>
		);
	}
}
export default Comment;