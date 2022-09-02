const Notification = ({ message }) => {
    if (message === null) {
      return null
    } else if (message.includes("removed")) {
        const notificationStyle = {
            color: "red",
            fontSize: 20,
            border: "3px solid red",
            background: "lightgrey",
            marginBottom: 10
        }
      
        return (
          <div style={notificationStyle} >
            {message}
          </div>
        )
    } else {
        const notificationStyle = {
            color: "green",
            fontSize: 20,
            border: "3px solid green",
            background: "lightgrey",
            marginBottom: 10
        }
      
        return (
          <div style={notificationStyle} >
            {message}
          </div>
        )
    }

    
  }
  
  export default Notification