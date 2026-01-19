// import React from 'react'

import { Link } from "react-router-dom"
import { FooterContainer, Links, SocialMedia } from "./footer.style"

const Footer = () => {
  return (
    <FooterContainer>
      <Links>
        <Link to="/get-app" className="link-style">
          Get the OMO App
          <img src="/icons/heroicons-solid/chevron-right.svg" alt="link-icon" />
        </Link>
        <Link to="/help" className="link-style">
          Help
          <img src="/icons/heroicons-solid/chevron-right.svg" alt="link-icon" />
        </Link>
        <Link to="/site-index" className="link-style">
          Site Index
          <img src="/icons/heroicons-solid/chevron-right.svg" alt="link-icon" />
        </Link>
        <Link to="/omo-pro" className="link-style">
          OMO Pro
          <img src="/icons/heroicons-solid/chevron-right.svg" alt="link-icon" />
        </Link>
        <Link to="/advertising" className="link-style">
          Advertising
          <img src="/icons/heroicons-solid/chevron-right.svg" alt="link-icon" />
        </Link>
      </Links>
      <Links>
        <Link to="/omo-developer" className="link-style">
          OMO Developer
          <img src="/icons/heroicons-solid/chevron-right.svg" alt="link-icon" />
        </Link>
        <Link to="/jobs" className="link-style">
          Jobs
          <img src="/icons/heroicons-solid/chevron-right.svg" alt="link-icon" />
        </Link>
        <Link to="/privacy-policy" className="link-style">
          Privacy Policy
          <img src="/icons/heroicons-solid/chevron-right.svg" alt="link-icon" />
        </Link>
      </Links>
      <SocialMedia>
        <Link to={`facebook/omo`}>
          <img src="/icons/social-media/facebook.svg" alt="facebook-icon" />
        </Link>
        <Link to={`instagram/omo`}>
          <img src="/icons/social-media/instagram.svg" alt="instagram-icon" />
        </Link>
        <Link to={`linkedin/omo`}>
          <img src="/icons/social-media/linkedin.svg" alt="linkedin-icon" />
        </Link>
        <Link to={`youtube/omo`}>
          <img src="/icons/social-media/youtube.svg" alt="youtube-icon" />
        </Link>
        <Link to={`telegram/omo`}>
          <img src="/icons/social-media/telegram.svg" alt="telegram-icon" />
        </Link>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
