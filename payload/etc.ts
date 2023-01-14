import { IEtc } from '../component/etc/IEtc';

const etc: IEtc.Payload = {
  disable: false,

  list: [
    {
      title: 'KOSS',
      subTitle: '국민대학교 소프트웨어학부 오픈소스소프트웨어 동아리',
      startedAt: '2021-06',
      descriptions: [{content: '2021년 회장으로써 활동하면서 신입생들을 대상으로 Python 기초교육, Git기초강의를 진행하였으며 방학때마다 서울 소재 고등학교에서 SW 교육 봉사활동을 진행하였습니다.'}
    ],
    },
    {
      title: '임베디드 소프트웨어 경진대회 휴머노이드 부문',
      subTitle: '최우수상',
      startedAt: '2021-12',
      descriptions: [],
    },
    {
      title: 'SQLD',
      subTitle: '자격증 취득',
      startedAt: '2021-06',
      descriptions: [],
    },
  ],
};

export default etc;
