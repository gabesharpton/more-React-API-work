import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return(
        <Menu inverted>
            <Container>
                <Link to='/'>
                <Menu.Item name="Rick and Morty API" />
                </Link>
                <Link to='/characters'>
                <Menu.Item name="Characters" />
                </Link>
                {/* <Link to='/planets'>
                <Menu.Item name="Planets" />
                </Link>
                <Link to='/films'>
                <Menu.Item name="Films" />
                </Link>
                <Link to='/species'>
                <Menu.Item name="Species" />
                </Link> */}
            </Container>
        </Menu>
    )
}