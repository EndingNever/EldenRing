import React from 'react'
import './News.css'
import { heartSVG } from '../consoles-svg/consoles'

export default function News() {
    return (
        <div className='news-container'>
            <div className="news-title">
                <h1>News</h1>
            </div>
            <div className="news-item-container">
                <div className="news-item-col left-column">
                    <div className="current-patch-photo">
                        {/* photo */}
                    </div>
                    <div className="current-patch-text">
                        <div className="current-patch-date">
                            <p>23 March 2022</p>
                        </div>
                        <div className="current-patch-desc">
                            <h2>ELDEN RING : Patch Notes 1.03.2</h2>
                        </div>
                    </div>
                </div>
                <div className="news-item-col right-column">
                    <span className='triangle'>&#129168;</span>
                    <div className="previous-news">
                        <div className="previous-news-photo background-image-resizing prev-news-photo-1">
                            {/* Photo */}
                        </div>
                        <div className="previous-news-text pn-current">
                            <div className="previous-news-text-container">
                                <p>22 March 2022</p>
                                <p className='heartsvg'>132 {heartSVG}</p>
                            </div>
                            <h3>ELDEN RING : Patch Notes 1.03.2</h3>
                        </div>
                    </div>
                    <div className="previous-news">
                        <div className="previous-news-photo background-image-resizing prev-news-photo-2">
                            {/* Photo */}
                        </div>
                        <div className="previous-news-text">
                            <div className="previous-news-text-container">
                                <p>17 March 2022</p>
                                <p className='heartsvg'>75 {heartSVG}</p>
                            </div>
                            <h3>Elden Ring - Patch Notes Version 1.03</h3>
                        </div>
                    </div>
                    <div className="previous-news">
                        <div className="previous-news-photo background-image-resizing prev-news-photo-3">
                            {/* Photo */}
                        </div>
                        <div className="previous-news-text">
                            <div className="previous-news-text-container">
                                <p>16 March 2022</p>
                                <p className='heartsvg'>75 {heartSVG}</p>
                            </div>
                            <h3>ELDEN RING reaches 12 million units sold worldwide</h3>
                        </div>
                    </div>
                    <div className="previous-news">
                        <div className="previous-news-photo background-image-resizing prev-news-photo-4">
                            {/* Photo */}
                        </div>
                        <div className="previous-news-text">
                            <div className="previous-news-text-container">
                                <p>09 March 2022</p>
                                <p className='heartsvg'>27 {heartSVG}</p>
                            </div>
                            <h3>ELDEN RING: Influencer videos to guide your journey</h3>
                        </div>
                    </div>
                    <div className="previous-news-button">
                        <button>
                            See All News!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
