let accordion = document.querySelectorAll('.accordion-wrapper .accordion');
accordion.forEach((acco) => {
    acco.onclick = () => {
        accordion.forEach((subcontent) => {
            subcontent.classList.remove("active");
        });
        acco.classList.add("active");
    }
});