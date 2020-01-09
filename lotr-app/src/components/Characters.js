import React from 'react';
import { Card, Grid } from 'semantic-ui-react'


export default function Characters({ data }) {

    // const [people, setPeople] = useState([]);


    return(
        <div>
        <h1>People</h1>
        <Grid columns={3}>
            {data.map((characters, i) => {
                return (
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{characters.name}</Card.Header>
                                <Card.Description>
                                    <strong>Height</strong>
                                    <p>{characters.height}</p>
                                    <strong>Mass</strong>
                                    <p>{characters.mass}</p>
                                    <strong>Hair Color</strong>
                                    <p>{characters.hair_color}</p>
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