import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'InterMax',
      startedAt: '2023-09',
      // endedAt: '2022-09',
      where: 'EXEM',
      descriptions: [
        {
          content:
            '엔터프라이즈 APM(Application Performance Monitoring) 시스템의 분산 데이터 파이프라인 구축 담당',
        },
        {
          content:
            'Java/OS/Database/Middleware 등 다양한 에이전트로부터 실시간 메트릭 수집 및 처리 시스템 개발',
        },
        {
          content:
            'Kafka 기반 비동기 메시지 처리, ClickHouse 시계열 데이터베이스, Redis 캐싱을 활용한 고성능 데이터 파이프라인 설계 및 최적화',
        },
        {
          content:
            'Netty 기반 TCP 서버 및 gRPC를 통한 대용량 실시간 모니터링 데이터 수집 아키텍처 구현',
        },
        {
          content: '인터맥스 솔루션 소개 자료',
          href: 'https://ex-em.com/product/intermax',
        },
      ],
    },
    {
      title: '사내 테스트 자동화 시스템 구축',
      startedAt: '2023-06',
      endedAt: '2023-09',
      where: 'EXEM',
      descriptions: [
        {
          content: 
            'Master–Worker 아키텍처 기반의 테스트 분산 실행 및 스케줄링 설계'
        },
        {
          content: 
            '격리된 컨테이너 환경에서 사내 제품 자동 설치·구성 및 사전 정의 시나리오 스크립트 순차/병렬 실행' 
        },
        {
          content: 'Pytest, Playwright 기반의 E2E 테스트 환경 구축'
        },
        {
          content: 'Django 기반 실행 관리·이력 조회·리포트 열람 RESTful API 개발 (실패 로그·스크린샷 등 아티팩트 연동)'
        }
      ],
    },
    {
      title: 'LookOut!',
      startedAt: '2022-07',
      endedAt: '2022-12',
      where: '동아리 프로젝트 및 공모전',
      descriptions: [
        {
          content:
            'LookOut은 청각장애인들에게 화재나 교통사고 발생시 위험한 소리를 인식하여 앱을 통해 진동 알림을 전달하는 IOT 서비스이며 이 프로젝트의 팀장 및 기기 파트를 담당하였습니다.',
        },
        {
          content:
            'Tensorflow를 활용하여 다양한 키워드의 말소리를 데이터 라벨링 후 학습시켜서 모델 생성 후, 텐서플로우 라이트로 변환하여 기기에서 실시간으로 추론이 가능하도록 구현하였습니다.',
        },
        {
          content:
            '데이터베이스는 Firebase Realtime DB를 사용하였고 기기 등록 및 삭제와 같은 기능을 구현하였습니다.',
        },
        {
          content:
            '음성 데이터를 기기별로 실시간으로 수음하고 데이터베이스로 넣는 과정에서 데이터 관리와 모델 학습, 기기와 어플간의 등록을 위한 모듈 작성 등을 경험하였습니다.',
        },
        {
          content: 'https://github.com/KOSS-LOOK-OUT/LookOut_Device',
          href: 'https://github.com/KOSS-LOOK-OUT/LookOut_Device',
        },
      ],
    },
    {
      title: 'Bzero',
      startedAt: '2022-07',
      endedAt: '2022-09',
      where: '동아리 프로젝트 및 공모전',
      descriptions: [
        {
          content: '제로웨이스터들을 위한 웹 플랫폼 서비스로, 백엔드 개발자로 참여하였습니다.',
        },
        {
          content:
            '프론트엔드는 ReactJS, 백엔드는 Django Rest Framework를 사용하였고, axios를 활용한 API통신과 firebase를 활용하여 배포하였습니다. 백엔드 서버는 AWS EC2와 NGINX를 활용하여 배포하였습니다.',
        },
        {
          content:
            '회원정보 페이지의 한줄 소개, 프로필 이미지, 출석 정보 등을 고려하여 모델을 설계하였고 회원정보, 로그인 API를 담당하여 구현하였습니다.',
        },
        // { content: 'https://bzero.cf/', href: 'https://bzero.cf/' },
        // { content: 'https://github.com/People-zero/Bzero', href: 'https://github.com/People-zero/Bzero' },
      ],
    },
  ],
};

export default project;
