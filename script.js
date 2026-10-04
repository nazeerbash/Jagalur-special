const whatsappNumber = "918970574001";

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
	const message = link.dataset.whatsapp;
	link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
});

const filterButtons = document.querySelectorAll("[data-filter]");
const menuItems = document.querySelectorAll(".menu-item");

filterButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const selectedCategory = button.dataset.filter;
		filterButtons.forEach((filterButton) => {
			const isSelected = filterButton === button;
			filterButton.classList.toggle("is-active", isSelected);
			filterButton.setAttribute("aria-pressed", String(isSelected));
		});
		menuItems.forEach((item) => {
			item.hidden = selectedCategory !== "all" && item.dataset.category !== selectedCategory;
		});
	});
});

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

menuToggle.addEventListener("click", () => {
	const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
	menuToggle.setAttribute("aria-expanded", String(!isOpen));
	menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
	siteNav.classList.toggle("is-open", !isOpen);
});

siteNav.querySelectorAll("a").forEach((link) => {
	link.addEventListener("click", () => {
		menuToggle.setAttribute("aria-expanded", "false");
		menuToggle.setAttribute("aria-label", "Open navigation");
		siteNav.classList.remove("is-open");
	});
});
