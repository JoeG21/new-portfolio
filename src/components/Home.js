import React from 'react';

// import github from '../pictures/github.svg'
// import linkedin from '../pictures/linkedin.svg'
// import medium from '../pictures/medium.svg'
// import youtube from '../pictures/youtube.svg'

import About from './About'

const Home = () => {
    return (
        <>
            <div className='home'>
                <h1> Full Stack </h1>
                <h1> Web Developer </h1>
            </div>

            <div id='about'>
                <About />
            </div>
            {/* <Route path='/about'>
                <About />
            </Route> */}

        </>
    )
}

export default Home
