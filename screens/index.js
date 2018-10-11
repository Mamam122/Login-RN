import { Navigation } from 'react-native-navigation';

import awal from './awal';
import kedua from './kedua';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.awal', () => awal);
  Navigation.registerComponent('example.kedua', () => kedua);
}