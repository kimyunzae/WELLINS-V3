# 이미지 최적화 기준

## 기본 원칙

이 프로젝트는 정적 export 설정을 사용한다.

```js
output: "export",
images: {
  unoptimized: true,
}
```

따라서 `next/image`가 런타임에서 WebP/AVIF나 반응형 이미지를 자동 생성하지 않는다. 화면에 쓰는 실제 파일을 직접 가볍게 만들어야 한다.

## 변환 대상

사진류만 WebP로 변환한다.

- 히어로 이미지
- 서비스 이미지
- 프로젝트 이미지
- 회사/시설 사진
- 배경으로 쓰이는 큰 사진

## 유지 대상

아래 파일은 JPG/PNG/SVG 원본을 유지한다.

- OG 이미지, Twitter 이미지 등 소셜 공유용 이미지
- 로고, 브랜드 이미지
- SVG 아이콘
- favicon, apple icon
- 다운로드용 원본 파일

소셜 공유용 이미지는 플랫폼별 WebP 지원이 일정하지 않고, 로고/SVG는 WebP 변환 이득이 거의 없거나 품질/호환성 리스크가 있다.

## 변환 방식

원본 파일은 삭제하지 않고, 같은 위치에 WebP 파일을 추가한 뒤 화면 표시용 참조만 WebP로 바꾼다.

```text
public/images/service-equipment.jpg
public/images/service-equipment.webp
```

```ts
image: "/images/service-equipment.webp"
```

권장 품질:

- 일반 화면용 사진: WebP quality 72-80
- 어두운 오버레이가 깔리는 배경 사진: 70대 품질도 사용 가능
- 확대해서 보는 상세 이미지: 80 전후 유지

## 이번 1차 적용 범위

이번 작업에서는 서비스/위치 페이지 성능 개선을 우선해서 아래 사진류를 WebP로 추가하고 참조를 변경했다.

- `public/images/service-equipment.webp`
- `public/images/service-piping.webp`
- `public/images/service-hvac.webp`
- `public/images/service-insulation.webp`
- `public/images/service-vessels.webp`
- `public/images/service-fire.webp`
- `public/images/headquarters.webp`
- `public/images/hero-industrial.webp`

## QA

변환 후 확인할 것:

- `pnpm build` 통과
- WebP로 바꾼 이미지 경로에 깨진 참조가 없는지 확인
- Services, Location 페이지 Lighthouse 재측정
- 모바일에서 이미지/레이아웃 깨짐 여부 확인

권장 커밋 메시지:

```text
Convert display photos to WebP
```
