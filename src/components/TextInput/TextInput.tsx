import React, { useState } from 'react';
import classes from './TextInput.module.css';
import {
  Input,
  TextInput as MantineTextInput,
  TextInputProps as MantineTextInputProps,
} from '@mantine/core';

interface TextInputProps extends MantineTextInputProps {
  label: string;
}

export function TextInput({ label, description, ...others }: TextInputProps) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  const floating = value.trim().length !== 0 || focused || undefined;

  return (
    <>
      <MantineTextInput
        {...others}
        label={label}
        classNames={classes}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        autoComplete="nope"
        data-floating={floating}
        size="md"
        labelProps={{ 'data-floating': floating, 'data-focused': focused }}
      />

      {description && (
        <Input.Description ml={0} m={5} size="md">
          {description}
        </Input.Description>
      )}
    </>
  );
}
