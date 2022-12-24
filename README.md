## 소개
Serverless 프레임워크를 기반을 둔 express + mongoose boilerplate 프로젝트

## 사용전
1. AWS IAM 계정 생성
2. Serverless 환경설정
``` bash
 serverless config credentials --provider aws --key {iam_key} --secret {iam_secret}
```
3. Mongodb Atlas 가입 및 생성
4. 환경변수(.env) 설정

## 사용법
개발 환경 실행
``` bash
npm run dev
```

배포
``` bash
npm run deploy
```