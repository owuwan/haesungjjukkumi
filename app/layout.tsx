import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "해성쭈꾸미 | 인천 미추홀구 쭈꾸미볶음 — 서해안 산지 직송 전문",
  description: "인천 미추홀구 소성로에 위치한 해성쭈꾸미는 충남 서천 서해안에서 새벽 냉장 직송한 쭈꾸미만 사용합니다. 원산지부터 조리까지 전 과정을 투명하게 공개하는 인천 미추홀구 쭈꾸미 맛집입니다.",
  keywords: "인천 미추홀구 쭈꾸미, 소성로 맛집, 해성쭈꾸미, 인천 쭈꾸미볶음, 서해안 쭈꾸미, 미추홀구 점심 맛집",
  openGraph: {
    title: "해성쭈꾸미 | 인천 미추홀구 쭈꾸미볶음",
    description: "서해안 산지 직송 쭈꾸미 — 원산지부터 식탁까지 투명하게",
    url: "https://haesungjjukkumi.vercel.app",
    siteName: "해성쭈꾸미",
    locale: "ko_KR",
    type: "website",
  },
}

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "해성쭈꾸미",
  "description": "인천 미추홀구 소성로에 위치한 쭈꾸미볶음 전문점. 충남 서천 서해안에서 새벽 냉장 직송한 쭈꾸미만 사용하며 원산지부터 조리까지 전 과정을 투명하게 공개합니다.",
  "url": "https://haesungjjukkumi.vercel.app",
  "foundingDate": "2010",
  "telephone": "032-441-7788",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "소성로 214",
    "addressLocality": "인천",
    "addressRegion": "미추홀구",
    "addressCountry": "KR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "37.4563",
    "longitude": "126.6501"
  },
  "servesCuisine": "한국식 쭈꾸미볶음",
  "priceRange": "$",
  "openingHours": ["Mo 11:00-21:00", "Tu 11:00-21:00", "We 11:00-21:00", "Th 11:00-21:00", "Fr 11:00-21:00", "Sa 11:00-20:00"],
  "menu": "https://haesungjjukkumi.vercel.app/#menu",
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "주차 가능", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "단체 이용 가능", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "포장 가능", "value": true }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "87"
  },
  "review": [
    { "@type": "Review", "author": { "@type": "Person", "name": "인천맛집탐방" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "원산지 표시가 이렇게 꼼꼼한 집은 처음이에요. 쭈꾸미가 정말 신선하고 탱탱해요.", "datePublished": "2025-11-12" },
    { "@type": "Review", "author": { "@type": "Person", "name": "소성로단골" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "점심에 자주 오는데 항상 믿고 먹을 수 있어요. 위생도 깔끔하고 맛도 일정해요.", "datePublished": "2025-10-28" },
    { "@type": "Review", "author": { "@type": "Person", "name": "미추홀구직장인" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "회사 근처에서 이 가격에 이 퀄리티는 진짜 없어요. 포장도 됩니다.", "datePublished": "2025-12-03" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "해성쭈꾸미 메뉴",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "MenuItem", "name": "쭈꾸미볶음 1인", "description": "서해안 생쭈꾸미 국내산, 매콤한 양념", "offers": { "@type": "Offer", "price": "9000", "priceCurrency": "KRW" } } },
      { "@type": "Offer", "itemOffered": { "@type": "MenuItem", "name": "쭈꾸미볶음 2인", "description": "서해안 생쭈꾸미 국내산 2인분", "offers": { "@type": "Offer", "price": "17000", "priceCurrency": "KRW" } } },
      { "@type": "Offer", "itemOffered": { "@type": "MenuItem", "name": "쭈삼볶음 1인", "description": "쭈꾸미 + 삼겹살 조합", "offers": { "@type": "Offer", "price": "10000", "priceCurrency": "KRW" } } },
      { "@type": "Offer", "itemOffered": { "@type": "MenuItem", "name": "낙지볶음 1인", "description": "서해안 생낙지 국내산", "offers": { "@type": "Offer", "price": "10000", "priceCurrency": "KRW" } } }
    ]
  },
  "sameAs": [
    "https://map.naver.com/v5/search/해성쭈꾸미",
    "https://place.map.kakao.com/해성쭈꾸미"
  ],
  "keywords": "인천 미추홀구 쭈꾸미, 소성로 쭈꾸미, 서해안 직송, 쭈꾸미볶음 전문"
}`

const faqJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "해성쭈꾸미 영업시간이 어떻게 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "월~금 오전 11시부터 오후 9시까지, 토요일은 오전 11시부터 오후 8시까지 운영합니다. 일요일은 정기휴무이며 브레이크타임은 오후 3시~5시입니다."
      }
    },
    {
      "@type": "Question",
      "name": "쭈꾸미 원산지가 어떻게 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "충남 서천 서해안에서 직접 공급받습니다. 매일 새벽 냉장 차량으로 직송되며 냉동 쭈꾸미는 사용하지 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "주차가 가능한가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "가게 앞 공영주차장 이용 가능합니다. 2시간 무료 주차 도장을 찍어드립니다."
      }
    },
    {
      "@type": "Question",
      "name": "포장 주문이 가능한가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "포장 가능합니다. 전화 주문 후 10분 내 픽업 가능합니다. 전화번호: 032-441-7788"
      }
    },
    {
      "@type": "Question",
      "name": "단체 예약이 가능한가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "가능합니다. 10인 이상 단체는 사전 전화 예약을 부탁드립니다. 회식, 점심 모임 모두 환영합니다."
      }
    }
  ]
}`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="alternate" hrefLang="ko" href="https://haesungjjukkumi.vercel.app" />
        <link rel="alternate" hrefLang="x-default" href="https://haesungjjukkumi.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaJson }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqJson }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
