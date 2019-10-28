import React from 'react'
import { Link } from 'react-router-dom'
import Contact from '../contact/Contact'

export default function Yucaterco() {
    return (
        <>
            <section className="hero is-info is-bold">
                <div className="hero-head">
                    <nav className="navbar">
                        <div className="container">
                            <div className="navbar-brand">
                                <Link to="/" className="navbar-item">@juansinmiedos</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>

            {/* <!-- Yucaterco --> */}
            <section>
                <div className="container">
                    <div className="columns is-vcentered is-multiline">
                        <div className="column is-three-quarters">
                            <span className="tag is-success is-medium"><i className="fa fa-star"></i>&nbsp;Winner</span>
                            <h1 className="title">Yucaterco</h1>
                            <p className="subtitle"><b>Web development basics</b></p>
                            <p className="subtitle">
                                Yucaterco is a pixel-art videogame developed using exclusively HTML5 canvas, CSS3 and JavaScript. In this game the main chracter runs through the streets of Mérida, avoiding his enemies, eating "cochinita pibil" and drinking Coke to survive: All of this with the help of his (not so helpful) companion, the Campechan.
                            </p>
                            <span className="tag is-info is-medium">HTML5</span>
                            <span className="tag is-info is-medium">CSS3</span>
                            <span className="tag is-info is-medium">JavaScript</span>
                        </div>
                        <div className="column is-full">
                            <div className="column">
                                <img className="box-image" src="/prin-yuca.png" alt="Yucaterco-principal" />
                            </div>
                        </div>
                    </div>
                    <div className="columns is-centered">
                        
                        <div className="column">
                            <h1 className="title">About this project</h1>
                            <p className="subtitle">
                                Yucaterco is a project developed in 4 days: from Monday 26th to Thursday 29th August, 2019 and was presented on Friday August 30th, as final exam of the 1st Module of Ironhack's Full Time Web Development Bootcamp.<br /><br />
                                The idea of this game originated from my experience as a foraigner living in Mérida: Yucaterco is part a tribute and part a mockery of people of Yucatan, especially those who consider that the people migrating to Mérida are "invadors" destroying their culture. FYI: My friends in Yucatan took a good laugh when they played it ;) <br /><br />
                                All of the graphic resources used on the videogame were designed by me, taking as inspiration the characters of the classic game: Mario Bros. <br /><br />
                                With this project I was chosen one of the three winners of the 1st Module of my generation. <br /><br />
                                DISCLAIMER: Not a single Yucatecan was harmed during the creation of this game.
                            </p>
                            <button className="button is-info is-medium"><i className="fa fa-gamepad"></i>&nbsp;Play the game!</button>
                            <button className="button is-info is-medium"><i className="fa fa-github"></i>&nbsp;See project on GitHub</button>
                        </div>
                        <div className="column">
                            <div className="columns is-multiline is-vcentered">
                                <div className="column is-half has-text-centered"><img src="/yucaterco.png" width="50%" alt="yucaterco" /></div>
                                <div className="column is-half has-text-centered"><img src="/yucaterca.png" width="50%" alt="yucaterca" /></div>
                                <div className="column is-half has-text-centered"><img src="/campechanito.png" width="50%" alt="campechanito" /></div>
                                <div className="column is-half has-text-centered"><img src="/campechanita.png" width="50%" alt="campechanita" /></div>
                                <div className="column is-half has-text-centered"><img src="/tabasqueñito.png" width="50%" alt="tabasqueñito" /></div>
                                <div className="column is-half has-text-centered"><img src="/chilanguito.png" width="50%" alt="chilanguito" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="columns scrolling-wrapper-flexbox">
                        <div className="column is-half">
                            <img className="box-image" src="/2-yuca.png" alt="Yucaterco-principal" />    
                        </div>
                        <div className="column is-half">
                            <img className="box-image" src="/3-yuca.png" alt="Yucaterco-principal" />    
                        </div>
                        <div className="column is-half">
                            <img className="box-image" src="/1-yuca.png" alt="Yucaterco-principal" />    
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </>
    )
}
