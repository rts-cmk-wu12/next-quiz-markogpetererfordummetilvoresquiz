import Image from "next/image";
import Link from 'next/link';

export default async function Home() {

  const response = await fetch("https://opentdb.com/api_category.php");
  const data = await response.json();
  const categories = data.trivia_categories;

  console.log(data)

  return (
    <main className=" text-center">
      <h1 className="text-3xl mb-6">Velkommen til vores quiz!</h1>

      <h2>Tilgængelige kategorier:</h2>

      <ul>
        {categories.map((categorie) => (
          <li key={categorie.id}>

            <Link
              href={`/${categorie.id}`}
            >
              {categorie.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
