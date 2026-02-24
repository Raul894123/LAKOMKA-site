const ADMIN_WHATSAPP = "77001234567";
const CART_STORAGE_KEY = "lakomka_cart";
const LANG_STORAGE_KEY = "lakomka_lang";

const i18n = {
  ru: {
    brandName: "Лакомка",
    brandSubtitle: "Кафе · Усть-Каменогорск",
    navHome: "О нас",
    navMenu: "Меню",
    navCart: "Корзина",
    welcome: "Добро пожаловать",
    heroTitle: "Уют, аромат кофе и любимые блюда в «Лакомке»",
    heroDesc:
      "«Лакомка» — это место, где приятно начать утро с бодрящего кофе, встретиться с друзьями за десертом или сделать быстрый, но вкусный перерыв в течение дня.",
    addressTitle: "Адрес",
    addressValue: "Усть-Каменогорск, ТК Император, Проспект Ауэзова 28, 0 этаж, 070004.",
    hoursTitle: "Время работы",
    hoursValue: "Ежедневно: 09:00 – 22:00",
    menuTitle: "Меню",
    menuSubtitle: "Добавляйте понравившиеся позиции в корзину.",
    cartTitle: "Корзина",
    cartSubtitle: "Проверьте заказ перед отправкой в WhatsApp.",
    cartEmpty: "Корзина пока пуста. Добавьте что-нибудь из меню ☕",
    checkoutTitle: "Оформление заказа",
    totalLabel: "Итог:",
    nameLabel: "Имя",
    phoneLabel: "Телефон",
    orderTypeLabel: "Тип заказа",
    paymentLabel: "Способ оплаты",
    deliveryAddressLabel: "Адрес доставки",
    tokenLabel: "Номерок в заведении",
    checkoutBtn: "Оформить заказ",
    glovoBtn: "Заказать через Glovo",
    addToCart: "В корзину",
    itemPieces: "шт.",
    minusAria: "Уменьшить",
    plusAria: "Увеличить",
    removeAria: "Удалить",
    emptyAlert: "Корзина пустая. Добавьте товары в меню.",
    greetMorning: "Доброе утро",
    greetDay: "Добрый день",
    greetEvening: "Добрый вечер",
    greetNight: "Доброй ночи",
    waTitle: "заказ с сайта Лакомка!",
    waItems: "Позиции:",
    waTotal: "Сумма",
    waPayment: "Способ оплаты",
    waOrderType: "Тип заказа",
    waAddress: "Адрес доставки",
    waToken: "Номерок в заведении",
    waClient: "Данные клиента:",
    orderTypeDelivery: "Доставка",
    orderTypeTakeaway: "С собой",
    orderTypeDinein: "В заведении",
    paymentCard: "Карта",
    paymentCash: "Наличные",
    paymentKaspiQr: "Kaspi QR",
    paymentKaspiApp: "Kaspi в приложении",
    placeholderName: "Например: Алия",
    placeholderPhone: "+7 777 123 45 67",
    placeholderAddress: "Улица, дом, квартира",
    placeholderToken: "Например: A-7",
  },
  en: {
    brandName: "Lakomka",
    brandSubtitle: "Cafe · Ust-Kamenogorsk",
    navHome: "About",
    navMenu: "Menu",
    navCart: "Cart",
    welcome: "Welcome",
    heroTitle: "Cozy place, great coffee and favorite dishes at Lakomka",
    heroDesc:
      "Lakomka is a place to start your morning with coffee, meet friends for dessert, or take a quick and tasty break during the day.",
    addressTitle: "Address",
    addressValue: "Ust-Kamenogorsk, TC Imperator, Auezov Avenue 28, floor 0, 070004.",
    hoursTitle: "Working hours",
    hoursValue: "Daily: 09:00 – 22:00",
    menuTitle: "Menu",
    menuSubtitle: "Add your favorite items to cart.",
    cartTitle: "Cart",
    cartSubtitle: "Review your order before sending it to WhatsApp.",
    cartEmpty: "Cart is empty. Add something tasty ☕",
    checkoutTitle: "Checkout",
    totalLabel: "Total:",
    nameLabel: "Name",
    phoneLabel: "Phone",
    orderTypeLabel: "Order type",
    paymentLabel: "Payment method",
    deliveryAddressLabel: "Delivery address",
    tokenLabel: "Table/token number",
    checkoutBtn: "Place order",
    glovoBtn: "Order via Glovo",
    addToCart: "Add to cart",
    itemPieces: "pcs",
    minusAria: "Decrease",
    plusAria: "Increase",
    removeAria: "Remove",
    emptyAlert: "Cart is empty. Add items from menu.",
    greetMorning: "Good morning",
    greetDay: "Good afternoon",
    greetEvening: "Good evening",
    greetNight: "Good night",
    waTitle: "order from Lakomka website!",
    waItems: "Items:",
    waTotal: "Total",
    waPayment: "Payment method",
    waOrderType: "Order type",
    waAddress: "Delivery address",
    waToken: "Table/token number",
    waClient: "Client details:",
    orderTypeDelivery: "Delivery",
    orderTypeTakeaway: "Takeaway",
    orderTypeDinein: "Dine-in",
    paymentCard: "Card",
    paymentCash: "Cash",
    paymentKaspiQr: "Kaspi QR",
    paymentKaspiApp: "Kaspi in app",
    placeholderName: "For example: Aliya",
    placeholderPhone: "+7 777 123 45 67",
    placeholderAddress: "Street, building, apartment",
    placeholderToken: "For example: A-7",
  },
  kz: {
    brandName: "Лакомка",
    brandSubtitle: "Кафе · Өскемен",
    navHome: "Біз туралы",
    navMenu: "Мәзір",
    navCart: "Себет",
    welcome: "Қош келдіңіз",
    heroTitle: "«Лакомкада» жайлы атмосфера, хош иісті кофе және сүйікті тағамдар",
    heroDesc:
      "«Лакомка» — таңертең кофемен бастауға, достармен десерт жеуге немесе күндіз жылдам әрі дәмді үзіліс жасауға ыңғайлы орын.",
    addressTitle: "Мекенжай",
    addressValue: "Өскемен, Император СҮ, Әуезов даңғылы 28, 0-қабат, 070004.",
    hoursTitle: "Жұмыс уақыты",
    hoursValue: "Күн сайын: 09:00 – 22:00",
    menuTitle: "Мәзір",
    menuSubtitle: "Ұнаған тағамды себетке қосыңыз.",
    cartTitle: "Себет",
    cartSubtitle: "WhatsApp-қа жібермес бұрын тапсырысты тексеріңіз.",
    cartEmpty: "Себет бос. Мәзірден бірдеңе қосыңыз ☕",
    checkoutTitle: "Тапсырысты рәсімдеу",
    totalLabel: "Жиыны:",
    nameLabel: "Аты",
    phoneLabel: "Телефон",
    orderTypeLabel: "Тапсырыс түрі",
    paymentLabel: "Төлем тәсілі",
    deliveryAddressLabel: "Жеткізу мекенжайы",
    tokenLabel: "Мекемедегі нөмір",
    checkoutBtn: "Тапсырыс беру",
    glovoBtn: "Glovo арқылы тапсырыс",
    addToCart: "Себетке",
    itemPieces: "дана",
    minusAria: "Азайту",
    plusAria: "Көбейту",
    removeAria: "Өшіру",
    emptyAlert: "Себет бос. Мәзірден тауар қосыңыз.",
    greetMorning: "Қайырлы таң",
    greetDay: "Қайырлы күн",
    greetEvening: "Қайырлы кеш",
    greetNight: "Қайырлы түн",
    waTitle: "Лакомка сайтынан тапсырыс!",
    waItems: "Позициялар:",
    waTotal: "Сома",
    waPayment: "Төлем тәсілі",
    waOrderType: "Тапсырыс түрі",
    waAddress: "Жеткізу мекенжайы",
    waToken: "Мекемедегі нөмір",
    waClient: "Клиент деректері:",
    orderTypeDelivery: "Жеткізу",
    orderTypeTakeaway: "Алып кету",
    orderTypeDinein: "Мекемеде",
    paymentCard: "Карта",
    paymentCash: "Қолма-қол",
    paymentKaspiQr: "Kaspi QR",
    paymentKaspiApp: "Kaspi қосымшада",
    placeholderName: "Мысалы: Әлия",
    placeholderPhone: "+7 777 123 45 67",
    placeholderAddress: "Көше, үй, пәтер",
    placeholderToken: "Мысалы: A-7",
  },
};

const products = [
  ["Роллы запеченные с шапочкой (180г)", 3500, "Роллы с запеченным топпингом и нежным соусом."],
  ["Опен ролл (180г)", 3400, "Ролл с различными начинками, запеченный сверху."],
  ["Суши Филадельфия (120г)", 3200, "Классические суши с кремовым сыром и лососем."],
  ["Суши темпура жареный (120г)", 2900, "Роллы с креветками в темпуре и рисом."],
  ["Сяке маки (150г)", 2700, "Роллы с лососем, рисом и водорослями нори."],
  ["Ясай маки (150г)", 2300, "Вегетарианские роллы с овощами и рисом в нори."],
  ["Французский завтрак (250г)", 3200, "Сытный завтрак с круассаном, омлетом и свежими фруктами."],
  ["Завтрак по-деревенски (250г)", 3200, "Сытный завтрак с картошкой, яйцом и беконом."],
  ["Поке (300г)", 3000, "Bowl с рисом, рыбой, овощами и соусами."],
  ["Скрембл с круасаном (250г)", 2600, "Скрембл с яйцами и круассаном на завтрак."],
  ["Яичница глазунья и микс салат (220г)", 2600, "Яичница глазунья с легким овощным салатом."],
  ["Творог с ягодами, орехами и медом (250г)", 2400, "Творог с добавлением ягод, орехов и меда."],
  ["Завтрак сырники (200г)", 1600, "Творожные сырники с медом и ягодами."],
  ["Бефстроганов с пюре (300г)", 4200, "Традиционный бефстроганов с соусом и пюре из картофеля."],
  ["Паста с семгой (280г)", 3500, "Паста с копченой семгой и сливочным соусом."],
  ["Паста Карбонара (300г)", 3500, "Паста с беконом и яичным соусом карбонара."],
  ["Спагетти болоньез (300г)", 3200, "Спагетти с мясным соусом болоньез и специями."],
  ["Ганфан (350г)", 3000, "Рис с мясом и овощами, восточные специи."],
  ["Паста Альфредо (300г)", 2800, "Паста в сливочном соусе с пармезаном."],
  ["Том-Ям (250г)", 3500, "Острый тайский суп с креветками и грибами."],
  ["Уха с семгой (250г)", 3200, "Легкая уха с семгой и ароматными травами."],
  ["Шурпа из баранины (350г)", 3200, "Наваристая шурпа с бараниной и овощами."],
  ["Рамен с курицей (350г)", 3100, "Японский рамен с курицей и овощами."],
  ["Суп Рамен (250г)", 3100, "Японский суп с лапшой и овощами."],
  ["Тыквенный суп (250г)", 2200, "Кремовый суп из тыквы."],
  ["Грибной крем-суп (250г)", 2200, "Нежный грибной суп-пюре со сливками."],
  ["Чечевичный крем-суп (250г)", 2000, "Крем-суп с чечевицей и специями."],
  ["Лапша по-домашнему (350г)", 1800, "Теплый суп с домашней лапшой и курицей."],
  ["Цезарь с семгой (250г)", 3500, "Салат Цезарь с копченой семгой."],
  ["Теплый салат с баклажанами (200г)", 3400, "Теплый салат с жареными баклажанами и зеленью."],
  ["Цезарь с курицей (250г)", 3200, "Классический салат Цезарь с курицей."],
  ["Салат греческий (200г)", 2400, "Легкий салат с фетой и оливками."],
  ["Пицца Курица с грибами (30 см.) (450г)", 3500, "Пицца с курицей, грибами и сыром."],
  ["Пицца 4 сезона (30 см.) (450г)", 3500, "Пицца с четырьмя разными начинками."],
  ["Пицца Пепперони (30 см.) (450г)", 3200, "Пицца с пепперони и моцареллой."],
  ["Пицца Маргарита (30 см.) (450г)", 3200, "Классическая пицца с томатным соусом."],
  ["Дабл Бургер (350г)", 3500, "Бургер с двумя котлетами, сыром и соусами."],
  ["Чизбургер с говяжьей/куриной котлетой (280г)", 2500, "Бургер с сыром и котлетой на выбор."],
  ["Классический бургер с говяжьей/куриной котлетой (250г)", 2400, "Бургер с котлетой, салатом и соусом."],
].map(([name, price, desc], index) => ({
  id: `item-${index + 1}`,
  name,
  price,
  desc,
  image: `https://picsum.photos/seed/lakomka-${index + 1}/800/500`,
}));

const state = {
  route: "home",
  cart: loadCart(),
  lang: localStorage.getItem(LANG_STORAGE_KEY) || "ru",
};

const navButtons = document.querySelectorAll(".nav-link");
const screens = document.querySelectorAll(".screen");
const menuGrid = document.getElementById("menuGrid");
const cartList = document.getElementById("cartList");
const cartEmpty = document.getElementById("cartEmpty");
const cartContent = document.getElementById("cartContent");
const cartCount = document.getElementById("cartCount");
const totalPrice = document.getElementById("totalPrice");
const checkoutForm = document.getElementById("checkoutForm");
const orderTypeSelect = document.getElementById("orderType");
const paymentMethodSelect = document.getElementById("paymentMethod");
const addressField = document.getElementById("addressField");
const addressInput = document.getElementById("addressInput");
const tokenField = document.getElementById("tokenField");
const tokenInput = document.getElementById("tokenInput");
const langButtons = document.querySelectorAll(".lang-btn");

document.getElementById("currentYear").textContent = new Date().getFullYear();

function t(key) {
  return i18n[state.lang][key] || i18n.ru[key] || key;
}

function loadCart() {
  const raw = localStorage.getItem(CART_STORAGE_KEY);
  if (!raw) return {};

  try {
    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}

function persistCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
}

function formatPrice(value) {
  return `${new Intl.NumberFormat("ru-RU").format(value)} ₸`;
}

function setRoute(route) {
  state.route = route;
  navButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.route === route));
  screens.forEach((screen) => screen.classList.toggle("active", screen.id === route));
}

function applyLanguage() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });

  document.getElementById("nameInput").placeholder = t("placeholderName");
  document.getElementById("phoneInput").placeholder = t("placeholderPhone");
  addressInput.placeholder = t("placeholderAddress");
  tokenInput.placeholder = t("placeholderToken");

  orderTypeSelect.innerHTML = `
    <option value="delivery">${t("orderTypeDelivery")}</option>
    <option value="takeaway">${t("orderTypeTakeaway")}</option>
    <option value="dinein">${t("orderTypeDinein")}</option>
  `;

  paymentMethodSelect.innerHTML = `
    <option value="${t("paymentCard")}">${t("paymentCard")}</option>
    <option value="${t("paymentCash")}">${t("paymentCash")}</option>
    <option value="${t("paymentKaspiQr")}">${t("paymentKaspiQr")}</option>
    <option value="${t("paymentKaspiApp")}">${t("paymentKaspiApp")}</option>
  `;

  langButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.lang === state.lang));

  updateOrderTypeFields();
  refreshUI();
}

function renderMenu() {
  menuGrid.innerHTML = products
    .map((product) => {
      const quantity = state.cart[product.id] || 0;
      const controls =
        quantity > 0
          ? `<div class="menu-qty-controls">
              <button type="button" class="small-btn" data-change="minus" data-id="${product.id}" aria-label="${t("minusAria")}">−</button>
              <span class="qty">${quantity}</span>
              <button type="button" class="small-btn" data-change="plus" data-id="${product.id}" aria-label="${t("plusAria")}">+</button>
            </div>`
          : `<button type="button" class="add-btn" data-add-id="${product.id}">${t("addToCart")}</button>`;

      return `
      <article class="menu-item">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <div class="menu-body">
          <div class="menu-top">
            <h3>${product.name}</h3>
            <span class="price">${formatPrice(product.price)}</span>
          </div>
          <p>${product.desc}</p>
          ${controls}
        </div>
      </article>
      `;
    })
    .join("");
}

function getCartItems() {
  return Object.entries(state.cart)
    .map(([id, quantity]) => {
      const product = products.find((item) => item.id === id);
      return product ? { ...product, quantity } : null;
    })
    .filter(Boolean);
}

function updateCartBadge() {
  const count = Object.values(state.cart).reduce((sum, qty) => sum + qty, 0);
  cartCount.textContent = String(count);
}

function renderCart() {
  const items = getCartItems();
  updateCartBadge();

  if (!items.length) {
    cartEmpty.classList.remove("hidden");
    cartContent.classList.add("hidden");
    totalPrice.textContent = formatPrice(0);
    return;
  }

  cartEmpty.classList.add("hidden");
  cartContent.classList.remove("hidden");

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  totalPrice.textContent = formatPrice(total);

  cartList.innerHTML = items
    .map(
      (item) => `
      <li class="cart-item">
        <div>
          <h4>${item.name}</h4>
          <p>${formatPrice(item.price)} × ${item.quantity} ${t("itemPieces")} = ${formatPrice(item.price * item.quantity)}</p>
        </div>
        <div class="cart-controls">
          <button type="button" class="small-btn" data-change="minus" data-id="${item.id}" aria-label="${t("minusAria")}">−</button>
          <span class="qty">${item.quantity}</span>
          <button type="button" class="small-btn" data-change="plus" data-id="${item.id}" aria-label="${t("plusAria")}">+</button>
          <button type="button" class="small-btn remove" data-change="remove" data-id="${item.id}" aria-label="${t("removeAria")}">✕</button>
        </div>
      </li>
      `
    )
    .join("");
}

function refreshUI() {
  renderMenu();
  renderCart();
}

function changeCartItem(id, action) {
  if (action === "add" || action === "plus") {
    state.cart[id] = (state.cart[id] || 0) + 1;
  }

  if (action === "minus" && state.cart[id]) {
    state.cart[id] -= 1;
  }

  if (action === "remove" || state.cart[id] <= 0) {
    delete state.cart[id];
  }

  persistCart();
  refreshUI();
}

function updateOrderTypeFields() {
  const type = orderTypeSelect.value;
  const needsAddress = type === "delivery";
  const needsToken = type === "dinein";

  addressField.classList.toggle("hidden", !needsAddress);
  tokenField.classList.toggle("hidden", !needsToken);

  addressInput.required = needsAddress;
  tokenInput.required = needsToken;

  if (!needsAddress) addressInput.value = "";
  if (!needsToken) tokenInput.value = "";
}

function getGreetingByTime() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return t("greetMorning");
  if (hour >= 12 && hour < 18) return t("greetDay");
  if (hour >= 18 && hour < 23) return t("greetEvening");
  return t("greetNight");
}

function buildWhatsappMessage(formData, items, total) {
  const orderTypeMap = {
    delivery: t("orderTypeDelivery"),
    takeaway: t("orderTypeTakeaway"),
    dinein: t("orderTypeDinein"),
  };

  const lines = [
    `${getGreetingByTime()}, ${t("waTitle")}`,
    "",
    t("waItems"),
    ...items.map((item, index) => `${index + 1}. ${item.name} — ${item.quantity} ${t("itemPieces")}`),
    "",
    `${t("waTotal")}: ${formatPrice(total)}`,
    `${t("waPayment")}: ${formData.paymentMethod}`,
    `${t("waOrderType")}: ${orderTypeMap[formData.orderType] || formData.orderType}`,
  ];

  if (formData.orderType === "delivery") {
    lines.push(`${t("waAddress")}: ${formData.address || "-"}`);
  }

  if (formData.orderType === "dinein") {
    lines.push(`${t("waToken")}: ${formData.token || "-"}`);
  }

  lines.push("", t("waClient"), `${t("nameLabel")}: ${formData.name}`, `${t("phoneLabel")}: ${formData.phone}`);

  return lines.join("\n");
}

function checkout(event) {
  event.preventDefault();

  const items = getCartItems();
  if (!items.length) {
    alert(t("emptyAlert"));
    return;
  }

  updateOrderTypeFields();
  if (!checkoutForm.reportValidity()) return;

  const formData = Object.fromEntries(new FormData(checkoutForm));
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const message = buildWhatsappMessage(formData, items, total);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${ADMIN_WHATSAPP}&text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank", "noopener");
}

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => setRoute(btn.dataset.route));
});

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    state.lang = btn.dataset.lang;
    localStorage.setItem(LANG_STORAGE_KEY, state.lang);
    applyLanguage();
  });
});

menuGrid.addEventListener("click", (event) => {
  const control = event.target.closest("[data-add-id], [data-change]");
  if (!control) return;

  const id = control.dataset.addId || control.dataset.id;
  const action = control.dataset.addId ? "add" : control.dataset.change;
  if (id && action) changeCartItem(id, action);
});

cartList.addEventListener("click", (event) => {
  const control = event.target.closest("[data-change]");
  if (!control) return;

  const id = control.dataset.id;
  const action = control.dataset.change;
  if (id && action) changeCartItem(id, action);
});

orderTypeSelect.addEventListener("change", updateOrderTypeFields);
checkoutForm.addEventListener("submit", checkout);

applyLanguage();
setRoute(state.route);
