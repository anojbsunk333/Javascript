// Use the AniNewsAPI - No CORS, returns JSON
let url = "https://aninews.vercel.app/api/news?source=ann&limit=3";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Success!", data);

    // Create cards for each article
    let cardsHTML = "";
    data.data.forEach((article) => {
      cardsHTML += `
        <div class="card">
          <h3>${article.title}</h3>
          <p>${article.excerpt || "No excerpt available"}</p>
          <small>Source: ${article.source} | ${new Date(article.date).toLocaleDateString()}</small>
        </div>
      `;
    });

    cardContainer.innerHTML = cardsHTML || "<p>No articles found</p>";
  })
  .catch((error) => {
    console.error("Fetch error:", error);
    cardContainer.innerHTML = `<p style="color: red">Error: ${error.message}</p>`;
  });
