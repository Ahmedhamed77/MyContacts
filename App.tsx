import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import * as eva from '@eva-design/eva';

import {ApplicationProvider} from '@ui-kitten/components';

import Router from './src/navigation/Route';

const App = () => {
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Router />
      </ApplicationProvider>
    </Provider>
  );
};

export default App;
