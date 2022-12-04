const first_month_container = document.getElementById("first_month_container");
const second_month_container = document.getElementById(
  "second_month_container"
);
const third_month_container = document.getElementById("third_month_container");

const fetchData = async () => {
  const data_fetch = await fetch("./MCC_database.json");
  const data = await data_fetch.json();
  // first months data
  const first_month = data.first_month;
  const second_month = data.second_month;
  const third_month = data.third_month;

  // Loop the all  first months data
  for (let i = 0; i < first_month.length; i++) {
    const finaldata = first_month[i];
    console.log(finaldata);
    first_month_container.insertAdjacentHTML(
      "beforeend",
      `
            <div id="subtopic">
            <div id="imgContainer"><img
src="${finaldata.poster_url}"
alt="${finaldata.title}"></div>
            <a href="${finaldata.post_url}">
                <h3>${finaldata.title}</h3>
            </a>
        </div>
            `
    );
  }

  // Loop the all second months data
  for (let i = 0; i < second_month.length; i++) {
    const finaldata = second_month[i];
    console.log(finaldata);
    second_month_container.insertAdjacentHTML(
      "beforeend",
      `
            <div id="subtopic">
            <div id="imgContainer"><img
src="${finaldata.poster_url}"
alt="${finaldata.title}"></div>
            <a href="${finaldata.post_url}">
                <h3>${finaldata.title}</h3>
            </a>
        </div>
            `
    );
  }
  // Loop the all Third months data
  for (let i = 0; i < third_month.length; i++) {
    const finaldata = third_month[i];
    console.log(finaldata);
    third_month_container.insertAdjacentHTML(
      "beforeend",
      `
            <div id="subtopic">
            <div id="imgContainer"><img
src="${finaldata.poster_url}"
alt="${finaldata.title}"></div>
            <a href="${finaldata.post_url}">
                <h3>${finaldata.title}</h3>
            </a>
        </div>
            `
    );
  }
};

fetchData();

/*  <div id="imgContainer"><img
src="${finaldata.poster_url}"
alt="${finaldata.title}"></div>
*/
