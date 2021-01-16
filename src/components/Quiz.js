import React from 'react';
import { Heading } from "@chakra-ui/react"
import { Button } from '@chakra-ui/react';

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
            <div>
                <Heading as="h3" size="lg" marginBottom="15px">
                    Question: {qDict.question}
                </Heading>
            </div>
            <div>
                <Button
                  size="md"
                  height="175px"
                  width="500px"
                  border="2px"
                  marginRight="15px"
                  marginTop="0px"

                  borderColor="green.500"
                >
                    {qDict.options[0]}
                </Button>
                <Button
                  size="md"
                  height="175px"
                  width="500px"
                  border="2px"
                  borderColor="green.500"
                >
                    {qDict.options[1]}
                </Button>
            </div>
            <div>
                <Button
                  size="md"
                  height="175px"
                  width="500px"
                  border="2px"
                  marginRight="15px"
                  marginTop="15px"
                  borderColor="green.500"
                >
                    {qDict.options[2]}
                </Button>
                <Button
                  size="md"
                  height="175px"
                  width="500px"
                  border="2px"
                  marginTop="15px"
                  borderColor="green.500"
                >
                    {qDict.options[3]}
                </Button>
            </div>

        </div>

    )
}





export default Quiz