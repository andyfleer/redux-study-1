export const selectQuestion = question => {
    return {
        type: 'QUESTION_SELECTED',
        payload: question
    }
}

export const clearSelectedQuestion = () => {
    return {
        type: 'CLEAR_SELECTED_QUESTION'
    }
}

export const deleteQuestion = question => {
    return {
        type: 'DELETE_QUESTION',
        payload: question
    }
}