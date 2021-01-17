import React from 'react';
import {
    Heading,
    Text,
    Button,
    Input,
    Box,
    createStandaloneToast,
    UnorderedList,
    List,
    ListItem,
    ListIcon,
    Progress
} from "@chakra-ui/react";

import { MdCheckCircle } from 'react-icons/md';

import Quiz from "./Quiz";
import Cards from "./Cards";
import BackendAPI from "../settings/BackendAPI";


const toast = createStandaloneToast()

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: null,
            searchQuery: "",
            quiz: null,
            updatedSearchQuery: "",
        }
    }

    search = () => {
        const { searchQuery } = this.state;

        if (searchQuery==="") {
            toast({
                title: 'Input Error',
                description: `Search field cannot be blank.`,
                status: "error",
                duration: 9000,
                isClosable: true,
            })
        } else {
            this.setState({loading: "Generating Quiz!", validateText: null}, () => {
                BackendAPI
                    .generateQuiz(searchQuery)
                    .then(res => {
                        const {quiz, updated_query} = res.data;
                        this.setState({quiz, updatedSearchQuery: updated_query}, ()=>{
                            const { updatedSearchQuery } = this.state;
                            let isExactSearch = (searchQuery.toLowerCase() === updatedSearchQuery.toLowerCase())
                            if (!isExactSearch) {
                                toast({
                                    title: 'Notice',
                                    description: `Could not find your exact search query ${searchQuery}. Using closest match ${updatedSearchQuery} instead.`,
                                    status: "warning",
                                    duration: 9000,
                                    isClosable: true,
                                })
                            }
                        });
                    })
                    .catch(err => {
                        console.log({err})

                        const errorMessage = (
                            <>
                                Your search request failed. This could be because:
                                <UnorderedList>
                                    <ListItem>A Wikipedia article with your search query doesn't exist.</ListItem>
                                    <ListItem>Your query wasn't specific enough.</ListItem>
                                </UnorderedList>
                                Try another search or use one of the presets!
                            </>
                        )

                        toast({
                            title: 'Error',
                            description: errorMessage,
                            status: "error",
                            duration: 9000,
                            isClosable: true,
                        })

                    })
                    .finally(() => {
                        this.setState({loading: null})
                    })
            })
        }
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
                    {loading &&
                    <Box w="60%">
                        <Progress size="xs" isIndeterminate />
                        <br />
                    </Box>
                    }

                    <Cards onCardClick={this.onCardClick} />
                    <br />
                    <br />
                    <br />
                    {wikiMeInfo}
                </>
                }
                {quiz &&
                    <Quiz questions={quiz} title={updatedSearchQuery} query={searchQuery}/>
                }

            </div>
        )


    }
}

export default Main
