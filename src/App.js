import React, { Suspense } from "react";
import "./App.css";

import Spinner from "./components/Spinner/Spinner";
const Header = React.lazy(() => import("./components/Header/Header"));
const Form = React.lazy(() => import("./components/Form/Form"));
const Footer = React.lazy(() => import("./components/Footer/Footer"));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        <Header />
        <Form />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
