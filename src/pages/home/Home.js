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
            <div className='sobre'>
                <h2>Canvas inteligente</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus orci eu purus tristique, nec convallis lectus lacinia. Maecenas et ex id felis luctus posuere quis vel sapien. Nam id condimentum sapien. Etiam sed dolor et augue iaculis fermentum. Donec condimentum, nisi ut egestas tristique, dui libero condimentum odio, eget accumsan massa nulla a nulla. Integer non efficitur leo, in convallis magna. Integer viverra, enim quis porta varius, libero magna molestie elit, sit amet tristique erat nunc eget nisl. Duis facilisis enim ac mauris imperdiet vestibulum. Integer pretium, nisl vitae bibendum venenatis, felis est auctor arcu, quis maximus nisi tortor a nunc. Fusce at tempus nulla. Sed vulputate ex nec nunc malesuada ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent auctor vitae purus eleifend vehicula. Praesent commodo metus et risus consectetur vulputate. Fusce laoreet ligula ipsum, ut laoreet dolor eleifend ut.</p>
            
                {/* <div className='membros'>
                    <div className='membor-single'>
                        <p>pedro</p>
                        <a>oi</a>
                    </div>
                    <div className='membor-single'>
                        <p>pedro</p>
                        <a>oi</a>
                    </div>
                    <div className='membor-single'>
                        <p>pedro</p>
                        <a>oi</a>
                    </div>
                </div> */}

            </div>
        </div>

    );
}

export default Home