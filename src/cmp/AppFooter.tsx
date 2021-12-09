import gitHubLogo from '../assets/imgs/github-logo.png';

export function AppFotter() {
    return (
        <footer className="main-footer full">
            <div className="footer-logo flex direction-col align-center">
                <p>&copy; Star Wars by Michael Uzan</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" />
            </div>
            <div className="footer-desc">
                <ul className="social-links clean-list flex direction-row justify-center">
                    <li>
                        <a target="_blank" href="https://github.com/Michael-Uzan/starwars-frontend">
                            <p>See Code on GitHub Here: </p>
                            <img src={gitHubLogo} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}