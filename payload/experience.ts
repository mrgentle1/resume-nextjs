import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'Foo Company',
      position: 'Node.js Developer',
      startedAt: '2018-02',
      descriptions: [
        'OTA Service Provider',
        'Data modeling and Mashup API development',
        'Systems Engineering and DevOps',
      ],
      skillKeywords: ['Node.js', 'TypeScript', 'Express.js', 'Mashup API', 'AWS'],
    },
    {
      title: '코그콤',
      position: '데이터 엔지니어',
      startedAt: '2021-07',
      endedAt: '2021-09',
      descriptions: [
        'Online Commerce IT Startup',
        'Development of reservation system and service worker',
        'AWS infrastructure and RDBMS maintenance and development',
      ],
      skillKeywords: ['Node.js', 'MySQL', 'AWS'],
    },
  ],
};

export default experience;
