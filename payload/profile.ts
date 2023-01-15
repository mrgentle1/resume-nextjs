import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/김준영.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  image,
  name: {
    title: '김준영',
    // small: '(LI)',
  },
  contact: [
    {
      title: 'mrgentle1@kookmin.ac.kr',
      link: 'mailto://mrgentle1@kookmin.ac.kr',
      icon: faEnvelope,
    },
    {
      title: '010-6601-6350',
      icon: faPhone,
    },
    {
      title: 'https://github.com/mrgentle1',
      link: 'https://github.com/mrgentle1',
      icon: faGithub,
    },
    // {
    //   link: 'https://www.facebook.com/iu.loen',
    //   icon: faFacebook,
    // },
    // {
    //   title: 'YouTube',
    //   link: 'https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww',
    //   // icon: faRss,
    //   icon: faYoutube,
    // },
  ],
  notice: {
    title: '산업기능요원 보충역 신규 편입을 희망합니다.',
  },
};

export default profile;
