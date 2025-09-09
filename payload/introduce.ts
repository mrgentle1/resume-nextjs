import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '10만 TPS 규모의 대용량 데이터 처리와 실시간 모니터링 시스템 개발을 담당하고 있는 김준영입니다.',
    '수억건에 달하는 은행 및 공공기관의 거래 데이터를 처리하고 로깅하는 파이프라인을 구축하였으며, Kafka와 gRPC를 활용하여 3배 이상의 throughput을 개선시켰습니다.',
    'Java/Spring Boot와 Python/Django 기반의 백엔드 개발 경험을 보유하고 있으며, 쿼리 튜닝과 모니터링 도구(Prometheus, Grafana)를 활용해 대용량 거래 데이터 처리 성능을 개선하고 힙 메모리 사용량을 최적화한 경험이 있습니다.',
    '팀 프로젝트를 주도적으로 이끌며 협업을 통해 문제를 해결하는 것을 좋아하며, 안정적인 데이터 인프라와 분산 시스템 구축을 통해 사용자에게 신뢰할 수 있는 서비스를 제공하고자 합니다.',
  ],
  sign: 'JunYoung',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
