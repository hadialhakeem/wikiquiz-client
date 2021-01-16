import React from 'react';

class Quiz extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentQuestion: 0
        }
    }

    render () {
        const { currentQuestion } = this.state;
        let { questions } = this.props;

        let renderedQuestion = <Question qDict={questions[currentQuestion]} />

        return (
            <div>
                {renderedQuestion}
            </div>
        )
    }

}


/*

{'question': 'abc',
'answer' : 'd',
'options': ['d','a','b']}

 */
function Question(props) {
    const { qDict } = props;

    return (
        <div>
            Question: {qDict.question} <br />
            Answer: {qDict.answer}
        </div>
    )
}





export default Quiz