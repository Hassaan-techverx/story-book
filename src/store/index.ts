import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./root-reducer";
import rootSaga from "./root-Saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducers,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
