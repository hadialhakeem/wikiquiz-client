import React from 'react';
import { Button } from '@chakra-ui/react';
import { Grid, GridItem } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"

const cardsData = [
    {'theme': 'Sports',
    'description': 'Basketball, Volleyball, Soccer, Lacrosse, etc.',
    'titles': [],
    'image_url': 'https://imgur.com/fLXsBMN.png'},

    {'theme': 'Artists',
        'description': 'Justin Beiber, Miley Cyrus, Pop Smoke, Drake, etc.',
        'titles': [],
        'image_url': 'https://imgur.com/RPhlkZp.png'},

    {'theme': 'Countries',
        'description': 'Canada, Belgium, Palestine, Israel, etc.',
        'titles': [],
        'image_url': 'https://i.imgur.com/pv4Taxi.png'},

    {'theme': 'Movies',
        'description': 'Soul, Avengers, Mulan, Parasite, etc.',
        'titles': [],
        'image_url': 'https://imgur.com/3rPclLh.png'}
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
          backgroundColor="gray.700"
          borderColor="cyan.700"
        >
        <div align="center">

        <div>
            <Text fontSize="30px" color="cyan.200">
                {cardInfo.theme}
            </Text>

        </div>
        <div>
            <Image
              boxSize="150px"
              objectFit="contain"
              src={cardInfo.image_url}
              alt="Icon"
            />
        </div>
        <div>
            <Text fontSize="12px" color="teal.400">
                {cardInfo.description}
            </Text>

        </div>
        </div>
        </Button>
      </div>

    );
}

export default Cards