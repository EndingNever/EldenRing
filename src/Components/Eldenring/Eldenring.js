import React from 'react'
import './Eldenring.css'

export default function Eldenring() {
  const videoTrailer = "https://www.youtube.com/watch?v=qqiC88f9ogU&t=2s"

  return (
    <div className='elden-container'>
      <div className="eldenring-text"></div> {/*ELDEN RING Banner text */}
      <div className="elden-ring-body-container">
        <div className="elden-ring-body-text">
          <div className="elden-ring-body-banner">
            <h1>ELDEN RING</h1>
            <p>
              <span className="gold-text">Release Date:</span> 25/02/2022 <span className="gold-text">Genres:</span> RPG <span className="gold-text">Developer:</span> FromSoftware, Inc
            </p>
            <p><u>Press kit</u></p>
          </div>
          <div className="golden-order-container">
            <div className='golden-order-text'>
              <h1>The Golden Order has been broken.</h1>
              <br />
              <p className='go-text'>Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.</p>
              <p className='go-text'>In the Lands Between ruled by Queen Marika the Eternal, the Elden Ring, the source of the Erdtree, has been shattered.</p>
              <p className='go-text'>Marika's offspring, demigods all, claimed the shards of the Elden Ring known as the Great Runes, and the mad taint of their newfound strength triggered a war: The Shattering. A war that meant abandonment by the Greater Will.</p>
              <p className='go-text'>And now the guidance of grace will be brought to the Tarnished who were spurned by the grace of gold and exiled from the Lands Between. Ye dead who yet live, your grace long lost, follow the path to the Lands Between beyond the foggy sea to stand before the Elden Ring.</p>
              <p className='go-text' id='elden-lord-bold'>And become the Elden Lord.</p>
              <div className="awards">
                <img src={process.env.PUBLIC_URL + "/images/Awards.png"} alt="" />
              </div>
              <div className="console-container">
                <div className="date-text">
                  <p>25/02/2022</p>
                </div>
                <div className="consoles">
                  <div className="console-logo xbox-series">
                    <svg fill="White" xmlns="http://www.w3.org/2000/svg" width="126" height="16" version="1.1" viewBox="0 0 126 16" aria-labelledby="title" role="img">
                      <title id="title">Microsoft Xbox Series X|S</title>
                      <path d="m8 6.42a0.0493 0.0493 0 0 1 0.0262 0.0133c2.39 1.82 6.49 6.32 5.24 7.59a8 8 0 0 1-10.5 0c-1.25-1.27 2.85-5.77 5.24-7.59a0.0524 0.0524 0 0 1 0.0276-0.0133zm4.17-5.24c-1.23-0.727-2.55-1.17-4.17-1.17-1.61 0-2.94 0.444-4.17 1.17a0.0307 0.0307 0 0 0-0.0133 0.0396 0.0316 0.0316 0 0 0 0.0387 0.0138c1.55-0.335 3.9 1 4.13 1.14a0.0262 0.0262 0 0 0 0.0338 0c0.222-0.133 2.58-1.47 4.13-1.14a0.0316 0.0316 0 0 0 0.0387-0.0138 0.0307 0.0307 0 0 0-0.0133-0.0396zm-9.77 1.12a0.14 0.14 0 0 0-0.0356 0.0271 8 8 0 0 0-0.728 10.5 0.0342 0.0342 0 0 0 0.0444 0.0129 0.0329 0.0329 0 0 0 0.00889-0.0413c-0.611-1.88 2.51-6.46 4.12-8.37a0.0369 0.0369 0 0 0 0.0111-0.0231 0.0351 0.0351 0 0 0-0.0138-0.0267c-2.44-2.43-3.27-2.17-3.4-2.1zm7.8 2.1a0.0351 0.0351 0 0 0-0.0138 0.0267 0.0369 0.0369 0 0 0 0.0111 0.0231c1.61 1.92 4.73 6.49 4.12 8.37a0.0329 0.0329 0 0 0 0.0089 0.0413 0.0342 0.0342 0 0 0 0.0444-0.0129 8 8 0 0 0-0.729-10.5 0.14 0.14 0 0 0-0.0356-0.0271c-0.133-0.0693-0.963-0.327-3.4 2.1zm17.6 8.53h-1.64l-2.82-3.88-2.82 3.88h-1.64l3.64-5-3.35-4.61h1.64l2.53 3.49 2.53-3.49h1.64l-3.35 4.61zm8.5-2.73c0 0.844-0.28 1.52-0.833 2s-1.36 0.731-2.39 0.731h-4.51v-4.28h-2.14l0.892-1.23h1.25v-4.11h4.32c0.968 0 1.72 0.232 2.24 0.69 0.516 0.458 0.779 1.07 0.779 1.82 0 0.925-0.42 1.63-1.24 2.08 0.533 0.207 0.943 0.51 1.22 0.903a2.38 2.38 0 0 1 0.418 1.39zm-6.26-2.78h2.76c0.555 0 0.978-0.124 1.25-0.37 0.276-0.246 0.416-0.619 0.416-1.11 0-0.425-0.146-0.761-0.433-1-0.287-0.239-0.702-0.36-1.23-0.36h-2.76zm4.78 2.75c0-0.505-0.152-0.889-0.453-1.14-0.3-0.252-0.76-0.38-1.36-0.38h-2.96v3.02h2.96c0.587 0 1.04-0.13 1.35-0.388 0.31-0.257 0.466-0.628 0.466-1.11zm11.4-2.05c0 0.744-0.108 1.43-0.321 2.03a4.61 4.61 0 0 1-0.962 1.6 4.23 4.23 0 0 1-1.5 1.04c-0.564 0.231-1.21 0.348-1.9 0.348-0.708 0-1.35-0.117-1.92-0.348a4.1 4.1 0 0 1-1.49-1.04 4.54 4.54 0 0 1-0.972-1.6c-0.215-0.603-0.324-1.29-0.324-2.04s0.109-1.43 0.324-2.03a4.67 4.67 0 0 1 0.972-1.61 4.1 4.1 0 0 1 1.49-1.03c0.565-0.228 1.21-0.344 1.92-0.344 0.699 0 1.34 0.116 1.9 0.344a4.23 4.23 0 0 1 1.5 1.03 4.68 4.68 0 0 1 0.962 1.62c0.213 0.604 0.321 1.29 0.321 2.03zm-7.87 0c0 1.13 0.293 2.04 0.872 2.7 0.569 0.667 1.34 1 2.31 1s1.74-0.338 2.31-1c0.569-0.65 0.858-1.56 0.858-2.7 0-1.14-0.289-2.05-0.858-2.71-0.578-0.658-1.35-0.992-2.31-0.992-0.952 0-1.73 0.334-2.31 0.992-0.576 0.676-0.87 1.59-0.87 2.71zm12.5-0.196 3.35-4.61h-1.64l-2.53 3.49-2.53-3.49h-1.64l3.35 4.61-3.64 5h1.64l2.82-3.88 2.82 3.88h1.64zm15.9-3.29v2.79h4.78v1.23h-4.77v2.96h5.4v1.32h-6.87v-9.62h6.87v1.32zm-3.38 3.84c-0.48-0.44-1.28-0.78-2.37-1.01l-0.835-0.175c-0.793-0.169-1.34-0.377-1.64-0.617-0.291-0.222-0.439-0.552-0.439-0.985 0-0.424 0.166-0.756 0.492-0.985 0.327-0.23 0.81-0.348 1.43-0.348 0.8 0 1.39 0.146 1.75 0.435 0.36 0.288 0.563 0.744 0.608 1.36v0.0133h1.45v-0.0147c-0.0182-0.942-0.348-1.69-0.981-2.23-0.633-0.539-1.59-0.811-2.84-0.811-1.04 0-1.88 0.239-2.49 0.711-0.61 0.472-0.921 1.11-0.921 1.9s0.255 1.42 0.759 1.87 1.26 0.776 2.24 0.973l0.821 0.175c0.811 0.178 1.38 0.384 1.69 0.611s0.465 0.549 0.465 0.965c0 0.513-0.191 0.911-0.566 1.18-0.376 0.27-0.925 0.408-1.63 0.408-0.85 0-1.5-0.18-1.93-0.533-0.431-0.353-0.655-0.895-0.667-1.61v-0.0209h-1.47v0.0142c0.0093 1.1 0.371 1.96 1.08 2.53 0.705 0.573 1.7 0.865 2.96 0.865 1.16 0 2.09-0.26 2.75-0.771s0.996-1.22 0.996-2.11c4.45e-4 -0.744-0.244-1.35-0.725-1.79zm17.6 3.27-0.0942-1.49c-0.0178-0.53-0.136-0.96-0.352-1.28-0.21-0.311-0.542-0.536-0.988-0.672 0.492-0.164 0.88-0.444 1.16-0.833 0.283-0.4 0.427-0.899 0.427-1.48 0-0.827-0.299-1.48-0.889-1.96s-1.4-0.711-2.43-0.711h-4.2v9.61h1.47v-3.95h2.77c0.55 0 0.955 0.128 1.2 0.38 0.245 0.252 0.387 0.691 0.414 1.3l0.0404 1.02c0.0089 0.557 0.105 0.972 0.285 1.23l4e-3 0.0062h1.51l-0.0124-0.0213c-0.164-0.284-0.271-0.676-0.315-1.16zm-5.9-7.16h2.65c0.604 0 1.08 0.131 1.4 0.388 0.324 0.257 0.488 0.643 0.488 1.15 0 0.523-0.159 0.933-0.473 1.22-0.314 0.282-0.756 0.428-1.3 0.428h-2.76zm7.37 8.35h1.47v-9.62h-1.47zm9.81-8.3v-1.32h-6.87v9.62h6.87v-1.32h-5.4v-2.96h4.78v-1.23h-4.78v-2.79zm7.83 3.84c-0.48-0.44-1.28-0.78-2.37-1.01l-0.835-0.175c-0.793-0.169-1.34-0.377-1.64-0.617-0.291-0.222-0.439-0.552-0.439-0.985 0-0.424 0.165-0.756 0.492-0.985 0.327-0.23 0.81-0.348 1.43-0.348 0.8 0 1.39 0.146 1.75 0.435 0.36 0.288 0.563 0.744 0.607 1.36v0.0133h1.45v-0.0147c-0.0182-0.942-0.348-1.69-0.981-2.23-0.633-0.539-1.59-0.811-2.84-0.811-1.04 0-1.88 0.239-2.49 0.711-0.61 0.472-0.921 1.11-0.921 1.9s0.256 1.42 0.759 1.87 1.26 0.776 2.24 0.973l0.821 0.175c0.812 0.178 1.38 0.384 1.69 0.611s0.466 0.549 0.466 0.965c0 0.513-0.191 0.911-0.567 1.18-0.376 0.27-0.925 0.408-1.63 0.408-0.85 0-1.5-0.18-1.93-0.533-0.431-0.353-0.655-0.895-0.667-1.61v-0.0191h-1.47v0.0142c0.0089 1.1 0.371 1.96 1.08 2.53 0.705 0.573 1.7 0.865 2.96 0.865 1.16 0 2.09-0.26 2.75-0.771 0.66-0.511 0.996-1.22 0.996-2.11 0-0.744-0.244-1.35-0.725-1.79zm15.6-6.36h-0.735v12h0.734zm-6.73 5.81 3.35-4.61h-1.64l-2.53 3.49-2.53-3.49h-1.63l3.35 4.61-3.64 5h1.64l2.82-3.88 2.82 3.88h1.64zm16.1 0.55c-0.48-0.44-1.28-0.78-2.37-1.01l-0.835-0.175c-0.793-0.169-1.34-0.377-1.64-0.617-0.291-0.222-0.439-0.552-0.439-0.985 0-0.424 0.166-0.756 0.492-0.985 0.327-0.23 0.81-0.348 1.43-0.348 0.8 0 1.39 0.146 1.75 0.435 0.359 0.288 0.565 0.744 0.61 1.36v0.0133h1.46v-0.0147c-0.0178-0.942-0.348-1.69-0.981-2.23-0.633-0.539-1.59-0.811-2.84-0.811-1.04 0-1.88 0.239-2.49 0.711-0.61 0.472-0.921 1.11-0.921 1.9s0.256 1.42 0.759 1.87 1.26 0.776 2.24 0.973l0.821 0.175c0.811 0.178 1.38 0.384 1.69 0.611 0.311 0.227 0.465 0.549 0.465 0.965 0 0.513-0.19 0.911-0.566 1.18s-0.925 0.408-1.63 0.408c-0.85 0-1.5-0.18-1.93-0.533-0.431-0.353-0.655-0.895-0.667-1.61v-0.0191h-1.47v0.0142c9e-3 1.1 0.371 1.96 1.08 2.53 0.705 0.573 1.7 0.865 2.96 0.865 1.16 0 2.09-0.26 2.75-0.771 0.66-0.511 0.995-1.22 0.995-2.11 0-0.744-0.244-1.35-0.725-1.79z">
                      </path>
                    </svg>
                  </div>
                  <div className="console-logo ps5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill='white' width="49.92" height="10" version="1.1" viewBox="0 0 49.92 10" aria-labelledby="title" role="img">
                      <title id="title">Sony PlayStation 5</title>
                      <path d="m10.96 4.306a1.621 1.621 0 0 0 0-3.239h-10.89a0.07053 0.07053 0 0 1-0.07053-0.07053v-0.9258a0.07053 0.07053 0 0 1 0.07053-0.07053h11.96a2.687 2.687 0 0 1 0 5.375h-8.274a1.619 1.619 0 0 0-1.621 1.619v2.932a0.07053 0.07053 0 0 1-0.07053 0.07053h-1.994a0.07053 0.07053 0 0 1-0.07053-0.07053v-2.932a2.687 2.687 0 0 1 2.687-2.687z"></path>
                      <path d="m20.3 9.996a2.686 2.686 0 0 0 2.687-2.686v-4.624a1.621 1.621 0 0 1 1.621-1.621h5.214a0.07053 0.07053 0 0 0 0.07053-0.07053v-0.9258a0.07053 0.07053 0 0 0-0.07053-0.07053h-6.283a2.687 2.687 0 0 0-2.687 2.687v4.624a1.619 1.619 0 0 1-1.619 1.619h-5.142a0.07053 0.07053 0 0 0-0.07053 0.0723v0.924a0.07053 0.07053 0 0 0 0.07053 0.07053z"></path>
                      <path d="m32.05 3.756v-3.685a0.07053 0.07053 0 0 1 0.07054-0.07053h14.2a0.07053 0.07053 0 0 1 0.07053 0.07053v0.9258a0.07053 0.07053 0 0 1-0.07053 0.07053h-12.06a0.0723 0.0723 0 0 0-0.0723 0.0723v2.4a0.7688 0.7688 0 0 0 0.7688 0.7688h8.981a2.844 2.844 0 0 1 0 5.689h-11.81a0.07053 0.07053 0 0 1-0.07053-0.07053v-0.9328a0.07053 0.07053 0 0 1 0.07053-0.07053h10.74a1.777 1.777 0 1 0-0.01234-3.548h-9.182a1.619 1.619 0 0 1-1.619-1.619z"></path>
                      <path d="m48.22 8.993h-0.335v-0.1146h0.797v0.1146h-0.3262v0.9963h-0.1358z"></path>
                      <path d="m49.37 9.875 0.3139-0.9892h0.231v1.111h-0.1305v-1.003l-0.3297 1.007h-0.1763l-0.3068-1.007v1.007h-0.1305v-1.111h0.2292z"></path>
                    </svg>
                  </div>
                  <div className="console-logo xbox-one">
                    <svg fill='white' xmlns="http://www.w3.org/2000/svg" width="81.6" height="16" version="1.1" viewBox="0 0 81.6 16" aria-labelledby="title" role="img">
                      <title id="title">Microsoft Xbox One</title>
                      <path d="m72.3 2.91v8.15l-6.11-8.15h-1.02v9.89h1.16v-8l5.96 8h1.16v-9.89zm-12.8-0.291c-2.76 0-4.8 2.18-4.8 5.24s1.89 5.24 4.8 5.24c2.76 0 4.8-2.18 4.8-5.24s-2.04-5.24-4.8-5.24zm0 9.31c-2.18 0-3.64-1.75-3.64-4.22 0-2.47 1.45-4.22 3.64-4.22s3.64 1.75 3.64 4.22c0 2.62-1.45 4.22-3.64 4.22zm16.3-0.145v-3.64h5.53v-0.873h-5.53v-3.49h5.82v-0.873h-6.98v9.89h6.98v-1.02zm-24.1 1.02-3.2-4.36-3.2 4.36h-1.31l3.78-5.24-3.35-4.65h1.31l2.91 3.93 2.91-3.93h1.31l-3.49 4.8 3.78 5.24h-1.45zm-17.5-4.8c-0.145-0.145-0.436-0.291-0.582-0.436 0.727-0.436 1.16-1.16 1.16-2.04 0-0.582-0.291-2.76-3.2-2.76h-4.07v4.22h-1.31c-0.145 0.291-0.582 0.727-0.727 1.02h2.04v4.65h4.07c2.18 0 3.49-1.16 3.49-2.91 0-0.582-0.291-1.31-0.873-1.75zm-2.76 3.78h-2.91v-3.64h2.91c1.16 0 2.47 0.291 2.47 1.75 0 1.6-1.45 1.89-2.47 1.89zm-2.91-7.85h2.91c0.727 0 2.18 0.145 2.18 1.6 0 1.02-0.727 1.6-2.18 1.6h-2.91zm11.8-1.31c-2.76 0-4.8 2.18-4.8 5.24s1.89 5.24 4.8 5.24c2.76 0 4.8-2.18 4.8-5.24-0.145-3.05-2.04-5.24-4.8-5.24zm0 9.31c-2.18 0-3.64-1.75-3.64-4.22 0-2.47 1.45-4.22 3.64-4.22s3.64 1.75 3.64 4.22c0 2.62-1.6 4.22-3.64 4.22zm-13.4 0.873-3.78-5.24 3.35-4.65h-1.31l-2.91 3.93-2.91-3.93h-1.31l3.49 4.8-3.78 5.24h1.31l3.2-4.36 3.2 4.36h1.45zm-23-11.6c1.75 0 3.35 0.727 4.22 1.31 1.02-0.582 2.47-1.31 4.22-1.31-1.31-0.727-2.76-1.16-4.22-1.16-1.45 0-3.05 0.436-4.22 1.16-0.145 0 0 0 0 0zm6.4 3.35s0 0.145-0.145 0.145c1.02 1.31 4.51 5.38 4.22 8.29 1.02-1.31 1.75-3.05 1.75-4.95 0-2.33-1.02-4.36-2.62-5.82-1.16 0.291-2.47 1.31-3.2 2.33zm-1.31 2.76c-0.291-0.291-0.582-0.582-0.873-0.727-0.436 0.145-0.727 0.436-0.873 0.727-2.04 1.89-4.8 4.22-4.65 6.55 1.45 1.31 3.49 2.18 5.67 2.18 2.18 0 4.07-0.873 5.53-2.18-0.145-2.33-2.76-4.8-4.8-6.55zm-3.05-2.62s0-0.145-0.145-0.145c-0.727-1.02-2.04-2.04-3.2-2.33-1.6 1.45-2.62 3.49-2.62 5.82 0 1.89 0.582 3.64 1.75 4.95-0.291-2.91 3.05-6.98 4.22-8.29z"></path>
                    </svg>
                  </div>
                  <div className="console-logo ps4">
                    <svg fill='white' xmlns="http://www.w3.org/2000/svg" width="49.88" height="10" version="1.2" viewBox="0 0 49.88 10" aria-labelledby="title" role="img">
                      <title id="title">Sony PlayStation 4</title>
                      <path d="m0.04748 10h2.045c0.02762-0.00977 0.0512-0.0391 0.0512-0.07742v-2.964c0-0.9488 0.5359-1.605 1.317-1.605h8.425c1.899 0 2.82-1.171 2.82-2.706 0-1.375-0.7536-2.451-2.298-2.648h-12.4c-0.003569 0.007758-0.00962 0.01381-0.00962 0.02358v0.9254c0 0.04686 0.02327 0.07044 0.06982 0.07044h11.11c0.944 0 1.387 0.6794 1.387 1.628 0 0.9489-0.4428 1.628-1.387 1.628h-8.786c-1.363-5e-8 -2.389 1.16-2.389 2.683v2.964c-1.552e-4 0.03832 0.01629 0.06749 0.04748 0.07742z"></path>
                      <path d="m23.98 7.298v-4.651c0-0.9488 0.4428-1.628 1.387-1.628h5.826c0.03569 0 0.06997-0.03538 0.06997-0.07044v-0.9254c0-0.008068-0.0023-0.01598-0.0054-0.02358h-7.123c-1.544 0.1963-2.298 1.272-2.298 2.648v4.651c0 0.9488-0.4552 1.628-1.387 1.628h-6.152c-0.03491 0-0.06997 0.02343-0.06997 0.07029v0.9255c0 0.03832 0.02358 0.06765 0.0512 0.07742h6.985c1.821-0.04779 2.717-1.21 2.717-2.701z"></path>
                      <path d="m31.23 8.927h11.19c0.03429 0 0.05756 0.02343 0.05756 0.04686v0.9489c0 0.04686 0.03569 0.07029 0.06998 0.07029h2.016c0.03569 0 0.06967-0.02343 0.06967-0.07029v-0.9255c0-0.03522 0.03569-0.07029 0.06997-0.07029h2.004c0.0467 0 0.06997-0.03522 0.06997-0.07013v-0.9373c0-0.03522-0.02327-0.07029-0.06997-0.07029h-2.004c-0.03429 0-0.06997-0.03522-0.06997-0.07029v-6.759c-6e-6 -0.5516-0.205-0.9029-0.5496-1.019h-0.5834c-0.1818 0.0467-0.3795 0.1303-0.5915 0.2577l-12.05 7.439c-0.4661 0.2928-0.6295 0.6206-0.5128 0.8667 0.09309 0.211 0.3604 0.3634 0.8856 0.3634zm1.748-1.242 9.334-5.775c0.0588-0.04686 0.1755-0.03506 0.1755 0.09372v5.775c0 0.03522-0.03569 0.07029-0.06998 0.07029h-9.382c-0.08084 0-0.1167-0.02327-0.1275-0.04686-0.01257-0.04686 0.01071-0.08208 0.06982-0.1171z"></path>
                      <polygon transform="matrix(.1552 0 0 .1552 -28.05 -3.733)" points="489.1 81.22 489.1 82.05 491.4 82.05 491.4 88.47 492.4 88.47 492.4 82.05 494.7 82.05 494.7 81.22"></polygon>
                      <polygon transform="matrix(.1552 0 0 .1552 -28.05 -3.733)" points="496.6 82.58 498.6 88.47 499.5 88.47 501.5 82.58 501.5 88.47 502.3 88.47 502.3 81.22 501.1 81.22 499.1 87.41 497 81.22 495.6 81.22 495.6 88.47 496.6 88.47"></polygon>
                    </svg>
                  </div>
                  <div className="console-logo pc">
                    <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="29.2" height="16" version="1.1" viewBox="0 0 29.2 16" aria-labelledby="title" role="img">
                      <title id="title">PC</title>
                      <path d="m24.6 9.75c-0.349 1.62-1.24 2.5-2.6 2.5-1.77 0-2.97-1.72-2.97-4.17 0-2.45 1.25-4.27 2.97-4.27 1.17 0 2.11 0.807 2.52 2.29h4.59c-0.691-4.96-4.12-6.1-7.1-6.1s-7.56 1.93-7.56 8.03c0 6.1 4.59 7.97 7.66 7.97 2.79 0 6.37-1.13 7.03-6.25z"></path>
                      <path d="m7.97 0.364h-7.97v15.3h4.59v-4.64h3.44c1.36 0 5.27-0.782 5.27-5 0-4.9-3.92-5.63-5.32-5.63zm-0.782 7.04h-2.61v-3.19h2.61c0.839 0 1.77 0.522 1.77 1.56 0 0.632-0.624 1.62-1.77 1.62z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="golden-order-video">
              <div className="video-border">
                <img src={process.env.PUBLIC_URL + "/images/border.png"} alt="" />
              </div>
              {/* <iframe width={"100%"} height={"100%"} src={process.env.PUBLIC_URL + "/images/launch-trailer.webm"} frameborder="0" allow='autoPlay; loop'></iframe> */}
              <video autoPlay loop muted src={process.env.PUBLIC_URL + "/images/launch-trailer.webm"} frameborder="0" allow='autoPlay; loop'></video>
              <div className="video-border bottom-border">
                <img src={process.env.PUBLIC_URL + "/images/border.png"} alt="" />
              </div>
            </div>
          </div>
          <div className="ratings">
            <img src={process.env.PUBLIC_URL + "/images/Ratings.jpg"} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
