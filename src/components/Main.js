import React from 'react';
import { Text } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"

import Quiz from "./Quiz";
import Cards from "./Cards";
import BackendAPI from "../settings/BackendAPI";
import {Box} from "@chakra-ui/layout";

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: null,
            searchQuery: "",
            quiz: null
        }
    }

    onSearch = () => {
        const { searchQuery } = this.state;

        this.setState({loading: "Generating Quiz!"}, ()=>{
            BackendAPI
                .generateQuiz(searchQuery)
                .then(res => {
                    const { quiz } = res.data;
                    this.setState({quiz});
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

    render(){
        const { quiz, loading } = this.state;

        return (
            <div align={'center'}>
              <div>
                <Text fontSize="6xl">WikiMe</Text>
              </div>
                <br />
                {!quiz &&
                <>
                    <Text fontSize="xl">Welcome! WikiMe allows you to search for a Wikipedia topic to be quizzed on. Try it out below!</Text>

                    <Input disabled={loading} variant="outline" size="lg" w="50%" margin="35px" pb="5px" placeholder="Article Title" onChange={this.onSearchChange}/>
                    <Button
                        colorScheme="blue" size="lg" onClick={()=>this.onSearch()}
                        isLoading={loading} loadingText={"Generating Quiz!"}>
                            Search
                    </Button>

                    <Cards />
                </>
                }
                {quiz &&
                    <Quiz questions={quiz} />
                }
            </div>
        )


    }
}

export default Main
