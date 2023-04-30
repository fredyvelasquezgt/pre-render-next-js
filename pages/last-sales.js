import { useEffect, useState } from "react";

function LastSalesPage() {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://nextjs-course-40c91-default-rtdb.firebaseio.com/sales.json")
      .then((response) => response.json()) //aqui accedo a la informacion
      .then((data) => {
        //aqui ya puedo manipular la informacion

        //asi transformo la data que viene de un objecto y la vuelvo un array
        const transformedSales = [];
        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        //aqui meto el array ya con la data transformada
        setSales(transformedSales);
        setIsLoading(false); //aqui ya no cargo nada
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - {sale.volume}
        </li>
      ))}
    </ul>
  );
}

export default LastSalesPage;
