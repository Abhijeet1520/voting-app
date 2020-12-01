import React from 'react';
import Container from 'react-bootstrap/Container'

const LoginPage = (modalType) => {
    
    
    /*/
    const [emailField, setEmailField] = useState();
    var email = window.prompt('Please provide your email');
    firebase.auth().fetchSignInMethodsForEmail(email)
    .then(function(signInMethods) {
        // This returns the same array as fetchProvidersForEmail but for email
        // provider identified by 'password' string, signInMethods would contain 2
        // different strings:
        // 'emailLink' if the user previously signed in with an email/link
        // 'password' if the user has a password.
        // A user could have both.
        if (signInMethods.indexOf(
                firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD) != -1) {
        // User can sign in with email/password.
        }
        if (signInMethods.indexOf(
                firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD) != -1) {
        // User can sign in with email/link.
        }
    })
    .catch(function(error) {
        // Some error occurred, you can inspect the code: error.code
    });
    }
    /*/
    /*/
    const sendLink = (e) => {
        e.preventDefault();
        setSubmittingForm(true);
        if (modalType == 'admin'){
            firebase
                .firestore()
                .collection('admin')
                .doc(Date.now().toString())
                .set(formFields)
                .then(() => {
                    setEmailField(email);
                }).catch(function(error) {
                    setErrorShow(error);
                });
        }else of (modalType == 'voter'){
            firebase
                .firestore()
                .collection('voter')
                .doc(Date.now().toString())
                .set(formFields)
                .then(() => {
                    setEmailField(email);
                }).catch(function(error) {
                    setErrorShow(error);
                });  
        }
        
    };
    /*/
    
    return (
        <Container>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" placeholder="Enter email"/>
                </div>
                <button type="submit" class="btn btn-primary">Send sign in link</button>
            </form>
        </Container>
    )
}

export {LoginPage}
