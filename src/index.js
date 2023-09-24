import React from 'react';
import ReactDOM from 'react-dom';

import { hot } from 'react-hot-loader/root';

import './styles.scss';

const App = () => {
  return <div>Hello, React!</div>;
};

const HotApp = hot(App); 

ReactDOM.render(<HotApp />, document.getElementById('root'));
