import './Header.css';

function Header(){
    return(
        <header>
            <div className='container'>
                <div className='logo'>
                    <p>Logo</p>
                </div>

                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Tuturial</li>
                        <li>Gerar canvas</li>
                    </ul>
                </nav>
            </div>
    </header>
    );
}

export default Header;