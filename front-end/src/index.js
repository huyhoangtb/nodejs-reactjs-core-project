import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {ConnectedRouter} from "react-router-redux";
import "babel-polyfill";
import IntlProvider from 'i18n/I18nComponent';
import appRouters from "routes";
import {Switch} from "react-router-dom";
import {renderRoutes} from "react-router-config";
import Store, {history} from "./store";

window.rootAppContainer = document.getElementById('root');

render(
  <Provider store={Store}>
    <IntlProvider>
      <ConnectedRouter history={history}>
        <Switch>
          {renderRoutes(appRouters)}
        </Switch>
      </ConnectedRouter>
    </IntlProvider>
  </Provider>
  ,
  window.rootAppContainer,
);

