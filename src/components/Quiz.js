import React from 'react';
import { Heading } from "@chakra-ui/react"
import { Button } from '@chakra-ui/react';
import {ArrowForwardIcon} from "@chakra-ui/icons";

class Quiz extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentQuestion: 0,
            score: 0,
            selected: null
        }
    }

    onChoose = (buttonText, answer) => {
        const { score } = this.state;

        if (buttonText === answer) {
            let newScore = score + 1
        } else {
            let newScore = score
        }

        this.setState({selected: buttonText, score: newScore});
    }

    onNext = () => {
        const { currentQuestion } = this.state;
        let { questions } = this.props;
        let newQuestion = (currentQuestion + 1) % questions.length;
        this.setState({selected: null, currentQuestion: newQuestion})
    }

    render () {
        const { currentQuestion, selected } = this.state;
        let { questions } = this.props;

        let renderedQuestion = <Question selected={selected}
                                         qDict={questions[currentQuestion]}
                                         onChoose={this.onChoose} />

        let nextQuestionButton = (
            <div>
                <Button rightIcon={<ArrowForwardIcon />} colorScheme="teal" variant="outline" onClick={()=>{this.onNext()}}>
                    Next Question
                </Button>
            </div>
        )

        return (
            <div>
                {renderedQuestion}
                <br />
                {selected &&
                    nextQuestionButton
                }
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
    const { qDict, onChoose, selected } = props;


    return (
        <div>
            <div>
                <Heading as="h3" size="lg" marginBottom="15px">
                    Question: {qDict.question}
                </Heading>
            </div>
            <div>
                {questionOption(qDict.options[0], onChoose, selected, "15px","0px", qDict.answer)}
                {questionOption(qDict.options[1], onChoose, selected, "0px", "0px", qDict.answer)}
            </div>
            <div>
                {questionOption(qDict.options[2], onChoose, selected, "15px", "15px", qDict.answer)}
                {questionOption(qDict.options[3], onChoose, selected, "0px", "15px", qDict.answer)}
            </div>
        </div>
    )
}

const questionOption = (buttonText, onClick, selected, marginRight, marginTop, answer) => {
    let color;
    let borderColor = "blue.500";
    if (selected) {
        if (buttonText === answer) {
            color="green"
        } else {
            borderColor = "red.500"
            if (buttonText === selected) {
                color="red"
            }
        }
    }

    return (
        <Button
            size="md"
            height="175px"
            width="500px"
            border="2px"
            borderColor={borderColor}
            marginTop={marginTop}
            marginRight={marginRight}
            onClick={()=>onClick(buttonText, answer)}
            isDisabled={!!selected}
            colorScheme={color}
        >
            {buttonText}
        </Button>
    )
}




export default Quiz