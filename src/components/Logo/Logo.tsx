import { Center, Image } from '@mantine/core';
import logo from './logo.png';

export function Logo() {
  return (
    <Center>
      <Image src={logo} alt="Invisalign" w="70px" />
    </Center>
  );
}
