document.addEventListener("DOMContentLoaded", function () {
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
});
