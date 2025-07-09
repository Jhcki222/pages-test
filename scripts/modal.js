import { modalContents } from "../data/modalContents.js";

document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project-card");
  const body = document.body;

  projectCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      openModal(index);
    });
  });

  function openModal(index) {
    const { title, description } = modalContents[index];

    const modalOverlay = document.createElement("div");
    modalOverlay.classList.add("modal-overlay");

    const modal = document.createElement("div");
    modal.classList.add("modal");

    modal.innerHTML = `
  <div class="modal-header">
    <span class="modal-close">&times;</span>
  </div>
  <div class="modal-scroll">
    <div class="modal-content">
      <h1>${title}</h1>
      ${description}
    </div>
  </div>
`;

    modalOverlay.appendChild(modal);
    body.appendChild(modalOverlay);

    // 닫기 처리
    modalOverlay.addEventListener("click", (e) => {
      if (
        e.target === modalOverlay || // 바깥 클릭
        e.target.classList.contains("modal-close")
      ) {
        closeModal(modalOverlay);
      }
    });

    // 모바일 스와이프 닫기
    let startY = null;
    modalOverlay.addEventListener("touchstart", (e) => {
      startY = e.touches[0].clientY;
    });
    modalOverlay.addEventListener("touchmove", (e) => {
      if (!startY) return;
      let currentY = e.touches[0].clientY;
      if (currentY - startY > 100) {
        closeModal(modalOverlay);
      }
    });
  }

  function closeModal(modalOverlay) {
    modalOverlay.classList.add("fade-out");
    setTimeout(() => {
      modalOverlay.remove();
    }, 300);
  }
});
