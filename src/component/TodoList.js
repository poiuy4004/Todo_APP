import "./TodoList.css"

export default function TodoList({todo}){
    return(
      <li>
        <div>
          <span className={"fa-regular fa-circle "+(todo.isComplete? "orangeCircle" : "redCircle")}></span>
          <span>{todo.todo}</span>
        </div>
        <div className="textColor-gray">{todo.group}<i className={todo.isComplete? "fa-solid fa-circle fa-2xs" : null}></i></div>
      </li>
    )
}