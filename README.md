# RTA

<div style="display: inline_block"><br>
<img align="center" alt="ariel-React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
<img align="center" alt="ariel-React" height="30" width="40" src="https://www.primefaces.org/presskit/primereact-logo.svg">
<img align="center" alt="ariel-React" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg">
<img align="center" alt="ariel-React" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg">
<img align="center" alt="ariel-tailwind" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg">
<br>

This project was created by Next.js 14 and PrimeReact 10

### Demo

### Author

Ariel Duarte

## Getting Started

### Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Run component tests:

```bash
npm test
```

### Run cypress e2e tests:

```bash
npm run test:e2e
```

### Run cypress e2e tests with browser:

```bash
npm run test:e2e:ui
```

### Docker Deployment

#### Create App Image

```bash
docker build --build-arg NODE_ENV=<development-name> -t <app-name> .
```

Examples of building images for different environments:<|im_sep|>

```bash
docker build --build-arg NODE_ENV=prod -t rta-app-image .
docker build --build-arg NODE_ENV=dev -t rta-app-image .
docker build --build-arg NODE_ENV=uat -t rta-app-image .
docker build --build-arg NODE_ENV=stag -t rta-app-image .
```

#### Run App Image

```bash
docker run --name=rialto-sandbox-ui-app -p 80:3000 rta-app-image
```
