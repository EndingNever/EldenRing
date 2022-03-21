import React from 'react'
import './KFVideo.css'

export default function KFVideo(props) {


    return (
        <div className='KFVideo-container'>
            <div className="KFVideo-container-video">
                <video autoPlay loop muted src={props.image[0].url} alt="" />
            </div>
            <div className="KFVideo-container-text">
                <div className="KFVideo-overlap-text">
                    <h2>A New Fantasy World</h2>
                </div>
                <div className="KFVideo-body-text">
                    <p>
                        Journey through the Lands Between, a new fantasy world created by Hidetaka Miyazaki, creator of the influential DARK SOULS video game series, and George R. R. Martin, author of The New York Times best-selling fantasy series, A Song of Ice and Fire.
                    </p>
                    <p>
                        Unravel the mysteries of the Elden Ring’s power. Encounter adversaries with profound backgrounds, characters with their own unique motivations for helping or hindering your progress, and fearsome creatures.
                    </p>
                </div>
            </div>
        </div>
    )
}
