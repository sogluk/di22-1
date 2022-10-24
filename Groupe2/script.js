let paragraphs = document.getElementsByClassName("paragraphs");

Array.from(paragraphs).forEach((el) => {
    // Do stuff here
    el.addEventListener('mouseover', (e) => {
        console.log(e.target.id);
    });
});