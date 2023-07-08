const modalButton = document.querySelector('.navigation-link.button'),
      modalDialog = document.querySelector('.modal'),
      modalCloseButton = document.querySelector('.modal-close');

function openModal(event) {
  event.preventDefault();
  modalDialog.showModal();
  document.body.classList.add("scroll-lock");
}

function closeModal() {
  modalDialog.close();
  document.body.classList.remove("scroll-lock");
}

function closeModalOnBackdrop({ currentTarget, target }) {
  const modalDialog = currentTarget;
  const isClickedOnBackdrop = target === modalDialog;
  if (isClickedOnBackdrop) {
    closeModal();
  }
}

modalButton.addEventListener('click', openModal);
modalCloseButton.addEventListener('click', closeModal);
modalDialog.addEventListener('click', closeModalOnBackdrop);
