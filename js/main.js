const navMobile = document.querySelector('.nav-mobil')
const navBtn = document.querySelector('.hamburger')
const footerYear = document.querySelector('.footer__year')
const allNavILinks = document.querySelectorAll('.nav__link')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobil--active')

	allNavILinks.forEach(link => {
		link.addEventListener('click', () => {
			navBtn.classList.remove('is-active')
			navMobile.classList.remove('nav-mobil--active')
		})
	})
}

navBtn.addEventListener('click', handleNav)

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()

