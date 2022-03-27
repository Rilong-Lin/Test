import './Landing.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-responsive-button';

function Landing() {
    return (
        <div className="landing-bg">
            <Link to="/Home">
                <Button className = "s-button">Start the Game</Button>
            </Link>
        </div>
    );
}

export default Landing;
