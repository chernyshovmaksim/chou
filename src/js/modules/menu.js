import "mmenu-light/dist/mmenu-light";
import "mmenu-light/dist/mmenu-light.css";


const menu = new MmenuLight(
	document.querySelector(".mmenu"),
);

const navigator = menu.navigation({
	// options
	title: "Центр образования на Марсовом поле",
	theme: "light"
});

const drawer = menu.offcanvas({
	// options
});


document.addEventListener(
	"DOMContentLoaded", () => {
		document.querySelector("a[href='#mmenu']")
			.addEventListener("click", (event) => {
				event.preventDefault();
				drawer.open();
			});
	}
);
