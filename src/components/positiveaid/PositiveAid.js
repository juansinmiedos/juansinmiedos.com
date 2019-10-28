import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import Contact from '../contact/Contact'

export default function PositiveAid() {

    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

    function Card() {
        const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
        return (
            <animated.div
            className="card"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
            />
        )
    }

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

            {/* <!-- (+)aid --> */}
            <section>
                <div className="container">
                    <div className="columns is-vcentered is-multiline">
                        <div className="column is-three-quarters">
                            <span className="tag is-success is-medium"><i className="fa fa-star"></i>&nbsp;Winner</span>
                            <h1 className="title">(+)aid</h1>
                            <p className="subtitle">Complete MERN Stack</p>
                            
                            <p className="subtitle">
                                (+)aid is both a medical platform in which people who lives with HIV can create an account, upload their lab results, track their records, upload their medication scheme and schedule medical appointments.<br />The 
                            </p>
                            <span className="tag is-info is-medium">HTML5</span>
                            <span className="tag is-info is-medium">CSS3</span>
                            <span className="tag is-info is-medium">JavaScript</span>
                            <span className="tag is-info is-medium">MongoDB</span>
                            <span className="tag is-info is-medium">Express</span>
                            <span className="tag is-info is-medium">Node.js</span>
                            <span className="tag is-info is-medium">React</span>
                            <span className="tag is-info is-medium">Victory</span>
                            <span className="tag is-info is-medium">Cloudinary</span>
                            <span className="tag is-info is-medium">Passport</span>
                        </div>
                        <div className="column is-full">
                            <img className="box-image" src="/prin-+aid.png" alt="Yucaterco-principal" />
                        </div>
                    </div>
                    <div className="columns is-centered is-vcentered">
                        <div className="column is-centered">
                            {Card()}
                        </div>
                        <div className="column">
                            <h1 className="title">About this project</h1>
                            <p className="subtitle">
                                Yucaterco is a project developed in 4 days:from Monday 26th to Thursday 29th August, 2019 and was presented on Friday August 30th, as final exam of the 1st Module of Ironhack's Full Time Web Development Bootcamp.<br /><br />
                                The idea of this game originated from my experience as a foraigner living in Mérida: Yucaterco is part a tribute and part a mockery of people of Yucatan, especially those who consider that the people migrating to Mérida are "invadors" destroying their culture. FYI: My friends in Yucatan took a good laugh when they played it ;) <br /><br />
                                All of the graphic resources used on the videogame were designed by me, taking as inspiration the characters of the classNameic game: Mario Bros. <br /><br />
                                With this project I was chose one of the three winners of the 1st Module of my generation. <br /><br />
                                DISCLAIMER: Not a single Yucatecan was harmed during the creation of this game.
                            </p>
                            <button className="button is-info is-medium"><i className="fa fa-github"></i>&nbsp;See project on GitHub</button>
                        </div>
                    </div>
                    <div className="columns scrolling-wrapper-flexbox">
                        <div className="column is-half">
                            <img className="box-image" src="/1+aid.png" alt="Yucaterco-principal" />    
                        </div>
                        <div className="column is-half">
                            <img className="box-image" src="/4-+aid.png" alt="Yucaterco-principal" />    
                        </div>
                        <div className="column is-half">
                            <img className="box-image" src="/3+aid.png" alt="Yucaterco-principal" />    
                        </div>
                        <div className="column is-half">
                            <img className="box-image" src="/2+aid.png" alt="Yucaterco-principal" />    
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </>
    )
}
