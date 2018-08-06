import React from 'react';

/*
 * CardGroup
 * This component takes Card components as children and renders them.
 * Example usage:
 *
 *      <CardGroup>
 *          <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
 *      </CardGroup>
 *
 * The above would render a card group with a single child in it.
 *
 */
const CardGroup = (props) => (
    <div className="cardGroup">
        {props.children}
    </div>
);

const Card = (props) => (
    <div className='cardGroup__card'>
        <div className='card__description'>
            <div className={`icon fa ${props.descriptionIcon}`}></div>
            <div className='card__descriptionText'>{props.descriptionText}
                {props.descriptionHint}</div>
        </div>
        <div className='card__price'>{props.price}</div>
    </div>
);

const App = () => (
    <div>
        <CardGroup className='cardGroup'>
            <Card
                descriptionText='Trial'
                descriptionIcon='fa-thumbs-o-up'
                price='Free!' />

            <Card
                descriptionText='Basic tier'
                descriptionIcon='fa-trophy'
                descriptionHint='(most popular)'
                price='$10.00' />

            <Card
                descriptionText='Advanced tier'
                descriptionIcon='fa-bolt'
                descriptionHint='(only for enterprise-level professionals)'
                price='$6,000.00' />

        </CardGroup>
    </div>
);

export default App;
