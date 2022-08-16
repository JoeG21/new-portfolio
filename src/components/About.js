import React from 'react';

import headshot from '../pictures/headshot.jpeg'




const Home = () => {
    return (
        <div className='about-des'>
            <img src={headshot} className='headshot' alt='Me' />

            <p>
                Hey there! My name is Joe Gomez and when I am not enjoying time with my family or friends, I am hard at work learning to better myself through programming.
                My love for technology came when my family purchased our first PC. Windows, Microsoft, and the Internet!
                It was all so new and fascinating to me.
                I was always in awe at how all of it worked and always remained curious throughout my life.
                It wasn't until after graduating High School that I saw how lucrative of a field programming could be and how I could finally learn to solve those problems I always wondered about.

                <br /><br />
                I spent my free time teaching myself the basics.
                How things worked, why they worked, how they could work better, etc.
                After spending a few years in sales was when I got my first real push into Tech.
                Through a good friend, I learned how to approach tech as a beginner, how to start using my communications skills to advance myself further into the field, and how to work with others.
                Shortly after having this experience with that friend, I found myself looking into bootcamps in 2020.
                Deciding to make the jump, I signed up for Flatiron School and was on my way to completing their full immersive full stack program.
                <br /><br />
                A new journey would normally seem intimidating, but this was just a continuation to the journey I already started.
                With a few years of retail under my belt and the crucial skills learned along the way, I was ready to make programming my primary skill.
                My communication skills, ability to listen and understand problems at hand, and my ability to know where to find the answer, even when there isn't an obvious one present, has set me up for any challenge that comes my way.
                The biggest thing I have learned and hold true to my everyday life is to always feel comfortable being uncomfortable.
            </p>
        </div>
    )
}

export default Home