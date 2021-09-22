const tabsItem = document.querySelectorAll(".tab-item");
const tabsContent = document.querySelectorAll(".table");

/* Activar pestaña cuando haces clic sobre ella*/

tabsItem.forEach((item, item_index) => {
    item.addEventListener("click", () => {
        tabsItem.forEach(item => {
            item.classList.remove("--active");
        })
        item.classList.add("--active");
        
        tabsContent.forEach((content, content_index) => {
            if (content_index == item_index){
                content.style.display = "table"
            } else {
                content.style.display = "none";
            }
        })
    })
})