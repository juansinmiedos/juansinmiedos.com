import React from 'react'
import { useSpring, animated } from 'react-spring'
import Contact from '../contact/Contact'
import Navbar from '../navbar/Navbar'

export default function PositiveAid() {

    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

    function Card() {
        const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 200, friction: 80 } }))
        return (
            <animated.div
            className="animated-card"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
            />
        )
    }

    return (
        <>
            <Navbar />

            <div className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered is-vcentered is-multiline">
                            <div className="column is-three-quarters">
                                <span className="tag is-success is-medium"><i className="fa fa-star"></i>&nbsp;Winner</span>
                                <h1 className="title">(+)aid</h1>
                                <p className="subtitle">
                                    <b>Complete MERN Stack</b><br />
                                    (+)aid is a platform in which people who lives with HIV can create an account, upload their lab results, track their medical records, upload their medication scheme and schedule appointments.<br />Although this was an academic project, I am currently working on it for a future release.
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
                                <span className="tag is-info is-medium">React-spring</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column is-full">
                            <img className="box-image" src="/prin-+aid.png" alt="Yucaterco-principal" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="columns is-centered is-vcentered">
                        <div className="column is-centered">
                            {Card()}
                        </div>
                        <div className="column">
                            <h1 className="title">About this project</h1>
                            <p className="subtitle">
                                (+)aid is a project developed in 10 days: from Monday, September 30th to Wednesday, October 9th, 2019 and was presented on Thursday October 10th, as final exam of the last Module of Ironhack's Full Time Web Development Bootcamp, and subsequently the next day on Ironhack's Hackshow.<br /><br />
                                The idea came-up when I met a co-worker living with HIV who started to educate us all about his condition. As a result of this I realize that nowadays the biggest problem with HIV is that people don't know about it enough, even people that are currently living with it. This ignorance (and often fear) put their lives at risk, as they do not know their status and cannot start treatment to help them maintain a good quality of life.<br /><br />
                                (+)aid helps this people by providing a platform that would track all their data and save it as a medical record, asweel as providing constant information about their status and even some reccomendations for a general lifestyle.<br /><br />
                                For the making of this platform I interviewed people with HIV, social workers and doctors to draw a user-centered roadmap, and focused on the main functionality to present the MVP as my final project. Feel free to check the roadmap of my project on GitHub.<br /><br />
                                With this project I was chosen one of the three winners of the last Module, and presented it on Ironhack's Hackshow.
                            </p>
                            <button className="button is-info is-medium"><i className="fa fa-github"></i>&nbsp;See project on GitHub</button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
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
