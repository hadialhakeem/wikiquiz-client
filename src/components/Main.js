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
            quiz: [
                {
                    "answer": "marine",
                    "full_question": " Gillnetting and Seine netting is a significant cause of mortality in whales and other marine mammals",
                    "options": [
                        "whales",
                        "marine",
                        "aquatic",
                        "fully"
                    ],
                    "question": " gillnetting and seine netting is a significant cause of mortality in whales and other ____________ mammals"
                },
                {
                    "answer": "aquatic",
                    "full_question": "Whales are fully aquatic, open ocean creatures, and feed, mate, give birth, suckle and raise their young at sea",
                    "options": [
                        "aquatic",
                        "fully",
                        "diverse",
                        "distributed"
                    ],
                    "question": "whales are fully ____________, open ocean creatures, and feed, mate, give birth, suckle and raise their young at sea"
                },
                {
                    "answer": "fully",
                    "full_question": " A year later, the 8,000-kilogram (18,000 lb) whale grew too big to keep in captivity and was released; it was the first of two grey whales, the other being another grey whale calf named JJ, to successfully be kept in captivity",
                    "options": [
                        "marine",
                        "fully",
                        "aquatic",
                        "widely"
                    ],
                    "question": " a year later, the 8,000-kilogram (18,000 lb) whale grew too big to keep in captivity and was released; it was the first of two grey whales, the other being another grey whale calf named jj, to success____________ be kept in captivity"
                },
                {
                    "answer": "group",
                    "full_question": " The phylogenetic tree shows the relationships of whales and other mammals, with whale groups  marked in green",
                    "options": [
                        "group",
                        "diverse",
                        "whales",
                        "distributed"
                    ],
                    "question": " the phylogenetic tree shows the relationships of whales and other mammals, with whale ____________s  marked in green"
                },
                {
                    "answer": "widely",
                    "full_question": "Whales are a widely distributed and diverse group of fully aquatic placental marine mammals",
                    "options": [
                        "aquatic",
                        "whales",
                        "mammals",
                        "widely"
                    ],
                    "question": "whales are a ____________ distributed and diverse group of fully aquatic placental marine mammals"
                },
                {
                    "answer": "placental",
                    "full_question": "Whales are a widely distributed and diverse group of fully aquatic placental marine mammals",
                    "options": [
                        "placental",
                        "group",
                        "marine",
                        "mammals"
                    ],
                    "question": "whales are a widely distributed and diverse group of fully aquatic ____________ marine mammals"
                },
                {
                    "answer": "mammals",
                    "full_question": " All mammals sleep, but whales cannot afford to become unconscious for long because they may drown",
                    "options": [
                        "mammals",
                        "aquatic",
                        "diverse",
                        "fully"
                    ],
                    "question": " all ____________ sleep, but whales cannot afford to become unconscious for long because they may drown"
                },
                {
                    "answer": "distributed",
                    "full_question": "Whales are a widely distributed and diverse group of fully aquatic placental marine mammals",
                    "options": [
                        "group",
                        "marine",
                        "distributed",
                        "placental"
                    ],
                    "question": "whales are a widely ____________ and diverse group of fully aquatic placental marine mammals"
                },
                {
                    "answer": "whales",
                    "full_question": " Some species, such as sperm whales, are well adapted for diving to great depths to catch squid and other favoured prey",
                    "options": [
                        "aquatic",
                        "marine",
                        "widely",
                        "whales"
                    ],
                    "question": " some species, such as sperm ____________, are well adapted for diving to great depths to catch squid and other favoured prey"
                },
                {
                    "answer": "diverse",
                    "full_question": "Whales are a widely distributed and diverse group of fully aquatic placental marine mammals",
                    "options": [
                        "aquatic",
                        "widely",
                        "placental",
                        "diverse"
                    ],
                    "question": "whales are a widely distributed and ____________ group of fully aquatic placental marine mammals"
                }]
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
                    <>
                    <br />
                    <Quiz questions={quiz} />
                    </>
                }
            </div>
        )


    }
}

export default Main
