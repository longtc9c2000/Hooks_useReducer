import "./styles.css";
import ToDo from "./ToDo";

export default function App() {
  return (
    <div className="App" style={{ padding: "0px 20px" }}>
      <ToDo />
    </div>
  );
  // const [count, setCount] =useState(0)

  // return (
  //   <div className="App" style ={{padding: '0px 20px'}}>
  //     <h1>{count}</h1>
  //     <button
  //       onClick = {() => setCount(count +1)}
  //     >Up</button>
  //     <button
  //       onClick = {() => setCount(count -1)}
  //     >Down</button>

  //   </div>
  // );
}
