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
        { content: '아동과 치매노인을 위한 이동식 카메라 및 실시간 영상 스트리밍 서비스' },
        { content: '실시간으로 사용자가 웹을 통해 카메라로 녹화된 영상을 볼 수 있도록 구현' },
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
            '청각장애인들에게 화재나 교통사고 발생시 위험한 소리를 인식하여 앱을 통해 진동 알림을 전달하는 서비스',
        },
        {
          content:
            '위험 말소리를 학습시켜서 모델 생성, 텐서플로우 라이트로 변환하여 기기에서 실시간으로 추론이 가능하도록 구현',
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
            '제로웨이스터들을 위한 웹 플랫폼 서비스로, 로그인과 회원정보 관리 API 개발을 담당함',
        },
        { content: '' },
        {
          content:
            '회원정보 페이지의 한줄 소개, 프로필 이미지, 출석 정보 등을 고려하여 모델을 설계함',
        },
        { content: 'https://bzero.cf/', href: 'https://bzero.cf/' },
      ],
    },
  ],
};

export default project;
