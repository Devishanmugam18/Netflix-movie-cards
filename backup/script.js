const movies = [
  {
    id: 1,
    title: "Pursuit of Happyness",
    imageUrl: "movies-poster/download.jpg",
    summary:
      "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",
  },
  {
    id: 2,
    title: "Harry Potter",
    imageUrl: "movies-poster/harry-potter.jpg",
    summary:
      "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",
  },
  {
    id: 3,
    title: "Spider Man",
    imageUrl: "movies-poster/spiderman.jpg",
    summary:
      "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",
  },
  {
    id: 4,
    title: "Minimalism",
    imageUrl: "movies-poster/minimalism.jpg",
    summary:
      "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",
  },
];

const container = document.querySelector(".container");

container.innerHTML = movies
  .map((movie) => {
    return `<div class="card">
        <img src="${movie.imageUrl}" alt="${movie.title}" />

        <h2>${movie.title}</h2>
        <p>
         ${movie.summary}
        </p>
      </div>`;
  })
  .join("");
