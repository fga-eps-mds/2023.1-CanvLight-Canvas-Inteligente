import './Home.css'

function Home (){
    return(
        <div>
            <div className='navbar'>
                <div className='logo'>
                    <p>Logo</p>
                </div>

                <nav className='desktop'>
                    <ul>
                        <li>Home</li>
                        <li>Tuturial</li>
                        <li>Gerar canvas</li>
                    </ul>
                </nav>
                <div className='clear'></div>
            </div>
            
        </div>

    );
}

export default Home