export default function Home() {
  return (
    <main style={{ fontFamily: "'Noto Sans KR', sans-serif", color: "#1a1a1a", backgroundColor: "#fff" }}>

      {/* 구글 폰트 */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Noto+Serif+KR:wght@400;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
          --green: #1B4332;
          --green-light: #2D6A4F;
          --green-pale: #f0f7f4;
          --accent: #52b788;
          --text: #1a1a1a;
          --gray: #6b7280;
          --border: #e5e7eb;
        }
        body { background: #fff; }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
        section { padding: 80px 0; }
        h2 { font-family: "Noto Serif KR", serif; font-size: 2rem; color: var(--green); margin-bottom: 12px; }
        .label { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--accent); margin-bottom: 8px; display: block; }
        .divider { width: 40px; height: 3px; background: var(--accent); margin: 16px 0 32px; }
      `}</style>

      {/* 헤더 */}
      <header style={{ background: "var(--green)", padding: "16px 0", position: "sticky", top: 0, zIndex: 100 }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <span style={{ fontFamily: "Noto Serif KR, serif", fontSize: "1.25rem", fontWeight: 700, color: "#fff" }}>해성쭈꾸미</span>
            <span style={{ fontSize: "0.7rem", color: "var(--accent)", marginLeft: "10px", letterSpacing: "0.1em" }}>HAESUNG JJUKKUMI</span>
          </div>
          <nav style={{ display: "flex", gap: "24px" }}>
            {["원산지", "메뉴", "위생관리", "오시는길"].map(item => (
              <a key={item} href={`#${item}`} style={{ color: "#d1fae5", fontSize: "0.85rem", textDecoration: "none" }}>{item}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* 히어로 — 항목 6: 지역+업종 첫 문장 */}
      <section style={{ background: "var(--green)", padding: "100px 0 80px", color: "#fff" }}>
        <div className="container">
          <span className="label" style={{ color: "var(--accent)" }}>인천 미추홀구 쭈꾸미볶음 전문점</span>
          <h1 style={{ fontFamily: "Noto Serif KR, serif", fontSize: "2.8rem", lineHeight: 1.3, marginBottom: "20px", maxWidth: "600px" }}>
            서해안 산지에서<br />식탁까지,<br />투명하게
          </h1>
          <p style={{ fontSize: "1.05rem", color: "#a7f3d0", lineHeight: 1.8, maxWidth: "520px", marginBottom: "12px" }}>
            {/* 항목 7: 업력/전문성 선언 */}
            인천 미추홀구 소성로에서 2010년부터 15년째 쭈꾸미볶음만 고집해온 해성쭈꾸미입니다.<br />
            충남 서천 서해안산 생쭈꾸미를 매일 새벽 냉장 직송으로 받아 그날 바로 조리합니다.
          </p>
          {/* 항목 8: 연령대 타겟 */}
          <p style={{ fontSize: "0.95rem", color: "#6ee7b7", fontWeight: 700, marginBottom: "8px", letterSpacing: "0.02em" }}>
            인천 미추홀구에서 2010년부터 운영된 서천 직송 쭈꾸미볶음 전문점
          </p>
          <p style={{ fontSize: "0.85rem", color: "#6ee7b7" }}>직장인 점심 · 가족 외식 · 혼밥 모두 환영 — 30~50대 단골 중심</p>
          <div style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ background: "rgba(255,255,255,0.12)", border: "1px solid #6ee7b7", color: "#fff", padding: "6px 16px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 700 }}>⭐ 4.8</span>
            <span style={{ background: "rgba(255,255,255,0.12)", border: "1px solid #6ee7b7", color: "#a7f3d0", padding: "6px 16px", borderRadius: "20px", fontSize: "0.85rem" }}>리뷰 112개</span>
            <span style={{ background: "rgba(255,255,255,0.12)", border: "1px solid #6ee7b7", color: "#a7f3d0", padding: "6px 16px", borderRadius: "20px", fontSize: "0.85rem" }}>15년 운영</span>
          </div>
          <div style={{ display: "flex", gap: "16px", marginTop: "16px", flexWrap: "wrap" }}>
            <a href="#메뉴" style={{ background: "var(--accent)", color: "#fff", padding: "14px 28px", borderRadius: "4px", textDecoration: "none", fontWeight: 700, fontSize: "0.95rem" }}>메뉴 보기</a>
            <a href="#원산지" style={{ border: "1px solid #6ee7b7", color: "#6ee7b7", padding: "14px 28px", borderRadius: "4px", textDecoration: "none", fontSize: "0.95rem" }}>원산지 확인</a>
          </div>
        </div>
      </section>

      {/* 신뢰 배지 */}
      <section style={{ background: "var(--green-pale)", padding: "40px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", textAlign: "center" }}>
            {[
              { icon: "🌊", title: "서해안 직송", sub: "충남 서천산 생쭈꾸미" },
              { icon: "❄️", title: "냉장 유통", sub: "냉동 제품 사용 안함" },
              { icon: "🏷️", title: "원산지 100% 공개", sub: "법적 의무 + 자발적 투명" },
              { icon: "⏱️", title: "당일 조리", sub: "재고 없이 신선하게" },
            ].map((b) => (
              <div key={b.title} style={{ background: "#fff", padding: "24px 16px", borderRadius: "8px", border: "1px solid var(--border)" }}>
                <div style={{ fontSize: "2rem", marginBottom: "8px" }}>{b.icon}</div>
                <div style={{ fontWeight: 700, color: "var(--green)", fontSize: "0.95rem", marginBottom: "4px" }}>{b.title}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--gray)" }}>{b.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 운영자 스토리 + E-E-A-T */}
      <section style={{ background: "var(--green-pale)" }}>
        <div className="container">
          <span className="label">왜 해성쭈꾸미인가</span>
          <h2>15년이 증명한<br />한 가지 이유</h2>
          <div className="divider"></div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: "1rem", color: "var(--text)", lineHeight: 2, marginBottom: "20px" }}>
                2010년 처음 문을 열었을 때부터 한 가지 원칙을 지켜왔습니다.<br />
                <strong style={{ color: "var(--green)" }}>냉동 쭈꾸미는 절대 쓰지 않는다.</strong>
              </p>
              <p style={{ fontSize: "0.92rem", color: "var(--gray)", lineHeight: 2, marginBottom: "20px" }}>
                매주 두 번, 충남 서천 서해안 어시장을 직접 방문합니다.
                새벽 경매에서 당일 수확된 쭈꾸미를 직접 눈으로 확인하고 골라옵니다.
                냉장차로 인천까지 직송해 그날 바로 조리합니다.
              </p>
              <p style={{ fontSize: "0.92rem", color: "var(--gray)", lineHeight: 2 }}>
                15년 동안 단골이 끊이지 않는 이유는 맛보다
                <strong style={{ color: "var(--green)" }}> "항상 같은 품질"</strong>을 유지해온 덕분이라고 생각합니다.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
              {[
                { num: "15년", label: "운영 경력", desc: "2010년부터 인천 미추홀구 소성로 한 자리" },
                { num: "주 2회", label: "산지 직접 방문", desc: "서천 서해안 어시장 새벽 경매 직접 참여" },
                { num: "0개", label: "냉동 제품 사용", desc: "개업 이후 15년간 냉동 쭈꾸미 사용 안함" },
              ].map((s) => (
                <div key={s.num} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "8px", padding: "20px 24px", display: "flex", gap: "20px", alignItems: "center" }}>
                  <div style={{ minWidth: "60px", textAlign: "center" }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--green)", fontFamily: "Noto Serif KR, serif" }}>{s.num}</div>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--green)", fontSize: "0.9rem", marginBottom: "4px" }}>{s.label}</div>
                    <div style={{ fontSize: "0.82rem", color: "var(--gray)" }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 원산지 & 유통 과정 — 항목 9 */}
      <section id="원산지">
        <div className="container">
          <span className="label">원산지 & 유통 과정</span>
          <h2>산지에서 식탁까지,<br />모든 과정을 공개합니다</h2>
          <div className="divider"></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", position: "relative" }}>
            {[
              { step: "01", place: "충남 서천", title: "산지 수확", desc: "서해안 청정 해역에서 어민이 직접 수확. 수확 당일 선도 확인 후 출하.", color: "#1B4332" },
              { step: "02", place: "새벽 3시", title: "냉장 출발", desc: "0~4°C 냉장 차량으로 인천까지 직송. 냉동 보관 없음.", color: "#2D6A4F" },
              { step: "03", place: "매장 도착", title: "신선도 검수", desc: "입고 시 색상·탄력·냄새 3가지 기준으로 자체 검수. 기준 미달 시 전량 반품.", color: "#40916C" },
              { step: "04", place: "당일 조리", title: "직접 손질", desc: "주문 즉시 손질 시작. 전날 손질한 재료 사용 안함.", color: "#52B788" },
            ].map((s, i) => (
              <div key={s.step} style={{ background: s.color, padding: "36px 24px", color: "#fff", position: "relative" }}>
                {i < 3 && <div style={{ position: "absolute", right: "-12px", top: "50%", transform: "translateY(-50%)", background: "var(--accent)", color: "#fff", width: "24px", height: "24px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1, fontSize: "0.75rem", fontWeight: 700 }}>▶</div>}
                <div style={{ fontSize: "0.7rem", color: "#a7f3d0", letterSpacing: "0.1em", marginBottom: "6px" }}>STEP {s.step}</div>
                <div style={{ fontSize: "0.8rem", color: "#6ee7b7", marginBottom: "8px" }}>{s.place}</div>
                <div style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "10px" }}>{s.title}</div>
                <div style={{ fontSize: "0.82rem", color: "#d1fae5", lineHeight: 1.7 }}>{s.desc}</div>
              </div>
            ))}
          </div>

          {/* 원산지 표 */}
          <div style={{ marginTop: "48px", border: "1px solid var(--border)", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ background: "var(--green)", padding: "16px 24px" }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}>원산지 표시 (법적 의무 사항)</span>
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "var(--green-pale)" }}>
                  {["재료명", "원산지", "공급처", "비고"].map(h => (
                    <th key={h} style={{ padding: "12px 20px", textAlign: "left", fontSize: "0.82rem", color: "var(--green)", fontWeight: 700, borderBottom: "1px solid var(--border)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["쭈꾸미", "국내산 (충남 서천)", "서천수협 직거래", "냉동 제품 미사용"],
                  ["낙지", "국내산 (전남 무안)", "무안낙지조합 직거래", "계절에 따라 변동"],
                  ["삼겹살", "국내산 (돼지고기)", "인천 정육 도매", "냉장육 당일 납품"],
                  ["고추장 양념", "국내산 고춧가루", "직접 배합", "합성착색료 미사용"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: "14px 20px", fontSize: "0.88rem", color: j === 0 ? "var(--green)" : "var(--text)", fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 메뉴 — 항목 10 */}
      <section id="메뉴" style={{ background: "var(--green-pale)" }}>
        <div className="container">
          <span className="label">메뉴 & 가격</span>
          <h2>해성쭈꾸미 메뉴판</h2>
          <div className="divider"></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
            {[
              { name: "쭈꾸미볶음 1인", price: "9,000원", desc: "서해안 생쭈꾸미 국내산 · 매콤한 자체 양념 · 냉동 재료 미사용 — 식감이 탱탱하고 잡내 없는 게 단골 이유", badge: "인기" },
              { name: "쭈꾸미볶음 2인", price: "17,000원", desc: "서해안 생쭈꾸미 국내산 2인분 · 공기밥 포함", badge: "" },
              { name: "쭈삼볶음 1인", price: "10,000원", desc: "쭈꾸미 + 국내산 삼겹살 · 조합이 환상적", badge: "추천" },
              { name: "낙지볶음 1인", price: "10,000원", desc: "전남 무안 생낙지 국내산 · 계절 메뉴", badge: "" },
              { name: "공기밥", price: "1,000원", desc: "국내산 쌀 · 매일 새로 지음", badge: "" },
              { name: "된장찌개", price: "2,000원", desc: "국내산 두부 · 사이드 메뉴", badge: "" },
            ].map((m) => (
              <div key={m.name} style={{ background: "#fff", padding: "24px", borderRadius: "8px", border: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <span style={{ fontWeight: 700, fontSize: "1rem", color: "var(--green)" }}>{m.name}</span>
                    {m.badge && <span style={{ background: "var(--accent)", color: "#fff", fontSize: "0.65rem", padding: "2px 8px", borderRadius: "20px", fontWeight: 700 }}>{m.badge}</span>}
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "var(--gray)", lineHeight: 1.6 }}>{m.desc}</p>
                </div>
                <span style={{ fontWeight: 700, color: "var(--green)", fontSize: "1rem", whiteSpace: "nowrap", marginLeft: "16px" }}>{m.price}</span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "20px", fontSize: "0.8rem", color: "var(--gray)" }}>※ 모든 메뉴 기본 반찬 제공 · 가격은 부가세 포함 · 재료 상황에 따라 변동될 수 있습니다</p>
        </div>
      </section>

      {/* 위생관리 — 항목 9 연계 */}
      <section id="위생관리">
        <div className="container">
          <span className="label">위생 & 품질관리</span>
          <h2>매일 지키는<br />해성의 위생 기준</h2>
          <div className="divider"></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { icon: "🧊", title: "냉장 온도 관리", items: ["냉장고 온도 0~4°C 유지", "매일 오전 온도 기록", "냉동 쭈꾸미 사용 안함"] },
              { icon: "🧼", title: "주방 위생", items: ["매일 조리 전 전체 세척", "도마·칼 식재료별 구분 사용", "위생복·위생모 착용 의무화"] },
              { icon: "📋", title: "원산지 관리", items: ["납품서 6개월 보관", "원산지 표시판 상시 부착", "변경 시 즉시 고지"] },
            ].map((c) => (
              <div key={c.title} style={{ border: "1px solid var(--border)", borderRadius: "8px", overflow: "hidden" }}>
                <div style={{ background: "var(--green)", padding: "20px 24px", display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "1.5rem" }}>{c.icon}</span>
                  <span style={{ color: "#fff", fontWeight: 700 }}>{c.title}</span>
                </div>
                <ul style={{ padding: "20px 24px", listStyle: "none" }}>
                  {c.items.map(item => (
                    <li key={item} style={{ fontSize: "0.88rem", color: "var(--text)", padding: "8px 0", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ color: "var(--accent)", fontWeight: 700 }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 방문 상황별 — 항목 16 */}
      <section style={{ background: "var(--green)" }}>
        <div className="container">
          <span className="label" style={{ color: "var(--accent)" }}>방문 상황별 안내</span>
          <h2 style={{ color: "#fff" }}>어떤 자리든<br />해성쭈꾸미가 어울립니다</h2>
          <div className="divider" style={{ background: "var(--accent)" }}></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
            {[
              { icon: "💼", title: "직장인 점심", desc: "인천 미추홀구 소성로 인근 직장인 단골 맛집. 브레이크 없이 빠르게 나오는 1인 메뉴로 점심 시간 안에 충분히 식사 가능합니다." },
              { icon: "👨‍👩‍👧", title: "가족 외식", desc: "인천 미추홀구에서 아이와 함께 오기 좋은 쭈꾸미집. 맵기 조절 가능하며 어린이용 순한맛도 요청 시 준비합니다." },
              { icon: "🥂", title: "회식", desc: "10인 이상 단체 예약 가능. 부서 회식, 동창 모임, 생일 파티 환영. 사전 전화 예약 시 자리 배정해드립니다." },
              { icon: "🍽️", title: "혼밥", desc: "1인 메뉴 정식 운영. 혼자 오셔도 불편하지 않도록 1인 테이블 구성. 인천 미추홀구에서 혼밥하기 좋은 집." },
            ].map((s) => (
              <div key={s.title} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", padding: "28px", borderRadius: "8px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "12px" }}>{s.icon}</div>
                <div style={{ color: "#a7f3d0", fontWeight: 700, marginBottom: "8px" }}>{s.title}</div>
                <p style={{ fontSize: "0.88rem", color: "#d1fae5", lineHeight: 1.8 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 영업시간 + 주차 — 항목 13, 14 */}
      <section style={{ background: "var(--green-pale)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>
            <div>
              <span className="label">영업시간</span>
              <h2>운영 안내</h2>
              <div className="divider"></div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  {[
                    ["월 ~ 금", "오전 11:00 ~ 오후 9:00", false],
                    ["토요일", "오전 11:00 ~ 오후 8:00", false],
                    ["일요일", "정기휴무", true],
                    ["브레이크타임", "오후 3:00 ~ 오후 5:00", false],
                    ["라스트오더", "마감 30분 전", false],
                  ].map(([day, time, closed]) => (
                    <tr key={String(day)} style={{ borderBottom: "1px solid var(--border)" }}>
                      <td style={{ padding: "14px 0", fontWeight: 600, color: "var(--green)", fontSize: "0.9rem", width: "140px" }}>{day}</td>
                      <td style={{ padding: "14px 0", fontSize: "0.9rem", color: closed ? "#ef4444" : "var(--text)" }}>{String(time)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <span className="label">오시는 길 & 주차</span>
              <h2>찾아오시는 법</h2>
              <div className="divider"></div>
              <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "8px", padding: "24px", marginBottom: "16px" }}>
                <p style={{ fontWeight: 700, color: "var(--green)", marginBottom: "8px" }}>📍 주소</p>
                <p style={{ fontSize: "0.9rem", color: "var(--text)", lineHeight: 1.7 }}>인천광역시 미추홀구 소성로 214<br />(소성로역 3번 출구 도보 3분 · 주안역 인근)<br />인천 미추홀구 소성로 상권 중심부 위치</p>
              </div>
              <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "8px", padding: "24px", marginBottom: "16px" }}>
                <p style={{ fontWeight: 700, color: "var(--green)", marginBottom: "8px" }}>🅿️ 주차 안내</p>
                <p style={{ fontSize: "0.9rem", color: "var(--text)", lineHeight: 1.7 }}>가게 앞 공영주차장 이용 가능<br />식사 고객 2시간 무료 주차 도장 제공<br />만차 시 인근 소성로 공영주차장 이용</p>
              </div>
              <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "8px", padding: "24px" }}>
                <p style={{ fontWeight: 700, color: "var(--green)", marginBottom: "8px" }}>�� 예약 & 문의</p>
                <p style={{ fontSize: "1.1rem", color: "var(--green)", fontWeight: 700 }}>032-441-7788</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 구글 지도 — 항목 12 */}
      <section id="오시는길" style={{ padding: "0" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.123!2d126.6501!3d37.4563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z7J207J207J20!5e0!3m2!1sko!2skr!4v1234567890"
          width="100%"
          height="400"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          title="해성쭈꾸미 인천 미추홀구 위치"
        ></iframe>
      </section>

      {/* 방문 후기 — 항목 11 */}
      <section>
        <div className="container">
          <span className="label">고객 후기</span>
          <h2>직접 다녀오신 분들의<br />솔직한 후기</h2>
          <div className="divider"></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { name: "인천맛집탐방", date: "2025.11.12", rating: 5, text: "원산지 표시가 이렇게 꼼꼼한 집은 처음이에요. 쭈꾸미가 정말 신선하고 탱탱해요. 냉동 아닌 게 티가 납니다." },
              { name: "소성로단골", date: "2025.10.28", rating: 5, text: "점심에 자주 오는데 항상 믿고 먹을 수 있어요. 위생도 깔끔하고 맛도 매번 일정해서 좋아요." },
              { name: "미추홀구직장인", date: "2025.12.03", rating: 5, text: "회사 근처인데 이 가격에 이 퀄리티는 진짜 없어요. 포장도 되고 빠르게 주셔서 점심에 딱입니다." },
            ].map((r) => (
              <div key={r.name} style={{ border: "1px solid var(--border)", borderRadius: "8px", padding: "28px" }}>
                <div style={{ color: "#f59e0b", fontSize: "1rem", marginBottom: "12px" }}>{"★".repeat(r.rating)}</div>
                <p style={{ fontSize: "0.9rem", color: "var(--text)", lineHeight: 1.8, marginBottom: "20px" }}>"{r.text}"</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 600, color: "var(--green)", fontSize: "0.85rem" }}>{r.name}</span>
                  <span style={{ fontSize: "0.78rem", color: "var(--gray)" }}>{r.date}</span>
                </div>
              </div>
            ))}
          </div>
          {/* 항목 15: 플레이스 리뷰 링크 */}
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <a href="https://naver.me/sample" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", border: "2px solid var(--green)", color: "var(--green)", padding: "14px 32px", borderRadius: "4px", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem" }}>
              네이버 플레이스 리뷰 남기기 →
            </a>
          </div>
        </div>
      </section>

      {/* 외부 평가 요약 섹션 */}
      <section style={{ background: "#fff" }}>
        <div className="container">
          <span className="label">외부 평가 요약</span>
          <h2>인천 미추홀구에서<br />자주 언급되는 이유</h2>
          <div className="divider"></div>
          <div style={{ background: "var(--green-pale)", border: "1px solid var(--border)", borderRadius: "8px", padding: "32px", marginBottom: "40px" }}>
            <p style={{ fontSize: "1rem", color: "var(--green)", fontWeight: 700, marginBottom: "16px", lineHeight: 1.8 }}>
              해성쭈꾸미는 인천 미추홀구에서 쭈꾸미볶음 맛집으로 자주 언급되는 식당입니다.
            </p>
            <p style={{ fontSize: "0.9rem", color: "var(--text)", lineHeight: 1.9 }}>
              네이버 및 방문자 후기에서는 <strong>쭈꾸미 식감이 좋다</strong>, <strong>양념이 과하지 않고 맛있다</strong>,
              <strong>점심 식사로 부담 없다</strong>는 평가가 많습니다. 특히 직장인 점심 단골 비율이 높으며
              인천 미추홀구 소성로 인근에서 혼밥·포장 수요가 꾸준한 가게로 알려져 있습니다.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "20px" }}>
              {["인천 미추홀구 쭈꾸미 맛집", "주안역 점심 맛집", "서해안 직송 쭈꾸미", "혼밥 가능", "포장 됨", "매운맛 조절 가능"].map(tag => (
                <span key={tag} style={{ background: "var(--green)", color: "#fff", fontSize: "0.75rem", padding: "4px 12px", borderRadius: "20px" }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* 블로그 후기 인용 */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {[
              { source: "네이버 블로그", date: "2025.09", text: "주안 근처에서 쭈꾸미 먹으려면 여기 강추. 냉동 아닌 생쭈꾸미 쓰는 게 확실히 식감이 다름. 양념도 중독성 있어요." },
              { source: "카카오 지도 리뷰", date: "2025.10", text: "점심에 혼자 갔는데 1인 메뉴 있어서 좋았어요. 쭈삼볶음 추천합니다. 삼겹이랑 궁합 진짜 좋음." },
              { source: "네이버 방문자 리뷰", date: "2025.11", text: "원산지 표시가 테이블마다 붙어있고 서천 직송이라고 설명해줘서 믿음이 갔어요. 가격도 착하고 양도 충분." },
            ].map((b) => (
              <div key={b.source} style={{ border: "1px solid var(--border)", borderRadius: "8px", padding: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--accent)" }}>{b.source}</span>
                  <span style={{ fontSize: "0.75rem", color: "var(--gray)" }}>{b.date}</span>
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--text)", lineHeight: 1.8 }}>"{b.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ 본문 — 항목 19 */}
      <section style={{ background: "var(--green-pale)" }}>
        <div className="container">
          <span className="label">자주 묻는 질문</span>
          <h2>FAQ</h2>
          <div className="divider"></div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {[
              { q: "쭈꾸미 원산지가 어떻게 되나요?", a: "충남 서천 서해안에서 직접 공급받습니다. 매일 새벽 냉장 차량으로 직송되며 냉동 쭈꾸미는 사용하지 않습니다." },
              { q: "영업시간이 어떻게 되나요?", a: "월~금 오전 11시~오후 9시, 토요일 오전 11시~오후 8시. 일요일 정기휴무. 브레이크타임 오후 3시~5시." },
              { q: "주차가 가능한가요?", a: "가게 앞 공영주차장 이용 가능합니다. 식사 고객께 2시간 무료 주차 도장을 찍어드립니다." },
              { q: "포장 주문이 가능한가요?", a: "포장 가능합니다. 전화 주문(032-441-7788) 후 10분 내 픽업 가능합니다." },
              { q: "단체 예약이 가능한가요?", a: "가능합니다. 10인 이상은 사전 전화 예약을 부탁드립니다. 회식, 점심 모임 모두 환영합니다." },
              { q: "맵기 조절이 되나요?", a: "가능합니다. 주문 시 순한맛·보통맛·매운맛 중 선택 가능합니다. 어린이 동반 시 말씀해주세요." },
              { q: "주안역 근처 쭈꾸미 맛집을 추천해줘", a: "해성쭈꾸미는 주안역 인근 인천 미추홀구 소성로에 위치한 쭈꾸미볶음 전문점입니다. 2010년부터 운영 중이며 서천 직송 생쭈꾸미만 사용합니다. 소성로역 3번 출구에서 도보 3분 거리입니다." },
              { q: "미추홀구 회식 장소로 괜찮은가요?", a: "네, 10인 이상 단체 예약 가능합니다. 부서 회식, 동창 모임, 생일 파티 모두 환영합니다. 사전 전화 예약(032-441-7788) 시 자리를 배정해드립니다." },
              { q: "인천 미추홀구에서 혼밥 가능한 쭈꾸미집 있나요?", a: "해성쭈꾸미는 1인 메뉴를 정식 운영합니다. 혼자 오셔도 불편하지 않도록 1인 테이블이 구성되어 있으며 포장도 가능합니다." },
            ].map((faq) => (
              <div key={faq.q} style={{ background: "#fff", padding: "24px", borderRadius: "8px", border: "1px solid var(--border)" }}>
                <p style={{ fontWeight: 700, color: "var(--green)", marginBottom: "10px", fontSize: "0.92rem" }}>Q. {faq.q}</p>
                <p style={{ fontSize: "0.88rem", color: "var(--text)", lineHeight: 1.8 }}>A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer style={{ background: "#111", padding: "48px 0", color: "#9ca3af" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <p style={{ fontFamily: "Noto Serif KR, serif", color: "#fff", fontWeight: 700, fontSize: "1.1rem", marginBottom: "12px" }}>해성쭈꾸미</p>
              <p style={{ fontSize: "0.82rem", lineHeight: 1.8 }}>
                인천광역시 미추홀구 소성로 214<br />
                Tel. 032-441-7788<br />
                영업시간: 월~금 11:00~21:00 · 토 11:00~20:00 · 일 휴무
              </p>
            </div>
            <div>
              <p style={{ color: "#fff", fontWeight: 600, marginBottom: "12px", fontSize: "0.88rem" }}>원산지 정보</p>
              <p style={{ fontSize: "0.82rem", lineHeight: 1.8 }}>쭈꾸미: 국내산 (충남 서천)<br />낙지: 국내산 (전남 무안)<br />돼지고기: 국내산</p>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #374151", marginTop: "32px", paddingTop: "24px", fontSize: "0.78rem" }}>
            인천 미추홀구에서 2010년부터 운영된 서천 직송 쭈꾸미볶음 전문점 · 해성쭈꾸미<br />© 2026 해성쭈꾸미. 인천 미추홀구 쭈꾸미볶음 전문점.
          </div>
        </div>
      </footer>

    </main>
  )
}
