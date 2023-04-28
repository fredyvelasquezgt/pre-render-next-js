import Link from "next/link";



function HomePage(props) {

  const {products} = props;

  return (
    <ul>
      {products.map((product) => ( 
      <li key={product.id}> <Link href= {`/${product.id}`} >{product.title}</Link> </li> 
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  console.log('re generating')
  

  if(!data) {
    return {
      redirect: {
        destination: '/no-data'
      }
    }
  }

  if(data.products.length === 0) {
    return {notFound: true}
  }

  return {props: {
    products: data.products
  },
  revalidate: 1  ,

}
}

export default HomePage;
