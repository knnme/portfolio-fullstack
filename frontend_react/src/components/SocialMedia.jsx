import React from 'react';
import { BsWhatsapp, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
const SocialMedia = () => {
  return (    
      <div className='app__social'>
            <a href='https://api.whatsapp.com/send?phone=5581982569642' target='_blank' rel='noreferrer'>
                <div>
                    <BsWhatsapp />
                </div>
            </a>
            <a href='https://www.instagram.com/knn.me/' target='_blank' rel='noreferrer'>
                <div>
                    <BsInstagram />
                </div>
            </a>
            <a href='https://www.linkedin.com/in/knnme/' target='_blank' rel='noreferrer'>
                <div>
                    <FaLinkedin />
                </div>
            </a>
            <a href='https://github.com/knnme' target='_blank' rel='noreferrer'>
                <div>
                    <BsGithub />
                </div>
            </a>
        </div>
  )
}

export default SocialMedia;
