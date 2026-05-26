// Tortlar ma'lumotlari
const tortlar = [
    {
        id: 1,
        nomi: "🍯 Medovik",
        turi: "Honey Cake",
        narxi: 150000,
        joylashuvi: "Yunusobod",
        rasm: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
    },
    {
        id: 2,
        nomi: "🍫 Shukoladali",
        turi: "Chocolate Cake",
        narxi: 200000,
        joylashuvi: "Chilonzor",
        rasm: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
    },
    {
        id: 3,
        nomi: "🌼 Vannili",
        turi: "Vanilla Cake",
        narxi: 120000,
        joylashuvi: "Mirzo Ulugbek",
        rasm: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
    },
    {
        id: 4,
        nomi: "🍓 Fruit Cake",
        turi: "Mevali Tort",
        narxi: 180000,
        joylashuvi: "Mirabad",
        rasm: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
    },
    {
        id: 5,
        nomi: "☕ Tiramisu",
        turi: "Italian Dessert",
        narxi: 160000,
        joylashuvi: "Shahar Markazi",
        rasm: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
    },
    {
        id: 6,
        nomi: "🎂 Panna Cotta",
        turi: "Cream Cake",
        narxi: 140000,
        joylashuvi: "Sergeli",
        rasm: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
    },
    {
        id: 7,
        nomi: "🍰 Cheesecake",
        turi: "New York Style",
        narxi: 190000,
        joylashuvi: "Navoi",
        rasm: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
    },
    {
        id: 8,
        nomi: "🥥 Kokos Tort",
        turi: "Coconut Cake",
        narxi: 170000,
        joylashuvi: "Samarkand",
        rasm: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
    }
];

// Sahifa yuklanganda tortlar katalogini ko'rsatish
document.addEventListener('DOMContentLoaded', function() {
    displayTortlar();
    console.log('Oydin Shirinliklari vebsayti yuklandi!');
});

// Tortlarni HTML'da ko'rsatish
function displayTortlar() {
    const container = document.getElementById('tortlarContainer');
    container.innerHTML = '';

    tortlar.forEach((tort, index) => {
        const tortCard = `
            <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="card tort-card h-100">
                    <img src="${tort.rasm}" class="card-img-top" alt="${tort.nomi}" loading="lazy">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${tort.nomi}</h5>
                        <p class="card-text text-muted">${tort.turi}</p>
                        <div class="narx">${tort.narxi.toLocaleString('uz-UZ')} so'm</div>
                        <div class="location mb-3">
                            <i class="fas fa-map-marker-alt text-danger"></i>
                            <span>${tort.joylashuvi}</span>
                        </div>
                        <button class="btn btn-sm btn-warning w-100 mt-auto" onclick="buyurtmaQilish('${tort.nomi}')">📱 Buyurtma Qilish</button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += tortCard;
    });
}

// Buyurtma qilish funksiyasi
function buyurtmaQilish(tortNomi) {
    const adminTelegram = '@oydinshirinliklari_admin';
    const chatLink = 'https://t.me/oydinshirinliklari';
    const kanalLink = 'https://t.me/oydin_shirinliklari';
    const telefon = '+998919557575';

    const message = `Salom! Men "${tortNomi}" tortini buyurtma qilmoqchiman.`;
    const telegramAdminLink = `https://t.me/oydinshirinliklari_admin?text=${encodeURIComponent(message)}`;

    // Buyurtma modal
    const buyurtmaHTML = `
        <div class="alert alert-info alert-dismissible fade show" role="alert">
            <h5 class="alert-heading">✅ ${tortNomi} - Buyurtma Qilish</h5>
            <hr>
            <p>Siz <strong>${tortNomi}</strong> tortini buyurtma qilmoqchisiz!</p>
            <p class="mb-0"><strong>Narx:</strong> ${getNarx(tortNomi)} so'm</p>
            <hr>
            <p class="mb-0"><strong>Biz bilan bog'laning:</strong></p>
            <p>
                📞 <a href="tel:${telefon}" class="btn btn-sm btn-success me-2">Telefon Qilish</a>
                💬 <a href="${telegramAdminLink}" class="btn btn-sm btn-info me-2" target="_blank">Telegram Admin</a>
                📢 <a href="${kanalLink}" class="btn btn-sm btn-primary" target="_blank">Telegram Kanal</a>
            </p>
        </div>
    `;

    // Modal oynani ko'rsatish
    alert(`${tortNomi} tortini buyurtma qilish uchun:\n\n📱 Telefon: ${telefon}\n💬 Telegram: @oydinshirinliklari_admin\n\nTugatish uchun Telegram admin bilan bog'laning!`);
    
    // Telegram adminiga yuborish
    window.open(telegramAdminLink, '_blank');
}

// Tort narxini olish
function getNarx(tortNomi) {
    const tort = tortlar.find(t => t.nomi === tortNomi || t.nomi.includes(tortNomi.replace('📱 Buyurtma Qilish', '').trim()));
    return tort ? tort.narxi : 'N/A';
}

// Tortlar bo'limiga scroll qilish
function scrollToTortlar() {
    const element = document.getElementById('tortlar');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Qidiruv funksiyasi
function qidirTort(soroz) {
    if (!soroz) {
        displayTortlar();
        return;
    }

    const filteredTortlar = tortlar.filter(tort => 
        tort.nomi.toLowerCase().includes(soroz.toLowerCase()) ||
        tort.turi.toLowerCase().includes(soroz.toLowerCase()) ||
        tort.joylashuvi.toLowerCase().includes(soroz.toLowerCase())
    );
    
    const container = document.getElementById('tortlarContainer');
    if (filteredTortlar.length === 0) {
        container.innerHTML = '<div class="col-12"><p class="text-center text-muted fs-5">Topilmadi. Boshqa tort qidiring!</p></div>';
        return;
    }

    container.innerHTML = '';
    filteredTortlar.forEach(tort => {
        const tortCard = `
            <div class="col-md-6 col-lg-4">
                <div class="card tort-card h-100">
                    <img src="${tort.rasm}" class="card-img-top" alt="${tort.nomi}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${tort.nomi}</h5>
                        <p class="card-text text-muted">${tort.turi}</p>
                        <div class="narx">${tort.narxi.toLocaleString('uz-UZ')} so'm</div>
                        <div class="location mb-3">
                            <i class="fas fa-map-marker-alt text-danger"></i>
                            <span>${tort.joylashuvi}</span>
                        </div>
                        <button class="btn btn-sm btn-warning w-100 mt-auto" onclick="buyurtmaQilish('${tort.nomi}')">📱 Buyurtma Qilish</button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += tortCard;
    });
}

// Lokalni saqlash funksiyalari
function saveBuyurtma(tortNomi, raqam) {
    const buyurtma = {
        tort: tortNomi,
        telefon: raqam,
        sana: new Date().toLocaleString('uz-UZ')
    };
    
    let buyurtmalar = JSON.parse(localStorage.getItem('buyurtmalar')) || [];
    buyurtmalar.push(buyurtma);
    localStorage.setItem('buyurtmalar', JSON.stringify(buyurtmalar));
    
    console.log('Buyurtma saqlandi:', buyurtma);
}

// Statistika
console.log('🍰 Oydin Shirinliklari Vebsayti');
console.log('📞 Telefon: +998 91 955 75 75');
console.log('💬 Telegram: @oydinshirinliklari_admin');
console.log('📸 Instagram: @oydin_shirinliklari');
console.log('Jami tortlar soni:', tortlar.length);