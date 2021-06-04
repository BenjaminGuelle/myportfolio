import React from 'react';
import './style.scss';

function Home() {
    return (
        <main className="home">
            <section className="hero">
                <div className="banner" />
                <div className="hero-titles">
                    <span className="hero-titles-span title-name">ben</span>
                    <span className="hero-titles-span title-date">15052020</span>
                </div>
                <div className="subtitles">
                    <span className="subtitles-span">développeur web</span>
                    <span className="subtitles-span">caen / france</span>
                </div>
            </section>
            <section className="portfolio-home">
                <div className="banner-portofolio" />
                <div className="projects-home project-2021">
                    <span>portfolio v1</span>
                    <span>taratata bijoux</span>
                    <span>casting7</span>
                </div>
                <div className="projects-home project-2020">
                    <span>sarl stéphane michel</span>
                    <span>emeka.fr</span>
                </div>
            </section>
            
        </main>
    )
}

export default Home


            