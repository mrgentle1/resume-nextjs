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
        '논문 유사도 검사 서비스 알고리즘을 연구',
        '데이터 클러스터링, 분석 및 활용을 위한 이커머스 데이터 비동기 수집 및 전처리',
        '일정시간마다 자동으로 데이터를 갱신하기 위해 Crontab 기능을 활용하여 mongoDB로 데이터 수집 및 RDBMS로 데이터의 포맷을 일정하게 수집하도록 하였습니다.',
        '데이터베이스 연동, DB 서버 관리 등을 경험하였습니다.',
      ],
      skillKeywords: ['Linux', 'Python', 'PostgreSQL', 'Django', 'mongoDB', 'AWS'],
    },
    {
      title: '국민대학교 산학협력프로젝트',
      position: '학부 연구생',
      startedAt: '2022-08',
      endedAt: '2022-12',
      descriptions: [
        '국내 기업 FST에서 생산하는 칠러(Chiller)의 다품종 소량생산 특성에 맞추어 제품 검사 애플리케이션 개발',
        'DRF를 활용하여 사원 관리용 백엔드 API 개발',
      ],
      skillKeywords: ['Python', 'MySQL', 'Django', 'Docker'],
    },
    {
      title: 'EXEM',
      position: '백엔드 개발자',
      startedAt: '2023-06',
      // endedAt: '',
      descriptions: [
        'DPM, APM 통합 관리 시스템 인터맥스 개발',
        'kafka, Clickhouse, GRPC를 활용한 분산 데이터 파이프라인 구축',
      ],
    },
  ],
};

export default experience;
