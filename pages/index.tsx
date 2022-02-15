import type { NextPage } from "next";
import {List, ListItem, Paper, Link} from "@mui/material";

const Home: NextPage = () => {
    return (
        <>
            <Link href='/about'><h2>About us</h2></Link>
            <h2>NFTs</h2>
            <Paper>
                <List>
                    <ListItem href="/nft/1" component="a" button>$99.997.00 Worth Chicken Nugget </ListItem>
                </List>
            </Paper>
        </>
    );
};

export default Home;
