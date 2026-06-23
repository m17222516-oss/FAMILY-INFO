const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("overlay");
function openMenu() {
  sideMenu.classList.add("open");
  overlay.classList.add("show");
}
function close() {
  sideMenu.classList.remove("open");
  overlay.classList.remove("show");
}
menuBtn?.addEventListener("click", openMenu);
closeMenu?.addEventListener("click", close);
overlay?.addEventListener("click", close);
document
  .querySelectorAll(".side-menu a")
  .forEach((a) => a.addEventListener("click", close));

const DATA = window.FAMILY_OFFERS || {
  categories: [],
  whatsapp: "9647740317888",
};
const wa = DATA.whatsapp || "9647740317888";
const pills = document.getElementById("categoryPills");
const allOffers = document.getElementById("allOffers");

function whatsAppLink(text) {
  return `https://wa.me/${wa}?text=${encodeURIComponent(text)}`;
}
function itemCard(item, catTitle) {
  return `<article class="mini-offer">
    <div>
      <h4>${item.title}</h4>
      <p>${item.description || catTitle}</p>
    </div>
    <strong>${item.price}</strong>
    <a href="${whatsAppLink("مرحبا مركز فاملي، أريد حجز/استفسار عن " + catTitle + " - " + item.title)}">احجزي</a>
  </article>`;
}
function renderOffers() {
  if (!pills || !allOffers) return;
  pills.innerHTML = DATA.categories
    .map((c) => `<a href="#cat-${c.id}">${c.title}</a>`)
    .join("");
  allOffers.innerHTML = DATA.categories
    .map(
      (cat) => `
    <section class="offer-category" id="cat-${cat.id}">
      <div class="offer-category-head">
        <div>
          <span>${cat.label || "عروض متوفرة"}</span>
          <h3>${cat.title}</h3>
          <p>${cat.note || ""}</p>
        </div>
        <a href="${whatsAppLink("مرحبا مركز فاملي، أريد الاستفسار عن قسم " + cat.title)}">استفسار عن القسم</a>
      </div>
      <div class="mini-offers-grid">${cat.items.map((i) => itemCard(i, cat.title)).join("")}</div>
      ${cat.faq ? `<div class="category-faq">${cat.faq}</div>` : ""}
    </section>
  `,
    )
    .join("");
}
renderOffers();
