import styles from '../styles/Header.module.scss'
import {Link} from "@mui/material";
const header = () => (
    <div>
        <center>
            <div className={styles.title}>
                <Link href="/" underline="none"><h2>project 2220</h2></Link>
            </div>
        </center>
    </div>
)

export default header;