const validateOpinion = (textValue) => {
    if(textValue.trim().length <= 15){
        return true
    }

    return false
}

export {
    validateOpinion
}