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
            isSelected: false
        }
    }

    onChoose = () => {
        console.log("SELECTED")
        this.setState({isSelected: true});
    }

    onNext = () => {
        const { currentQuestion } = this.state;
        let { questions } = this.props;
        let newQuestion = (currentQuestion + 1) % questions.length;
        this.setState({isSelected: false, currentQuestion: newQuestion})
    }

    render () {
        const { currentQuestion, isSelected } = this.state;
        let { questions } = this.props;

        let renderedQuestion = <Question qDict={questions[currentQuestion]} onChoose={this.onChoose} />

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
                {isSelected &&
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
    const { qDict, onChoose } = props;

    return (
        <div>
            <div>
                <Heading as="h3" size="lg" marginBottom="15px">
                    Question: {qDict.question}
                </Heading>
            </div>
            <div>
                {questionOption(qDict.options[0], onChoose, "15px","0px")}
                {questionOption(qDict.options[1], onChoose, "0px", "0px")}
            </div>
            <div>
                {questionOption(qDict.options[2], onChoose, "15px", "15px")}
                {questionOption(qDict.options[3], onChoose, "0px", "15px")}
            </div>
        </div>
    )
}

const questionOption = (buttonText, onClick, marginRight, marginTop) => {

    return (
        <Button
            size="md"
            height="175px"
            width="500px"
            border="2px"
            borderColor="green.500"
            marginTop={marginTop}
            marginRight={marginRight}
            onClick={()=>onClick()}
        >
            {buttonText}
        </Button>
    )
}




export default Quiz