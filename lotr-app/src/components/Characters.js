import React from 'react';
import { Card, Grid } from 'semantic-ui-react'
// import { css } from 'glamor';


export default function Characters({ data }) {

    // const [people, setPeople] = useState([]);
    // const rules = css({
    //     fontSize: 1
    //   });

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
                                    <strong>Hair Color</strong>
                                    <p>{characters.hair_color}</p>
                                    <img src={characters.image} style={{height: 150}}></img>
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