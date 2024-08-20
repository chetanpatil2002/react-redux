import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import IncrementDecrement from './IncrementDecrement';
import Todo from '../Todo';
import TodoPractice from '../Prctice Todo/TodoPractice';
import FakeProductApi from '../Fake ApiProduct/FakeProductApi';
import PracticeApi from '../Api Practice/PracticeApi';

export default function AppRedux() {
  return (
    <Provider store={store}>
      {/* <IncrementDecrement /> */}
      <TodoPractice/>
      {/* <Todo/> */}
      {/* <PracticeApi/> */}
      {/* <FakeProductApi/> */}
    </Provider>
  );
}
