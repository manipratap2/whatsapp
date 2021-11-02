// import { Profiler } from "react";
import Input from "./components/Input";

function App() {
  // const someCallback = (
  //   id: string,
  //   phase: "mount" | "update",
  //   actualDuration: number,
  //   baseDuration: number,
  //   startTime: number,
  //   commitTime: number
  // ) => {
  //   console.log("****************************");
  //   console.log("Id is " + id);
  //   console.log("phase is " + phase);
  //   console.log("actualDuration is " + actualDuration);
  //   console.log("baseDuration is " + baseDuration);
  //   console.log("startTime is " + startTime);
  //   console.log("commitTime is " + commitTime);
  //   console.log("");
  // };
  return (
    <div>
      {/* <Profiler id="input" onRender={someCallback}> */}
      <Input />
      {/* </Profiler> */}
    </div>
  );
}

export default App;
