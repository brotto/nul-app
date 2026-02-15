# NUL Landing Page

Landing page premium para o app **NUL (∅)** usando **Next.js (App Router) + TypeScript + Tailwind CSS**.

## Requisitos

- Node.js 18+
- npm 9+

## Variaveis de ambiente

Crie um arquivo `.env.local` com:

```bash
NEXT_PUBLIC_APPSTORE_URL=https://apps.apple.com/
NEXT_PUBLIC_YOUTUBE_URL=https://www.youtube.com/watch?v=dQw4w9WgXcQ
NEXT_PUBLIC_SUPPORT_EMAIL=brotto@brotto.io
NEXT_PUBLIC_PUBLISHER_NAME=Brotto
NEXT_PUBLIC_PUBLISHER_SITE=https://brotto.io
NEXT_PUBLIC_STATUS_URL=https://status.example.com
```

## Executar localmente

```bash
npm install
npm run dev
```

Acesse: `http://localhost:3000`

## Build de producao

```bash
npm run build
npm run start
```

## Deploy na Vercel

1. Suba o projeto para um repositorio Git.
2. Importe o repositorio na Vercel.
3. Configure as variaveis de ambiente listadas acima.
4. Deploy automatico via branch principal.

## Rotas implementadas

- `/`
- `/pricing`
- `/faq`
- `/support`
- `/legal/terms`
- `/legal/privacy`
- `/legal/cookies`
- `/safety`
- `/status`

## Destaques tecnicos

- SEO com `metadata`, OpenGraph e Twitter cards
- `sitemap.xml` e `robots.txt` via metadata routes
- Componente `AppStoreBadge` com URL via env var
- Componente `YouTubeEmbed` com URL via env var
- Banner de cookies com preferencias (`essential/analytics/marketing`) em `localStorage`
- Carregamento condicional de scripts nao essenciais por consentimento
- Conteudo centralizado em `app/lib/content.ts`
