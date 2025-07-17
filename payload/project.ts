import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'ZIKIME',
      startedAt: '2021-06',
      endedAt: '2021-12',
      where: '동아리 프로젝트 및 공모전',
      descriptions: [
        { content: '아동과 치매노인을 위한 이동식 카메라 및 실시간 영상 스트리밍 서비스입니다.' },
        {
          content:
            '실시간으로 사용자가 웹을 통해 카메라로 녹화된 영상을 볼 수 있도록 구현하였습니다.',
        },
        // { content: 'https://github.com/ZIKIME2021/zikime-server',
        // href: 'https://github.com/ZIKIME2021/zikime-server', },
      ],
    },
    {
      title: '지능형 휴머노이드',
      startedAt: '2021-06',
      endedAt: '2021-12',
      where: '임베디드 SW 경진대회 휴머노이드 부문',
      descriptions: [
        { content: '이족보행 로봇을 이용하여 재난 및 사고 상황에 대응할 수 있도록 하였습니다.' },
        {
          content:
            '영상처리 및 로봇의 움직임 제어에 관련된 SW를 개발하였으며, 저는 로봇의 움직임 제어 파트를 중점적으로 맡았습니다.',
        },
        {
          content:
            'Python OpenCV를 활용하여 로봇에 있는 카메라를 통해 받아온 영상 데이터를 처리하고, 이를 바탕으로 BASIC기반의 로봇 프로그래밍 언어와 Python으로 로봇의 움직임을 제어할 수 있도록 하였습니다. ',
        },
        {
          content:
            'https://www.eswcontest.or.kr/data/award.php?ptype=view&idx=4254&page=1&code=award&category=47',
          href:
            'https://www.eswcontest.or.kr/data/award.php?ptype=view&idx=4254&page=1&code=award&category=47',
        },
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
    {
      title: 'InterMax',
      startedAt: '2023-09',
      // endedAt: '2022-09',
      where: 'EXEM',
      descriptions: [
        {
          content: '엔터프라이즈 APM(Application Performance Monitoring) 시스템의 분산 데이터 파이프라인 구축 담당',
        },
        {
          content: 'Java/OS/Database/Middleware 등 다양한 에이전트로부터 실시간 메트릭 수집 및 처리 시스템 개발',
        },
        {
          content: 'Kafka 기반 비동기 메시지 처리, ClickHouse 시계열 데이터베이스, Redis 캐싱을 활용한 고성능 데이터 파이프라인 설계'
        },
        {
          content: 'Netty 기반 TCP 서버 및 GRPC를 통한 대용량 실시간 모니터링 데이터 수집 아키텍처 구현'
        }
      ],
    }
  ],
};

export default project;
