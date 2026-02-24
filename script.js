const ADMIN_WHATSAPP = "+77074105717";
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
  { id: "item-1", category: "baked roll", price: 3500, image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=1000&q=80", name: { ru: "Роллы запеченные с шапочкой (180г)", en: "Baked Rolls with Topping (180g)", kz: "Үсті пісірілген ролл (180г)" }, desc: { ru: "Роллы с запеченным топпингом и нежным соусом.", en: "Baked rolls with creamy topping and gentle sauce.", kz: "Кілегейлі тұздықпен пісірілген ролл." } },
  { id: "item-2", category: "open roll", price: 3400, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=1000&q=80", name: { ru: "Опен ролл (180г)", en: "Open Roll (180g)", kz: "Ашық ролл (180г)" }, desc: { ru: "Ролл с различными начинками, запеченный сверху.", en: "Roll with mixed fillings and baked top.", kz: "Іші әртүрлі салмалы, үсті пісірілген ролл." } },
  { id: "item-3", category: "philadelphia", price: 3200, image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1000&q=80", name: { ru: "Суши Филадельфия (120г)", en: "Philadelphia Sushi (120g)", kz: "Филадельфия суши (120г)" }, desc: { ru: "Классические суши с кремовым сыром и лососем.", en: "Classic sushi with cream cheese and salmon.", kz: "Крем ірімшігі мен албырт қосылған классикалық суши." } },
  { id: "item-4", category: "tempura", price: 2900, image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&w=1000&q=80", name: { ru: "Суши темпура жареный (120г)", en: "Fried Tempura Sushi (120g)", kz: "Қуырылған темпура суши (120г)" }, desc: { ru: "Роллы с креветками в темпуре и рисом.", en: "Tempura shrimp rolls with rice.", kz: "Темпура асшаяны мен күріш қосылған ролл." } },
  { id: "item-5", category: "sake maki", price: 2700, image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?auto=format&fit=crop&w=1000&q=80", name: { ru: "Сяке маки (150г)", en: "Sake Maki (150g)", kz: "Сяке маки (150г)" }, desc: { ru: "Роллы с лососем, рисом и водорослями нори.", en: "Rolls with salmon, rice and nori seaweed.", kz: "Албырт, күріш және нори қосылған ролл." } },
  { id: "item-6", category: "yasai maki", price: 2300, image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?auto=format&fit=crop&w=1000&q=80", name: { ru: "Ясай маки (150г)", en: "Yasai Maki (150g)", kz: "Ясай маки (150г)" }, desc: { ru: "Вегетарианские роллы с овощами и рисом в нори.", en: "Vegetarian rolls with vegetables and rice in nori.", kz: "Көкөніс пен күріш қосылған вегетариандық ролл." } },
  { id: "item-7", category: "breakfast", price: 3200, image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=80", name: { ru: "Французский завтрак (250г)", en: "French Breakfast (250g)", kz: "Француз таңғы асы (250г)" }, desc: { ru: "Сытный завтрак с круассаном, омлетом и свежими фруктами.", en: "Hearty breakfast with croissant, omelet and fresh fruits.", kz: "Круассан, омлет және жеміспен тойымды таңғы ас." } },
  { id: "item-8", category: "breakfast", price: 3200, image: "https://images.unsplash.com/photo-1533089860892-a9c8ac2cd08d?auto=format&fit=crop&w=1000&q=80", name: { ru: "Завтрак по-деревенски (250г)", en: "Country Style Breakfast (250g)", kz: "Ауылша таңғы ас (250г)" }, desc: { ru: "Сытный завтрак с картошкой, яйцом и беконом.", en: "Potatoes, egg and bacon breakfast.", kz: "Картоп, жұмыртқа және бекон қосылған таңғы ас." } },
  { id: "item-9", category: "poke", price: 3000, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80", name: { ru: "Поке (300г)", en: "Poke Bowl (300g)", kz: "Поке боулы (300г)" }, desc: { ru: "Bowl с рисом, рыбой, овощами и соусами.", en: "Bowl with rice, fish, veggies and sauces.", kz: "Күріш, балық, көкөніс және тұздық қосылған боул." } },
  { id: "item-10", category: "scramble", price: 2600, image: "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?auto=format&fit=crop&w=1000&q=80", name: { ru: "Скрембл с круасаном (250г)", en: "Scrambled Eggs with Croissant (250g)", kz: "Круассанмен скрембл (250г)" }, desc: { ru: "Скрембл с яйцами и круассаном на завтрак.", en: "Scrambled eggs with croissant.", kz: "Круассанмен жұмыртқалы скрембл." } },
  { id: "item-11", category: "eggs", price: 2600, image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1000&q=80", name: { ru: "Яичница глазунья и микс салат (220г)", en: "Sunny Side Eggs & Mixed Salad (220g)", kz: "Көз қуырылған жұмыртқа және салат (220г)" }, desc: { ru: "Яичница глазунья с легким овощным салатом.", en: "Sunny side eggs with light vegetable salad.", kz: "Жеңіл көкөніс салатымен көз қуырылған жұмыртқа." } },
  { id: "item-12", category: "cottage cheese", price: 2400, image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=80", name: { ru: "Творог с ягодами, орехами и медом (250г)", en: "Cottage Cheese with Berries, Nuts & Honey (250g)", kz: "Жидек, жаңғақ, бал қосылған сүзбе (250г)" }, desc: { ru: "Творог с добавлением ягод, орехов и меда.", en: "Cottage cheese with berries, nuts and honey.", kz: "Жидек, жаңғақ және бал қосылған сүзбе." } },
  { id: "item-13", category: "syrniki", price: 1600, image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1000&q=80", name: { ru: "Завтрак сырники (200г)", en: "Syrniki Breakfast (200g)", kz: "Сырник таңғы асы (200г)" }, desc: { ru: "Творожные сырники с медом и ягодами.", en: "Cottage pancakes with honey and berries.", kz: "Бал және жидек қосылған сүзбе сырнигі." } },
  { id: "item-14", category: "beef", price: 4200, image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1000&q=80", name: { ru: "Бефстроганов с пюре (300г)", en: "Beef Stroganoff with Mash (300g)", kz: "Пюремен бефстроганов (300г)" }, desc: { ru: "Традиционный бефстроганов с соусом и пюре из картофеля.", en: "Traditional beef stroganoff with mashed potatoes.", kz: "Картоп пюресімен дәстүрлі бефстроганов." } },
  { id: "item-15", category: "salmon pasta", price: 3500, image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=1000&q=80", name: { ru: "Паста с семгой (280г)", en: "Salmon Pasta (280g)", kz: "Албырт қосылған паста (280г)" }, desc: { ru: "Паста с копченой семгой и сливочным соусом.", en: "Pasta with smoked salmon and creamy sauce.", kz: "Қаймақты тұздықтағы албырт қосылған паста." } },
  { id: "item-16", category: "carbonara", price: 3500, image: "https://images.unsplash.com/photo-1608756687911-aa1599ab0386?auto=format&fit=crop&w=1000&q=80", name: { ru: "Паста Карбонара (300г)", en: "Pasta Carbonara (300g)", kz: "Паста Карбонара (300г)" }, desc: { ru: "Паста с беконом и яичным соусом карбонара.", en: "Pasta with bacon and carbonara sauce.", kz: "Бекон және карбонара тұздығымен паста." } },
  { id: "item-17", category: "bolognese", price: 3200, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=1000&q=80", name: { ru: "Спагетти болоньез (300г)", en: "Spaghetti Bolognese (300g)", kz: "Спагетти болоньез (300г)" }, desc: { ru: "Спагетти с мясным соусом болоньез и специями.", en: "Spaghetti with meat bolognese sauce.", kz: "Етті болоньез тұздығымен спагетти." } },
  { id: "item-18", category: "ganfan", price: 3000, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=80", name: { ru: "Ганфан (350г)", en: "Ganfan (350g)", kz: "Ганфан (350г)" }, desc: { ru: "Рис с мясом и овощами, восточные специи.", en: "Rice with meat, vegetables and spices.", kz: "Ет, көкөніс және дәмдеуіш қосылған күріш." } },
  { id: "item-19", category: "alfredo", price: 2800, image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=80", name: { ru: "Паста Альфредо (300г)", en: "Pasta Alfredo (300g)", kz: "Паста Альфредо (300г)" }, desc: { ru: "Паста в сливочном соусе с пармезаном.", en: "Creamy parmesan Alfredo pasta.", kz: "Пармезан қосылған қаймақты Альфредо пастасы." } },
  { id: "item-20", category: "tom yum", price: 3500, image: "https://images.unsplash.com/photo-1625944524160-a9f9f324abcb?auto=format&fit=crop&w=1000&q=80", name: { ru: "Том-Ям (250г)", en: "Tom Yum (250g)", kz: "Том-Ям (250г)" }, desc: { ru: "Острый тайский суп с креветками и грибами.", en: "Spicy Thai soup with shrimp and mushrooms.", kz: "Асшаян мен саңырауқұлақ қосылған ащы тай сорпасы." } },
  { id: "item-21", category: "fish soup", price: 3200, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1000&q=80", name: { ru: "Уха с семгой (250г)", en: "Salmon Fish Soup (250g)", kz: "Албырт балық сорпасы (250г)" }, desc: { ru: "Легкая уха с семгой и ароматными травами.", en: "Light fish soup with salmon and herbs.", kz: "Албырт пен хош иісті шөптері бар жеңіл сорпа." } },
  { id: "item-22", category: "shurpa", price: 3200, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1000&q=80", name: { ru: "Шурпа из баранины (350г)", en: "Lamb Shurpa (350g)", kz: "Қой етінен шурпа (350г)" }, desc: { ru: "Наваристая шурпа с бараниной и овощами.", en: "Rich lamb soup with vegetables.", kz: "Қой еті мен көкөніс қосылған қою сорпа." } },
  { id: "item-23", category: "ramen", price: 3100, image: "https://images.unsplash.com/photo-1614563637806-1d0e645e0940?auto=format&fit=crop&w=1000&q=80", name: { ru: "Рамен с курицей (350г)", en: "Chicken Ramen (350g)", kz: "Тауық рамені (350г)" }, desc: { ru: "Японский рамен с курицей и овощами.", en: "Japanese ramen with chicken and vegetables.", kz: "Тауық еті мен көкөнісі бар жапон рамені." } },
  { id: "item-24", category: "ramen", price: 3100, image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&w=1000&q=80", name: { ru: "Суп Рамен (250г)", en: "Ramen Soup (250g)", kz: "Рамен сорпасы (250г)" }, desc: { ru: "Японский суп с лапшой и овощами.", en: "Japanese noodle soup with vegetables.", kz: "Кеспе және көкөніс қосылған жапон сорпасы." } },
  { id: "item-25", category: "pumpkin soup", price: 2200, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1000&q=80", name: { ru: "Тыквенный суп (250г)", en: "Pumpkin Soup (250g)", kz: "Асқабақ сорпасы (250г)" }, desc: { ru: "Кремовый суп из тыквы.", en: "Creamy pumpkin soup.", kz: "Кілегейлі асқабақ сорпасы." } },
  { id: "item-26", category: "mushroom soup", price: 2200, image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=1000&q=80", name: { ru: "Грибной крем-суп (250г)", en: "Mushroom Cream Soup (250g)", kz: "Саңырауқұлақ крем-сорпасы (250г)" }, desc: { ru: "Нежный грибной суп-пюре со сливками.", en: "Soft mushroom cream soup.", kz: "Жұмсақ кілегейлі саңырауқұлақ сорпасы." } },
  { id: "item-27", category: "lentil soup", price: 2000, image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=1000&q=80", name: { ru: "Чечевичный крем-суп (250г)", en: "Lentil Cream Soup (250g)", kz: "Жасымық крем-сорпасы (250г)" }, desc: { ru: "Крем-суп с чечевицей и специями.", en: "Lentil cream soup with spices.", kz: "Жасымық пен дәмдеуіш қосылған крем-сорпа." } },
  { id: "item-28", category: "noodle soup", price: 1800, image: "https://images.unsplash.com/photo-1547928576-c5e0b3f6f321?auto=format&fit=crop&w=1000&q=80", name: { ru: "Лапша по-домашнему (350г)", en: "Homestyle Noodle Soup (350g)", kz: "Үй кеспе сорпасы (350г)" }, desc: { ru: "Теплый суп с домашней лапшой и курицей.", en: "Warm soup with homemade noodles and chicken.", kz: "Үй кеспесі мен тауық еті қосылған жылы сорпа." } },
  { id: "item-29", category: "caesar", price: 3500, image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=1000&q=80", name: { ru: "Цезарь с семгой (250г)", en: "Caesar with Salmon (250g)", kz: "Албырт қосылған Цезарь (250г)" }, desc: { ru: "Салат Цезарь с копченой семгой.", en: "Caesar salad with smoked salmon.", kz: "Қақталған албырт қосылған Цезарь салаты." } },
  { id: "item-30", category: "warm salad", price: 3400, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80", name: { ru: "Теплый салат с баклажанами (200г)", en: "Warm Eggplant Salad (200g)", kz: "Баялды қосылған жылы салат (200г)" }, desc: { ru: "Теплый салат с жареными баклажанами и зеленью.", en: "Warm salad with fried eggplants and greens.", kz: "Қуырылған баялды және көкпен жылы салат." } },
  { id: "item-31", category: "caesar", price: 3200, image: "https://images.unsplash.com/photo-1512852939750-1305098529bf?auto=format&fit=crop&w=1000&q=80", name: { ru: "Цезарь с курицей (250г)", en: "Caesar with Chicken (250g)", kz: "Тауық қосылған Цезарь (250г)" }, desc: { ru: "Классический салат Цезарь с курицей.", en: "Classic Caesar salad with chicken.", kz: "Тауық қосылған классикалық Цезарь салаты." } },
  { id: "item-32", category: "greek salad", price: 2400, image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=1000&q=80", name: { ru: "Салат греческий (200г)", en: "Greek Salad (200g)", kz: "Грек салаты (200г)" }, desc: { ru: "Легкий салат с фетой и оливками.", en: "Fresh salad with feta and olives.", kz: "Фета мен зәйтүн қосылған жеңіл салат." } },
  { id: "item-33", category: "pizza", price: 3500, image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=1000&q=80", name: { ru: "Пицца Курица с грибами (30 см.) (450г)", en: "Chicken & Mushroom Pizza (30 cm, 450g)", kz: "Тауық пен саңырауқұлақ пицца (30 см, 450г)" }, desc: { ru: "Пицца с курицей, грибами и сыром.", en: "Pizza with chicken, mushrooms and cheese.", kz: "Тауық, саңырауқұлақ және ірімшік қосылған пицца." } },
  { id: "item-34", category: "pizza", price: 3500, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80", name: { ru: "Пицца 4 сезона (30 см.) (450г)", en: "Four Seasons Pizza (30 cm, 450g)", kz: "4 маусым пиццасы (30 см, 450г)" }, desc: { ru: "Пицца с четырьмя разными начинками.", en: "Pizza with four different toppings.", kz: "Төрт түрлі салмасы бар пицца." } },
  { id: "item-35", category: "pizza", price: 3200, image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=1000&q=80", name: { ru: "Пицца Пепперони (30 см.) (450г)", en: "Pepperoni Pizza (30 cm, 450g)", kz: "Пепперони пицца (30 см, 450г)" }, desc: { ru: "Пицца с пепперони и моцареллой.", en: "Pizza with pepperoni and mozzarella.", kz: "Пепперони және моцарелла қосылған пицца." } },
  { id: "item-36", category: "pizza", price: 3200, image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=1000&q=80", name: { ru: "Пицца Маргарита (30 см.) (450г)", en: "Margarita Pizza (30 cm, 450g)", kz: "Маргарита пицца (30 см, 450г)" }, desc: { ru: "Классическая пицца с томатным соусом.", en: "Classic pizza with tomato sauce and cheese.", kz: "Томат тұздығы бар классикалық пицца." } },
  { id: "item-37", category: "burger", price: 3500, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80", name: { ru: "Дабл Бургер (350г)", en: "Double Burger (350g)", kz: "Дабл бургер (350г)" }, desc: { ru: "Бургер с двумя котлетами, сыром и соусами.", en: "Burger with double patty, cheese and sauces.", kz: "Екі котлет, ірімшік және тұздық қосылған бургер." } },
  { id: "item-38", category: "burger", price: 2500, image: "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=1000&q=80", name: { ru: "Чизбургер с говяжьей/куриной котлетой (280г)", en: "Cheeseburger with Beef/Chicken Patty (280g)", kz: "Сиыр/тауық котлеталы чизбургер (280г)" }, desc: { ru: "Бургер с сыром и котлетой на выбор.", en: "Cheeseburger with your choice of patty.", kz: "Өз таңдауыңыздағы котлетамен чизбургер." } },
  { id: "item-39", category: "burger", price: 2400, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80", name: { ru: "Классический бургер с говяжьей/куриной котлетой (250г)", en: "Classic Burger with Beef/Chicken Patty (250g)", kz: "Сиыр/тауық котлеталы классикалық бургер (250г)" }, desc: { ru: "Бургер с котлетой, салатом и соусом.", en: "Classic burger with patty, salad and sauce.", kz: "Котлета, салат және тұздық қосылған бургер." } },
];

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

function getLocalizedText(field) {
  return field[state.lang] || field.ru;
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
    el.textContent = t(el.dataset.i18n);
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
        <img src="${product.image}" alt="${getLocalizedText(product.name)}" loading="lazy" />
        <div class="menu-body">
          <div class="menu-top">
            <h3>${getLocalizedText(product.name)}</h3>
            <span class="price">${formatPrice(product.price)}</span>
          </div>
          <p>${getLocalizedText(product.desc)}</p>
          ${controls}
        </div>
      </article>`;
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
  cartCount.textContent = String(Object.values(state.cart).reduce((sum, qty) => sum + qty, 0));
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
        <img class="cart-thumb" src="${item.image}" alt="${getLocalizedText(item.name)}" loading="lazy" />
        <div class="cart-main">
          <h4>${getLocalizedText(item.name)}</h4>
          <p>${formatPrice(item.price)} × ${item.quantity} ${t("itemPieces")} = ${formatPrice(item.price * item.quantity)}</p>
        </div>
        <div class="cart-controls">
          <button type="button" class="small-btn" data-change="minus" data-id="${item.id}" aria-label="${t("minusAria")}">−</button>
          <span class="qty">${item.quantity}</span>
          <button type="button" class="small-btn" data-change="plus" data-id="${item.id}" aria-label="${t("plusAria")}">+</button>
          <button type="button" class="small-btn remove" data-change="remove" data-id="${item.id}" aria-label="${t("removeAria")}">✕</button>
        </div>
      </li>`
    )
    .join("");
}

function refreshUI() {
  renderMenu();
  renderCart();
}

function changeCartItem(id, action) {
  if (action === "add" || action === "plus") state.cart[id] = (state.cart[id] || 0) + 1;
  if (action === "minus" && state.cart[id]) state.cart[id] -= 1;
  if (action === "remove" || state.cart[id] <= 0) delete state.cart[id];
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
}

function getGreetingByTime() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return t("greetMorning");
  if (hour >= 12 && hour < 18) return t("greetDay");
  if (hour >= 18 && hour < 23) return t("greetEvening");
  return t("greetNight");
}

function buildWhatsappMessage(formData, items, total) {
  const orderTypeMap = { delivery: t("orderTypeDelivery"), takeaway: t("orderTypeTakeaway"), dinein: t("orderTypeDinein") };

  const lines = [
    `${getGreetingByTime()}, ${t("waTitle")}`,
    "",
    t("waItems"),
    ...items.map((item, index) => `${index + 1}. ${getLocalizedText(item.name)} — ${item.quantity} ${t("itemPieces")}`),
    "",
    `${t("waTotal")}: ${formatPrice(total)}`,
    `${t("waPayment")}: ${formData.paymentMethod}`,
    `${t("waOrderType")}: ${orderTypeMap[formData.orderType] || formData.orderType}`,
  ];

  if (formData.orderType === "delivery") lines.push(`${t("waAddress")}: ${formData.address || "-"}`);
  if (formData.orderType === "dinein") lines.push(`${t("waToken")}: ${formData.token || "-"}`);

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
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${ADMIN_WHATSAPP}&text=${encodeURIComponent(buildWhatsappMessage(formData, items, total))}`;
  window.open(whatsappUrl, "_blank", "noopener");
}

navButtons.forEach((btn) => btn.addEventListener("click", () => setRoute(btn.dataset.route)));
langButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    state.lang = btn.dataset.lang;
    localStorage.setItem(LANG_STORAGE_KEY, state.lang);
    applyLanguage();
  })
);

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
  if (control.dataset.id && control.dataset.change) changeCartItem(control.dataset.id, control.dataset.change);
});

orderTypeSelect.addEventListener("change", updateOrderTypeFields);
checkoutForm.addEventListener("submit", checkout);

applyLanguage();
setRoute(state.route);
