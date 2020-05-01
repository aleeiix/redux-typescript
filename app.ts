import { Store, createStore } from 'redux';
import { counterReducer } from './counter/counter.reducer';
import { incrementAction, decreaseAction, multiplyAction, divideAction, resetAction } from './counter/counter.actions';

const store: Store = createStore(counterReducer);

store.subscribe(() => {
	console.log('Subs =>', store.getState());
});

store.dispatch(incrementAction);

store.dispatch(decreaseAction);

store.dispatch(multiplyAction);

store.dispatch(divideAction);

store.dispatch(resetAction);
