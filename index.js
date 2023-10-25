const x = document.querySelectorAll(".faq-toggle");

//for dropdown
x.forEach(toggles => {
    toggles.addEventListener("click", function () {
        const faq = toggles.closest(".faq");
        faq.classList.toggle("active");
    });
    
    //to remove
    const removeBtn = toggles.querySelector(".fa-times");

    removeBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        const faq = toggles.closest(".faq");
        const faqContainer = faq.parentElement;
        faqContainer.removeChild(faq);
    });
});

document.getElementById("add-faq").addEventListener("click", function () {
    const ques = document.querySelector(".inp1").value;
    const ans = document.querySelector(".inp2").value;

    if (ques && ans) {
        const faqContainer = document.querySelector(".faq-container");
        const faq = document.createElement("div");
        faq.className = "faq active";
        const faqTitle = document.createElement("h3");
        faqTitle.className = "faq-title";
        faqTitle.textContent = ques;
        const faqText = document.createElement("p");
        faqText.className = "faq-text";
        faqText.textContent = ans;
        const faqToggle = document.createElement("button");
        faqToggle.className = "faq-toggle";
        faqToggle.innerHTML = '<i class="fas fa-chevron-down"></i><i class="fas fa-times"></i>';
        faq.appendChild(faqTitle);
        faq.appendChild(faqText);
        faq.appendChild(faqToggle);
        faqContainer.appendChild(faq);
        document.querySelector(".inp1").value = "";
        document.querySelector(".inp2").value = "";
        faqToggle.addEventListener("click", function () {
            faq.classList.toggle("active");
        });
        faqToggle.querySelector(".fa-times").addEventListener("click", function (event) {
            event.stopPropagation();
            faqContainer.removeChild(faq);
        });
    }
});
