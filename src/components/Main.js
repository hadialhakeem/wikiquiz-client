import React from 'react';
import { Box } from "@chakra-ui/react";

class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            quiz: null
        }
    }

    render(){

        return (
            <div textAlign="center">
                <h1>WikiMe</h1>
            </div>
        )
    }
}

export default Main
