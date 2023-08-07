import Todo_DB from "../DB/Todo_DB"

export default function reducer(state = Todo_DB, action){
  switch(action.type){
    case "ADD-TODO" :
      return [...state, action.payload]
    default :
      return state
  }
}