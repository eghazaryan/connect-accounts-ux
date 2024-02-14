import { Container, Box } from '@mantine/core';
import classes from './Application.module.css';
import { SignUp } from '../Signup';
import { Login } from '../Login';
import { useState } from 'react';
import { ResetPassword } from '../ResetPassword';

export function Application() {
  const [showSignUp, setShowSignUp] = useState<'login' | 'signup' | 'reset'>('login');

  return (
    <Box m="md">
      <Container className={classes.root} size="477px" mt="150px" p="xl" pb="60px">
        {showSignUp === 'signup' && <SignUp setShowSignUp={setShowSignUp} />}
        {showSignUp === 'login' && <Login setShowSignUp={setShowSignUp} />}
        {showSignUp === 'reset' && <ResetPassword setShowSignUp={setShowSignUp} />}
      </Container>
    </Box>
  );
}
