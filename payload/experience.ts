import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '코그콤',
      position: '데이터 엔지니어(학부 인턴)',
      startedAt: '2021-07',
      endedAt: '2021-09',
      descriptions: [
        '논문 유사도 검사 서비스 알고리즘 연구',
        '이커머스 데이터 수집 및 분석',
      ],
      skillKeywords: ['Python', 'PostgreSQL', 'Django', 'mongoDB'],
    },
  ],
};

export default experience;
