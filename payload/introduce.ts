import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '사람들과 협력하여 함께 다양한 문제를 해결하면서 무언가를 배우는 것을 좋아하는 개발자입니다.',
    '웹 백엔드, 서버에 관심이 있으며 여러 팀 프로젝트를 팀장으로써 주도적으로 진행하여 끝마친 경험이 있습니다.',
    '- DRF, Spring을 활용한 백엔드 API 개발 경험',
    '- Docker와 AWS를 활용한 컨테이너 배포 경험',
    '- Git CI/CD를 활용한 프로젝트 관리 경험',
    '- Kafka, Clickhouse, GRPC를 활용한 데이터 파이프라인 구축 경험',
    // '산업기능요원 보충역 전직을 희망합니다.',
  ],
  sign: 'JunYeong ',
  // sign: packageJson.author.name,
  // latestUpdated: '2024-05-04',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
