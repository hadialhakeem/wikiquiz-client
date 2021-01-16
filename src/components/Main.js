import React from 'react';
import { Box } from "@chakra-ui/react";

class Main extends React.component {
    constructor() {
        super();

        this.state = {
            quiz: null
        }
    }

    render(){

        return (
            <Box textAlign="center">
                <h1>WikiMe</h1>
            </Box>
        )
    }
}

export default Main
