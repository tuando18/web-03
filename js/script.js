// nav
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Xóa class active ở tất cả các link
            navLinks.forEach(nav => nav.classList.remove("active"));
            // Thêm class active vào link được bấm
            this.classList.add("active");
        });
    });
});

// hiệu ứng chữ
document.addEventListener("DOMContentLoaded", function () {
    
    const heroContent = document.querySelector(".hero-content");
    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(50px)";

    setTimeout(() => {
        heroContent.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";
    }, 500);
});

// sự kiện click favorite
document.querySelectorAll('.like-icon').forEach(icon => {
    icon.addEventListener('click', function () {
        this.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-regular');
        this.querySelector('i').classList.toggle('fa-solid');
    });
});

// xử lý FAQ khi được ấn sẽ mở rộng
document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.addEventListener("click", function() {
            this.classList.toggle("active");
        });
    });
});

// xử lý danh mục sản phẩm
function showProducts(category) {
    // Xóa class 'active-category' khỏi tất cả button
    const buttons = document.querySelectorAll('.category-buttons button');
    buttons.forEach(button => button.classList.remove('active-category'));

    // Thêm class 'active-category' vào button đang được chọn
    const activeButton = document.querySelector(`.category-buttons button[onclick="showProducts('${category}')"]`);
    if (activeButton) {
        activeButton.classList.add('active-category');
    }

    // Hiển thị danh sách sản phẩm theo category
    const products = document.querySelectorAll(".product");
    products.forEach(product => {
        product.style.display = product.getAttribute("data-category") === category ? "block" : "none";
    });
}



// xử lý hiển thị sản phẩm theo danh mục
function showProduct(category) {
    // Lấy tất cả sản phẩm
    const products = document.querySelectorAll(".product");

    // Lặp qua từng sản phẩm để hiển thị hoặc ẩn dựa trên category
    products.forEach(product => {
        if (product.getAttribute("data-category") === category) {
            product.style.display = "block";  // Hiển thị sản phẩm của category được chọn
        } else {
            product.style.display = "none";  // Ẩn sản phẩm không thuộc category
        }
    });
}

window.onload = () => showProducts('men');

const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const itemsPerView = 4;
const totalItems = slider.children.length;

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalItems - itemsPerView : currentIndex - 1;
    slider.style.transform = `translateX(-${currentIndex * (100 / itemsPerView)}%)`;
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === totalItems - itemsPerView) ? 0 : currentIndex + 1;
    slider.style.transform = `translateX(-${currentIndex * (100 / itemsPerView)}%)`;
});

