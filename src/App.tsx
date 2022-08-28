import React from "react";
import "styles/global.scss";
import { Provider } from "react-redux";
import { store } from "core/redux/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
    </Provider>
  );
};

export default App;
