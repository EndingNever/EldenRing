import React from 'react'
// import KFVideo from './keyfeatures-video/KFVideo'
import './KeyFeatures.css'

export default function KeyFeatures() {
  const image = [
    {
      url: '/images/KeyFeatures/kf-video-01.webm'
    },
    {
      url: '/images/KeyFeatures/kf-video-02.webm'
    },
    {
      url: '/images/KeyFeatures/kf-video-03.webm'
    },
  ]

  return (
    <div className='keyfeatures-container'>
      <h1>Key Features</h1>
      <div className="KF-text-container">
        <div className="KF-video-text">
          <div className='KFVideo-container'> {/* Video 1 */}
            <div className="KFVideo-container-video">
              <video autoPlay loop muted src={image[0].url} alt="" />
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
        </div>
        <div className="KF-video-text">
          <div className='KFVideo-container '> {/* Video 2 */}
            <div className="KFVideo-container-text ">
              <div className="KFVideo-overlap-text video-2-title">
                <h2>WORLD EXPLORATION IN THE LANDS BETWEEN</h2>
              </div>
              <div className="KFVideo-body-text KFVideo-container-2">
                <p>
                  ELDEN RING features vast fantastical landscapes and shadowy, complex dungeons that are connected seamlessly.
                </p>
                <p>
                  Traverse the breathtaking world on foot or on horseback, alone or online with other players, and fully immerse yourself in the grassy plains, suffocating swamps, spiraling mountains, foreboding castles and other sites of grandeur on a scale never seen before in a FromSoftware title.
                </p>
              </div>
            </div>
            <div className="KFVideo-container-video">
              <video autoPlay loop muted src={image[1].url} alt="" />
            </div>
          </div>
        </div>
        <div className="KF-video-text">
          <div className='KFVideo-container'> {/* Video 3 */}
            <div className="KFVideo-container-video">
              <video autoPlay loop muted src={image[2].url} alt="" />
            </div>
            <div className="KFVideo-container-text">
              <div className="KFVideo-overlap-text">
                <h2>GENRE DEFINING GAMEPLAY</h2>
              </div>
              <div className="KFVideo-body-text">
                <p>
                  Create your character in FromSoftware's refined action-RPG and define your playstyle by experimenting with a wide variety of weapons, magical abilities, and skills found throughout the world.
                </p>
                <p>
                  Charge into battle, pick off enemies one-by-one using stealth, or even call upon allies for aid. Many options are at your disposal as you decide how to approach exploration and combat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='KF-border-bottom'>
          <img src={process.env.PUBLIC_URL + "/images/border.png"} alt="" width="80%" height="auto" />
      </div>
    </div>
  )
}
