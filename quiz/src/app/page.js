import Image from "next/image";
import Link from "next/link";

export default async function Home({ searchParams: incomingSearchParams }) {
  const searchParams = await incomingSearchParams;

  const difficulty = searchParams?.difficulty || "easy";

  const response = await fetch("https://opentdb.com/api_category.php");
  const data = await response.json();
  const categories = data.trivia_categories;

  const categorieImages = {
    9: "/unnamed.png",
    10: "/assortment-books-with-headphones_23-2148721295.avif",
    11: "/movie-screen-film-images-26619927.webp",
    12: "/music-notes-background-illustration-ai-generative-free-photo.jpg",
    13: "/istockphoto-157612293-612x612.jpg",
    14: "/istockphoto-1336906460-612x612.jpg",
    15: "",
    16: "",
    17: "",
    18: "",
    19: "",
    20: "",
    21: "",
    22: "",
    23: "",
    24: "",
    25: "",
    26: "",
    27: "",
    28: "",
    29: "",
    30: "",
    31: "",
    32: "",
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-center text-4xl font-extrabold mb-12 text-gray-900">
        The Biggest Quizshow
      </h1>
      <p className="text-center text-1xl font-extrabold mb-12 text-gray-900">
        Hej og velkommen til vores fantastiske quiz, her kan du finde lidt af det hele alt efter hvad du er bedst til.
      </p>
      <div className="whitespace-pre-line text-center">
        <strong>Regler:</strong>
        <ul>
          <li>1. Der kommer 4 svarmuligheder, og kun ét svar er rigtigt.</li>
          <li>2. Svarer du forkert, går du videre til næste spørgsmål.</li>
          <li>3. Du har kun ét forsøg pr. spørgsmål.</li>
        </ul>
      </div>

      <div className="max-w-4xl mx-auto mb-10 items-center">
        <p className="text-center mb-4">
          Valgt sværhedsgrad: <strong>{difficulty}</strong>
        </p>
        <div className="flex justify-center gap-4">
          {["easy", "medium", "hard"].map((level) => (
            <Link
              key={level}
              href={`/?difficulty=${level}`}
              className={`px-4 py-2 rounded ${difficulty === level
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-gray-800"
                }`}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((categorie) => (
          <Link
            key={categorie.id}
            href={{
              pathname: `/question/${categorie.id}`,
              query: { difficulty },
            }}
            className="relative h-48 rounded-lg overflow-hidden shadow-lg group block"
          >
            {categorieImages[categorie.id] ? (
              <div className="relative h-full w-full">
                <Image
                  src={categorieImages[categorie.id]}
                  alt={categorie.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            ) : (
              <div className="h-full bg-gray-300 flex items-center justify-center"></div>
            )}

            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 px-4 py-1 rounded text-white text-lg font-semibold drop-shadow-lg">
              {categorie.name}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
