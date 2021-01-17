import React from 'react';
import { Heading } from "@chakra-ui/react"
import { Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/layout";

class Quiz extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentQuestion: 0,
            score: 0,
            selected: null,
        }
    }

    onChoose = (buttonText, answer) => {
        const { score } = this.state;

        let newScore;
        if (buttonText === answer) {
            newScore = score + 1
        } else {
            newScore = score
        }

        this.setState({selected: buttonText, score: newScore});
    }

    onNext = () => {
        const { currentQuestion } = this.state;
        let newQuestion = currentQuestion + 1;
        this.setState({selected: null, currentQuestion: newQuestion})
    }

    playAgain = () => {
        window.location.reload();
    }

    renderFinalScreen = () => {
        const { score } = this.state;
        const { questions } = this.props;

        return (
            <div>
                <Text fontSize="4xl">Thanks for playing!</Text>
                <Text fontSize="4xl">Your final score was {score}/{questions.length}</Text>
                <br />
                <Button colorScheme="blue" variant="outline" size="lg" onClick={()=>this.playAgain()}>
                    Play Again
                </Button>
                <br />
            </div>
        )
    }

    render () {
        const { currentQuestion, selected, score } = this.state;
        const { questions, title } = this.props;

        let renderedQuestion = <Question selected={selected}
                                         qDict={questions[currentQuestion]}
                                         onChoose={this.onChoose} />

        let isFinished = (currentQuestion === questions.length);
        let isLastQuestion = (currentQuestion === (questions.length - 1))

        let nextQuestionButton = (
            <div>
                <Button rightIcon={<ArrowForwardIcon />} colorScheme="teal" variant="outline" onClick={()=>{this.onNext()}}>
                    {isLastQuestion && <>View Results</>}
                    {!isLastQuestion && <>Next Question</>}
                </Button>
            </div>
        )
        let renderedScore = <Text fontSize="6xl">Score: {score}/{questions.length}</Text>

        if (isFinished){
            return this.renderFinalScreen()
        }
        return (
            <div>
                <Heading as="h2" size="2xl">
                    Topic: {title}
                </Heading>
                <br />
                {renderedQuestion}
                {selected &&
                    <>
                        <br />
                        {nextQuestionButton}
                    </>
                }
                <br />
                <br />
                {renderedScore}
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

            <Box w={'70%'}>
                <Heading as="h3" size="lg" marginBottom="15px">
                    {qDict.question}
                </Heading>
            </Box>
            <br />
            <br />
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
            borderColor = "green.500"
            color="green"
        } else {
            if (buttonText === selected) {
                borderColor = "red.500"
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