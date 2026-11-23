/* Sitronics KT — интернет-магазин. Данные товаров и логика каталога/корзины. */
"use strict";

const CATEGORIES = [
  { id: "onboard",  name: "Бортовое оборудование", icon: "🛳" },
  { id: "shore",    name: "Береговое оборудование", icon: "📡" },
  { id: "training", name: "Тренажёрные комплексы", icon: "🎓" },
  { id: "charts",   name: "Картографические системы", icon: "🗺" },
  { id: "software", name: "Программное обеспечение", icon: "💻" },
];

const PRODUCTS = [
  // Бортовое оборудование
  { id: 1, cat: "onboard", name: "ЭКНИС «Ситроникс Навигатор»", price: 1450000,
    desc: "Электронная картографическая навигационная информационная система для управления движением судна и навигационной безопасности.",
    specs: { "Тип": "ЭКНИС", "Сертификация": "РМРС", "Экран": "24\u2033, яркий", "Интеграция": "NMEA 0183/2000, LAN" } },
  { id: 2, cat: "onboard", name: "Многоканальный приёмник ГЛОНАСС/GPS", price: 389000,
    desc: "Приёмник спутниковой навигации для точного позиционирования судна в любых условиях.",
    specs: { "Системы": "ГЛОНАСС, GPS, Galileo, BeiDou", "Точность": "до 1,5 м (DGPS)", "Интерфейсы": "RS-422, Ethernet", "Питание": "24 В DC" } },
  { id: 3, cat: "onboard", name: "Судовой радиолокационный транспондер АИС класса А", price: 275000,
    desc: "Автоматическая идентификационная система класса А для обмена навигационными данными с судами и береговыми службами.",
    specs: { "Класс": "АИС класса А", "Дальность": "до 30 морских миль", "Выход": "12,5 Вт", "Стандарт": "МОС" } },
  { id: 4, cat: "onboard", name: "Комплект судовых датчиков скорости и глубины", price: 468000,
    desc: "Лаг и эхолот для непрерывного измерения скорости хода и глубины под килем.",
    specs: { "Диапазон глубин": "0,5–2000 м", "Точность скорости": "±0,2 уз", "Монтаж": "проницаемый корпус" } },
  { id: 5, cat: "onboard", name: "Резервный магнитный компас с репитером", price: 154000,
    desc: "Традиционный магнитный компас с цифровой передачей курса на репитеры и системы.",
    specs: { "Карданная система": "жидкостная", "Репитеры": "до 4", "Сертификация": "РМРС" } },

  // Береговое оборудование
  { id: 6, cat: "shore", name: "Рабочая станция оператора СУДС", price: 980000,
    desc: "Автоматизированное рабочее место оператора системы управления движением судов.",
    specs: { "Мониторы": "3×27\u2033", "ПО": "СУДС «Ситроникс»", "Резервирование": "горячее" } },
  { id: 7, cat: "shore", name: "Береговая базовая станция АИС", price: 720000,
    desc: "Приёмо-передающая базовая станция для мониторинга судового движения в зоне порта.",
    specs: { "Дальность": "до 40 морских миль", "Каналы": "AIS 1, AIS 2", "Связь": "Ethernet, 4G" } },
  { id: 8, cat: "shore", name: "Модуль АСОД береговой службы", price: 1240000,
    desc: "Автоматизированная система обмена данными между береговыми службами и судами.",
    specs: { "Протоколы": "NMEA, AIS, XML", "Интеграция": "СУДС, ВТС", "Отчётность": "авто" } },
  { id: 9, cat: "shore", name: "Метеокомплекс берегового поста", price: 545000,
    desc: "Комплекс датчиков видимости, ветра и температуры для ситуационной осведомлённости.",
    specs: { "Параметры": "ветер, видимость, T, влажность", "Передача": "Ethernet/радио" } },

  // Тренажёрные комплексы
  { id: 10, cat: "training", name: "Тренажёр судоводителя полномасштабный", price: 8900000,
    desc: "Полномасштабный тренажёрный комплекс для подготовки и аттестации судоводителей.",
    specs: { "Кабина": "360°, проекция 5×", "Библиотека районов": "мировая", "Сценарии": "шторм, ледовая обстановка" } },
  { id: 11, cat: "training", name: "Тренажёр СУДС для операторов", price: 4200000,
    desc: "Комплекс подготовки операторов систем управления движением судов.",
    specs: { "Рабочих мест": "до 6", "Имитация": "до 200 целей", "ПО": "в комплекте" } },
  { id: 12, cat: "training", name: "Мультимедийный учебный класс навигации", price: 1650000,
    desc: "Комплект мультимедийного оборудования и учебных ЭКНИС-мест для морских учебных центров.",
    specs: { "Мест": "12", "Проектор": "лазерный 6000 лм", "Учебные ЭКНИС": "12 лицензий" } },

  // Картография
  { id: 13, cat: "charts", name: "Набор электронных навигационных карт (район Балтика)", price: 210000,
    desc: "Официальный набор векторных навигационных карт для ЭКНИС, район Балтийского моря.",
    specs: { "Формат": "S-57 / S-63", "Обновления": "еженедельно, 12 мес.", "Район": "Балтика" } },
  { id: 14, cat: "charts", name: "Подписка на мировую коллекцию ENC", price: 640000,
    desc: "Годовая подписка на мировую коллекцию электронных навигационных карт с обновлениями.",
    specs: { "Формат": "S-57 / S-63", "Обновления": "еженедельно", "Срок": "12 месяцев" } },
  { id: 15, cat: "charts", name: "Система корректуры карт СКК", price: 380000,
    desc: "Автоматизированная система получения и установки корректур электронных карт.",
    specs: { "Канал данных": "Интернет, e-mail", "Автоматика": "полная" } },

  // ПО
  { id: 16, cat: "software", name: "ПО «Ситроникс СУДС» (лицензия на пост)", price: 1150000,
    desc: "Программное обеспечение системы управления движением судов для береговых центров.",
    specs: { "Лицензия": "на 1 пост", "ОС": "Windows / Linux", "Поддержка": "24/7" } },
  { id: 17, cat: "software", name: "Планшетная навигационная программа (год)", price: 49000,
    desc: "Навигационное приложение для планшетов с поддержкой официальных карт.",
    specs: { "Платформы": "Android, iOS", "Карты": "S-57", "Срок": "12 месяцев" } },
  { id: 18, cat: "software", name: "Модуль мониторинга флота «Экосистема»", price: 760000,
    desc: "Облачный модуль мониторинга и ситуационной осведомлённости для судоходных компаний.",
    specs: { "Хостинг": "облако / on-premise", "Интеграция": "АИС, ЭКНИС, датчики", "Отчёты": "настраиваемые" } },
];

const fmt = n => new Intl.NumberFormat("ru-RU").format(n) + " ₽";

// --- Состояние ---
let activeCat = "all";
let cart = JSON.parse(localStorage.getItem("skt-cart") || "{}"); // id -> qty

const $ = s => document.querySelector(s);
const grid = $("#productGrid"), filters = $("#filters");

// --- Фильтры ---
function renderFilters() {
  filters.innerHTML = "";
  const mk = (id, name) => {
    const b = document.createElement("button");
    b.className = "filter" + (activeCat === id ? " active" : "");
    b.textContent = name;
    b.onclick = () => { activeCat = id; renderFilters(); renderGrid(); };
    filters.appendChild(b);
  };
  mk("all", "Все товары");
  CATEGORIES.forEach(c => mk(c.id, c.name));
}

// --- Каталог ---
function renderGrid() {
  grid.innerHTML = "";
  const items = PRODUCTS.filter(p => activeCat === "all" || p.cat === activeCat);
  $("#emptyMsg").hidden = items.length > 0;
  items.forEach(p => {
    const cat = CATEGORIES.find(c => c.id === p.cat);
    const el = document.createElement("article");
    el.className = "card";
    el.innerHTML = `
      <div class="card__img">${cat.icon}</div>
      <div class="card__body">
        <span class="card__cat">${cat.name}</span>
        <h3 class="card__title">${p.name}</h3>
        <p class="card__text">${p.desc}</p>
        <div class="card__foot">
          <span class="card__price">${fmt(p.price)}</span>
          <button class="card__add" data-add="${p.id}">В корзину</button>
        </div>
      </div>`;
    el.querySelector(".card__title").onclick = () => openProduct(p.id);
    el.querySelector(".card__img").onclick = () => openProduct(p.id);
    grid.appendChild(el);
  });
}

// --- Карточка товара ---
function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const cat = CATEGORIES.find(c => c.id === p.cat);
  $("#productModal .modal__body").innerHTML = `
    <button class="modal__close" data-close>&times;</button>
    <div class="p-modal__cat">${cat.icon} ${cat.name}</div>
    <h2 class="p-modal__title">${p.name}</h2>
    <p class="p-modal__text">${p.desc}</p>
    <ul class="p-modal__specs">
      ${Object.entries(p.specs).map(([k, v]) => `<li><span>${k}</span><span>${v}</span></li>`).join("")}
    </ul>
    <div class="p-modal__foot">
      <span class="p-modal__price">${fmt(p.price)}</span>
      <button class="btn btn--primary" data-add="${p.id}">Добавить в корзину</button>
    </div>`;
  openModal("#productModal");
}

// --- Корзина ---
function cartCount() { return Object.values(cart).reduce((a, b) => a + b, 0); }
function cartSum() {
  return Object.entries(cart).reduce((s, [id, q]) => s + PRODUCTS.find(p => p.id === +id).price * q, 0);
}
function saveCart() {
  localStorage.setItem("skt-cart", JSON.stringify(cart));
  const n = cartCount(), el = $("#cartCount");
  el.textContent = n; el.hidden = n === 0;
}
function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart(); renderCart();
  toast("Товар добавлен в корзину");
}
function renderCart() {
  const box = $("#cartItems");
  const entries = Object.entries(cart);
  if (!entries.length) {
    box.innerHTML = `<p class="cart-empty">Корзина пуста</p>`;
    $("#cartTotal").innerHTML = "";
    $("#checkoutBtn").disabled = true;
    return;
  }
  $("#checkoutBtn").disabled = false;
  box.innerHTML = entries.map(([id, q]) => {
    const p = PRODUCTS.find(x => x.id === +id);
    return `<div class="cart-item">
      <span class="cart-item__name">${p.name}</span>
      <span class="qty">
        <button data-dec="${id}" aria-label="Меньше">&minus;</button>
        <span>${q}</span>
        <button data-inc="${id}" aria-label="Больше">+</button>
      </span>
      <span class="cart-item__price">${fmt(p.price * q)}</span>
      <button class="cart-item__remove" data-del="${id}" aria-label="Удалить">&times;</button>
    </div>`;
  }).join("");
  $("#cartTotal").innerHTML = `<span>Итого</span><span>${fmt(cartSum())}</span>`;
}

// --- Модальные окна ---
function openModal(sel) { $(sel).hidden = false; document.body.style.overflow = "hidden"; }
function closeModals() {
  document.querySelectorAll(".modal").forEach(m => m.hidden = true);
  document.body.style.overflow = "";
}
document.addEventListener("click", e => {
  const t = e.target.closest("[data-close]"); if (t) closeModals();
  const add = e.target.closest("[data-add]"); if (add) { addToCart(+add.dataset.add); }
  const inc = e.target.closest("[data-inc]"); if (inc) { cart[inc.dataset.inc]++; saveCart(); renderCart(); }
  const dec = e.target.closest("[data-dec]");
  if (dec) { const id = dec.dataset.dec; if (--cart[id] <= 0) delete cart[id]; saveCart(); renderCart(); }
  const del = e.target.closest("[data-del]"); if (del) { delete cart[del.dataset.del]; saveCart(); renderCart(); }
});
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModals(); });
$("#cartBtn").onclick = () => { renderCart(); openModal("#cartModal"); };
$("#checkoutBtn").onclick = () => {
  closeModals();
  toast("Запрос принят — менеджер Sitronics KT свяжется с вами");
  cart = {}; saveCart(); renderCart();
};

// --- Toast ---
let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg; el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.hidden = true, 2600);
}

// --- Старт ---
renderFilters(); renderGrid(); saveCart();
