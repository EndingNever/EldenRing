import React from 'react'
import './Shopnow.css'
// import '../consoles-svg/consoles'
import { xbox, ps5, xbone, ps4, pc, shopSVGLarge, shopSVG } from '../consoles-svg/consoles';
import News from '../News/News';
// import Follow from '../FollowUs/Follow';

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => number * 2);
// const listItems = numbers.map((number) => {
//     <li>{number}</li>
// })

export default function Shopnow() {
    return (
        <div className='shopnow-container'>
            <div className="top-row">
                <div className="shopnow">
                    {shopSVGLarge}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fillOpacity={0.4} width="100" height="100" viewBox="0 0 20 20"><path d="M15.894 4.079h-1.735a4.116 4.116 0 00-8.232.075v.834c0 .262.213.475.476.475h4.17a.717.717 0 00.767-.667.717.717 0 00-.717-.717H7.362a2.727 2.727 0 012.727-2.661 2.686 2.686 0 012.636 2.677v.934c0 .263.213.476.475.476h1.735l.717 13.052H4.435l.717-13.761a.717.717 0 00-1.435 0L3 19.516a.475.475 0 00.475.484h13.136a.475.475 0 00.476-.475l-.743-14.971a.475.475 0 00-.45-.475z" fill="#FFF" fill-rule="evenodd" /></svg> */}
                    <h1>Shop Now</h1>
                </div>
                <div className="country">
                    Select your country: <select className='select-country'> <option value="United States"> United States </option> </select>
                </div>
            </div>
            <div className="platform-row">
                <h2>Select Your Platform </h2>
                <div className="platform-row-consoles">
                    <div className="pr-console pr-console-xbox">{xbox}</div>
                    <div className="pr-console">{ps5}</div>
                    <div className="pr-console">{xbone}</div>
                    <div className="pr-console">{ps4}</div>
                    <div className="pr-console">{pc}</div>
                </div>
            </div>
            <div className="comparison-row">
                <div className="comparison-nav-arrows">
                    <div className="nav-arrow">
                        &#8592;
                    </div>
                    <h1>
                        1 <span className='out-of-5'>/ 5</span>
                    </h1>
                    <div className="nav-arrow">
                        &#8594;
                    </div>
                </div>
                <div className="comparison-chart">
                    <h3><u>Comparison Chart</u></h3>
                    <div className="comparison-cards">
                        <div className="comparison-card">
                            <div className="comparison-card-photo card1">
                                {/* photo */}
                            </div>
                            <div className="comparison-card-text card-text-1">
                                <h2>Standard Edition</h2>
                                <button className='comparison-button official-store'><span className='comparison-shop-SVG'>{shopSVG}</span> Official Store</button>
                                <button className='comparison-button'>Retailers</button>
                                <div className="comparison-details">
                                    <h4>Details</h4>
                                    <p>+</p>
                                </div>
                            </div>
                        </div>
                        <div className="comparison-card">
                            <div className="comparison-card-photo card2">
                            </div>
                            <div className="comparison-card-text">
                                <h2>Digital Deluxe Edition</h2>
                                <button className='comparison-button'>Retailers</button>
                                <div className="comparison-details">
                                    <h4>Details</h4>
                                    <p>+</p>
                                </div>
                            </div>
                        </div>
                        <div className="comparison-card">
                            <div className="comparison-card-photo card3">
                            </div>
                            <div className="comparison-card-text">
                                <h2>Launch Edition</h2>
                                <button className='comparison-button official-store'><span className='comparison-shop-SVG'>{shopSVG}</span> Official Store</button>
                                <div className="comparison-details">
                                    <h4>Details</h4>
                                    <p>+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="elegant-border-row">
                <div className="elegant-border">
                    {/* Picture of Border */}
                </div>
            </div>
            <div className="guides-advice">
                <div className="guides-title">
                    <h1>
                        ELDEN RING: Guides & Advice
                    </h1>
                    <p>
                        Get ready for your journey through the Lands Between
                    </p>
                </div>
                <div className="guide-cards">
                    <div className="guide-card guide-card-1">
                        {/* background-photo */}
                    </div>
                    <div className="guide-card guide-card-2">
                        {/* background-photo */}
                    </div>
                    <div className="guide-card guide-card-3">
                        {/* background-photo */}
                    </div>
                </div>
                <div className="guides-button">
                    <button>SEE ALL GUIDES</button>
                </div>
                <div className="elegant-space-container">
                    <div className="elegant-space">
                        {/* Ornament Background */}
                    </div>
                </div>
                <div className="tarnished-text-container">
                    <div className="guides-title">
                        <h1>Tarnished of the Lands Between</h1>
                    </div>
                    <div className="tarnished-text">
                        <p>
                            The Golden Order has been shattered. Throughout the Lands Between, Demigods holding shards of the Elden Ring squabble and make war over the ruins of a perfect realm, now abandoned by the golden guidance of the Greater Will.
                        </p>
                        <p>
                            As the echoes of this conflict thunder in the distance, an outcast arrives. Once, their ancestors called the Lands Between home, but the blessed light of grace was lost to their tribe long ago and they were expelled from the kingdom. They are the Tarnished, and they have returned to claim the Elden Lordship promised to them by legend.
                        </p>
                        <p>
                            This is the world of ELDEN RING. As a Tarnished, the Lands Between await your exploration. You will ride through the vast fields, gallop over rolling hills, and leap to the top of rocky crags on your ephemeral steed, revealing a world teeming with life and danger.
                        </p>
                        <p>
                            In the grand fields where your journey begins, mythic creatures prowl the veldts, ineffable horrors lurk in the bogs and marshes, and all manner of soldiers and itinerant warriors are waiting for those who wander unawares. Shy creatures nibble on sweet grasses or scuttle through the underbrush.
                        </p>
                        <p>
                            Those few inhabitants who are not mad or hostile linger near the broken remnants of cities left behind by the Shattering. They may have answers for you, if you help them. Above them all, ensconced in vast legacies bristling with traps, secrets, and guardians, the Demigods – warped Lords who began as members of a royal and noble family – rule their domains with the unyielding power granted by shards of the Elden Ring.
                        </p>
                    </div>
                </div>
                <div className="guide-screenshots">
                    <div className="elegant-border">{/* img */}</div>
                    <div className="screenshots-container">
                        <div className="screenshots screenshot-1">
                            {/* Image */}
                        </div>
                        <div className="screenshots screenshot-2">
                            {/* Image */}
                        </div>
                        <div className="screenshots screenshot-3">
                            {/* Image */}
                        </div>
                    </div>
                    <div className="elegant-border">{/* img */}</div>
                </div>
                <div className="guide-text-under-screenshots">
                    <p>
                        The guidance of lost graces – should you find them - will put you on a road to re-take these lands from the Demigods through might and magic, but you need not follow their path.
                    </p>
                    <p>
                        The choice is yours. Do you crave power, or do you seek understanding? Decide for yourself, then build your character as you see fit.
                    </p>
                    <p>
                        Try dozens of skills and find one to best suit your style. Practice stealth to avoid danger or catch enemies unaware. Use the environment, the weather, and the time of day to gain an advantage. Learn the art of combat , where you must read your enemy’s intentions and a well-timed dodge or parry could be the difference between life and death. Ride your steed into battle against mounted mercenaries and cut them from their horses. Master arcane spells from the masters that still linger among the ruins of the war. Summon familiar spirits to even the odds against you or call on your fellow Tarnished to fight at your side and share the burden as you explore. Or, delve into the complex, bloody history of the Shattering and discover the lost secrets of the Demigods and their kin. All these paths are possible, and more.
                    </p>
                    <p>
                        Ultimately, your journey will be defined by the strength of your own ambition. The greater your goals, the greater the challenge will be. Should you choose to claim the Lands Between as your birthright then yes, you must fight.
                    </p>
                    <h3>And yes, you may die.</h3>
                    <h3>But you will return to fight again.</h3>
                    <h3>For that is how a champion – or a Lord – is born.</h3>
                </div>
                <div className="elegant-space-container">
                    <div className="elegant-space">
                        {/* Ornament Background */}
                    </div>
                </div>
            </div>

            <div className="news-component-container">
                <News />
            </div>
            
            {/* <div className="follow-us-component-container">
                <Follow />
            </div> */}
            
            
            
        </div >
    )
}
