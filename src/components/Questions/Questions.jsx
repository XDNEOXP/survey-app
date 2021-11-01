import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Form, Button, Card } from 'react-bootstrap'
import SurveyRadioInput from '../SurveyRadioInput/SurveyRadioInput'
import SurveyTextInput from '../SurveyTextInput/SurveyTextInput'
import './Questions.css'

const Questions = () => {
    const [page,setPage] = useState(1)
    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(0)
    const history = useHistory()

    const loadData = async () => {
        const responseData = await fetch('https://run.mocky.io/v3/7198bbdd-64ed-4224-90ca-8b1bd9e52ed5')
        const getData = await responseData.json()
        setData(getData)
        localStorage.setItem('data', JSON.stringify(getData))
    }

    const finish = () => {
        localStorage.setItem('time', JSON.stringify([0,0,0]))
        history.replace('/message')
    }

    const handelChangeStatus = (dataId, optionId) => {
        let newData = data
        const index = newData.findIndex((item) => item.id === dataId)
        newData[index].checked = optionId
        setData(newData)
        setRefresh(refresh+1)
    }

    const handelChangeText = (dataId, text) => {
        let newData = data
        const index = newData.findIndex((item) => item.id === dataId)
        newData[index].value = text
        setData(newData)
        setRefresh(refresh+1)
    }

    useEffect(() => {
        let storedData = localStorage.getItem('data')
        if(storedData){
            setData(JSON.parse(storedData))
        } else {
        loadData()
        }
    }, [])

    useEffect(() => {
        if(refresh > 0){
            localStorage.setItem('data', JSON.stringify(data)) 
        }
    }, [refresh]);

    return (
        <Card style={{ maxWidth: '50rem', margin: '50px auto' }}>
                <Card.Header className="text-center">{page} of {data.length}</Card.Header>
                <Card.Body>
                <Form className="d-flex justify-content-center align-items-center mt-5 p-2" >
                    {data.map((item) => (
                        <Form.Group className={page === item.page ? 'Questions mb-3' : 'd-none'} controlId="formBasicRadio" key={`question-${item.id}`}>
                            <Form.Label>{item.question}</Form.Label><br/>
                            {item.type === "radio" ? <SurveyRadioInput 
                            handelChangeStatus={handelChangeStatus} options={item.option} page={item.page} dataId={item.id} checked={item.checked}
                            /> : <SurveyTextInput dataId={item.id} handelChangeText={handelChangeText} textValue={item.value} />}
                        </Form.Group>
                    ))}
                </Form>
            </Card.Body>
                    <Card.Footer>
                        <Form.Group className="d-flex justify-content-center">
                        <Button className={page > 1 ? 'mx-2' : 'd-none'} onClick={() => setPage(page-1)} variant="outline-primary" type="button">
                            Previous
                        </Button>
                        <Button className={page > data.length-1 ? 'd-none' : ''} onClick={() => setPage(page+1)} variant="outline-primary" type="button">
                            Next
                        </Button>
                        <Button className={page === data.length ? '' : 'd-none'} onClick={finish} variant="primary" type="button">
                            Finish
                        </Button>
                        </Form.Group>
                    </Card.Footer>
         </Card>
    )
}

export default Questions