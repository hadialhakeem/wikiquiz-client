import React from 'react';
import { Button } from '@chakra-ui/react';
import { Grid } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"

const cardsData = [
    {'theme': 'Sports',
    'description': 'Basketball, Volleyball, Soccer, Lacrosse',
    'titles': ['Basketball', 'Volleyball', 'Football', 'Lacrosse', 'Hockey', 'Baseball', 'Badminton', 'Tennis', 'Table Tennis', 'Golf'],
    'image_url': 'https://imgur.com/fLXsBMN.png'},

    {'theme': 'Artists',
    'description': 'Justin Bieber, Miley Cyrus, Drake, Beyoncé',
    'titles': ['Justin Bieber', 'Miley Cyrus', 'Pop Smoke', 'Drake (musician)', 'Ed Sheeran', 'Shawn Mendes', 'Sia (musician)',
                'Taylor Swift', 'Beyoncé', 'Selena Gomez'],
    'image_url': 'https://imgur.com/RPhlkZp.png'},

    {'theme': 'Countries',
    'description': 'Canada, Australia, Ireland, England',
    'titles': ['Canada', 'Australia', 'New Zealand', 'Ireland', 'England', 'France'],
    'image_url': 'https://i.imgur.com/pv4Taxi.png'},

    {'theme': 'Movies',
    'description': 'Soul, Avengers, Mulan, Parasite, Black Panther, Inception',
    'titles': ['Soul (2020 film)', 'Parasite (2019 film)', 'Inception', 'Avengers: Endgame', 'Mulan (2020 film)',
                'Toy Story 3', 'Joker (2019 film)', 'Black Panther (film)', 'Suicide Squad (film)'],
    'image_url': 'https://imgur.com/3rPclLh.png'}
]

class Cards extends React.Component{

    render() {
        let { onCardClick } = this.props;

        let renderedCards = cardsData.map(card => <Card cardInfo={card} onCardClick={onCardClick} />);

        return (
          <div>
          <Grid w={'80%'} templateColumns="repeat(4, 1fr)" gap={0} >
              {renderedCards}
          </Grid>
          </div>

        )
    }
}


function Card(props) {
    const { cardInfo, onCardClick } = props;

    return (
      <div>
        <Button
          size="md"
          height="300px"
          width="350px"
          border="2px"
          backgroundColor="gray.700"
          borderColor="cyan.700"
          onClick={()=>onCardClick(cardInfo)}
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
            <Text fontSize="14px" color="teal.400">
                {cardInfo.description}
            </Text>

        </div>
        </div>
        </Button>
      </div>

    );
}

export default Cards