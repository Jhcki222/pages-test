document.addEventListener("DOMContentLoaded", function () {
  // 1. IntersectionObserver를 통한 애니메이션 트리거
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const target = entry.target;

        if (entry.isIntersecting) {
          target.classList.add("is-visible");
        } else {
          target.classList.remove("is-visible");
        }
      });
    },
    {
      threshold: 0.2, // 요소의 20% 이상 보일 때 활성화
    }
  );

  // data-animate 속성 가진 모든 요소를 감시
  document.querySelectorAll("[data-animate]").forEach((el) => {
    observer.observe(el);
  });

  // 2. Skills 탭 전환 기능
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;

      // 모든 버튼과 컨텐츠 비활성화
      tabButtons.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));

      // 선택된 탭 활성화
      btn.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });

  // // 3. 플로팅 버튼
  // // Floating Button 스크립트
  // const fabMain = document.querySelector(".fab-main");
  // const fabMenu = document.querySelector(".fab-menu");
  // const fabContainer = document.querySelector(".floating-button");

  // if (fabMain && fabMenu && fabContainer) {
  //   fabMain.addEventListener("click", () => {
  //     fabContainer.classList.toggle("open");
  //   });
  // }

  // window.scrollToSection = function (id) {
  //   const section = document.getElementById(id);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //     fabContainer.classList.remove("open");
  //   } else if (id === "top") {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //     fabContainer.classList.remove("open");
  //   }
  // };
});

document.addEventListener("DOMContentLoaded", () => {
  const mainButton = document.querySelector(".fab-main");
  mainButton.addEventListener("click", () => {
    mainButton.classList.toggle("open");
  });
});

function scrollToSection(id) {
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
}
