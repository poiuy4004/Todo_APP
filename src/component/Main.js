import { useSelector } from "react-redux"
import TodoList from "./TodoList"

export default function Main({day}){

  const allTodoList = useSelector((state)=>state);
  const todayTodoList = (allTodoList? allTodoList.filter(todo=>todo.date===day) : null)

    return(
      <main>
        <ul>
          {todayTodoList? todayTodoList.map((todo, idx)=><TodoList key={idx} todo={todo} />) : null}
        </ul>
      </main>
    )
}