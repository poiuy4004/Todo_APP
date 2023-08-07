import Header from "./component/Header";
import Main from "./component/Main";
import AddTodo from "./component/AddTodo";
import DayModal from "./component/DayModal"
import TodoModal from "./component/TodoModal";
import { useState } from "react";

function App() {
  const [day, setDay] = useState(new Intl.DateTimeFormat('en-GB',{weekday: 'short', day: 'numeric', month: 'short'}).format(new Date()))
  const [todoModal, setTodoModal] = useState(false)
  const todoModalHandler = () => {
    setTodoModal(!todoModal)
  }
  const [dayModal, setDayModal] = useState(false)
  const dayModalHandler = () => {
    setDayModal(!dayModal)
  }
  return (
    <article>
      <section>
        <Header day={day} dayModalHandler={dayModalHandler} />
        <Main day={day} />
        <AddTodo todoModalHandler={todoModalHandler} />
      </section>
      {dayModal? <DayModal dayModalHandler={dayModalHandler} day={day} setDay={setDay} /> : null}
      {todoModal? <TodoModal todoModalHandler={todoModalHandler} day={day} /> : null}
    </article>
  );
}
export default App;
