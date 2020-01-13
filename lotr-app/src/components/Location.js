import React, { useEffect, useState } from 'react';
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
            {data.map((location, i) => {
                return (
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{location.name}</Card.Header>
                                <Card.Description>
                                    <strong>Type</strong>
                                    <p>{location.type}</p>
                                    <strong>Dimension</strong>
                                    <p>{location.dimension}</p>
                                    {/* <strong>Image</strong>
                                    <p></p>
                                    <img src={location.image} style={{height: 150}}></img> */}
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                )
            })}
        </Grid>
        

        
        </div>
    )
}