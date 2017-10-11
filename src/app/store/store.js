/**
 * Created by Medidi venkata swamy on 7/13/2017.
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';



const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);


export default createStoreWithMiddleware(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())