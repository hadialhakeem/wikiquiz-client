import React from 'react';

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
            {renderedCards}
        )
    }
}


function Card(props) {
    const { cardInfo } = props;

    return (
      <div>
        hello
      </div>
    );
}

export default Cards