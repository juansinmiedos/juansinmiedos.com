import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <section className="hero is-info is-fullheight is-bold">
                    <div className="hero-head">
                        <nav className="navbar">
                            <div className="container">
                                <div className="navbar-brand">
                                    <Link to="/" className="navbar-item">@juansinmiedos</Link>
                                    <span className="navbar-burger burger" data-target="navbarMenuHeroB">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </div>
                            </div>
                        </nav>
                    </div>
                <div className="hero-body">
                    <div className="container has-text-left">
                        <div className="columns is-vcentered">
                            <div className="column">
                                <img src="./profile.png" alt="profile" />
                            </div>
                            <div className="column">
                                <p className="hero-subtitle">@juansinmiedos</p>
                                <p className="hero-title">FULL STACK <br/> WEB DEVELOPER</p><br/>
                                <p className="hero-subtitle">Soon here will be adescription of my main projects. In the meantime feel free to connect with me on LinkedIn or see my repositories on GitHub.</p><br/>
                                <button className="button is-info is-inverted"><i className="fa fa-github"></i>&nbsp;GitHub</button>
                                <button className="button is-info is-inverted"><i className="fa fa-linkedin"></i>&nbsp;LinkedIn</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="columns is-vcentered is-multiline">
                        <div className="column is-three-quarters">
                            <h1 className="title">My Skills</h1>
                            <p className="subtitle">
                                I have taken a <b>Full-time Web Development Bootcamp</b> in <b>Ironhack</b> where I learned how to create single pages applications using the <b>MERN</b> stack. <b>MongoDB</b>, <b>Express</b>, <b>React</b> and <b>Node.js</b><br/><br/>Some of the tools I am capable to use now are:
                            </p>
                        </div>
                        <div className="column is-full">
                            <table className="table is-fullwidth">
                                <tbody>
                                    <tr>
                                        <td>HTML5</td>
                                        <td>CSS3</td>
                                        <td>JavaScript ES7</td>
                                        <td>React</td>
                                    </tr>
                                    <tr>
                                        <td>Git</td>
                                        <td>Bulma</td>
                                        <td>Bootstrap</td>
                                        <td>Handlebars</td>
                                    </tr>
                                    <tr>
                                        <td>Cloudinary</td>
                                        <td>Mapbox</td>
                                        <td>Passport</td>
                                        <td>Chart.js</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

        {/* // Banner My Projects
        // <section className="hero is-medium is-light is-bold">
        //     <div className="hero-body">
        //         <div className="container">
        //             <h1 className="title">My projects</h1>
        //             <h2 className="subtitle">Primary bold subtitle</h2>
        //         </div>
        //     </div>
        // </section> */}

            <section>
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <h2 className="title">Let's work together!</h2>
                            <p className="subtitle">If you are looking for a developer </p>
                            <p className="subtitle">If you are looking for a developer </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
