import React from 'react'
import { BsTwitter } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a href="https://twitter.com/CombativeMedic">
            <BsTwitter />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/derick.williamson.35">
            <FaFacebook />
          </a>
        </div>
        <div>
          <a href="https://github.com/DerickWilliamson">
            <AiFillGithub />
          </a>  
        </div>
    </div>
  )
}

export default SocialMedia