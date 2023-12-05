// Task
const url = "https://bible-api.com/romans 12:1-2,5-7,9,13:1-9&10?translation=kjv";
const res = fetch(url);

res
  .then((data) => data.json())
  .then((value) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3">
          ${value.verses.map((verse) => `
            <div class="card-body">
              <div class="card">
                <h1 class="card-header text-center" id="title">${verse.book_id}</h1>
                <h2 class="card-header text-center" id="title">${verse.book_name}</h2>
                <div class="card-body">
                  <p class="card-text">${verse.text}</p>
                  <p class="card-text">${verse.chapter}</p>
                  <p class="card-text">${verse.verse}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    document.body.append(div);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
