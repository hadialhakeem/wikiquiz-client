import React from 'react';
import {Heading, Text} from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { List, ListItem, ListIcon } from "@chakra-ui/react"

import Quiz from "./Quiz";
import Cards from "./Cards";
import BackendAPI from "../settings/BackendAPI";
import { MdCheckCircle } from 'react-icons/md';


class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: null,
            searchQuery: "",
            quiz: null,
            updatedSearchQuery: null
        }
    }

    search = () => {
        const { searchQuery } = this.state;

        this.setState({loading: "Generating Quiz!"}, ()=>{
            BackendAPI
                .generateQuiz(searchQuery)
                .then(res => {
                    const { quiz, updated_query } = res.data;
                    this.setState({quiz, updatedSearchQuery: updated_query});
                })
                .catch(err => {
                    console.log({err})
                })
                .finally(()=>{
                    this.setState({loading: null})
                })
        })
    }

    onSearchChange = (event) => {
        this.setState({searchQuery: event.target.value});
    }

    onCardClick = (cardInfo) => {
        let options = cardInfo.titles;
        let randQuery = options[Math.floor(Math.random() * options.length)];

        this.setState({searchQuery: randQuery}, ()=>{
            this.search();
        })
    }

    render(){
        const { quiz, loading, searchQuery, updatedSearchQuery } = this.state;

        let wikiMeInfo = (
            <Box
                w="350px"
                borderRadius="25px"
                border="2px"
                backgroundColor="gray.700"
                borderColor="White"
            >
                <div>
                    <Text fontSize="xl">Why WikiMe?</Text>
                </div>
                <Box
                    w="70%"
                    p={4}
                    color="white"
                    textAlign="left"
                >

                    <List spacing={3} paddingTop="20px">
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color="blue.300" />
                            Fun with friends!
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color="blue.300" />
                            Brush up on trivia skills!
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color="blue.300" />
                            Just have a good time!
                        </ListItem>
                    </List>
                </Box>
            </Box>
        )

        return (
            <div align={'center'}>
              <div>
                  <Heading as="h1" size="4xl" marginTop={"10px"}>
                      WikiMe
                  </Heading>
              </div>
                <br />
                {!quiz &&
                <>
                    <Box w="80%" >
                    <Text fontSize="xl"> WikiMe allows you to choose a Wikipedia topic to be quizzed on. Get started by searching, or choosing one of the topics below!</Text>
                    </Box>
                    <Input value={searchQuery}
                           disabled={loading}
                           variant="outline"
                           size="lg" w="50%"
                           margin="35px" pb="5px"
                           placeholder="Article Title" onChange={this.onSearchChange}/>
                    <Button
                        colorScheme="blue" size="lg" onClick={()=>this.search()}
                        isLoading={loading} loadingText={"Generating Quiz!"}>
                            Search
                    </Button>

                    <Cards onCardClick={this.onCardClick} />
                    <br />
                    <br />
                    <br />
                    {wikiMeInfo}
                </>
                }
                {quiz &&
                    <Quiz questions={quiz} title={updatedSearchQuery} />
                }

            </div>
        )


    }
}

export default Main
