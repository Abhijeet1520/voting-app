import React, {useState} from 'react';
import Container from 'react-bootstrap/Container'

const LoginPage = () => {
    const [emailValue, setEmailValue] = useState();
    const sendOTP = () => {
        alert(emailValue);
        setEmailValue('')
    }   
    return (
        <Container>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" placeholder="Enter email" value={emailValue} onValueChange={() => setEmailValue(this.value)}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">OTP</label>
                    <input type="password" class="form-control" placeholder="Enter OTP" disabled/>
                </div>
                <button type="submit" class="btn btn-primary" onClick={sendOTP}>Send OTP</button>
            </form>
        </Container>
    )
}

export {LoginPage}
