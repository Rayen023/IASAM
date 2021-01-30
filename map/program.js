const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

// // $(document).ready(function()
// // {
// //   lock('landscape');

//   function lock (orientation) {
//     // Go into full screen first
//     if (document.documentElement.requestFullscreen) {
//       screen.orientation.lock('landscape');
//     } 
  
//     // Then lock orientation
//     screen.orientation.lock('landscape');
//   }
  
//   function unlock () {
//     // Unlock orientation
//     screen.orientation.unlock();
   
//     // Exit full screen
//     if (document.exitFullscreen) {
//       document.exitFullscreen();
//     } 
//   }
// // }