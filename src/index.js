import configureStore from './store/configureStore';
import {bugAdded, bugRemoved, bugResolved} from './store/bugs';

const store = configureStore();

console.log(store.getState());

store.dispatch(bugAdded("A bug related to logging"));
store.dispatch(bugAdded("Another bug"));
store.dispatch(bugAdded("A bug related copying"));

console.log(store.getState());

store.dispatch(bugResolved(1));
console.log(store.getState());

store.dispatch(bugRemoved(1));
console.log(store.getState());
