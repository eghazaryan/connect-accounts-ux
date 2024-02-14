import { Text, Button, Anchor, Group } from '@mantine/core';
import { TextInput } from '../TextInput';
import classes from './ResetPassword.module.css';

interface ResetPasswordProps {
  setShowSignUp: React.Dispatch<React.SetStateAction<'reset' | 'login' | 'signup'>>;
}

export function ResetPassword({ setShowSignUp }: ResetPasswordProps) {
  return (
    <div>
      <Text fw={700} size={'md'}>
        Reset your password
      </Text>

      <Text color="dimmed" mr={5}>
        Enter your email to get a reset link
      </Text>

      <TextInput mt="md" label="Email" />

      <Group mt="xl" justify="space-between">
        <Button
          variant="outline"
          className={classes.button}
          h={40}
          size="sm"
          onClick={() => setShowSignUp('login')}
        >
          Back to login
        </Button>{' '}
        <Button className={classes.button} type="submit" h={40} size="sm">
          Reset password
        </Button>{' '}
      </Group>
    </div>
  );
}
