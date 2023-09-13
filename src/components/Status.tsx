import { useState } from "react";

interface StatusProps {
  statusArray: string[];
}

export default function Status(props: StatusProps) {
  console.log("status props", props.statusArray);
  const [statusSelection, setStatusSelection] = useState("");
  console.log("statusSelection", statusSelection);
  return (
    <div>
      <div>
        <label>
          Select your hunger level
          <select onChange={(e) => setStatusSelection(e.target.value)}>
            <option value="Hungry">{props.statusArray[0]}</option>
            <option value="Satisfied">{props.statusArray[1]}</option>
            <option value="Full">{props.statusArray[2]}</option>
          </select>
        </label>
      </div>
      {statusSelection == "Hungry" && <div>You need to eat!</div>}
      {statusSelection == "Satisfied" && (
        <div>You probably do not need to eat!</div>
      )}
      {statusSelection == "Full" && <div>You do not need to eat!</div>}
    </div>
  );
}
