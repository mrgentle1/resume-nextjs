import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '대용량 트래픽 환경에서 실시간 데이터 처리 시스템을 개발하는 백엔드 개발자입니다. 10만 TPS 규모의 트랜잭션을 처리하는 실시간 모니터링 시스템 백엔드 개발을 담당하며, 은행·공공기관의 수억 건 거래 데이터를 안정적으로 수집·처리·로깅하는 파이프라인을 구축했습니다.',
    'Kafka와 gRPC 기반의 비동기·분산 처리 구조를 설계하여 데이터 처리 throughput을 기존 대비 3배 이상 개선했으며, Java/Spring Boot 및 MyBatis 환경에서 쿼리 튜닝과 JVM 힙 메모리 최적화를 통해 대용량 데이터 처리 성능을 지속적으로 개선해 왔습니다.',
    '백엔드 개발자로서의 역량을 지속적으로 강화하며, 팀과 조직의 목표를 달성하기 위해 적극적인 소통과 협업을 통해 문제를 해결하는 개발자가 되고자 합니다. 기술을 목적이 아닌 수단으로 활용하여, 실제 가치를 만들어내는 개발을 중요하게 생각합니다.'
  ],
  sign: 'JunYoung',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
