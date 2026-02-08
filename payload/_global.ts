import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = 'JunYoung - Backend Developer';
const description = 'Java/Spring Boot와 Python/Django 기반 백엔드 개발자.';

export const _global: IGlobal.Payload = {
  favicon: favicon.src,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage.src,
          width: 800,
          height: 600,
          alt: 'JunYoung Backend Developer Resume',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'JunYoung',
        lastName: 'Kim',
        username: 'junyoung',
        gender: 'male',
      },
    },
  },
};
