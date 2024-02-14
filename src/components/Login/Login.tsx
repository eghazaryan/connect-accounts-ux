import { Stack, Box, Anchor, Button, Text, Divider, Group, Image } from '@mantine/core';
import { Logo } from '../Logo';
import { TextInput } from '../TextInput';
import classes from './Login.module.css';
import googleLogo from './../../assets/google.png';
import facebookLogo from './../../assets/facebook.png';
import twitterLogo from './../../assets/twitter.png';
import githubLogo from './../../assets/github.png';

interface LoginProps {
  setShowSignUp: React.Dispatch<React.SetStateAction<'reset' | 'login' | 'signup'>>;
}

export function Login({ setShowSignUp }: LoginProps) {
  return (
    <Stack>
      <Logo />
      <Text ta="center" size="23px">
        Welcome back!
      </Text>

      <form>
        <TextInput label="Email" mt="30px" />

        <TextInput label="Password" mt="30px" type="password" />
        <Box ta="end" p="xs">
          <Anchor size="sm" onClick={() => setShowSignUp('reset')}>
            Forget password?
          </Anchor>
        </Box>

        <Button className={classes.buttonLogin} fullWidth mt="xl" h={50} size="sm">
          Login
        </Button>

        <Divider
          className={classes.divider}
          my="xl"
          label="Or continue with"
          labelPosition="center"
        />

        <Group>
          <Button leftSection={<Image src={googleLogo} w="20px" />} variant="default" radius="xl">
            Google
          </Button>
          <Button leftSection={<Image src={facebookLogo} w="20px" />} variant="default" radius="xl">
            Facebook
          </Button>
          <Button leftSection={<Image src={twitterLogo} w="20px" />} variant="default" radius="xl">
            Twitter
          </Button>
          <Button leftSection={<Image src={githubLogo} w="20px" />} variant="default" radius="xl">
            Github
          </Button>
        </Group>

        <Text color="dimmed" ta="center" mt="md">
          Do not have an account yet?
          <Anchor pl="xs" w={500} onClick={() => setShowSignUp('signup')}>
            Sign up
          </Anchor>
        </Text>
      </form>
    </Stack>
  );
}
