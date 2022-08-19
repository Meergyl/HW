import { useState } from "react";

const Practic1 = () => {
  const [counter, setCounter] = useState(0);
  const [state, setstate] = useState({
    title: "Счетчик",
    date: Date.now(),
  });

  function increment() {
    // setCounter(counter+1)
    setCounter((prevCounetr) => {
      return prevCounetr + 1;
    });
    // setCounter(prev=>prev+1)///по два добавляють
  }
  function dicrement() {
    setCounter(counter - 1);
  }
  function updatedTitle() {
    setstate({ title: "Новое название" });
  }
  return (
    <div>
      <h2>Счетчик{counter}</h2>
      <button onClick={increment} className="btn btn-success">
        Добавить
      </button>
      <button onClick={dicrement} className="btn btn-danger">
        Убрать
      </button>
      <button onClick={updatedTitle} className="btn btn-default">
        Изменить
      </button>
      <prev>{JSON.stringify(state, null, 2)}</prev>
    </div>
  );
};
export default Practic1;
