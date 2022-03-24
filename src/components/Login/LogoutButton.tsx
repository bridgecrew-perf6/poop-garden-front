import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import Button from 'react-bootstrap/Button'

function LogoutButton() {
  const { logout } = useAuth0();

  return (
    // <Button variant="outline-success" onClick={() => logout({ returnTo: window.location.origin }) }>log Out</Button>
    <button onClick={() => logout({ returnTo: window.location.origin }) }>log Out</button>
  )
}

export default LogoutButton;