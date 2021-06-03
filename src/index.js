import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import firebase from 'firebase/app';
import fbconfig from './config/fbconfig';
import {
  ReactReduxFirebaseProvider,
  getFirebase
} from 'react-redux-firebase'
import {reduxFirestore,
  getFirestore,
  createFirestoreInstance,} from 'redux-firestore'

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})), reduxFirestore(fbconfig)
));

const rrfProps = {
  firebase,
  config: fbconfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};

ReactDOM.render(
  <Provider store = {store}>
    <ReactReduxFirebaseProvider {...rrfProps} >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// // import * as serviceWorker from './serviceWorker';
// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "./store/reducers/rootReducer";
// import { Provider } from "react-redux";
// import thunk from "redux-thunk";
// import {
//   reduxFirestore,
//   getFirestore,
//   createFirestoreInstance,
// } from "redux-firestore";
// import {
//   ReactReduxFirebaseProvider,
//   getFirebase,
// } from "react-redux-firebase";
// import fbConfig from './config/fbconfig'
// import firebase from "firebase/app";

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//     reduxFirestore(fbConfig) // redux bindings for firestore
//   )

// );

// const rrfProps = {
//   firebase,
//   config: fbConfig,
//   dispatch: store.dispatch,
//   createFirestoreInstance, // <- needed if using firestore
// };
// ReactDOM.render(
//   <Provider store={store}>
//     <ReactReduxFirebaseProvider {...rrfProps}>
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     </ReactReduxFirebaseProvider>
//   </Provider>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// // serviceWorker.unregister();
