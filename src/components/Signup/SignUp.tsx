import {
  Anchor,
  Button,
  Text,
  Stepper,
  Divider,
  Group,
  Image,
  Radio,
  rem,
  Stack,
} from '@mantine/core';
import { useState } from 'react';
import { Logo } from '../Logo';
import { TextInput } from '../TextInput';
import classes from './SignUp.module.css';

export const inputStyles = { label: { fontSize: rem(18) } };

interface SignUpProps {
  setShowSignUp: React.Dispatch<React.SetStateAction<'reset' | 'login' | 'signup'>>;
}

export function SignUp({ setShowSignUp }: SignUpProps) {
  const [active, setActive] = useState(0);
  const [isClicked, setIsClicked] = useState('');
  const nextStep = () => setActive((current) => (current < 2 ? current + 1 : current));

  console.log(isClicked, '123');
  return (
    <div>
      <Stack>
        <Logo />
        <Text ta="center" size="25px" fw={500}>
          Welcome to Align!
        </Text>

        <Stepper
          size="sm"
          mt="lg"
          active={active}
          onStepClick={setActive}
          allowNextStepsSelect={false}
          classNames={{
            step: classes.step,
            stepBody: classes.stepBody,
            content: classes.stepContent,
          }}
        >
          <Stepper.Step description="Create"></Stepper.Step>
          <Stepper.Step description="Verify email">
            Thank you for signing up! An email has been sent to the email address. Please verify
            your account before continuing.
          </Stepper.Step>
          <Stepper.Step description="Connect">
            Connect your account with third-party services to expand its functionality.
          </Stepper.Step>
        </Stepper>
        <form>
          {active === 0 && (
            <>
              <TextInput label="Email" mt="30px" />
              <TextInput label="Password" mt="30px" type="password" />

              <Button fullWidth mt="60px" h={50} size="md" onClick={nextStep}>
                Next
              </Button>

              <Text color="dimmed" ta="center" mt="md">
                Already a user?
                <Anchor pl="md" w={500} onClick={() => setShowSignUp('login')}>
                  Login
                </Anchor>
              </Text>
            </>
          )}

          {active === 1 && (
            <>
              <Button fullWidth mt="40px" h={50} size="md" onClick={nextStep}>
                Next
              </Button>
            </>
          )}

          {active === 2 && (
            <>
              <Divider
                className={classes.divider}
                my="lg"
                label="Connect with"
                labelPosition="center"
              />

              <Radio.Group defaultValue="skip" label="Select your third-party account">
                <Group mt="xs">
                  <Radio value="react" label="Google" variant="outline" />
                  <Radio value="svelte" label="Facebook" variant="outline" />
                  <Radio value="ng" label="Twitter" variant="outline" />
                  <Radio value="vue" label="Github" variant="outline" />
                  <Radio value="skip" label="Do not connect accounts" variant="outline" />
                </Group>
              </Radio.Group>

              <Button fullWidth mt="60px" h={50} size="md" onClick={nextStep}>
                Connect account
              </Button>
            </>
          )}
        </form>
      </Stack>
    </div>
  );
}
