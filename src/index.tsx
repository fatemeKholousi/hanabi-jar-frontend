import React from "react";
import ReactDOM from "react-dom";
import "./App.style.scss";
import "antd/dist/antd.css";
import { ConfigProvider } from "antd";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import fa_IR from "antd/lib/locale/fa_IR";
import enUS from "antd/lib/locale/en_US";
import { compose } from "redux";
// import { Offline, Online, PollingConfig } from "react-detect-offline";
import { ConfigProviderProps } from "antd/lib/config-provider";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { useSelector } from "./utils/hooks";
import i18n from "./utils/i18n/i18n";
import store from "./utils/store";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import ValidateMessages from "./utils/ValidateMessages";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const persianAppConfig: ConfigProviderProps = {
  direction: "rtl",
  form: { validateMessages: ValidateMessages.Persian },
  locale: fa_IR,
};

const englishAppConfig: ConfigProviderProps = {
  direction: "ltr",
  form: { validateMessages: ValidateMessages.English },
  locale: enUS,
};

const IndexWrapper = () => {
  const { appLanguage } = useSelector((state) => state.appLanguageReducer);

  const languageAppConfig =
    appLanguage === "fa" ? persianAppConfig : englishAppConfig;

  return (
    <I18nextProvider i18n={i18n}>
      <ConfigProvider {...languageAppConfig}>
        <Provider store={store}>
          {/* <Online polling={polling}> */}
          <div
            style={{
              fontFamily:
                appLanguage === "en"
                  ? "Poppin, Gilroy, YekanBakhFanum, sans-serif"
                  : "YekanBakhFanum, Poppin, Gilroy, sans-serif",
              fontSize: appLanguage === "en" ? 8 : 8,
            }}
          >
            <App />
          </div>
          {/* </Online> */}
          {/* <Offline polling={polling}>no internet</Offline> */}
        </Provider>
      </ConfigProvider>
    </I18nextProvider>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <IndexWrapper />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
