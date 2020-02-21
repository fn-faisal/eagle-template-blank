import * as React from 'react';
import {Text} from 'react-native';
import {EglOnPress} from 'egl-core';
import {HomeState} from './HomeController';

export default (state: HomeState, set: Function) => (
  <>
    <Text onPress={() => set('userName', 'test')} style={{marginTop: 100}}>
      Home {'Hello'}
    </Text>
    <Text onPress={EglOnPress('@egl/test_ac')}>
      Hotwired {state && state.userName}
    </Text>
  </>
);

// r => EglHotwire({id: '@egl/test_test_ac', component: r
