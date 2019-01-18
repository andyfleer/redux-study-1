import React from 'react';
import QuestionsList from './QuestionsList';
import QuestionDetails from './QuestionDetails';

const App = () => {
    return (
        <div className="row">
            <div className="col-md-7 bg-info text-white">
                <QuestionsList />
            </div>
            <div className="col-md-5">
                <QuestionDetails />
            </div>
        </div>
    );
}

export default App;