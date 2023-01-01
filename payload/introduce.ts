import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '여러 사람들과 함께 다양한 문제를 해결하는 것을 좋아하는 개발자입니다.',
    '산업기능요원 보충역 신규 편입을 희망합니다.',
  ],
  sign: 'JunYeong',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
