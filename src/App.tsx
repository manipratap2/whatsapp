// import { Profiler } from "react";
import { useEffect } from "react";
import ReactGA from "react-ga";

import Input from "./components/Input";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-208211686-3");

    //to report page view
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div>
      <Input />
    </div>
  );
}

export default App;
