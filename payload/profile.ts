import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { IProfile } from '../component/profile/IProfile';
import image from '../asset/crop_me.png';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김준영',
    // small: '(Tux)',
  },
  contact: [
    {
      title: 'eunjini0719@gmail.com',
      link: 'mailto:eunjini0719@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/mrgentle1',
      icon: faGithub,
    },
    {
      link: 'https://www.linkedin.com/in/mrgentle1',
      icon: faLinkedin,
    },
    // {
    //   link: 'https://www.facebook.com/groups/ubuntu.ko',
    //   icon: faFacebook,
    // },
  ],
  notice: {
    title: '',
  },
};

export default profile;
