// بيانات الأقسام
const categories = [
    { id: 1, name: "ثلاجات", icon: "❄️" },
    { id: 1, name: "فريزرات", icon: "❄️" },
    { id: 2, name: "مكيفات", icon: "💨" },
    { id: 3, name: "غسالات", icon: "🌀" },
    { id: 4, name: "شاشات", icon: "📺" },
    { id: 5, name: "مراوح", icon: "🌬️" },
    { id: 6, name: "أفران + هيترات", icon: "🔥" },
    { id: 7, name: "مبردات المياه", icon: "⚡" }
];

// بيانات المنتجات
const products = [
    {
        id: 1,
        name: "ثلاجة السكا 12قدم ",
        category: "ثلاجات",
        price: 1350,
        image: "img/1756119504674.jpg",
        description: "ثلاجة السكا 12قدم بابين اقتصادية في الاستخدام",
        offer: false
    },
    {
        id: 2,
        name: "غسالة فريش حوضين",
        category: "غسالات",
        price: 750,
        image: "img/IMG_٢٠٢٥٠٩٢٦_١٨٢١٣٤_(600_x_600_pixel).jpg",
        description: "غسالة فريش جامبو 10 كيلو حوضين",
        offer: true
    },
    {
        id: 3,
        name: "ثلاجة كريازي 12قدم بابين",
        category: "ثلاجات",
        price: 1300,
        image: "img/101280001-conf_tazyegzq1dzhv6r5.jpeg",
        description: "ثلاجة كريازي 12 قدم بابين مصريه",
        offer: false
    },
    {
        id: 4,
        name: "فريزر فريش 14 قدم",
        category: "فريزرات",
        price: 1450,
        image: "img/IMG_٢٠٢٥١٠٠٩_١٠٠٢٥٧_(447_x_447_pixel).jpg",
        description: "فرن كهربائي بشواية وسعة كبيرة",
        offer: true
    },
    {
        id: 5,
        name: "شاشة دانسات 50 بوصه",
        category: "شاشات",
        price: 1350,
        image: "img/IMG_٢٠٢٥١٠١٦_١٨٠٠٢٥_(1200_x_1200_pixel).png",
        description: "شاشة دانسات 50 بوصه ذكية سعوديه اصليه",
        offer: false
    },
    {
        id: 6,
        name: "مروحة نسمة ستاند",
        category: "مراوح",
        price: 280,
        image: "img/1755802395196.jpg",
        description: "مروحة نسمة مقاس 24 ستاند",
        offer: true
    },

    {
        id: 8,
        name: "مكيف اسبلت lG 18 وحدة انفيرتر",
       category: "مكيفات",
        price: 3800,
        image: "img/IMG_٢٠٢٥٠٩٢٦_١٨٢٢٠٧_(600_x_600_pixel).jpg",
        description: "مكيف اسبلت lg 18وحدة انفيرتر الاصلي تايلندي BB",
        offer: false
    },
    {
        id: 9,
        name: "مكيف نمسة متحرك 6الف",
        category: "مكيفات",
        price: 1200,
        image: "img/IMG_٢٠٢٥١٠٠١_٢٢١٤٥٢_(600_x_600_pixel).jpg",
        description: "مكيف نسمة متحرك 6الف وحدة الشكل الجديد فايبر",
        offer: true
    },
    {
        id: 10,
        name: "غسالة فريش حوض واحد",
        category: "غسالات",
        price: 490,
        image: "img/IMG_٢٠٢٥٠٩٢٦_١٨٢١٤٧_(600_x_600_pixel).jpg",
        description: "غسالة فريش 10 كيلو حوض واحد خالي نشاف",
        offer: false
    },


    
    

    {
        id: 15,
        name: "مكيف نسمة",
        category: "مكيفات",
        price: 880,
        image: "img/1755630926013.jpg",
        description: "مكيف نسمة متحرك 5الف وحدة مع الضمان",
        offer: false
    },
    {
        id: 16,
        name: "مكيف كراون متحرك 10الف وحدة",
        category: "مكيفات",
        price: 980,
        image: "img/IMG_٢٠٢٥٠٩٢٦_١٨٢٤٥٥_(600_x_600_pixel).jpg",
        description: "مكيف كراون CROWN متحرك 10الف وحده مع الضمان",
        offer: false
    },
    {
        id: 17,
        name: "مكيف كراون 6الف وحده",
        category: "مكيفات",
        price: 490,
        image: "img/1755672978372.jpg",
        description: "مكيف كراون CROWN متحرك 6الف مع الضمان",
        offer: false
    },
    {
        id: 18,
        name: "مكيف نسمة 6الف ثابت",
        category: "مكيفات",
        price: 1150,
        image: "img/1755630505606.jpg",
        description: "مكيف نسمة ثابت 6الف وحدة الشكل الجديد",
        offer: false
    },
    
 {
        id: 21,
        name: "ثلاجة كراون 13قدم",
        category: "ثلاجات",
        price: 1550,
        image: "img/IMG_٢٠٢٥١٠٠٥_٢٣١٠٢٤_(2008_x_3000_pixel).jpg",
        description: "ثلاجة كراون CROWN 13قدم بابين يابنية اصلية ضمان5 سنوات",
        offer: false
    },

 {
        id: 1,
        name: "تلاجة LG 12 قدم بابين",
        category: "ثلاجات",
        price: 2700,
        image: "img/IMG_٢٠٢٥١٠٠٨_٢٢٠٩٣٨_(850_x_850_pixel).jpg",
        description: "ثلاجة LG 12 قدم بابين اصليه مع كرت الضمان",
        offer: false
    },

 {
        id: 1,
        name: "ثلاجة LG 14قدم بابين",
        category: "ثلاجات",
        price: 4000,
        image: "img/IMG_٢٠٢٥١٠٠٨_٢٢٠٩٤٦_(700_x_700_pixel).jpg",
        description: "ثلاجة السكا 12قدم بابين اقتصادية في الاستخدام",
        offer: false
    },

 {
        id: 1,
        name: "ثلاجة تورنيدو 12 قدم بابين بخاريه",
        category: "ثلاجات",
        price: 1850,
        image: "img/IMG_٢٠٢٥١٠٠٥_٢٣١٠٤٨_(554_x_553_pixel).jpg",
        description: "ثلاجة تورنيدو 12قدم بابين بخاريه",
        offer: false
    },

 {
        id: 1,
        name: "ثلاجة ليبهر 10 قدم بابين",
        category: "ثلاجات",
        price: 1250,
        image: "img/IMG_٢٠٢٥١٠٠٥_٢٣١١٣٢_(387_x_516_pixel).jpg",
        description: "ليبهر 10 قدم بابين اصليه",
        offer: false
    },

{
        id: 1,
        name: "ثلاجة ليبهر 12 قدم بايبن",
        category: "ثلاجات",
        price: 1750,
        image: "img/IMG_٢٠٢٥١٠٠٥_٢٣١١٣٢_(387_x_516_pixel).jpg",
        description: "ليبهر 12 قدم بابين اصليه",
        offer: false
    },

{
        id: 1,
        name: "ثلاجة ليبهر 14 قدم بابين ",
        category: "ثلاجات",
        price: 2200,
        image: "img/IMG_٢٠٢٥١٠٠٥_٢٣١١٣٢_(387_x_516_pixel).jpg",
        description: "ليبهر 14 قدم بابين اصليه",
        offer: false
    },

{
        id: 1,
        name: "فريزر فريش 12 قدم",
        category: "فريزرات",
        price: 1250,
        image: "img/IMG_٢٠٢٥١٠٠٩_١٠٠٣١٠_(500_x_345_pixel).jpg",
        description: "",
        offer: false
    },

{
        id: 1,
        name: "فريزر ليبهر 10 قدم",
        category: "فريزرات",
        price: 1350,
        image: "img/IMG_٢٠٢٥١٠٠٩_١٠٢٨٤٤_(433_x_461_pixel).jpg",
        description: "",
        offer: false
    },

{
        id: 1,
        name: "فريزر ليبهر 12 قدم ",
        category: "فريزرات",
        price: 1450,
        image: "img/IMG_٢٠٢٥١٠٠٩_١٠٢٨٤٤_(433_x_461_pixel).jpg",
        description: "",
        offer: false
    },

{
        id: 1,
        name: "فريزر ليبهر14 قدم",
        category: "فريزرات",
        price: 1850,
        image: "img/IMG_٢٠٢٥١٠٠٩_١٠٢٨٤٤_(433_x_461_pixel).jpg",
        description: "",
        offer: false
    },

{
        id: 1,
        name: "فريزر شارب 14 قدم الاصليه",
        category: "فريزرات",
        price: 2000,
        image: "img/IMG_٢٠٢٥١٠٠٩_١٠٠٣٤٢_(1500_x_1500_pixel).jpg",
        description: "",
        offer: false
    },

{
        id: 1,
        name: "فريزر شارب 8 قدم",
        category: "فريزرات",
        price: 1150,
        image: "img/IMG_٢٠٢٥١٠٠٩_١٠٢٨٣٦_(500_x_500_pixel).jpg",
        description: "",
        offer: false
    },

{
        id: 1,
        name: "غسالة LG 13 كيلو",
        category: "غسالات",
        price: 2500,
        image: "img/IMG_٢٠٢٥٠٩٢٦_١٨٢٣٥٧_(600_x_600_pixel).jpg",
        description: "غسالة LG 13 كيلو الاصلية حوضين",
        offer: false
    },

{
        id: 1,
        name: "غسالة LG 10 كيلو ",
        category: "غسالات",
        price: 1950,
        image: "img/IMG_٢٠٢٥١٠١٠_١٧٢٩٠٤_(1080_x_1080_pixel).jpg",
        description: "غسالة LG 10 كيلو الاصلية حوضين",
        offer: false
    },

{
        id: 1,
        name: "غسالة LG 9 كيلو",
        category: "غسالات",
        price: 1450,
        image: "img/IMG_٢٠٢٥١٠١٠_١٧٢٩١٥_(720_x_960_pixel).jpg",
        description: "غسالة LG 9 كيلو الاصلية مع كرت الضمان",
        offer: false
    },

{
        id: 1,
        name: "غسالة LG 8 كيلو",
        category: "غسالات",
        price: 1350,
        image: "img/IMG_٢٠٢٥١٠١٠_١٧٣٠٠٦_(720_x_540_pixel).jpg",
        description: "",
        offer: false
    },

{
        id: 1,
        name: "مروحة نسمة سقف قلب كبير",
        category: "مراوح",
        price: 130,
        image: "img/IMG_٢٠٢٥١٠١٦_١٧٤٥٣٣_(480_x_304_pixel).jpg",
        description: "",
        offer: false
    },

{
        id: 1,
        name: "شاشه دانسات 43 بوصه",
        category: "شاشات",
        price: 750,
        image: "img/IMG_٢٠٢٥١٠١٦_١٨٠٠٤٣_(500_x_500_pixel).jpg",
        description: "دانسات 43 بوصه اسمارات سعوديه",
        offer: false
    },

{
        id: 1,
        name: "شاشه دانسات 32 بوصه",
        category: "شاشات",
        price: 390,
        image: "img/IMG_٢٠٢٥١٠١٦_١٧٥٨١١_(600_x_600_pixel).jpg",
        description: "دانسات 32 بوصه عاديه السعوديه الاصليه",
        offer: false
    },

{
        id: 1,
        name: "",
        category: "",
        price: 2500,
        image: "img/.jpg",
        description: "",
        offer: false
    },

];

// إدارة العربة
let cart = [];

// إعدادات المتجر
const storeSettings = {
    whatsappNumber: '249119479189', // استبدل برقم واتساب المتجر الفعلي
    storeName: 'ليمون استور'
};

// تهيئة التطبيق
function initApp() {
    displayCategories();
    displayFeaturedProducts();
    updateCartUI();
    setupEventListeners();
    setupNavigation();
    setupSearch();
}

// عرض الأقسام
function displayCategories() {
    const categoriesContainer = document.getElementById('categories-container');
    categoriesContainer.innerHTML = '';
    
    categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'category-icon';
        categoryElement.setAttribute('data-category', category.name);
        categoryElement.innerHTML = `
            <div class="icon">${category.icon}</div>
            <h3>${category.name}</h3>
        `;
        categoriesContainer.appendChild(categoryElement);
    });
}

// عرض المنتجات المميزة
function displayFeaturedProducts() {
    const featuredProductsContainer = document.getElementById('featured-products-container');
    featuredProductsContainer.innerHTML = '';
    
    const featuredProducts = products.slice(0, 10);
    
    featuredProducts.forEach(product => {
        const productElement = createProductElement(product);
        featuredProductsContainer.appendChild(productElement);
    });
}

// إنشاء عنصر منتج
function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `
        ${product.offer ? '<div class="offer-badge">عرض خاص</div>' : ''}
        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x200?text=صورة+المنتج'">
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">${product.price} جنيه</div>
            <button class="add-to-cart" data-id="${product.id}">
                <i class="fas fa-cart-plus"></i> أضف إلى العربة
            </button>
        </div>
    `;
    
    productElement.querySelector('.add-to-cart').addEventListener('click', function() {
        const productId = parseInt(this.getAttribute('data-id'));
        addToCart(productId);
    });
    
    return productElement;
}

// إضافة منتج إلى العربة
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        updateCartUI();
        showNotification(`تم إضافة ${product.name} إلى العربة`);
        
        // تأثير اهتزاز لعربة التسوق
        const cartIcon = document.querySelector('.cart-icon');
        cartIcon.style.animation = 'bounce 0.5s';
        setTimeout(() => {
            cartIcon.style.animation = '';
        }, 500);
    }
}

// تحديث واجهة العربة
function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const cartCount = document.querySelector('.cart-count');
    
    // تحديث عدد العناصر في العربة
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // تحديث محتويات العربة
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: #7f8c8d;">العربة فارغة</p>';
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;
            
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/300x200?text=صورة+المنتج'">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.price} ج× ${item.quantity}</p>
                    <p>المجموع: ${itemTotal} جنيه</p>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });
    }
    
    // تحديث السعر الإجمالي
    cartTotalPrice.textContent = totalPrice;
}

// إشعار
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'linear-gradient(135deg, #2ecc71, #27ae60)' : 'linear-gradient(135deg, #e74c3c, #c0392b)';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1001;
        transition: all 0.3s;
        font-weight: bold;
        max-width: 300px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// إتمام الشراء عبر الواتساب (محسّن)
function checkoutViaWhatsApp() {
    if (cart.length === 0) {
        showNotification('العربة فارغة، أضف منتجات أولاً', 'error');
        return;
    }
    
    // عرض نافذة التأكيد
    const modal = document.getElementById('confirmation-modal');
    modal.classList.add('active');
    
    // إعداد حدث التأكيد
    document.getElementById('confirm-order').onclick = function() {
        sendWhatsAppOrder();
        modal.classList.remove('active');
    };
    
    // إعداد حدث الإلغاء
    document.getElementById('cancel-order').onclick = function() {
        modal.classList.remove('active');
    };
}

// إرسال الطلب عبر واتساب
function sendWhatsAppOrder() {
    // بناء رسالة الطلب
    let message = `🛒 *طلب جديد من ${storeSettings.storeName}* 🛒%0A%0A`;
    message += '*المنتجات المطلوبة:*%0A%0A';
    
    cart.forEach((item, index) => {
        message += `*${index + 1}. ${item.name}*%0A`;
        message += `الكمية: ${item.quantity}%0A`;
        message += `السعر: ${item.price} جنيه%0A`;
        message += `المجموع: ${item.price * item.quantity} جنيه%0A%0A`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `*💰 الإجمالي الكلي: ${total} جنيه*%0A%0A`;
    message += '*معلومات إضافية:*%0A';
    message += 'يرجى تأكيد الطلب وتحديد طريقة الدفع والتوصيل.%0A%0A';
    message += 'شكراً لاختياركم متجرنا! 🌟';
    
    // تنظيف رقم الهاتف
    const cleanPhone = storeSettings.whatsappNumber.replace(/\D/g, '');
    
    if (!cleanPhone || cleanPhone.length < 10) {
        showNotification('رقم واتساب المتجر غير صحيح', 'error');
        return;
    }
    
    // إنشاء رابط واتساب
    const whatsappURL = `https://wa.me/${cleanPhone}?text=${message}`;
    
    // محاولة فتح واتساب
    try {
        const newWindow = window.open(whatsappURL, '_blank');
        
        if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
            // إذا فشل فتح نافذة جديدة، حاول فتح في نفس النافذة
            window.location.href = whatsappURL;
        }
        
        showNotification('جاري فتح واتساب لإتمام الطلب...');
        
        // تفريغ العربة بعد إرسال الطلب (اختياري)
        setTimeout(() => {
            cart = [];
            updateCartUI();
            showNotification('تم إرسال طلبك بنجاح!');
        }, 2000);
        
    } catch (error) {
        console.error('Error opening WhatsApp:', error);
        showNotification('حدث خطأ في فتح واتساب', 'error');
    }
}

// تفريغ العربة
function clearCart() {
    if (cart.length === 0) {
        showNotification('العربة فارغة بالفعل', 'error');
        return;
    }
    
    cart = [];
    updateCartUI();
    showNotification('تم تفريغ العربة');
}

// إعداد التنقل بين الأقسام
function setupNavigation() {
    // التنقل في القائمة الرئيسية
    document.querySelectorAll('nav a, .footer-column a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            if (section) {
                showSection(section);
            }
        });
    });
    
    // أزرار العودة
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showSection('home');
        });
    });
    
    // النقر على الأقسام
    document.querySelectorAll('.category-icon').forEach(icon => {
        icon.addEventListener('click', function() {
            const categoryName = this.getAttribute('data-category');
            showCategoryProducts(categoryName);
        });
    });
}

// إظهار قسم معين
function showSection(sectionName) {
    // إخفاء جميع الأقسام
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    
    // إظهار القسم المطلوب
    switch(sectionName) {
        case 'home':
            document.getElementById('home-section').style.display = 'block';
            document.getElementById('categories-section').style.display = 'block';
            document.getElementById('featured-products').style.display = 'block';
            break;
        case 'all-products':
            document.getElementById('all-products-section').style.display = 'block';
            displayAllProducts();
            break;
        case 'offers':
            document.getElementById('offers-section').style.display = 'block';
            displayOffers();
            break;
        case 'contact':
            document.getElementById('contact-section').style.display = 'block';
            break;
        default:
            document.getElementById('home-section').style.display = 'block';
            document.getElementById('categories-section').style.display = 'block';
            document.getElementById('featured-products').style.display = 'block';
    }
    
    // تحديث القائمة النشطة
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionName) {
            link.classList.add('active');
        }
    });
    
    // التمرير للأعلى
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// عرض منتجات قسم معين
function showCategoryProducts(categoryName) {
    showSection('all-products');
    document.getElementById('category-title').textContent = `منتجات ${categoryName}`;
    
    const categoryProductsContainer = document.getElementById('all-products-container');
    categoryProductsContainer.innerHTML = '';
    
    const categoryProducts = products.filter(product => product.category === categoryName);
    
    if (categoryProducts.length === 0) {
        categoryProductsContainer.innerHTML = '<p style="text-align: center; color: #7f8c8d; font-size: 18px; margin: 20px 0;">لا توجد منتجات في هذا القسم حالياً</p>';
    } else {
        categoryProducts.forEach(product => {
            const productElement = createProductElement(product);
            categoryProductsContainer.appendChild(productElement);
        });
    }
}

// عرض جميع المنتجات
function displayAllProducts() {
    const allProductsContainer = document.getElementById('all-products-container');
    allProductsContainer.innerHTML = '';
    
    products.forEach(product => {
        const productElement = createProductElement(product);
        allProductsContainer.appendChild(productElement);
    });
}

// عرض العروض الخاصة
function displayOffers() {
    const offersContainer = document.getElementById('offers-container');
    offersContainer.innerHTML = '';
    
    const offerProducts = products.filter(product => product.offer);
    
    if (offerProducts.length === 0) {
        offersContainer.innerHTML = '<p style="text-align: center; color: #7f8c8d; font-size: 18px; margin: 20px 0;">لا توجد عروض خاصة حالياً</p>';
    } else {
        offerProducts.forEach(product => {
            const productElement = createProductElement(product);
            offersContainer.appendChild(productElement);
        });
    }
}

// إعداد البحث
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        if (searchTerm.length < 2) {
            return;
        }
        
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
        
        // عرض نتائج البحث في قسم جميع المنتجات
        showSection('all-products');
        document.getElementById('category-title').textContent = `نتائج البحث: "${searchTerm}"`;
        
        const searchResultsContainer = document.getElementById('all-products-container');
        searchResultsContainer.innerHTML = '';
        
        if (filteredProducts.length === 0) {
            searchResultsContainer.innerHTML = '<p style="text-align: center; color: #7f8c8d; font-size: 18px; margin: 20px 0;">لا توجد نتائج للبحث</p>';
        } else {
            filteredProducts.forEach(product => {
                const productElement = createProductElement(product);
                searchResultsContainer.appendChild(productElement);
            });
        }
    });
}

// إعداد مستمعي الأحداث
function setupEventListeners() {
    // إدارة العربة
    document.querySelector('.cart-icon').addEventListener('click', function() {
        document.querySelector('.cart-sidebar').classList.add('active');
    });
    
    document.querySelector('.close-cart').addEventListener('click', function() {
        document.querySelector('.cart-sidebar').classList.remove('active');
    });
    
    // إغلاق العربة عند النقر خارجها
    document.addEventListener('click', function(event) {
        const cartSidebar = document.querySelector('.cart-sidebar');
        const cartIcon = document.querySelector('.cart-icon');
        
        if (cartSidebar.classList.contains('active') && 
            !cartSidebar.contains(event.target) && 
            !cartIcon.contains(event.target)) {
            cartSidebar.classList.remove('active');
        }
    });
    
    // زر الواتساب
    document.getElementById('whatsapp-checkout').addEventListener('click', checkoutViaWhatsApp);
    
    // زر تفريغ العربة
    document.getElementById('clear-cart').addEventListener('click', clearCart);
    
    // نموذج الاتصال
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
        this.reset();
    });
    
    // النشرة البريدية
    document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('شكراً لاشتراكك في النشرة البريدية!');
        this.reset();
    });
}

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

// دالة مساعدة للتجربة (يمكن استدعاؤها من console)
window.addSampleProducts = function() {
    addToCart(1);
    addToCart(2);
    addToCart(5);
    showNotification('تم إضافة منتجات تجريبية للعربة');
};