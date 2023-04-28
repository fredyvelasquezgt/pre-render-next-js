

function HomePage(props) {

  const {products} = props;

  return (
    <ul>
      {products.map((product) => ( 
      <li key={product.id}>{product.title}</li> 
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
