const Menu_bar = document.getElementById('menu_bar');
const sidebar = document.querySelector('.Sidebar_container');
const Sidebar_closer = document.getElementById('sidebar_closer');
const All_topics = document.getElementById('All_topics');

Menu_bar.addEventListener("click", () => {
    sidebar.style.right = '0';
})
Sidebar_closer.addEventListener("click" , () => {
    sidebar.style.right = "-500%";
})

// Get the topic form json file
const fetchData = async () => {
    const data_fetch = await fetch('MCC/MCC_database.json');
    const data = await data_fetch.json();
    // first months data
    const first_month =  data.first_month;
    const second_month =  data.second_month;
    const third_month = data.third_month;

    for (let i = 0; i < first_month.length; i++) {
        const element = first_month[i];
        All_topics.insertAdjacentHTML("beforeend", `
        <li>${element.title}</li>
        `);
    }
    for (let i = 0; i < second_month.length; i++) {
        const element = second_month[i];
        All_topics.insertAdjacentHTML("beforeend", `
        <li>${element.title}</li>
        `);
    }
    for (let i = 0; i < third_month.length; i++) {
        const element = third_month[i];
        All_topics.insertAdjacentHTML("beforeend", `
        <li>${element.title}</li>
        `);
    }

}
fetchData();