import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'PostgreSQL Partition Key 성능 개선',
      startedAt: '2025-06',
      endedAt: '2025-07',
      where: 'EXEM · InterMax',
      descriptions: [
        {
          content:
            'QPS 30,000 이상 로그 테이블에서 발생하는 INSERT latency spike 원인 분석',
        },
        {
          content:
            'pg_stat_activity, pg_locks 기반 LWLock 경합 분석 및 hash 기반 파티션 키 추가를 통한 데이터 분산',
        },
        {
          content: 'INSERT latency 1,000ms → 100ms (약 90% 개선)',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: '대용량 시계열 API 구조 개선 (SSE 전환)',
      startedAt: '2025-03',
      endedAt: '2025-04',
      where: 'EXEM · InterMax',
      descriptions: [
        {
          content:
            'HTTP Polling 기반 시계열 조회 API를 SSE(Server-Sent Events) 스트리밍 구조로 전환',
        },
        {
          content:
            '대용량 JSON 응답을 chunk 단위 전송 구조로 재설계하여 응답 데이터 직렬화 비용 절감',
        },
        {
          content:
            'API 응답 크기 40MB → 5MB (87% 감소), CPU spike 완화 및 GC 안정성 개선',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: '모놀리식 데이터 수집 서버 분리 및 리팩토링',
      startedAt: '2024-09',
      endedAt: '2025-03',
      where: 'EXEM · InterMax',
      descriptions: [
        {
          content:
            'Master/Slave 구조가 결합된 모놀리식 수집 서버를 독립 서비스로 분리',
        },
        {
          content:
            'Spring Boot 기반 서비스 구조로 재설계, polling while-loop 스케줄링을 Quartz Job 기반으로 전환',
        },
        {
          content:
            '코드 규모 954개 → 212개 파일 (78% 감소), 유지보수성 및 테스트 가능성 향상',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: '레거시 DB 및 API 구조 리팩토링',
      startedAt: '2024-03',
      endedAt: '2024-09',
      where: 'EXEM · InterMax',
      descriptions: [
        {
          content:
            '도메인 기준 데이터 모델 재설계 및 약 40개 테이블 구조 개선',
        },
        {
          content:
            '복잡한 JOIN 구조와 API 설계를 단순화하여 유지보수성 및 확장성 개선',
        },
        {
          content: 'API endpoint 383개 → 187개 (51% 감소)',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: '사내 테스트 자동화 시스템 구축',
      startedAt: '2023-06',
      endedAt: '2023-09',
      where: 'EXEM',
      descriptions: [
        {
          content:
            'Master–Worker 아키텍처 기반 테스트 분산 실행 및 스케줄링 시스템 설계',
        },
        {
          content:
            '격리된 컨테이너 환경 기반 사내 제품 자동 설치·구성 및 시나리오 스크립트 순차/병렬 실행 시스템 구현',
        },
        {
          content: 'Pytest, Playwright 기반 E2E 테스트 환경 설계 및 구축',
        },
        {
          content:
            'Django 기반 테스트 관리 및 리포트 시스템 RESTful API 설계 및 구현 (실패 로그·스크린샷 아티팩트 연동)',
        },
      ],
    },
  ],
};

export default project;
