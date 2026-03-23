const siteUrl =
  (import.meta.env.PUBLIC_SITE_URL as string | undefined) ?? 'https://example.com';

export const siteConfig = {
  owner: 'YOUR NAME',
  siteTitle: 'Update Archive',
  roleLine: 'design · web · motion · development',
  description:
    '웹서비스, 디자인, 영상, 개발, 리서치를 업데이트 기록 형식으로 쌓아가는 포트폴리오.',
  shortBio:
    '결과물만 진열하지 않고, 무엇을 만들었고 무엇을 수정했고 무엇을 새로 배웠는지 기록 단위로 공개합니다.',
  workingStatement:
    '넓게 다루는 영역은 직접 판단으로 구조를 잡고, 깊이가 얕은 구간은 AI를 조사·초안·테스트 보조로 사용합니다. 이 사이트는 그 판단과 보완이 어떻게 쌓이는지 보여주는 업데이트 아카이브입니다.',
  availability: '포트폴리오 리디자인, 프론트엔드 구현, 실험적 웹 경험 작업 논의 가능',
  email: 'hello@example.com',
  url: siteUrl,
  socials: [
    { label: 'Email', href: 'mailto:hello@example.com' },
    { label: 'GitHub', href: 'https://github.com/your-id' },
    { label: 'Behance', href: 'https://www.behance.net/your-id' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-id' },
  ],
  timeZones: [
    { label: 'Seoul', zone: 'Asia/Seoul' },
    { label: 'UTC', zone: 'UTC' },
  ],
  facts: [
    { label: 'working mode', value: 'build / test / revise / publish' },
    { label: 'archive format', value: 'major / minor / patch / note' },
    { label: 'default delivery', value: 'Astro · MDX · plain CSS' },
  ],
  credentials: [
    {
      title: '직접 맡는 구간',
      items: [
        '정보 구조, 우선순위, 화면 흐름, 시각 톤 결정',
        'UI 밀도 조정, 레이아웃 설계, 프론트엔드 마감',
        '영상 컷 구성, 설명 흐름 정리, 공개 문서화',
      ],
    },
    {
      title: 'AI를 보조로 쓰는 구간',
      items: [
        '낯선 분야의 기초 조사와 비교안 수집',
        '반복 코드 초안, 문장 초안, 테스트 케이스 정리',
        '여러 방향의 시안 탐색 후 직접 선별과 수정',
      ],
    },
    {
      title: '공개 원칙',
      items: [
        '완성본만 올리지 않고 수정 이력을 함께 남기기',
        'AI가 개입한 범위를 메타 정보로 분리해 적기',
        '짧은 메모도 장기적으로는 작업 자산으로 남기기',
      ],
    },
  ],
  aiPrinciples: [
    '결정은 사람이 하고, 반복은 도구가 줄여야 합니다.',
    'AI를 썼다면 어디를 보조받았는지 기록에 남깁니다.',
    '검색과 요약은 빠르게 하되, 공개 전 판단과 검증은 직접 합니다.',
  ],
} as const;

export const NAV_ITEMS = [
  { href: '/', label: '홈' },
  { href: '/archive/', label: '아카이브' },
  { href: '/about/', label: '소개' },
] as const;

export const AREA_META = {
  'web-service': {
    label: '웹서비스',
    description: '기획, 화면 흐름, 정보 구조, 운영 시나리오를 다룹니다.',
  },
  design: {
    label: '디자인',
    description: '브랜드, UI, 그래픽, 레이아웃, 표현 방식을 다룹니다.',
  },
  video: {
    label: '영상',
    description: '편집, 모션, 콘티, 전개, 전달 방식 정리를 다룹니다.',
  },
  development: {
    label: '개발',
    description: '프론트엔드, 인터랙션, 자동화, 프로토타입을 다룹니다.',
  },
  note: {
    label: '메모',
    description: '짧은 배움, 용어 정리, 실무 참고 사항을 남깁니다.',
  },
  research: {
    label: '리서치',
    description: '도구 조사, 비교, 시행착오, 자료 정리를 다룹니다.',
  },
} as const;

export type AreaSlug = keyof typeof AREA_META;

export const KIND_META = {
  major: 'major',
  minor: 'minor',
  patch: 'patch',
  note: 'note',
} as const;

export type KindSlug = keyof typeof KIND_META;
