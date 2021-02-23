import React, { Component } from 'react';
import GoogleButton from 'react-google-button';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/index';
import { CLIENT_ID } from '../utils/clientIdGoogle';


class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: CLIENT_ID,
                scope: 'email'
            })
            .then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    
    onAuthChange = (isSignedIn) => {
          if(isSignedIn) {
            const profile = this.auth.currentUser.get().getBasicProfile(); 
            this.props.signIn(profile);
          }
          else {
              this.props.signOut();
          }
     }
     

     renderAuthButton() {
        if(!this.props.isSignedIn) {
            return <GoogleButton
                        onClick={ this.onSignInClick }
                    />
        }
        else {
            return <GoogleButton 
                        onClick={this.onSignOutClick} 
                        type="light" 
                        label="SIGN OUT" 
                    />
        }
    }

    onSignInClick = ()=> {
        this.auth.signIn();
    }

    onSignOutClick = ()=> {
        this.auth.signOut();
    }
        

    render() { 
        return ( 
            <div>
                {this.renderAuthButton()} 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.google.isSignedIn }
}

 
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);