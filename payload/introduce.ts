import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '데이터 처리와 분산 시스템에 열정을 가진 백엔드 개발자입니다.',
    'Java/Spring Boot와 Python/Django 기반의 백엔드 서비스 개발 경험을 보유하고 있으며, Kafka와 gRPC를 활용한 분산 데이터 파이프라인 구축에 관심이 많습니다.',
    'APM 통합 관리 시스템을 개발하며 대용량 데이터 처리와 실시간 모니터링 시스템 구축 경험을 쌓았습니다.',
    'ClickHouse, PostgreSQL, Redis 등 다양한 데이터베이스를 활용한 데이터 저장 및 최적화에 관심이 있습니다.',
    '팀 프로젝트를 주도적으로 이끌며 협업을 통해 문제를 해결하는 것을 좋아합니다.',
  ],
  sign: 'JunYoung',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
