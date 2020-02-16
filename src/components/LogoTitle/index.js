import React from 'react';
import { Image } from 'react-native';

export default function LogoTitle() {
  return (
    <Image
      resizeMode="contain"
      style={{ height: '80%' }}
      source={require('~/assets/sideLogo.png')}
    />
  );
}
