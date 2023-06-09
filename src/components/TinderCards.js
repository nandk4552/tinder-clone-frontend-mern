import React, { useEffect, useState } from 'react'
import "./TinderCards.css"
import TinderCard from 'react-tinder-card'
import axios from './axios'

const TinderCards = () => {
    const [people, setPeople] = useState([]);

    // const [lastDirection, setsetLastDirection] = useState('')
    useEffect(() => {
        // creating an async function inside useEffect
        async function fetchData() {
            const req = await axios.get('/tinder/card');
            setPeople(req.data);
        }
        // calling the async function
        fetchData();
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete)
        // setLastDirection(direction)
    }
    const outOfFrame = (name) => {
        console.log(name + " left the screen!")
    }


    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{ backgroundImage: `url(${person.imgUrl})` }}
                            className='card'
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>

                ))}
            </div>

        </div >
    )
}

export default TinderCards
