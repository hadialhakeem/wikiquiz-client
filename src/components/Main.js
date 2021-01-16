import React from 'react';
import { Text } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons'
import { Badge } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"


// Sample card from Airbnb



class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            quiz: null
        }
    }

    render(){

        return (
            <div align={'center'}>
              <div>
                <Text fontSize="6xl">WikiMe</Text>
              </div>

              <div>
                <Text fontSize="xl">Welcome! WikiMe allows you to search for a Wikipedia topic to be quizzed on. Try it out below!</Text>
              </div>
              <div>
                <Button colorScheme="blue">Search</Button>
              </div>
            </div>
        )


    }
}

export default Main
