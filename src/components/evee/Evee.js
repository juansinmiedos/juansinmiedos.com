import React from 'react'
import Contact from '../contact/Contact'
import Navbar from '../navbar/Navbar'

export default function Evee() {
    return (
        <>
            <Navbar />

            <div className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered is-vcentered is-multiline">
                            <div className="column is-three-quarters">
                                <span className="tag is-warning is-medium"><i className="fa fa-star"></i>&nbsp;Honorary Mention</span>
                                <h1 className="title">Evee</h1>
                                <p className="subtitle">
                                    <b>Backend project</b><br />
                                    Yucaterco is a pixel-art videogame developed using exclusively HTML5 canvas, CSS3 and JavaScript. In this game the main chracter runs through the streets of Mérida, avoiding his enemies, eating "cochinita pibil" and drinking Coke to survive: All of this with the help of his (not so helpful) companion, the Campechan.
                                </p>
                                <span className="tag is-info is-medium">HTML5</span>
                                <span className="tag is-info is-medium">CSS3</span>
                                <span className="tag is-info is-medium">JavaScript</span>
                                <span className="tag is-info is-medium">MongoDB</span>
                                <span className="tag is-info is-medium">Express</span>
                                <span className="tag is-info is-medium">Node.js</span>
                                <span className="tag is-info is-medium">Handlebars</span>
                                <span className="tag is-info is-medium">Mapbox</span>
                                <span className="tag is-info is-medium">Cloudinary</span>
                                <span className="tag is-info is-medium">Passport</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column is-full">
                            <img className="box-image" src="/prin-evee.png" alt="Yucaterco-principal"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="columns is-centered is-vcentered">
                        <div className="column is-three-quarters">
                            <h1 className="title">About this project</h1>
                            <p className="subtitle">
                                This project was developed in pair-programming, in a 4 day period, to be presented as the project for 2nd module of Ironhack's Full Time Web Development Bootcamp.<br /><br />
                                The idea came of my partner experience when he worked as assistant in the Wedding Planning company of his cousin, where he saw some of the challenges that a wedding planner faces on every proyect. <br /><br />
                                Taking note on the user's pain points we decided to develop a Web App focused on offer a solution to that situation: We created a Market place where a Wedding Planner can submit offers and suppliers can bet on them. <br /><br />
                                This project was named Honorary Mention as one of the top projects on that generation's 2nd module
                            </p>
                            <a href="https://github.com/juansinmiedos/Evee" rel="noopener noreferrer" target="_blank">
                                <button className="button is-info is-medium"><i className="fa fa-github"></i>&nbsp;See project on GitHub</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="columns is-vcentered scrolling-wrapper-flexbox">
                            <div className="column is-half">
                                <img className="box-image" src="/2-evee.png" alt="Yucaterco-principal" />    
                            </div>
                            <div className="column is-half">
                                <img className="box-image" src="/1-evee.png" alt="Yucaterco-principal" />    
                            </div>
                            <div className="column is-half">
                                <img className="box-image" src="/3-evee.png" alt="Yucaterco-principal" />    
                            </div>
                            <div className="column is-half">
                                <img className="box-image" src="/4-evee.png" alt="Yucaterco-principal" />    
                            </div>
                        </div>
                </div>
            </section>

            <Contact />
        </>
    )
}
