const whatsappNumber = "918970574001";

const translations = {
	"Language": "ಭಾಷೆ",
	"Main navigation": "ಮುಖ್ಯ ನ್ಯಾವಿಗೇಶನ್",
	"Open navigation": "ನ್ಯಾವಿಗೇಶನ್ ತೆರೆಯಿರಿ",
	"Close navigation": "ನ್ಯಾವಿಗೇಶನ್ ಮುಚ್ಚಿ",
	"Feast House Jagaluru home": "ಫೀಸ್ಟ್ ಹೌಸ್ ಜಗಳೂರು ಮುಖಪುಟ",
	"Feast House Jagaluru | Bulk Catering": "ಫೀಸ್ಟ್ ಹೌಸ್ ಜಗಳೂರು | ಸಮಾರಂಭಗಳ ಊಟ ವ್ಯವಸ್ಥೆ",
	"JAGALURU · KARNATAKA": "ಜಗಳೂರು · ಕರ್ನಾಟಕ",
	"JAGALURU": "ಜಗಳೂರು",
	"Menu": "ಊಟದ ಪಟ್ಟಿ",
	"Occasions": "ಸಂದರ್ಭಗಳು",
	"Contact": "ಸಂಪರ್ಕ",
	"Get a quote": "ದರ ಕೇಳಿ",
	"BULK CATERING · JAGALURU, INDIA": "ಸಮಾರಂಭಗಳ ಊಟ ವ್ಯವಸ್ಥೆ · ಜಗಳೂರು, ಭಾರತ",
	"Good food brings everyone to the table. Make your next gathering a feast to remember.": "ರುಚಿಯಾದ ಊಟ ಎಲ್ಲರನ್ನೂ ಒಂದೆಡೆ ಸೇರಿಸುತ್ತದೆ. ನಿಮ್ಮ ಮುಂದಿನ ಸಮಾರಂಭವನ್ನು ಮರೆಯಲಾಗದ ಔತಣವಾಗಿಸಿ.",
	"Plan your order": "ನಿಮ್ಮ ಆರ್ಡರ್ ಯೋಜಿಸಿ",
	"Explore the menu": "ಊಟದ ಪಟ್ಟಿ ನೋಡಿ",
	"MADE FOR THE WHOLE GATHERING": "ಎಲ್ಲರಿಗಾಗಿ ಸಿದ್ಧಪಡಿಸಿದ ಔತಣ",
	"MADE FOR SHARING": "ಹಂಚಿಕೊಂಡು ಸವಿಯಲು",
	"A menu with": "ಎಲ್ಲರಿಗೂ ಇಷ್ಟವಾಗುವ",
	"room for everyone.": "ವೈವಿಧ್ಯಮಯ ಊಟದ ಪಟ್ಟಿ.",
	"From biryani and hearty curries to snacks and sweets, choose the dishes that belong at your table.": "ಬಿರಿಯಾನಿ, ರುಚಿಕಟ್ಟಾದ ಸಾರು, ತಿಂಡಿ ಹಾಗೂ ಸಿಹಿತಿನಿಸುಗಳಲ್ಲಿ ನಿಮ್ಮ ಊಟದ ಮೇಜಿಗೆ ಬೇಕಾದವುಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
	"Filter menu by category": "ವರ್ಗದ ಪ್ರಕಾರ ಊಟದ ಪಟ್ಟಿಯನ್ನು ವಿಂಗಡಿಸಿ",
	"All dishes": "ಎಲ್ಲ ಖಾದ್ಯಗಳು",
	"Main dishes": "ಮುಖ್ಯ ಖಾದ್ಯಗಳು",
	"Snacks & breakfast": "ತಿಂಡಿ ಮತ್ತು ಉಪಾಹಾರ",
	"Sweets": "ಸಿಹಿತಿನಿಸುಗಳು",
	"Bulk order enquiries welcome": "ದೊಡ್ಡ ಆರ್ಡರ್‌ಗಳಿಗೆ ಸಂಪರ್ಕಿಸಿ",
	"Chicken Biryani": "ಚಿಕನ್ ಬಿರಿಯಾನಿ",
	"Chicken Kebab": "ಚಿಕನ್ ಕಬಾಬ್",
	"Chicken Gravy": "ಚಿಕನ್ ಗ್ರೇವಿ",
	"Veg Biryani": "ವೆಜ್ ಬಿರಿಯಾನಿ",
	"Boiled Eggs": "ಬೇಯಿಸಿದ ಮೊಟ್ಟೆಗಳು",
	"Green Chilli Chicken": "ಹಸಿಮೆಣಸಿನಕಾಯಿ ಚಿಕನ್",
	"Pulav": "ಪುಲಾವ್",
	"Kesari Bath": "ಕೇಸರಿ ಬಾತ್",
	"Upit": "ಉಪ್ಪಿಟ್ಟು",
	"(Upma)": "(ಉಪ್ಮಾ)",
	"Chowchow Bath": "ಚೌಚೌ ಬಾತ್",
	"Holige": "ಹೋಳಿಗೆ",
	"(Obbattu)": "(ಒಬ್ಬಟ್ಟು)",
	"Mirchi Bajji": "ಮೆಣಸಿನಕಾಯಿ ಬಜ್ಜಿ",
	"Jalebi": "ಜಿಲೇಬಿ",
	"Kheer": "ಪಾಯಸ",
	"Pakoda": "ಪಕೋಡ",
	"Main dish": "ಮುಖ್ಯ ಖಾದ್ಯ",
	"Side": "ಪಕ್ಕದ ಖಾದ್ಯ",
	"Sweet": "ಸಿಹಿತಿನಿಸು",
	"Breakfast & snack": "ಉಪಾಹಾರ ಮತ್ತು ತಿಂಡಿ",
	"Snack": "ತಿಂಡಿ",
	"Enquire about Chicken Biryani": "ಚಿಕನ್ ಬಿರಿಯಾನಿ ಬಗ್ಗೆ ವಿಚಾರಿಸಿ",
	"Enquire about Chicken Kebab": "ಚಿಕನ್ ಕಬಾಬ್ ಬಗ್ಗೆ ವಿಚಾರಿಸಿ",
	"Enquire about Chicken Gravy": "ಚಿಕನ್ ಗ್ರೇವಿ ಬಗ್ಗೆ ವಿಚಾರಿಸಿ",
	"Enquire about Veg Biryani": "ವೆಜ್ ಬಿರಿಯಾನಿ ಬಗ್ಗೆ ವಿಚಾರಿಸಿ",
	"Enquire about Boiled Eggs": "ಬೇಯಿಸಿದ ಮೊಟ್ಟೆಗಳ ಬಗ್ಗೆ ವಿಚಾರಿಸಿ",
	"Enquire about Green Chilli Chicken": "ಹಸಿಮೆಣಸಿನಕಾಯಿ ಚಿಕನ್ ಬಗ್ಗೆ ವಿಚಾರಿಸಿ",
	"Enquire about Pulav": "ಪುಲಾವ್ ಬಗ್ಗೆ ವಿಚಾರಿಸಿ",
	"Enquire about Kesari Bath": "ಕೇಸರಿ ಬಾತ್ ಬಗ್ಗೆ ವಿಚಾರಿಸಿ",
	"Enquire about Upit (Upma)": "ಉಪ್ಪಿಟ್ಟು (ಉಪ್ಮಾ) ಬಗ್ಗೆ ವಿಚಾರಿಸಿ",
	"Enquire about Chowchow Bath": "ಚೌಚೌ ಬಾತ್ ಬಗ್ಗೆ ವಿಚಾರಿಸಿ",
	"Enquire about Holige (Obbattu)": "ಹೋಳಿಗೆ (ಒಬ್ಬಟ್ಟು) ಬಗ್ಗೆ ವಿಚಾರಿಸಿ",
	"Enquire about Mirchi Bajji": "ಮೆಣಸಿನಕಾಯಿ ಬಜ್ಜಿ ಬಗ್ಗೆ ವಿಚಾರಿಸಿ",
	"Enquire about Jalebi": "ಜಿಲೇಬಿ ಬಗ್ಗೆ ವಿಚಾರಿಸಿ",
	"Enquire about Kheer": "ಪಾಯಸದ ಬಗ್ಗೆ ವಿಚಾರಿಸಿ",
	"Enquire about Pakoda": "ಪಕೋಡದ ಬಗ್ಗೆ ವಿಚಾರಿಸಿ",
	"Ask us about menu combinations and quantities for your occasion.": "ನಿಮ್ಮ ಸಮಾರಂಭಕ್ಕೆ ಸೂಕ್ತವಾದ ಖಾದ್ಯಗಳ ಜೋಡಣೆ ಮತ್ತು ಪ್ರಮಾಣದ ಬಗ್ಗೆ ನಮ್ಮನ್ನು ಕೇಳಿ.",
	"GOOD FOOD, GATHERED AROUND": "ರುಚಿಯಾದ ಊಟ, ಆತ್ಮೀಯರ ಒಡನಾಟ",
	"YOUR OCCASION, YOUR MENU": "ನಿಮ್ಮ ಸಮಾರಂಭ, ನಿಮ್ಮ ಊಟದ ಪಟ್ಟಿ",
	"Bring people": "ಎಲ್ಲರನ್ನೂ",
	"together over": "ಒಂದೆಡೆ ಸೇರಿಸಿ",
	"something good.": "ರುಚಿಯಾದ ಔತಣದೊಂದಿಗೆ.",
	"Planning a family celebration, wedding, festival or community gathering? Tell us about the occasion and the dishes you have in mind.": "ಕುಟುಂಬದ ಸಮಾರಂಭ, ಮದುವೆ, ಹಬ್ಬ ಅಥವಾ ಸಮುದಾಯದ ಕೂಟವಿದೆಯೇ? ಸಂದರ್ಭ ಮತ್ತು ನಿಮಗೆ ಬೇಕಾದ ಖಾದ್ಯಗಳ ಬಗ್ಗೆ ತಿಳಿಸಿ.",
	"Talk through your menu": "ಊಟದ ಪಟ್ಟಿಯ ಬಗ್ಗೆ ಮಾತನಾಡಿ",
	"SIMPLE TO START": "ಆರಂಭಿಸುವುದು ಸುಲಭ",
	"Let’s plan your": "ನಿಮ್ಮ",
	"feast.": "ಔತಣವನ್ನು ಯೋಜಿಸೋಣ.",
	"Tell us the occasion": "ಸಮಾರಂಭದ ವಿವರ ತಿಳಿಸಿ",
	"Share your date and approximate guest count.": "ದಿನಾಂಕ ಮತ್ತು ಅಂದಾಜು ಅತಿಥಿಗಳ ಸಂಖ್ಯೆಯನ್ನು ತಿಳಿಸಿ.",
	"Choose your dishes": "ಖಾದ್ಯಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ",
	"Pick favourites from the menu or ask about combinations.": "ಪಟ್ಟಿಯಿಂದ ಇಷ್ಟದ ಖಾದ್ಯಗಳನ್ನು ಆರಿಸಿ ಅಥವಾ ಖಾದ್ಯಗಳ ಜೋಡಣೆಯ ಬಗ್ಗೆ ಕೇಳಿ.",
	"Get in touch": "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
	"Message us to discuss quantities and a quote.": "ಪ್ರಮಾಣ ಮತ್ತು ದರದ ಬಗ್ಗೆ ಚರ್ಚಿಸಲು ಸಂದೇಶ ಕಳುಹಿಸಿ.",
	"Start a WhatsApp enquiry": "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ವಿಚಾರಿಸಿ",
	"Make room at the table.": "ಊಟದ ಮೇಜಿನಲ್ಲಿ ನಿಮಗೂ ಜಾಗವಿದೆ.",
	"We’ll bring the feast.": "ರುಚಿಯಾದ ಔತಣವನ್ನು ನಾವು ತರುತ್ತೇವೆ.",
	"CALL OR WHATSAPP": "ಕರೆ ಮಾಡಿ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಮಾಡಿ",
	"JAGALURU, KARNATAKA, INDIA": "ಜಗಳೂರು, ಕರ್ನಾಟಕ, ಭಾರತ",
	"Jagaluru": "ಜಗಳೂರು",
	"Premium bulk catering in Jagaluru, Karnataka. Explore the Feast House menu and ask for a quote on WhatsApp.": "ಕರ್ನಾಟಕದ ಜಗಳೂರಿನಲ್ಲಿ ಸಮಾರಂಭಗಳಿಗೆ ರುಚಿಕರವಾದ ಊಟದ ವ್ಯವಸ್ಥೆ. ಫೀಸ್ಟ್ ಹೌಸ್‌ನ ಊಟದ ಪಟ್ಟಿಯನ್ನು ನೋಡಿ, ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ದರ ಕೇಳಿ.",
	"A generous serving of biryani with fragrant rice and spices": "ಸುವಾಸನೆಯ ಅಕ್ಕಿ ಮತ್ತು ಮಸಾಲೆಗಳಿಂದ ತಯಾರಿಸಿದ ಬಿರಿಯಾನಿ",
	"A long table set for a celebration": "ಸಮಾರಂಭಕ್ಕಾಗಿ ಸಿದ್ಧಪಡಿಸಿದ ಉದ್ದನೆಯ ಊಟದ ಮೇಜು",
	"Hello Feast House Jagaluru, I'd like to enquire about bulk catering.": "ನಮಸ್ಕಾರ ಫೀಸ್ಟ್ ಹೌಸ್ ಜಗಳೂರು, ಸಮಾರಂಭದ ಊಟದ ವ್ಯವಸ್ಥೆ ಬಗ್ಗೆ ವಿಚಾರಿಸಬೇಕು.",
	"Hello Feast House Jagaluru, I'd like a bulk catering quote. Event date: __. Approx. guests: __. Dishes: __.": "ನಮಸ್ಕಾರ ಫೀಸ್ಟ್ ಹೌಸ್ ಜಗಳೂರು, ಸಮಾರಂಭದ ಊಟಕ್ಕೆ ದರ ತಿಳಿಸಿ. ದಿನಾಂಕ: __. ಅಂದಾಜು ಅತಿಥಿಗಳು: __. ಖಾದ್ಯಗಳು: __.",
	"Hello, I'd like a bulk quote for Chicken Biryani.": "ನಮಸ್ಕಾರ, ಚಿಕನ್ ಬಿರಿಯಾನಿಗೆ ದೊಡ್ಡ ಆರ್ಡರ್‌ನ ದರ ತಿಳಿಸಿ.",
	"Hello, I'd like a bulk quote for Chicken Kebab.": "ನಮಸ್ಕಾರ, ಚಿಕನ್ ಕಬಾಬ್‌ಗೆ ದೊಡ್ಡ ಆರ್ಡರ್‌ನ ದರ ತಿಳಿಸಿ.",
	"Hello, I'd like a bulk quote for Chicken Gravy.": "ನಮಸ್ಕಾರ, ಚಿಕನ್ ಗ್ರೇವಿಗೆ ದೊಡ್ಡ ಆರ್ಡರ್‌ನ ದರ ತಿಳಿಸಿ.",
	"Hello, I'd like a bulk quote for Veg Biryani.": "ನಮಸ್ಕಾರ, ವೆಜ್ ಬಿರಿಯಾನಿಗೆ ದೊಡ್ಡ ಆರ್ಡರ್‌ನ ದರ ತಿಳಿಸಿ.",
	"Hello, I'd like a bulk quote for Boiled Eggs.": "ನಮಸ್ಕಾರ, ಬೇಯಿಸಿದ ಮೊಟ್ಟೆಗಳಿಗೆ ದೊಡ್ಡ ಆರ್ಡರ್‌ನ ದರ ತಿಳಿಸಿ.",
	"Hello, I'd like a bulk quote for Green Chilli Chicken.": "ನಮಸ್ಕಾರ, ಹಸಿಮೆಣಸಿನಕಾಯಿ ಚಿಕನ್‌ಗೆ ದೊಡ್ಡ ಆರ್ಡರ್‌ನ ದರ ತಿಳಿಸಿ.",
	"Hello, I'd like a bulk quote for Pulav.": "ನಮಸ್ಕಾರ, ಪುಲಾವ್‌ಗೆ ದೊಡ್ಡ ಆರ್ಡರ್‌ನ ದರ ತಿಳಿಸಿ.",
	"Hello, I'd like a bulk quote for Kesari Bath.": "ನಮಸ್ಕಾರ, ಕೇಸರಿ ಬಾತ್‌ಗೆ ದೊಡ್ಡ ಆರ್ಡರ್‌ನ ದರ ತಿಳಿಸಿ.",
	"Hello, I'd like a bulk quote for Upit (Upma).": "ನಮಸ್ಕಾರ, ಉಪ್ಪಿಟ್ಟಿಗೆ ದೊಡ್ಡ ಆರ್ಡರ್‌ನ ದರ ತಿಳಿಸಿ.",
	"Hello, I'd like a bulk quote for Chowchow Bath.": "ನಮಸ್ಕಾರ, ಚೌಚೌ ಬಾತ್‌ಗೆ ದೊಡ್ಡ ಆರ್ಡರ್‌ನ ದರ ತಿಳಿಸಿ.",
	"Hello, I'd like a bulk quote for Holige (Obbattu).": "ನಮಸ್ಕಾರ, ಹೋಳಿಗೆಗೆ ದೊಡ್ಡ ಆರ್ಡರ್‌ನ ದರ ತಿಳಿಸಿ.",
	"Hello, I'd like a bulk quote for Mirchi Bajji.": "ನಮಸ್ಕಾರ, ಮೆಣಸಿನಕಾಯಿ ಬಜ್ಜಿಗೆ ದೊಡ್ಡ ಆರ್ಡರ್‌ನ ದರ ತಿಳಿಸಿ.",
	"Hello, I'd like a bulk quote for Jalebi.": "ನಮಸ್ಕಾರ, ಜಿಲೇಬಿಗೆ ದೊಡ್ಡ ಆರ್ಡರ್‌ನ ದರ ತಿಳಿಸಿ.",
	"Hello, I'd like a bulk quote for Kheer.": "ನಮಸ್ಕಾರ, ಪಾಯಸಕ್ಕೆ ದೊಡ್ಡ ಆರ್ಡರ್‌ನ ದರ ತಿಳಿಸಿ.",
	"Hello, I'd like a bulk quote for Pakoda.": "ನಮಸ್ಕಾರ, ಪಕೋಡಕ್ಕೆ ದೊಡ್ಡ ಆರ್ಡರ್‌ನ ದರ ತಿಳಿಸಿ.",
	"Hello Feast House Jagaluru, I'm planning an event and would like to discuss a catering menu.": "ನಮಸ್ಕಾರ ಫೀಸ್ಟ್ ಹೌಸ್ ಜಗಳೂರು, ಸಮಾರಂಭವೊಂದನ್ನು ಯೋಜಿಸುತ್ತಿದ್ದೇನೆ. ಊಟದ ಪಟ್ಟಿಯ ಬಗ್ಗೆ ಚರ್ಚಿಸಬೇಕು.",
	"Hello Feast House Jagaluru, I'd like to plan a bulk food order. Event date: __. Approx. guests: __. Dishes: __.": "ನಮಸ್ಕಾರ ಫೀಸ್ಟ್ ಹೌಸ್ ಜಗಳೂರು, ದೊಡ್ಡ ಊಟದ ಆರ್ಡರ್ ಯೋಜಿಸಬೇಕು. ದಿನಾಂಕ: __. ಅಂದಾಜು ಅತಿಥಿಗಳು: __. ಖಾದ್ಯಗಳು: __."
};

const languageSelect = document.querySelector("#language-select");
const originalText = new WeakMap();
const originalAttributes = new WeakMap();
let currentLanguage = localStorage.getItem("feast-house-language") === "kn" ? "kn" : "en";

function translated(value) {
	return currentLanguage === "kn" ? translations[value] || value : value;
}

function translateNode(node) {
	if (node.nodeType === Node.TEXT_NODE) {
		if (!originalText.has(node)) originalText.set(node, node.nodeValue);
		const source = originalText.get(node);
		const leading = source.match(/^\s*/)[0];
		const trailing = source.match(/\s*$/)[0];
		const content = source.slice(leading.length, source.length - trailing.length || undefined);
		if (translations[content]) node.nodeValue = `${leading}${translated(content)}${trailing}`;
		return;
	}
	if (node.nodeType !== Node.ELEMENT_NODE) return;

	["aria-label", "alt", "content", "data-whatsapp"].forEach((attribute) => {
		if (!node.hasAttribute(attribute)) return;
		let values = originalAttributes.get(node);
		if (!values) {
			values = new Map();
			originalAttributes.set(node, values);
		}
		if (!values.has(attribute)) values.set(attribute, node.getAttribute(attribute));
		node.setAttribute(attribute, translated(values.get(attribute)));
	});
	Array.from(node.childNodes).forEach(translateNode);
}

function updateWhatsAppLinks() {
	document.querySelectorAll("[data-whatsapp]").forEach((link) => {
		const message = link.dataset.whatsapp;
		link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
	});
}

function setLanguage(language) {
	currentLanguage = language;
	document.documentElement.lang = language === "kn" ? "kn" : "en";
	languageSelect.value = currentLanguage;
	translateNode(document.head);
	translateNode(document.body);
	updateWhatsAppLinks();
	localStorage.setItem("feast-house-language", currentLanguage);
}

setLanguage(currentLanguage);
new MutationObserver((records) => {
	records.forEach((record) => record.addedNodes.forEach(translateNode));
	updateWhatsAppLinks();
}).observe(document.body, { childList: true, subtree: true });
languageSelect.addEventListener("change", () => setLanguage(languageSelect.value));

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
	menuToggle.setAttribute("aria-label", translated(isOpen ? "Open navigation" : "Close navigation"));
	siteNav.classList.toggle("is-open", !isOpen);
});

siteNav.querySelectorAll("a").forEach((link) => {
	link.addEventListener("click", () => {
		menuToggle.setAttribute("aria-expanded", "false");
		menuToggle.setAttribute("aria-label", translated("Open navigation"));
		siteNav.classList.remove("is-open");
	});
});
