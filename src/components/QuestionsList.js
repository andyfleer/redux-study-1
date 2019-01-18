import React from 'react';
import { connect } from 'react-redux';
import { selectQuestion, clearSelectedQuestion, deleteQuestion } from '../actions';


class QuestionsList extends React.Component {
    changeMode = (mode, param) => {
        switch(mode) {
            case 'EXPLORE':
                this.props.selectQuestion(param);
                break;
            case 'DELETE': 
                // this.props.deleteQuestion(param);
                this.props.clearSelectedQuestion();
                break; 

            


            default:
        }
    }


    renderQuestion = () => {
        return this.props.questions.map(question => {
            return (
                <div className="row" key={question.a} style={ {borderBottom: '1px solid #fff'} }>
                    <div className="col-md-8 pb-2">
                        <p>
                            <b>{ question.q }</b>
                            <br />
                            { question.a }
                        </p>
                        <button className="btn btn-success mx-1" onClick={ () => this.changeMode('EXPLORE', question) }>Explore</button>
                        <button className="btn btn-warning mx-1">Edit</button>
                        <button className="btn btn-danger mx-1" onClick={ () => this.changeMode('DELETE') }>Delete</button>
                    </div>
                </div>
            );
        })
    }
    
    render() {
        return (
            <div>
                <h1>List</h1>
                { this.renderQuestion() }
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        questions: state.questions
    }
}

export default connect(mapStateToProps, 
        { selectQuestion,
          clearSelectedQuestion,
          deleteQuestion })(QuestionsList);