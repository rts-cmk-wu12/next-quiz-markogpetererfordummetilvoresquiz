import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const response = await fetch("https://opentdb.com/api_category.php");
  const data = await response.json();
  const categories = data.trivia_categories;

  const categorieImages = {
    9: "/unnamed.png",
    10: "/assortment-books-with-headphones_23-2148721295.avif",
    11: "",
    12: "",
    13: "",
    14: "",
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
      <p className="whitespace-pre-line text-center">
        <strong>Regler:</strong>
        {"\n"}1. Der kommer 4 svarmuligheder, og kun ét svar er rigtigt.
        {"\n"}2. Svarer du forkert, går du videre til næste spørgsmål.
        {"\n"}3. Du har kun ét forsøg pr. spørgsmål.
      </p>

      <div className="max-w-4xl mx-auto mb-10 items-center">


        <select
          id="difficulty"
          name="difficulty"
          className="w-full sm:w-64 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          defaultValue="easy"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((categorie) => (
          <Link
            key={categorie.id}
            href={{
              pathname: `/question/${categorie.id}`,
              query: { image: categorieImages[categorie.id] || "" },
            }}
            className="relative h-48 rounded-lg overflow-hidden shadow-lg group block"
          >
            {categorieImages[categorie.id] ? (
              <div className="relative h-full w-full">
                <Image
                  src={categorieImages[categorie.id]}
                  alt={categorie.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            ) :
              <div className="h-full bg-gray-300 flex items-center justify-center">

              </div>
            }

            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 px-4 py-1 rounded text-white text-lg font-semibold drop-shadow-lg">
              {categorie.name}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
