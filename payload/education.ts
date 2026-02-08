import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '국민대학교',
      subTitle: '소프트웨어학부 학사 과정 (26년 7월 졸업 예정)',
      descriptions: [
        '자료구조, 알고리즘, 소프트웨어 공학 등 컴퓨터공학 핵심 이론 학습 및 프로그래밍 과제, 프로젝트 실습',
        "'객체지향 프로그래밍' 강의 학부 조교 활동 및 학생 코딩 실습 지도, 프로그래밍 과제 질의응답 및 학습 지원",
        '팀 프로젝트 및 캡스톤 과목을 통한 백엔드 시스템 설계 및 개발, 데이터 수집 분석, 클라우드 컴퓨팅 환경 구축',
      ],
      startedAt: '2020-03',
      // endedAt: '2010-02',
    },
    {
      title: '용문고등학교(서울)',
      subTitle: '졸업',
      startedAt: '2017-03',
      endedAt: '2020-02',
    },
  ],
};

export default education;
