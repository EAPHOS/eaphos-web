# EAPHOS

기존 페이지
http://eaphos.com/kr/index.php

클론코딩 생각한다고 생각하면됩니다

## 개발 환경 설정

### 필수 요구사항

- Node.js 18.19.0 (nvm 사용 권장)
- Yarn (권장) 또는 npm

### Yarn 설치 및 설정

1. **Yarn 설치**

   ```bash
   # npm을 통한 설치
   npm install -g yarn

   # 또는 corepack 사용 (Node.js 16.10+)
   corepack enable
   ```

2. **Yarn 버전 확인**

   ```bash
   yarn --version
   ```

3. **Yarn 버전 설정 (선택사항)**

   ```bash
   # 특정 버전으로 설정
   yarn set version 4.1.0

   # 최신 안정 버전으로 설정
   yarn set version stable
   ```

4. **Yarn 캐시 정리 (필요시)**
   ```bash
   yarn cache clean
   ```

### 설치 및 실행

1. **Node.js 버전 확인**

   ```bash
   nvm use
   # 또는
   node --version
   ```

2. **의존성 설치**

   ```bash
   yarn install
   # 또는
   npm install
   ```

3. **개발 서버 실행**

   ```bash
   yarn dev
   # 또는
   npm run dev
   ```

4. **빌드**

   ```bash
   yarn build
   # 또는
   npm run build
   ```

5. **린트 검사**
   ```bash
   yarn lint
   # 또는
   npm run lint
   ```

## 프로젝트 구조

```
src/
├── assets/          # 정적 파일 (이미지, 아이콘 등)
├── pages/           # 페이지 컴포넌트
│   ├── Company/     # 회사 관련 페이지
│   ├── Home.tsx     # 홈페이지
│   ├── Notice/      # 공지사항 관련 페이지
│   ├── Product/     # 제품 관련 페이지
│   └── RD/          # R&D 관련 페이지
├── App.tsx          # 메인 앱 컴포넌트
└── main.tsx         # 앱 진입점
```

## 개발 가이드라인
