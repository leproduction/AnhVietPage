import React, { useContext } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { MyContext } from './MyContext';
import { useNavigate } from 'react-router-dom';

const CLIENT_ID = '516101318319-idk1rus2sqt8p8ud83qi16a8968beetp.apps.googleusercontent.com';

function GoogleLoginComponent() {
  const navigate = useNavigate();
  const { setUser } = useContext(MyContext);

  const onSuccess = (response) => {
    console.log('Login Success: currentUser:', response.profileObj);
    setUser(response.profileObj);
  };

  const onFailure = (response) => {
    console.error('Login Failed:', response);
    alert(`Login failed: ${response.error}`);
  };



  return (
    <div>
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
      <GoogleLogout
        clientId={CLIENT_ID}
        buttonText="Logout"

      />
    </div>
  );
}

export default GoogleLoginComponent;
