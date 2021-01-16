import React from 'react';
import { Text } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"

import Quiz from "./Quiz";


class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quiz: [{'question': 'abc',
                'answer' : 'd',
                'options': ['d','a','b']},
                {'question': 'def',
                    'answer' : 'd',
                    'options': ['d','a','b']},
                {'question': 'tyu',
                    'answer' : 'd',
                    'options': ['d','a','b']}]
        }
    }

    render(){
        const { quiz } = this.state;

        return (
            <div align={'center'}>
              <div>
                <Text fontSize="6xl">WikiMe</Text>
              </div>

              <div>
                <Text fontSize="xl">Welcome! WikiMe allows you to search for a Wikipedia topic to be quizzed on. Try it out below!</Text>
              </div>
              <div>
                <Input variant="outline" size="lg" w="50%" margin="30px" placeholder="Article Title"/>
                <Button colorScheme="blue" size="lg">Search</Button>
              </div>

                {quiz &&
                    <Quiz questions={quiz} />
                }
            </div>
        )


    }
}

export default Main
