import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ReactForm, MyForm ,Fn1,MultiInputForm,DynamicInputs} from './FormExample';
import {FormSelection} from './FormExample';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <ReactForm/>
  <MyForm />
  <Fn1/>
  <MultiInputForm/>
  <DynamicInputs/>
  <FormSelection/>
  </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
