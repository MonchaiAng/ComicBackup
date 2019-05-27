import React from 'react';
import Navigation2 from '../components/navigation/Navigation2';
import Navigation from '../components/navigation/Navigation';
import hash from 'object-hash';
import Swal from 'sweetalert2'

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
      route:'',
      comic:''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: hash(this.state.signInPassword)
      })
    })
    .then(response => response.json())
    .then(data => {
      if(data === 'success'){
         // this.props.onRouteChange('home');
         this.setState({comic:this.state.signInEmail});
         this.setState({route: 'home'});
      }
      else{
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Email or Password is incorrect!',
        })
      }
    })
  }

  onEnter = (event) => {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      this.onSubmitSignIn()
    }
  }

  // onSigninRouteChange = (route,id) => {
  //     if (route === 'home') {
  //       this.setState({isSignedIn: true})
  //     }
  //     this.setState({route: route});
  //     if(route === 'allep'){
  //       this.setState({idComic:id})
  //     }else if(route === 'ep'){
  //       this.setState({idEp:id})
  //     }
  // }

  render() {
    const { isSignedIn,onRouteChange } = this.props;
    const { route,comic } = this.state;
    return (
      <div>
        {
          route === 'home'?
          (
            <Navigation comic={comic}/>
          ):
          <div>
            <Navigation2 isSignedIn={isSignedIn} onRouteChange={onRouteChange}/>
            <article className="br3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
              <main className="pa4 white-80">
                <div className="measure">
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0 ">
                    <legend className="f1 fw6 ph0 mh0 center">Sign In</legend>
                    <div className="mt3">
                      <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
                      <input
                        className="pa2 b--white input-reset ba bg-transparent hover-bg-black hover-white  w-100"
                        type="email"
                        name="email-address"
                        id="email-address"
                        onChange={this.onEmailChange}
                      />
                    </div>
                    <div className="mv3">
                      <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
                      <input
                        className="b b--white pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="password"
                        name="password"
                        id="password"
                        onChange={this.onPasswordChange}
                        onKeyPress={this.onEnter}
                      />
                    </div>
                  </fieldset>
                  <div className="tc">
                    <input
                      onClick={this.onSubmitSignIn}
                      // onClick={() => onRouteChange('home')}
                      className="white b--white b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                      type="submit"
                      value="Sign in"
                    />
                  </div>
                  <div className="tc lh-copy mt3">
                    <p  onClick={() => onRouteChange('register')} className="f4 link dim white db pointer">Register</p>
                  </div>
                </div>
              </main>
            </article>
          </div>
        }
        </div>
    );
  }
}

export default Signin;