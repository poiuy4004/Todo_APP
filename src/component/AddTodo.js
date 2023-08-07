import './AddTodo.css'

export default function AddTodo({todoModalHandler}){
    return(
      <aside>
        <div className='addContainer' onClick={todoModalHandler} >
          <span className="fa-thin fa-plus"></span>
          <span className='add'>
            Add task
          </span>
        </div>
      </aside>
    )
}