window.addEventListener('scroll', scrollHeader)

//swiper

const swiper = new Swiper('.selection__container', {
	slidesPerView: 'auto', // Автоматическая ширина слайда
	spaceBetween: 30, // Расстояние между слайдами
	navigation: {
		nextEl: '.swiper-button-next', // Кнопка следующего слайда
		prevEl: '.swiper-button-prev', // Кнопка предыдущего слайда
	},
})
