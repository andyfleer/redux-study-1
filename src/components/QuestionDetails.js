import React from 'react';
import { connect } from 'react-redux';


class QuestionDetails extends React.Component {
    render(){
        return (
            <div className="bg-secondary text-white p-2" style={ {minHeight: '300px'} }>
                <b>Question: </b>
                { this.props.question.q } <br/><br/>
                <b>Answer: </b>
                { this.props.question.a }    
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        question: state.selectedQuestion ? state.selectedQuestion : '' 
    }
}

export default connect(mapStateToProps)(QuestionDetails);


