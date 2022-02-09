import reducer, { initState } from "./reducer";
import { useReducer, useRef } from "react";
import { setjob, addjob, deletejob } from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addjob(job));
    dispatch(setjob(""));

    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "0px 20px" }}>
      <h3>ToDo</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(setjob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(deletejob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
