import ClassComponent from "./ClassComponent";

import Events from "./Events";
import HookOrnek from "./HookOrnek";
import Hooks from "./Hooks";
function App() {
  return (
    <div className="App">
      <Events />
      <ClassComponent sayi="10" />
      <ClassComponent sayi="100" />
      <Hooks/>
      <HookOrnek/>
    </div>
  );
}
export default App;
