import React from 'react'

const JumboText = () => {
  return(
    <>
      <div className="homepage-hero__copy">
        <div className="homepage-hero__copy-holder homepage-hero__copy-holder__on">
          <p><span className="hero-copy-btn copy-btn hero-copy-btn--on" data-href="/our-work">We are makers<span className="hero-copy-btn__underline">&nbsp;</span></span> <span className="copy-btn">who mean business. We partner directly with clients, solving</span> <span className="hero-copy-btn copy-btn" data-href="/labsite/expertise/?expertise=1">creative<span className="hero-copy-btn__underline">&nbsp;</span></span><span className="copy-btn">,</span> <span className="hero-copy-btn hero-copy-btn--production copy-btn" data-href="/labsite/expertise/?expertise=2">production<span className="hero-copy-btn__underline">&nbsp;</span></span><span className="copy-btn"> and</span> <span className="hero-copy-btn hero-copy-btn--technology copy-btn" data-href="/labsite/expertise/?expertise=3">technology<span className="hero-copy-btn__underline">&nbsp;</span></span> <span className="copy-btn">challenges to help brands work&nbsp;better.</span></p>
        </div>
      </div>
      <div className="homepage-hero__images">
        <div className="homepage-hero__cover homepage-hero__cover--on"></div>
      </div>
    </>
  )
}

export default JumboText