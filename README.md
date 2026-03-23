# Update Archive Portfolio — Experimental Edition

업데이트 알림, 작업 로그, 짧은 메모를 한 구조 안에서 관리하는 Astro 스타터입니다.

이번 버전은 아래 방향을 기준으로 잡았습니다.

- 첫 화면을 단순한 히어로가 아니라 **상태 보드 + 자격 정보 + 대표 기록 미리보기** 구조로 구성
- 결과물 목록보다 **업데이트 흐름과 판단 방식**이 먼저 보이도록 정리
- 디자이너가 직접 수정하기 쉽도록 색, 레이아웃, 컴포넌트 밀도를 CSS 토큰과 명확한 클래스명으로 분리
- 카드 남발 대신 표, 리스트, 보드형 레이아웃을 우선 사용

## 빠른 실행

압축을 풀고 프로젝트 폴더로 이동한 뒤 아래 순서로 실행하세요.

```bash
npm install
npm run dev
```

브라우저에서 로컬 주소를 열면 됩니다. 보통은 아래 주소가 나옵니다.

```text
http://localhost:4321
```

빌드 확인:

```bash
npm run build
npm run preview
```

## 가장 먼저 바꿀 파일

1. `src/data/site.ts`
   - 이름, 소개, 연락처, 소셜 링크, 자격 정보, 타임존
2. `src/styles/tokens.css`
   - 색, 글자색, 강조색, radius, 간격, 폰트
3. `src/content/updates/*.mdx`
   - 실제 프로젝트 기록과 메모
4. `public/previews/*.svg`
   - 첫 화면과 아카이브의 썸네일 포스터

## 포함된 것

- Astro + MDX + Content Collections
- 홈 / 아카이브 / 소개 / 분야별 페이지 / 상세 페이지
- 첫 화면용 인터랙티브 아카이브 매트릭스
- 타임존 시계 스트립
- `details` 기반 자격 정보 패널
- 샘플 업데이트 4개
- RSS 피드 (`/feed.xml`)
- 이미지 / 영상 컴포넌트 2개 (`MediaFigure.astro`, `VideoPlayer.astro`)

## 새 기록 추가 방법

`src/content/updates/` 안에 `.mdx` 파일을 하나 추가하면 됩니다.

예시:

```md
---
title: "새 프로젝트 배포"
summary: "배포 과정과 수정 포인트를 정리했습니다."
date: "2026-03-25"
build: "2026.03.25"
kind: "minor"
areas:
  - web-service
  - development
role: "기획, 구현"
credit: "Client project"
cover: "/previews/my-cover.svg"
stack:
  - Astro
  - TypeScript
assist:
  - 조사 정리
  - 문장 초안
links:
  - label: Live
    url: https://example.com
pinned: false
draft: false
---

## 무엇을 했는지

내용 작성
```

## `kind` 값 설명

- `major` : 구조가 크게 바뀌거나 대표 작업이 추가된 경우
- `minor` : 새 기능, 새 결과물, 새 작업 방식이 추가된 경우
- `patch` : 수정, 다듬기, 정리, 리팩터링
- `note` : 짧은 메모, 조사, 학습 기록

## `areas` 값 설명

- `web-service`
- `design`
- `video`
- `development`
- `note`
- `research`

## 이미지 / 영상 넣는 방법

### 이미지

```mdx
import MediaFigure from '../../components/MediaFigure.astro';

<MediaFigure
  src="/media/project-01-cover.jpg"
  alt="프로젝트 메인 화면"
  caption="첫 화면 구조"
/>
```

### 영상

```mdx
import VideoPlayer from '../../components/VideoPlayer.astro';

<VideoPlayer
  src="/media/project-01-demo.mp4"
  title="프로젝트 데모 영상"
  caption="핵심 흐름만 짧게 정리한 버전"
/>
```

`public/media/` 폴더를 만들어 자산을 넣으면 됩니다.

## 구조 요약

```text
src/
  components/
  content/
    updates/
  data/
  layouts/
  pages/
  styles/
  utils/
public/
  previews/
```

## 커스텀 포인트 요약

- 홈 첫 화면: `src/pages/index.astro`
- 아카이브 인터랙션: `src/components/ArchiveMatrix.astro`
- 자격 정보 패널: `src/components/CredentialsPanel.astro`
- 시계 스트립: `src/components/LiveClockStrip.astro`
- 전체 색 / 폰트 / radius: `src/styles/tokens.css`

## 배포 전 체크

- `src/data/site.ts` 안의 이름, 이메일, 링크 수정
- `PUBLIC_SITE_URL` 환경 변수 설정
- `https://example.com` 남아 있는지 확인

예시:

```bash
PUBLIC_SITE_URL=https://your-domain.com npm run build
```

## GitHub Pages 배포

이 저장소 이름이 `update-portfolio`이고 GitHub 계정이 `Newrred`라면 배포 주소는 아래가 됩니다.

```text
https://newrred.github.io/update-portfolio/
```

이 프로젝트에는 GitHub Pages용 워크플로가 이미 들어 있습니다.

- `.github/workflows/deploy.yml`
- `astro.config.mjs`

처음 배포할 때는 GitHub에서 아래만 하면 됩니다.

1. 저장소를 GitHub에 push
2. GitHub 저장소 열기
3. `Settings > Pages`로 이동
4. `Source`를 `GitHub Actions`로 선택
5. `Actions` 탭에서 `Deploy to GitHub Pages` 실행 확인
6. 배포 완료 후 위 주소 접속

배포 전에 최소한 아래 값은 바꾸는 것을 권장합니다.

- `src/data/site.ts`의 `owner`
- `src/data/site.ts`의 `email`
- `src/data/site.ts`의 `socials`
