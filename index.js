/**
 * @format
 */

import 'reflect-metadata';

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Eagle from 'egl-core';
// import {HomeController} from './src/screens/HomeScreen/HomeController';
// new HomeController();
AppRegistry.registerComponent(appName, () => Eagle);
