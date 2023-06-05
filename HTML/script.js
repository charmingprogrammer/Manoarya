const first_container = document.getElementById("first_container");
const second_container = document.getElementById(
    "second_container"
);
const third_container = document.getElementById("third_container");
const forth_container = document.getElementById("forth_container");
const fifth_container = document.getElementById("fifth_container");

const fetchData = async () => {
    const data_fetch = await fetch("https://manoarya.com/HTML/Html_index.json");
    const data = await data_fetch.json();
    // first container data
    const first = data.first;
    const second = data.second;
    const third = data.third;
    const forth = data.forth;
    const fifth = data.fifth;

    // Loop the all  first container data
    for (let i = 0; i < first.length; i++) {
        const finaldata = first[i];
        console.log(finaldata);
        first_container.insertAdjacentHTML(
            "beforeend",
            `
            <a target="_blank" href="${finaldata.post_url}" id="subtopic">
            <div id="imgContainer"><img loading="lazy"
src="${finaldata.poster_url}"
alt="${finaldata.title}"></div>
                <h3>${finaldata.title}</h3>
        </a>
            `
        );
    }

    // Loop the all second container data
    for (let i = 0; i < second.length; i++) {
        const finaldata = second[i];
        console.log(finaldata);
        second_container.insertAdjacentHTML(
            "beforeend",
            `
            <a target="_blank" href="${finaldata.post_url}" id="subtopic">
            <div id="imgContainer"><img loading="lazy"
src="${finaldata.poster_url}"
alt="${finaldata.title}"></div>
                <h3>${finaldata.title}</h3>
        </a>
            `
        );
    }
    // Loop the all Third container data
    for (let i = 0; i < third.length; i++) {
        const finaldata = third[i];
        console.log(finaldata);
        third_container.insertAdjacentHTML(
            "beforeend",
            `
            <a target="_blank" href="${finaldata.post_url}" id="subtopic">
            <div id="imgContainer"><img loading="lazy"
src="${finaldata.poster_url}"
alt="${finaldata.title}"></div>
                <h3>${finaldata.title}</h3>
        </div>
            `
        );
    }
    // Loop the all forth container data
    for (let i = 0; i < forth.length; i++) {
        const finaldata = forth[i];
        console.log(finaldata);
        forth_container.insertAdjacentHTML(
            "beforeend",
            `
            <a target="_blank" href="${finaldata.post_url}" id="subtopic">
            <div id="imgContainer"><img loading="lazy"
src="${finaldata.poster_url}"
alt="${finaldata.title}"></div>
                <h3>${finaldata.title}</h3>
        </a>
            `
        );
    }
    // Loop the all fifth  container data
    for (let i = 0; i < fifth.length; i++) {
        const finaldata = fifth[i];
        console.log(finaldata);
        fifth_container.insertAdjacentHTML(
            "beforeend",
            `
            <a target="_blank" href="${finaldata.post_url}" id="subtopic">
            <div id="imgContainer"><img loading="lazy"
src="${finaldata.poster_url}"
alt="${finaldata.title}"></div>
                <h3>${finaldata.title}</h3>

        </a>
            `
        );
    }
};

fetchData();