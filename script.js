const ADMIN_WHATSAPP = "+77074105717";
const CART_STORAGE_KEY = "lakomka_cart";

const products = [
  {
    id: "cappuccino",
    name: "Капучино",
    price: 1200,
    desc: "Нежный кофе с молочной пенкой.",
    image:
      "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "espresso",
    name: "Эспрессо",
    price: 900,
    desc: "Классический крепкий шот кофе.",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "cheesecake",
    name: "Чизкейк",
    price: 1800,
    desc: "Сливочный десерт с нежной текстурой.",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "croissant",
    name: "Круассан",
    price: 1000,
    desc: "Хрустящий, ароматный, только из печи.",
    image:
      "https://images.unsplash.com/photo-1555507036-ab794f4afe5a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "lemonade",
    name: "Лимонад",
    price: 1100,
    desc: "Освежающий напиток с лимоном и мятой.",
    image:
      "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?auto=format&fit=crop&w=900&q=80",
  },
];

const ORDER_TYPE_LABELS = {
  delivery: "Доставка",
  takeaway: "С собой",
  dinein: "В заведении",
};

const state = {
  route: "home",
  cart: loadCart(),
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
const orderType = document.getElementById("orderType");
const addressField = document.getElementById("addressField");
const addressInput = document.getElementById("addressInput");
const tokenField = document.getElementById("tokenField");
const tokenInput = document.getElementById("tokenInput");

document.getElementById("currentYear").textContent = new Date().getFullYear();

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

function renderMenu() {
  menuGrid.innerHTML = products
    .map((product) => {
      const quantity = state.cart[product.id] || 0;
      const controls =
        quantity > 0
          ? `<div class="menu-qty-controls">
              <button class="small-btn" data-change="minus" data-id="${product.id}" aria-label="Уменьшить">−</button>
              <span class="qty">${quantity}</span>
              <button class="small-btn" data-change="plus" data-id="${product.id}" aria-label="Увеличить">+</button>
            </div>`
          : `<button class="add-btn" data-add-id="${product.id}">В корзину</button>`;

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
          <p>${formatPrice(item.price)} × ${item.quantity} = ${formatPrice(item.price * item.quantity)}</p>
        </div>
        <div class="cart-controls">
          <button class="small-btn" data-change="minus" data-id="${item.id}" aria-label="Уменьшить">−</button>
          <span class="qty">${item.quantity}</span>
          <button class="small-btn" data-change="plus" data-id="${item.id}" aria-label="Увеличить">+</button>
          <button class="small-btn remove" data-change="remove" data-id="${item.id}" aria-label="Удалить">✕</button>
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
  if (action === "plus" || action === "add") {
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

function getGreetingByTime() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Доброе утро";
  if (hour >= 12 && hour < 18) return "Добрый день";
  if (hour >= 18 && hour < 23) return "Добрый вечер";
  return "Доброй ночи";
}

function updateOrderTypeFields() {
  const type = orderType.value;

  const needsAddress = type === "delivery";
  addressField.classList.toggle("hidden", !needsAddress);
  addressInput.required = needsAddress;

  const needsToken = type === "dinein";
  tokenField.classList.toggle("hidden", !needsToken);
  tokenInput.required = needsToken;
}

function buildWhatsappMessage(formData, items, total) {
  const orderTypeText = ORDER_TYPE_LABELS[formData.orderType] || "Не указан";
  const lines = [
    `${getGreetingByTime()}, заказ с сайта Лакомка!`,
    "",
    "Позиции:",
    ...items.map((item, index) => `${index + 1}. ${item.name} — ${item.quantity} шт.`),
    "",
    `Сумма: ${formatPrice(total)}`,
    `Способ оплаты: ${formData.paymentMethod}`,
    `Тип заказа: ${orderTypeText}`,
  ];

  if (formData.orderType === "delivery") {
    lines.push(`Адрес доставки: ${formData.address || "Не указан"}`);
  }

  if (formData.orderType === "dinein") {
    lines.push(`Номерок в заведении: ${formData.token || "Не указан"}`);
  }

  lines.push(
    "",
    "Данные клиента:",
    `Имя: ${formData.name}`,
    `Телефон: ${formData.phone}`
  );

  return lines.join("\n");
}

function checkout(event) {
  event.preventDefault();

  const items = getCartItems();
  if (!items.length) {
    alert("Корзина пустая. Добавьте товары в меню.");
    return;
  }

  updateOrderTypeFields();

  if (!checkoutForm.reportValidity()) {
    return;
  }

  const formData = Object.fromEntries(new FormData(checkoutForm));
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const message = buildWhatsappMessage(formData, items, total);

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${ADMIN_WHATSAPP}&text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank", "noopener");
}

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => setRoute(btn.dataset.route));
});

menuGrid.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const id = target.dataset.addId || target.dataset.id;
  const action = target.dataset.addId ? "add" : target.dataset.change;
  if (id && action) changeCartItem(id, action);
});

cartList.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const id = target.dataset.id;
  const action = target.dataset.change;
  if (id && action) changeCartItem(id, action);
});

orderType.addEventListener("change", updateOrderTypeFields);
checkoutForm.addEventListener("submit", checkout);

updateOrderTypeFields();
refreshUI();
setRoute(state.route);
