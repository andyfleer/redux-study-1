import { combineReducers } from 'redux';

const questionsReducer = () => {
    return [
        {q: 'What is the distance from Earth to Moon?', a: '100000000 km'},
        {q: 'How much is the fish?', a: '100 $'},
        {q: 'What is the best food?', a: 'Surely pizza'},
        {q: 'What is the biggest country?', a: 'Russia'}
    ]
};


const selectedQuestionReducer = (selectedQuestion=null, action) => {
    if(action.type === 'QUESTION_SELECTED') {
        return action.payload;
    }else if(action.type === 'CLEAR_SELECTED_QUESTION') {
        return null;
    }else if(action.type === 'DELETE_QUESTION') {
        return null;
        //return state.filter(item => item !== action.payload); 
        //QUEST: Здесь мне надо дотянуться до стейта чтобы удалить из списка вопросов тот вопрос, 
        //который будет передаваться в payload в акшине

    }

    return selectedQuestion;
}




export default combineReducers({
    questions: questionsReducer,
    selectedQuestion: selectedQuestionReducer
})