import React from 'react'
import { Link } from 'react-router-dom'

export default function PreviousWork() {
    return (
        <div className="hero is-medium is-light is-bold">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">What I've done</h1>
                    <p className="subtitle">I like to keep myself busy with something to do. Here are some of my recent work. <br />Feel free to take a look at them!<br /><br /></p>
                </div>
                <div className="container">
                    <div className="columns is-centered is-vcentered is-multiline">
                        <div className="column">
                            <Link to="/yucaterco">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-4by3 yuca"></figure>
                                </div>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-content">
                                            <p class="title is-4">Yucaterco</p>
                                        </div>
                                    </div>

                                    <div class="content">
                                    Pixel-art vintage runner videogame with Yucatecan theme.
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>

                        <div className="column">
                            <Link to="/evee">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-4by3 evee"></figure>
                                </div>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-content">
                                            <p class="title is-4">Evee</p>
                                        </div>
                                    </div>

                                    <div class="content">
                                    Marketplace web app for Wedding Planners and Suppliers.
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>

                        <div className="column">
                            <Link to="/positiveaid">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-4by3 aid"></figure>
                                </div>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-content">
                                            <p class="title is-4">(+)aid</p>
                                        </div>
                                    </div>

                                    <div class="content">
                                    Online platform that provides information and medical tracking to HIV patients.
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
