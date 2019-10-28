import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="content">
                <div className="container">
                    <div className="columns">
                        <div className="column is-three-quarters">Created by @juansinmiedos</div>
                        <div className="column is-one-quarter has-text-right">
                            <a href="https://github.com/juansinmiedos" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github"></i>&nbsp;GitHub <br />
                            </a>
                            <a href="https://www.linkedin.com/in/vidaldominguez/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin"></i>&nbsp;LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
