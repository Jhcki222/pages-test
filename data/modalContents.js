export const modalContents = [
  {
    title: "👫 인플루언서 마케팅 효과 예측 및 AI 매칭 시스템",
    description: `
      <img src="images/project-1.png" alt="프로젝트 썸네일" 
     style="width:60%; border-radius:10px; margin: 0 auto 16px; display: block;" />

      <div class="tags">
      <p><strong>수행 :</strong>
        <span class="tag">팀장</span>
        <span class="tag">프런트엔드</span>
        <span class="tag">AI엔지니어</span>
        <span class="tag">UI/UX 디자인</span>
      </div>
<p><strong>📅개발 기간 :</strong> 2024.03 ~ 2024.12</p>
      <p><strong>💻배포 사이트:</strong> <a href="https://cecd-dp.netlify.app/" target="_blank">https://cecd-dp.netlify.app/</a></p>
      <p><strong>🔗 <a href="https://github.com/CSID-DGU/2024-1-CECD1-DP-8" target="_blank">깃허브 보기</a></strong></p>
      <p><strong>📌 프로젝트 소개</strong><br>
      인스타그램 데이터를 기반으로 마케팅 성과를 정량화하고, AI로 최적의 인플루언서를 추천하는 시스템을 개발하였습니다.</p>
      <img src="images/collabo-1.png" alt="프로젝트" 
      style="width:60%; border-radius:10px; margin: 0 auto 16px; display: block;" />

      <p><strong>📊 인플루언서 리포트</strong><br>
      Meta Graph API를 통해 인플루언서 데이터를 수집하고, 정량적 지표를 산출하여 리포트화합니다.<br>
      조회수, 댓글, 광고 비율 등 다양한 데이터를 시각화하여 분석합니다.<br>
      대규모 JSON 데이터를 LazyLoading으로 최적화하며 wordcloud 및 그래프 렌더링 시 성능을 확보했습니다.</p>
            <img src="images/collabo-2.png" alt="프로젝트" 
      style="width:60%; border-radius:10px; margin: 0 auto 16px; display: block;" />
                  <img src="images/collabo-3.png" alt="프로젝트" 
      style="width:60%; border-radius:10px; margin: 0 auto 16px; display: block;" />
      <p><strong>🧠 인플루언서 추천 시스템</strong><br>
      GPT-4를 이용하여 QA 데이터를 생성하고 이를 벡터화하여 VectorStore를 구축, LLM이 이를 참고하여 추천 결과를 제공합니다.<br>
      SQL 변환 가능한 질문은 DB에서 직접 조회하고, 복잡한 질의는 두 개의 하위 질문으로 나누어 처리합니다.<br/>
      챗봇 형태의 UI를 통해 사용자는 요구사항에 충족하는 디테일한 질문이 가능하고, 추천된 결과는 interactive하게 채팅 내역 좌측에 리스트 형태로 렌더링됩니다.</p>
      <img src="images/collabo-4.png" alt="프로젝트"
      style="width:60%; border-radius:10px; margin: 0 auto 16px; display: block;" />
      <p><strong>🛠️주요 기술</strong><br>
      React.js, Java Spring, Python Flask, AWS EC2/RDS , Nginx, Docker,LLM 모델(EEVE 10.8b), VectorDB(FAISS), Meta API, PostgreSQL </p>

    `,
  },
  {
    title: "📍 LocalMark",
    description: `
    <img src="images/project-2.png" alt="프로젝트 썸네일" 
      style="width:60%; border-radius:10px; margin: 0 auto 16px; display: block;" />

    <div class="tags">
      <p><strong>수행 :</strong>
        <span class="tag">파트장</span>
        <span class="tag">프런트엔드</span>
        <span class="tag">UI/UX 디자인</span>
      </p>
    </div>
<p><strong>📅개발 기간 : </strong> 2024.07 ~ 2024.08</p>
    <p><strong>💻배포 사이트 : </strong> <a href="https://main--localmark.netlify.app/" target="_blank">https://main--localmark.netlify.app/</a></p>
    <p><strong>🔗 <a href="https://github.com/local-mark" target="_blank">깃허브 보기</a></strong></p>

    <p><strong>📌 프로젝트 소개</strong><br>
    로컬 크리에이터가 제품을 판매하고 브랜드 스토리를 공유할 수 있는 커머스 플랫폼입니다. 갤러리, 장바구니, 구매 페이지 등을 구현하며 로컬 브랜드와 소비자를 연결합니다.</p>

    <img src="images/localmark-1.png" alt="프로젝트 설명" 
      style="width:60%; border-radius:10px; margin: 0 auto 16px; display: block;" />

<p><strong>🔧 수행 목록</strong></p>
<ul>
  <li>장바구니 상태관리 (Context API)</li>
  <li>옵션별 상품 처리, 브랜드별 배송비 합산</li>
  <li>결제 API 연동 (카카오페이, 토스페이)</li>
  <li>FE 일정 수립 및 퍼블리싱 가이드 작성</li>
</ul>
    <br/>
    <p><strong>🚩 문제 해결</strong><br>
    <ul>
      <li><strong>배송비 중복 처리 문제:</strong> 동일한 상품이라도 옵션별로 별도 관리가 필요했으며, 배송비 중복 처리로 사용자 불편 발생.
    Context API를 활용하여 상태 관리 구조를 설계하고, 배송비 중복 문제를 해결.</li>
      <li><strong>기술 격차 해결:</strong> Git 브랜치 전략을 수립하고, 코드 리뷰와 작업 가이드를 통해 협업 효율성을 증대.</li>
      <li><strong>결제 연동 이슈:</strong> API Payload 분석 후 테스트 구현. 장바구니에 담아 결제 버튼을 누를 때, 선택된 상품과 결제 정보를 상태 관리를 통해 결제 페이지로 넘김</li>
    </ul></p>

    <img src="images/localmark-2.png" alt="장바구니 상태관리" 
      style="width:60%; border-radius:10px; margin: 0 auto 16px; display: block;" />
    <img src="images/localmark-3.png" alt="결제 페이지 연동" 
      style="width:60%; border-radius:10px; margin: 0 auto 16px; display: block;" />

    <p><strong>🛠️ 주요 기술 : </strong>
    React.js, Context API, Kakao Pay API, Toss Pay API, Netlify, Figma, Git</p>
  `,
  },
  {
    title: "🛫 TravelBox",
    description: `
       <img src="images/project-4.png" alt="프로젝트 썸네일" 
     style="width:60%; border-radius:10px; margin: 0 auto 16px; display: block;" />

      <div class="tags">
      <p><strong>수행 :</strong>
        <span class="tag">캘린더 기능</span>
        <span class="tag">일정 등록 및 관리</span>
        <span class="tag">게시글 연동</span>
      </div>
<p><strong>📅개발 기간 : </strong> 2024.12 ~ 2025.01</p>
<p><strong>🔗 <a href="https://github.com/orgs/TravelBox00/repositories" target="_blank">깃허브 보기</a></strong></p>

      <p><strong>📌 프로젝트 소개</strong><br>
      여행 일정을 관리하고 공유할 수 있는 안드로이드 앱입니다. 방대하고 흩어진 여행 정보들을 한 곳에 모아 관리하고 정보를 얻을 수 있도록 하기위해 개발되었습니다.</p>

      <p><strong>🛠️ 주요 기술 : </strong> Kotlin, Android Studio, Spotify API, Material Calendar</p>
    `,
  },
];

export default modalContents;
