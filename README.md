# EAPHOS

기존 페이지
http://eaphos.com/kr/index.php

<img width="499" height="132" alt="image" src="https://github.com/user-attachments/assets/9bc5959a-3211-453c-8708-ac4701011a8d" />
<br/>
<br/>
↑ 실제 페이지들 입니다
<br/>
<br/>
<img width="256" height="153" alt="화면 캡처 2025-07-17 131620" src="https://github.com/user-attachments/assets/aaf21e11-92ba-4867-aea7-14ebf49dddf3" />

<br/>

↑ 각자 맡은 부분 페이지 폴더에 들어가서 작업하고 푸시하면 됩니다. 이미지들은 asset폴더에 있습니다.
<br/><br/>

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

3. **Yarn 버전 설정**

   ```bash
   yarn set version 4.1.0
   ```


### 설치 및 실행

1. **의존성 설치**

   ```bash
   yarn install
   # 또는
   npm install
   ```

2. **개발 서버 실행**

   ```bash
   yarn dev
   # 또는
   npm run dev
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
