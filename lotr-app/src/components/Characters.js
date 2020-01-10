import React, { useEffect } from 'react';
import { Card, Grid } from 'semantic-ui-react'
// import { css } from 'glamor';


export default function Characters({ data }) {

    const [people, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

    async function fetchChar() {
        let res = await fetch("https://rickandmortyapi.com/api/character/page=2")
        let data = await res.json();
        setCharacters(data.results);
        setLoading(false);
        console.log(data)}
        fetchChar();
    }, [])
    

    return(
        <div>
        <h1>People</h1>
        <Grid columns={4}>
            {data.map((characters, i) => {
                return (
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{characters.name}</Card.Header>
                                <Card.Description>
                                    <strong>Origin</strong>
                                    <p>{characters.origin.name}</p>
                                    <strong>Location</strong>
                                    <p>{characters.location.name}</p>
                                    <strong>Image</strong>
                                    <img src={characters.image} style={{height: 150}}></img>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                )
            })}
        </Grid>
        
}
        
        </div>
    )
        }