import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Python(Django)',
      level: 3,
    },
    {
      title: 'C/C++',
      level: 2,
    },
    {
      title: 'AWS',
      level: 2,
    },
    {
      title: 'Java',
      level: 1,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 2,
    },
    {
      title: 'PostgreSQL',
      level: 2,
    },
    {
      title: 'MongoDB',
      level: 2,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'javascript',
      level: 1,
    },
    {
      title: 'HTML/CSS',
      level: 2,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Ubuntu',
    },
    {
      title: 'Docker',
    },
    {
      title: 'Jupyter',
    },
    {
      title: 'GCP',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Git/Github',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
  tooltip:
    '1: 기초 수준,\n2: 인터넷 튜토리얼나 공식 문서 등을 참고해 문제를 해결하는 수준,\n3: 직접 코드 분석을 통해 문제 해결을 시도하는 수준',
};

export default skill;
