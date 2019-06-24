import React from 'react';
import ReactDOM from 'react-dom';

// import styles
import './styles.scss';

// create sample view
const App = () => {
    return (
        <h1>Hello World!</h1>
    );
};

// render
ReactDOM.render( <App />, document.getElementById( 'app' ) );