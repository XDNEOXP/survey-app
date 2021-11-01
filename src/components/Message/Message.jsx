import React, {useEffect} from 'react';
import Alert from 'react-bootstrap/Alert';

const Message = () => {
    const name = JSON.parse(localStorage.getItem('name'))

    useEffect(() => {
      const data = JSON.parse(localStorage.getItem('data'))
      data.map((item) => (
        console.log("Question :", item.question , "/ Answer :", `${item.option ? item.option[item.checked-1].label : item.value}`)
      ))
    }, [])

    return (
        <div>
          <Alert variant="success" className="text-center">
            Thanks for Participating In The Survey {name}
          </Alert>
        </div> 
    )
}

export default Message