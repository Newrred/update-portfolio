# 디자인 수정 가이드 — Experimental Edition

이 버전은 과한 카드 UI나 SaaS 대시보드 느낌을 피하고, 편집형 포트폴리오 + 업데이트 보드 사이 지점을 목표로 만들었습니다.

## 1. 전체 톤을 바꾸고 싶을 때

`src/styles/tokens.css`부터 보세요.

가장 먼저 보는 값은 아래입니다.

```css
--bg
--surface
--surface-2
--line
--text
--text-muted
--accent
```

이 7개를 바꾸면 분위기가 거의 달라집니다.

## 2. 둥근 정도를 바꾸고 싶을 때

같은 파일의 아래 값을 수정하면 됩니다.

```css
--radius-button
--radius-input
--radius-panel
--radius-frame
```

이 프로젝트는 버튼, 입력창, 패널의 radius를 완전히 같게 두지 않도록 잡아두었습니다.

## 3. 폰트와 인상을 바꾸고 싶을 때

`tokens.css`에서 아래 값을 바꾸세요.

```css
--font-sans
--font-mono
--text-body
--leading-body
```

지금은 `IBM Plex Sans KR`와 `IBM Plex Mono`를 불러오고 있습니다.

## 4. 첫 화면 구조를 바꾸고 싶을 때

`src/pages/index.astro`와 `src/styles/layout.css`, `src/styles/components.css`를 같이 보시면 됩니다.

핵심 클래스는 아래입니다.

- `.opening-board`
- `.opening-board__strip`
- `.opening-board__copy`
- `.opening-board__credentials`
- `.opening-board__archive`

첫 화면은 **상단 상태 스트립 / 왼쪽 소개 / 오른쪽 자격 정보 / 하단 아카이브** 구조입니다.

## 5. 아카이브 인터랙션을 바꾸고 싶을 때

`src/components/ArchiveMatrix.astro`

여기서 바꿀 수 있습니다.

- 필터 버튼 구조
- hover / focus 시 미리보기 교체 방식
- 행 안의 메타 정보 순서
- 썸네일 이미지를 어떤 비율로 보여줄지

관련 스타일은 `components.css`의 아래 섹션입니다.

- `.matrix`
- `.matrix-filters`
- `.matrix-grid`
- `.matrix-link`
- `.matrix-preview`

## 6. 첫 화면 썸네일 포스터를 교체하고 싶을 때

`public/previews/` 폴더의 SVG를 직접 바꾸면 됩니다.

샘플은 단순한 타이포 포스터로 들어가 있습니다. 실제 프로젝트 썸네일 JPG/PNG/WebP를 넣어도 됩니다.

## 7. 상세 페이지 밀도를 바꾸고 싶을 때

`src/layouts/UpdateLayout.astro`와 `src/components/UpdateSidebar.astro`를 보세요.

- 상단 커버 이미지 비율
- 메타 정보 배치
- 관련 글 목록
- 링크 목록

이 4군데를 수정하면 상세 페이지 인상이 많이 달라집니다.

## 8. 가장 안전한 수정 순서

1. `site.ts` 텍스트 수정
2. `tokens.css` 색 / 폰트 / radius 수정
3. `public/previews/` 이미지 교체
4. `components.css` 밀도와 표/리스트 구조 조정
5. 페이지 파일에서 섹션 순서 조정

## 9. 이 버전에서 일부러 피한 것

- 큰 pill 버튼
- 그라디언트 배경
- 유리판 카드
- 과한 그림자
- 배지 남발
- 의미 없는 KPI 카드 그리드
- 카드만 잔뜩 깔리는 포트폴리오 첫 화면

즉, 실험적이지만 장식보다 구조가 먼저 보이게 만든 버전입니다.
