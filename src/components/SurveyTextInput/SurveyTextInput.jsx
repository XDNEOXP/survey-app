import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import { validateOpinion } from '../../utils/validation';

const SurveyTextInput = ({dataId, textValue, handelChangeText}) => {
    const [errors, setErrors] = useState({})

    const handelChange = (event) => {
        handelChangeText(dataId, event.target.value)
        if(validateOpinion(event.target.value)){
            setErrors({
                ...errors,
                opinion: 'opinion must be at least 15 character'
            })
        }  else {
            setErrors({
                ...errors,
                opinion: null
            })
        }
    }

    return (
        <>
        <Form.Control isInvalid={errors.opinion} onChange={handelChange} value={textValue}  as="textarea"/>
        {errors.opinion && <span><Alert variant="danger">{errors.opinion}</Alert></span>}
        </>
    )
}

export default SurveyTextInput
