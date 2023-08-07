import "./Header.css"

export default function Header({day, dayModalHandler}){

    return(
      <header className="header">
        <div className="title-date">
          <div className="title">
            Today
          </div>
          <div className="date textColor-gray">
            {day}
          </div>
        </div>
        <div className="sliders-view"  onClick={dayModalHandler}>
          <div>
            {/* <input className="hidden" type="date" /> */}
            <i className="fa-solid fa-sliders textColor-gray" />
          </div>
          <div className="textColor-gray">
            View
          </div>
        </div>
      </header>
    )
}