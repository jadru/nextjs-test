import type { NextPage } from "next";
import {List, ListItem, Paper} from "@mui/material";

const Home: NextPage = () => {
    return (
        <List>
            <Paper>
                <ListItem href="/nft/1" component="a" button>$99.997.00 Worth Chicken Nugget </ListItem>
            </Paper>
        </List>
    );
};

export default Home;
