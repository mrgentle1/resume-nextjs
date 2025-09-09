import { ISkill } from '../component/skill/ISkill';

const language: ISkill.Skill = {
  category: 'Language & Framework',
  items: [
    {
      title: 'Java & Spring',
      level: 3,
    },
    {
      title: 'Python & Django',
      level: 3,
    },
    {
      title: 'C/C++',
      level: 2,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database & Cache',
  items: [
    {
      title: 'PostgreSQL',
      level: 3,
    },
    {
      title: 'Clickhouse',
      level: 3,
    },
    {
      title: 'MySQL',
      level: 2,
    },
    {
      title: 'Redis',
      level: 2,
    },
    {
      title: 'MongoDB',
      level: 1,
    },
  ],
};

const infrastructure: ISkill.Skill = {
  category: 'Infrastructure & DevOps',
  items: [
    {
      title: 'Docker',
      level: 3,
    },
    {
      title: 'AWS',
      level: 2,
    },
    {
      title: 'Linux',
      level: 2,
    },
    {
      title: 'Kubernetes',
      level: 2,
    },
    {
      title: 'GCP',
      level: 1,
    },
    {
      title: 'CI/CD Pipelines',
      level: 1,
    },
  ],
};

const tools: ISkill.Skill = {
  category: 'Tools & Others',
  items: [
    {
      title: 'Kafka',
      level: 3,
    },
    {
      title: 'Git',
      level: 3,
    },
    {
      title: 'gRPC',
      level: 2,
    },
    {
      title: 'Jupyter',
      level: 2,
    },
    {
      title: 'Nginx',
      level: 1,
    },
    {
      title: 'Prometheus/Grafana',
      level: 1,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [language, database, infrastructure, tools],
  tooltip:
    '1: 기초 수준,\n2: 인터넷 튜토리얼나 공식 문서 등을 참고해 문제를 해결하는 수준,\n3: 직접 코드 분석을 통해 문제 해결을 시도하는 수준',
};

export default skill;
