import "./App.css";
import { useState, useEffect } from "react";

const eventFn = () => {
  console.log("h1 clicado");
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  //componentDidUpdate - executa toda vez que o componente atualiza
  /* useEffect(() => {
  console.log('componentDidUpdate');
})
//componentDidMount - executa 1 vez
useEffect(() => {
  console.log('componentDidMount');
},[])*/

  useEffect(() => {
    document.querySelector("h1")?.addEventListener("click", eventFn);

    //componentDidMount - limpeza
    return () => {
      document.querySelector("h1")?.removeEventListener("click", eventFn);
    };
  }, []);

  //com dependência - executa toda vez que a dependência mudar
  useEffect(() => {
    console.log("C1:", counter, "C2:", counter);
  }, [counter, counter2]);

  return (
    <div className="App">
      <p>Test 3</p>
      <h1>
        C1: {counter} C2: {counter2}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+(2)</button>
    </div>
  );
}

export default App;
