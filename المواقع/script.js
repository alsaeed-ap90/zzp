document.addEventListener("DOMContentLoaded", function () {

    // سنة حقوق النشر
    const year = new Date().getFullYear();

    const copyright = document.querySelector(".copyright");

    if (copyright) {
        copyright.innerHTML =
            `© ${year} إيهاب لخدمات الكوالين - جميع الحقوق محفوظة`;
    }


    // إغلاق الأسئلة الأخرى عند فتح سؤال
    const faqItems = document.querySelectorAll(".faq-list details");

    faqItems.forEach(function (item) {

        item.addEventListener("toggle", function () {

            if (item.open) {

                faqItems.forEach(function (otherItem) {

                    if (otherItem !== item) {
                        otherItem.removeAttribute("open");
                    }

                });

            }

        });

    });

});