let listTitle = document.querySelectorAll('.list-title'),
	whiteArrow = document.querySelectorAll('.arrow-white'),
	dropdownMenu = document.querySelectorAll('.dropdown-menu');

listTitle.forEach((lst, idx) => {
	lst.addEventListener('mouseover', () => {
		lst.classList.add('blur');
	});
	lst.addEventListener('mouseleave', () => {
		lst.classList.remove('blur');
	});
	lst.addEventListener('click', () => {
		lst.classList.toggle('active');
	});
});