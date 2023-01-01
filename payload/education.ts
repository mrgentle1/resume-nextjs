import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '국민대학교',
      subTitle: '소프트웨어학부 학사과정 재학(3학년 재학 중)',
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
