import type { NextPage } from "next";
import {List, ListItem, Paper, Link} from "@mui/material";

const About: NextPage = () => {
    return (
        <>
            <h1>About us</h1>
            <p> is ironical NFT art studio.
                Based in South Korea, Seoul.</p>
            <ol>
                <li><p>Jungmin Ha / Graphic artist</p></li>
                <li><p>Younggun Park / Engineer</p></li>
                <li><p>Jungmu Kim / Graphic artist</p></li>
            </ol>
        </>
    );
};

export default About;
