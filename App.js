// Imports: Dependencies
import React from 'react';
import { Provider } from 'react-redux';

// Imports: Screens
import Counter from './screens/Counter';

// Imports: Redux Store
import { store } from './store/store';

// React Native App
export default function App() {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
