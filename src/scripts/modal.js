const escape = 'Escape';


const openModal = function (popup) {
    popup.classList.add('popup_is-opened');
    //Вроде использование {once: true} автоматически удаляет обработчик после срабатывания
    popup.querySelector('.popup__close').addEventListener('click', closeModal,{once: true});
    document.addEventListener('keydown', escClickHandler);
    document.addEventListener('click', overlayClickHandler);
}

const closeModal = () => {
    document.querySelector('.popup_is-opened').classList.remove('popup_is-opened');
    document.removeEventListener('keydown', escClickHandler);
    document.removeEventListener('click', overlayClickHandler);
}

const overlayClickHandler = function (evt) {
    const popup = document.querySelector('.popup_is-opened');
    if (evt.target === popup) {
        closeModal();
    }
}

const escClickHandler = function (evt) {
    if (evt.key === escape) {
        closeModal();
    }
}

export {openModal, closeModal};