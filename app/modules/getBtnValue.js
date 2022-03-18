import {
    fetchBooks
} from "./data/fetchBooks.js";
const getBtnValue = () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(item => {
        item.addEventListener('click', function () {
            const btnValue = item.value;
            fetchBooks(btnValue)
            const active = document.querySelector('.active');
            if (active) {
                active.classList.remove('active');
            }
            item.classList.add('active');
        });
    });
}

export {
    getBtnValue
}