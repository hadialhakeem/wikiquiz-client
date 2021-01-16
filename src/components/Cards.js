import React from 'react';
import { Button } from '@chakra-ui/react';
import { Grid, GridItem } from "@chakra-ui/react"

const cardsData = [
    {'theme': 'Sports',
    'description': 'bla ba',
    'titles': []},

    {'theme': 'Artists',
        'description': 'bla ba',
        'titles': []},

    {'theme': 'Countries',
        'description': 'bla ba',
        'titles': []},

    {'theme': 'Movies',
        'description': 'bla ba',
        'titles': []}
]

class Cards extends React.Component{

    render() {
        let renderedCards = cardsData.map(card => <Card cardInfo={card} />);

        return (
          <div>
          <Grid templateColumns="repeat(4, 1fr)" gap={0} >
              {renderedCards}
          </Grid>
          </div>

        )
    }
}


function Card(props) {
    const { cardInfo } = props;

    return (
      <div>
        <Button
          size="md"
          height="300px"
          width="350px"
          border="2px"
          borderColor="green.500"
        >
          Joe
        </Button>
      </div>
    );
}

export default Cards