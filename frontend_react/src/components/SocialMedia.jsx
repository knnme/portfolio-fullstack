import React from 'react';
import { BsWhatsapp, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SocialMedia = () => {
  return (    
      <div className='app__social'>
            <div>
                <BsWhatsapp />
            </div>
            <div>
                <BsInstagram />
            </div>
            <div>
                <FaLinkedin />
            </div>
            <div>
                <BsGithub />
            </div>
        </div>
  )
}

export default SocialMedia;
