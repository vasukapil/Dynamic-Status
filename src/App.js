import { useState } from "react";
import "./App.css";
import Groups from "./components/groups/Groups";
import Status from "./components/status/Status";
function App() {
  const [showStatus,setShowStatus] = useState(false);
  return (
    <div className="ml-16">
      <Groups showStatus={showStatus} />
      <button onClick={()=>{setShowStatus(true)}} className=" bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-dark-navy-blue focus:outline-none focus:ring focus:border-blue-300 mt-6">
        Show Status
      </button>

      {/* <Status/> */}
    </div>
  );
}

export default App;
