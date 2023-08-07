const Todo_DB = [
  {
    date: new Intl.DateTimeFormat('en-GB',{weekday: 'short', day: 'numeric', month: 'short'}).format(new Date()),
    isComplete: false,
    todo: "Learn the basics with the easy-to-follow Getting Started Guide",
    group: "Inbox 🔔"
  },
  {
    date: new Intl.DateTimeFormat('en-GB',{weekday: 'short', day: 'numeric', month: 'short'}).format(new Date()),
    isComplete: true,
    todo: "Add all my personal tasks",
    group: "Personal 🙂 "
  }
]
export default Todo_DB