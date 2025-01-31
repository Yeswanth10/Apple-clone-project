const toggleBtn=document.querySelector('.toggle_btn')
const toggleBtnIcon=document.querySelector('.toggle_btn li a i')
const dropDownMenu=document.querySelector('.dropdown_menu')

toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open')
    console.log("ok")
    const isOpen =dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList=isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'

}






var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });