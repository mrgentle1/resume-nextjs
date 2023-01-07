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
        { content: '실시간으로 사용자가 웹을 통해 카메라로 녹화된 영상을 볼 수 있도록 구현하였습니다.' },
        // { content: 'https://github.com/ZIKIME2021/zikime-server',
        // href: 'https://github.com/ZIKIME2021/zikime-server', },
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
            'LookOut은 청각장애인들에게 화재나 교통사고 발생시 위험한 소리를 인식하여 앱을 통해 진동 알림을 전달하는 IOT 서비스이며\
            이 프로젝트의 팀장 및 기기 파트를 담당하였습니다.',
        },
        {
          content:
            'Tensorflow를 활용하여 다양한 키워드의 말소리를 데이터 라벨링 후 학습시켜서 모델 생성 후, \
            텐서플로우 라이트로 변환하여 기기에서 실시간으로 추론이 가능하도록 구현하였습니다.',
        },
        {
          content:
            '데이터베이스는 Firebase Realtime DB를 사용하였고 기기 등록 및 삭제와 같은 기능을 구현하였습니다.'
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
          content:
            '제로웨이스터들을 위한 웹 플랫폼 서비스로, 백엔드 개발자로 참여하였습니다.',
        },
        { content: '프론트엔드는 ReactJS, 백엔드는 Django Rest Framework를 사용하였고, \
                      axios를 활용한 API통신과 firebase를 활용하여 배포하였습니다. 백엔드 서버는 AWS EC2와 NGINX를 활용하여 배포하였습니다.' },
        {
          content:
            '회원정보 페이지의 한줄 소개, 프로필 이미지, 출석 정보 등을 고려하여 모델을 설계하였고 회원정보, 로그인 API를 담당하여 구현하였습니다.',
        },
        { content: 'https://bzero.cf/', href: 'https://bzero.cf/' },
      ],
    },
  ],
};

export default project;
