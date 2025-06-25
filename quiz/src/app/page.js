import Image from "next/image";
import Link from "next/link";

export default async function Home({ searchParams }) {
  const response = await fetch("https://opentdb.com/api_category.php");
  const data = await response.json();
  const categories = data.trivia_categories;


  const categoryImages = {
    9: "quiz/public/unnamed.png",
    10: "",
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
    <main className="text-center p-6">
      <h1 className="text-3xl mb-6">Velkommen til vores quiz!</h1>

      <h2 className="text-xl mb-2">Tilgængelige kategorier:</h2>
      <ul className="space-y-4">
        {categories.map((categorie) => {
          const imagePath = categoryImages[categorie.id] || "";

          return (
            <li key={categorie.id} className="flex items-center justify-center">
              <Link
                href={{
                  pathname: `/question/${categorie.id}`,
                  query: { image: imagePath },
                }}
              >
                {categorie.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
