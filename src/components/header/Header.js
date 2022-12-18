import './style.css';

const Header = props => {
    return (<header>
        <h2 className="color-accent">
            <a href="https://en.wikipedia.org/wiki/Caesar_cipher">
                Caesar Cipher
            </a>
        </h2>
        <div className="wrapper-nav">
            <h4 className="color-main-extend">
                <a href="http://localhost:3000/" className="underline">
                    Cipher
                </a>
            </h4>
            <h4 className="color-main-extend">
                <a href="http://localhost:3000/">
                    BruteForce
                </a>
            </h4>
        </div>
    </header>);
};

export default Header;
