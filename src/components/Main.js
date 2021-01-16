import React from 'react';
import { Text } from "@chakra-ui/react"

class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            quiz: null
        }
    }

    render(){

        return (
            <div>
                <Text fontSize="6xl" align={'center'}>WikiMe</Text>
            </div>
        )
    }
}

export default Main
