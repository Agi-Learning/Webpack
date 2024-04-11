import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import MarketingApp from "./components/MarketingApp";
import Header from './components/Header'

// console.log(mount)


const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  return (
    <BrowserRouter generateClassName={generateClassName}>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};
