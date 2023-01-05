import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/xd.png';
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
      title:
        'Web에 공개되어 있는 이력서에는 휴대전화 번호를 기재하지 않았습니다. 메일로 연락 부탁드립니다.',
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
