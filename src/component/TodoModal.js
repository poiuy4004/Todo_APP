import { useState } from "react"
import "./TodoModal.css"
import { useDispatch } from "react-redux"

export default function TodoModal({todoModalHandler, day}){
  const [inputTodo, setInputTodo] = useState('')
  const [inputWeekday, setInputWeekday] = useState('')
  const [inputDay, setInputDay] = useState('')
  const [inputMonth, setInputMonth] = useState('')
  const dispatch = useDispatch();
  const addTodo = (e) => {
    const inputDate = inputWeekday+", "+inputDay+" "+inputMonth
    e.preventDefault()
    dispatch({
      type: "ADD-TODO",
      payload: {
        date: inputDate,
        isComplete: false,
        todo: inputTodo,
        group: "여긴 뭘 적는거지"
      }
    })
    todoModalHandler()
  };
    return(
        <section className="modalBackground" onClick={todoModalHandler} >
          <div className="modalBox" onClick={e=>e.stopPropagation()}>
            <div className="formBox">ADD TODO</div>
            <form onSubmit={addTodo}>
              <div className="input">
                <label className="todo">해야할 일</label>
                <input type="text" onChange={e=>setInputTodo(e.target.value)}/>
              </div>
              <div className="input">
                <label className="dateLabel">날짜</label>
                <select required onChange={e=>setInputWeekday(e.target.value)}>
                  <option>Mon</option>
                  <option>Tue</option>
                  <option>Wed</option>
                  <option>Thu</option>
                  <option>Fri</option>
                  <option>Sat</option>
                  <option>Sun</option>
                </select>
                <input required type="number" onChange={e=>setInputDay(e.target.value)} />
                <select required onChange={e=>setInputMonth(e.target.value)}>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                  <option>Apr</option>
                  <option>May</option>
                  <option>Jun</option>
                  <option>July</option>
                  <option>Aug</option>
                  <option>Sep</option>
                  <option>Oct</option>
                  <option>Nov</option>
                  <option>Dec</option>
                </select>
              </div>
              <div>
                <input className="submit" type="submit"/>
              </div>
            </form>
          </div>
        </section>
    )
}