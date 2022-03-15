import {
    fetchData
} from "./data/fetchData.js";


const getBtnValue = () => {
    const buttons = document.querySelectorAll("header nav button");
    buttons.forEach(el => {
        el.addEventListener('click', function () {
            const btnValue = el.value;
            fetchData(btnValue)
        });
    });
}

export {
    getBtnValue
}