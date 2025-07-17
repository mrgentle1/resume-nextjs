import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '국민대학교',
      subTitle: '소프트웨어학부 학사 과정 (4학년 2학기 휴학 중)',
      descriptions: [
        '컴퓨터공학 전공의 기초가 되는 자료구조, 알고리즘, 소프트웨어 공학 등의 핵심 이론을 학습하고, 이를 프로그래밍 과제와 프로젝트에 적용하여 실습하였습니다.',
        "'객체지향 프로그래밍' 강의의 학부 조교로 활동하며 학생들의 코딩 실습을 지도하고, 프로그래밍 과제에 대한 질의응답과 피드백을 통해 학습을 지원했습니다.",
        '팀 프로젝트와 캡스톤 과목을 통해 백엔드 시스템 설계 및 개발, 데이터 수집과 분석, 클라우드 컴퓨팅 환경 구축 등 다양한 실무 분야를 경험하고 협업 능력을 길렀습니다.',
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
