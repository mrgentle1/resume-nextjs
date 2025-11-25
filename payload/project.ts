import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'EtoE 거래 추적 및 성능 관리 시스템, "InterMax" 개발',
      startedAt: '2023-09',
      // endedAt: '2022-09',
      where: 'EXEM',
      descriptions: [
        {
          content:
            '엔터프라이즈 APM(Application Performance Monitoring) 시스템 분산 데이터 파이프라인 설계 및 구축',
        },
        {
          content:
            'Java/OS/Database/Middleware 에이전트 기반 실시간 메트릭 수집 및 처리 시스템 설계',
        },
        {
          content:
            'Kafka 기반 비동기 메시지 처리 및 ClickHouse 시계열 데이터베이스, Redis 캐싱 활용 고성능 데이터 파이프라인 설계 및 최적화',
        },
        {
          content:
            'Netty 기반 TCP 서버 및 gRPC 활용 대용량 실시간 모니터링 데이터 수집 아키텍처 설계 및 구현',
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
          content: 'Master–Worker 아키텍처 기반 테스트 분산 실행 및 스케줄링 시스템 설계',
        },
        {
          content:
            '격리된 컨테이너 환경 기반 사내 제품 자동 설치·구성 및 시나리오 스크립트 순차/병렬 실행 시스템 구현',
        },
        {
          content: 'Pytest, Playwright 기반 E2E 테스트 환경 설계 및 구축',
        },
        {
          content:
            'Django 기반 테스트 관리 및 리포트 시스템 RESTful API 설계 및 구현 (실패 로그·스크린샷 아티팩트 연동)',
        },
      ],
    },
    {
      title: '장애인을 위한 인공지능 위험 안내 서비스, "LookOut" 개발',
      startedAt: '2022-07',
      endedAt: '2022-12',
      where: '동아리 프로젝트 및 공모전',
      descriptions: [
        {
          content:
            '청각장애인 대상 위험 소리 인식 및 진동 알림 전달 IOT 서비스 설계 (팀장 및 기기 파트 담당)',
        },
        {
          content:
            'Tensorflow 기반 음성 데이터 라벨링 및 모델 학습, TensorFlow Lite 변환을 통한 기기 내 실시간 추론 시스템 구현',
        },
        {
          content: 'Firebase Realtime DB 기반 기기 등록 및 관리 시스템 설계 및 구현',
        },
        {
          content:
            '기기별 음성 데이터 실시간 수집 및 데이터베이스 저장, 데이터 관리 및 모델 학습, 기기-어플리케이션 연동 모듈 설계',
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
          content: '제로웨이스터 대상 웹 플랫폼 서비스 백엔드 시스템 설계 및 개발',
        },
        {
          content:
            'ReactJS 프론트엔드 및 Django Rest Framework 백엔드 기반 웹 서비스 설계, axios API 통신 및 Firebase, AWS EC2-NGINX 기반 배포 시스템 구축',
        },
        {
          content: '회원정보 관리를 위한 데이터베이스 모델 설계 및 회원정보, 로그인 API 구현',
        },
        // { content: 'https://bzero.cf/', href: 'https://bzero.cf/' },
        // { content: 'https://github.com/People-zero/Bzero', href: 'https://github.com/People-zero/Bzero' },
      ],
    },
  ],
};

export default project;
