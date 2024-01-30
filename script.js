const modal = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.btn');
const btnClosedModal = document.querySelector('.btn-closed-modal');

btnOpenModal.addEventListener('click', ()=>{
    modal.showModal();
})

btnClosedModal.addEventListener('click', ()=>{
    modal.close()
})