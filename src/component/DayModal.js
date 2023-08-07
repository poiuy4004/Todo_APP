import { useState } from "react"
import "./DayModal.css"

export default function DayModal({dayModalHandler, day, setDay}){
  const [inputWeekday, setInputWeekday] = useState(day[0]+day[1]+day[2])
  const [inputDay, setInputDay] = useState(day[5])
  const [inputMonth, setInputMonth] = useState(day[7]+day[8]+day[9])
    return(
        <section className="modalBackground" onClick={dayModalHandler} >
          <div className="dayModalBox" onClick={e=>e.stopPropagation()}>
            <div className="formBox">SELECT DATE</div>
            <form onSubmit={e=>{
              e.preventDefault()
              setDay(inputWeekday+', '+inputDay+' '+inputMonth)
              dayModalHandler()
            }}>
              <div className="input">
                <label>weekday</label>
                <select required onChange={e=>setInputWeekday(e.target.value)}>
                  <option>Mon</option>
                  <option>Tue</option>
                  <option>Wed</option>
                  <option>Thu</option>
                  <option>Fri</option>
                  <option>Sat</option>
                  <option>Sun</option>
                </select>
              </div>
              <div className="input">
                <label>day</label>
                <input required type="number" onChange={e=>setInputDay(e.target.value)} />
              </div>
              <div className="input">
                <label>month</label>
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
                <input className="submit" type="submit" />
              </div>
            </form>
          </div>
        </section>
    )
}