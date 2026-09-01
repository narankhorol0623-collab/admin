# ГҮНД САПЛАЙ — Admin Dashboard (Next.js + TypeScript)

Анхны нэг HTML файлыг Next.js (App Router) + TypeScript төслийн бүтэц рүү хэсэг
хэсгээр нь салгаж, animation нэмж бичсэн.

## Файлын бүтэц

```
gunder-dashboard/
├── app/
│   ├── layout.tsx        # Root layout, шрифт болон дэвсгэр classes
│   ├── page.tsx           # Бүх component-уудыг угсарсан гол дашбоард хуудас
│   └── globals.css        # Global styles, custom scrollbar, glass-card class
├── components/
│   ├── Sidebar.tsx         # Зүүн навигаци — staggered fade/slide-in
│   ├── TopBar.tsx          # Дээд бар — pulse анимацитай notification badge
│   ├── KpiCards.tsx        # 4 KPI карт — тоо нь 0-ээс count-up хийж өсдөг
│   ├── AnalyticsChart.tsx  # SVG шугаман chart — path нь зурагдаж гарч ирдэг
│   ├── MilestoneTracker.tsx# Milestone жагсаалт — progress bar animate width
│   ├── ProjectTable.tsx    # Төслийн хүснэгт — мөр бүр staggered орж ирдэг
│   └── RecentLeads.tsx     # Сүүлийн lead-үүд — staggered card fade-in
├── lib/
│   ├── types.ts            # TypeScript type тодорхойлолтууд
│   └── data.ts              # Mock дата (анхны HTML-ийн агуулгатай тохирсон)
├── tailwind.config.ts       # Анхны custom өнгө/фонт/spacing tokens
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## Нэмэгдсэн animation-ууд (framer-motion)

- **Sidebar**: цэсний зүйлүүд ачаалахад stagger хийж зэрэгцээ гарч ирнэ.
- **TopBar**: "Шинэ төсөл нэмэх" товч дарахад scale хийнэ, notification badge пульс мэт анивчина.
- **KPI карт**: тоо утга 0-ээс жинхэнэ утга хүртэл жигд өсдөг (count-up), карт бүр stagger-тэйгээр гарч ирнэ.
- **Analytics chart**: SVG шугам `pathLength` animation-аар зурагдана, цэгүүд дараалан гарч ирнэ.
- **Milestone / Project progress bar**: өргөн нь 0-ээс бодит хувь хүртэл animate хийнэ.
- **Lead карт, Table мөр**: жагсаалтын зүйл бүр бага зэрэг saatai (staggered) fade+slide хийж гарч ирнэ.
- `prefers-reduced-motion` тохиргоог хүндэтгэдэг (globals.css).

## Ажиллуулах

```bash
npm install
npm run dev
```

Дараа нь [http://localhost:3000](http://localhost:3000) хаягаар нээнэ.

## Тэмдэглэл

- Material Symbols icon-уудыг ашиглахын тулд Google Fonts холбоос `globals.css`-д орсон.
- Зурагнууд (thumbnail, avatar) анхны HTML доторх Google-ийн жишээ URL-уудыг ашигласан хэвээр — бодит төсөлд өөрийн CDN URL-ээр солиорой.
