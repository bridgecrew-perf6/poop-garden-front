// import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import Button from 'react-bootstrap/Button'
import { IonButton } from '@ionic/react';

// function that uses auth0 to log user out
function LogoutButton() {
  const { logout } = useAuth0();

  return (
    // <Button variant="outline-success" onClick={() => logout({ returnTo: window.location.origin }) }>log Out</Button>
    <IonButton onClick={() => logout({ returnTo: window.location.origin }) }>log Out</IonButton>
  )
}

export default LogoutButton;