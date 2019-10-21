import React from 'react'
import { Link } from 'react-router-dom'

export default function PositiveAid() {
    return (
        <>
            <section class="hero is-info is-bold">
                <div class="hero-head">
                    <nav class="navbar">
                        <div class="container">
                            <div class="navbar-brand">
                                <Link to="/" class="navbar-item">@juansinmiedos</Link>
                                <span class="navbar-burger burger" data-target="navbarMenuHeroB">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>

            {/* <!-- (+)aid --> */}
            <section>
                <div class="container">
                    <div class="columns is-vcentered is-multiline">
                        <div class="column is-three-quarters">
                            <span class="tag is-success is-medium"><i class="fas fa-star"></i>&nbsp;Winner</span>
                            <h1 class="title">(+)aid</h1>
                            <p class="subtitle">Complete MERN Stack</p>
                            
                            <p class="subtitle">
                                (+)aid is both a medical platform in which people who lives with HIV can create an account, upload their lab results, track their records, upload their medication scheme and schedule medical appointments.<br />The 
                            </p>
                            <span class="tag is-info is-medium">HTML5</span>
                            <span class="tag is-info is-medium">CSS3</span>
                            <span class="tag is-info is-medium">JavaScript</span>
                            <span class="tag is-info is-medium">MongoDB</span>
                            <span class="tag is-info is-medium">Express</span>
                            <span class="tag is-info is-medium">Node.js</span>
                            <span class="tag is-info is-medium">React</span>
                            <span class="tag is-info is-medium">Victory</span>
                            <span class="tag is-info is-medium">Cloudinary</span>
                            <span class="tag is-info is-medium">Passport</span>
                        </div>
                        <div class="column is-full">
                            <img class="box-image" src="/prin-+aid.png" alt="Yucaterco-principal" />
                        </div>
                    </div>
                    <div class="columns is-centered">
                        <div class="column">
                            <div class="columns is-multiline is-vcentered">
                                <div class="column is-half has-text-centered"><img src="/yucaterco.png" width="50%" alt="yucaterco" /></div>
                                <div class="column is-half has-text-centered"><img src="/yucaterca.png" width="50%" alt="yucaterca" /></div>
                                <div class="column is-half has-text-centered"><img src="/campechanito.png" width="50%" alt="campechanito" /></div>
                                <div class="column is-half has-text-centered"><img src="/campechanita.png" width="50%" alt="campechanita" /></div>
                                <div class="column is-half has-text-centered"><img src="/tabasqueñito.png" width="50%" alt="tabasqueñito" /></div>
                                <div class="column is-half has-text-centered"><img src="/chilanguito.png" width="50%" alt="chilanguito" /></div>
                            </div>
                        </div>
                        <div class="column">
                            <h1 class="title">About this project</h1>
                            <p class="subtitle">
                                Yucaterco is a project developed in 4 days:from Monday 26th to Thursday 29th August, 2019 and was presented on Friday August 30th, as final exam of the 1st Module of Ironhack's Full Time Web Development Bootcamp.<br /><br />
                                The idea of this game originated from my experience as a foraigner living in Mérida: Yucaterco is part a tribute and part a mockery of people of Yucatan, especially those who consider that the people migrating to Mérida are "invadors" destroying their culture. FYI: My friends in Yucatan took a good laugh when they played it ;) <br /><br />
                                All of the graphic resources used on the videogame were designed by me, taking as inspiration the characters of the classic game: Mario Bros. <br /><br />
                                With this project I was chose one of the three winners of the 1st Module of my generation. <br /><br />
                                DISCLAIMER: Not a single Yucatecan was harmed during the creation of this game.
                            </p>
                            <button class="button is-info is-medium"><i class="fas fa-gamepad"></i>&nbsp;Play the game!</button>
                            <button class="button is-info is-medium"><i class="fab fa-github"></i>&nbsp;See project on GitHub</button>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <img class="box-image" src="/1+aid.png" alt="Yucaterco-principal" />    
                        </div>
                        <div class="column">
                            <img class="box-image" src="/3-yuca.png" alt="Yucaterco-principal" />    
                        </div>
                        <div class="column">
                            <img class="box-image" src="/3+aid.png" alt="Yucaterco-principal" />    
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="container">
                    <div class="columns">
                        <div class="column">
                            <h2 class="title">Let's work together!</h2>
                            <p class="subtitle">If you are looking for a developer </p>
                            <p class="subtitle">If you are looking for a developer </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
