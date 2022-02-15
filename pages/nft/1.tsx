import type { NextPage } from "next";
import Image from 'next/image'
import image1 from '/images/1-1.png';
import image2 from '/images/1-2.png';
import { Button } from '@mui/material';

const Home: NextPage = () => {
    return (
        <div>
            <h1>$99.997.00 Worth Chicken Nugget</h1>
            <Image
                src={image1}
                loading="lazy"
                alt={"nugget"}
                layout='responsive'/>
            <p>Meta Chicken Nugget looks like a famous game character.<br/>
                Deep-fried, served on a plate.<br/>
                100% Refundable when Nugget gets expired.<br/><br/>
            </p>
            <Image
                src={image2}
                loading="lazy"
                alt={"auction picture"}
                layout='responsive'/>
            <h2>Details</h2>
            <p>
                $99.997.00 Worth Chicken Nugget is 3D graphic art highly inspired by the auction 'McDonald's Among Us shaped Nugget from BTS Meal'.
            </p>
            <Button variant="outlined" href={"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/16110191377018023060590833410106289536004523516268007580683628882489207947265/"}>Auction Now</Button>
        </div>
    );
};

export default Home;
