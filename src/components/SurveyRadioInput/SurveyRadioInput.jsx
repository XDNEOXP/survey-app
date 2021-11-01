import React from 'react';
import Form from 'react-bootstrap/Form'

const SurveyRadioInput = ({ handelChangeStatus, options, page, checked, dataId }) => (
            <>
            {options.map((option) => {
               return (
                <Form.Check
                key={`option-${option.id}`}
                inline
                onChange={() => handelChangeStatus(dataId,option.id)}
                checked={checked === option.id ? true : false}
                label={option.label}
                name={`group${page}`}
                type="radio"
                id={`page-${page}-radio-${option.id}`}
                /> 
               )
            })}
            </>
)

export default SurveyRadioInput