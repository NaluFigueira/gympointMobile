import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect({ host: '192.168.0.10' });

  tron.clear();

  console.tron = tron;
}
