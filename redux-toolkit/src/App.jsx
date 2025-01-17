import React from 'react';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
    return (
        <Provider store={store}>
        <div className="App">
            <Counter />
        </div>
        </Provider>
    );
};

export default App;