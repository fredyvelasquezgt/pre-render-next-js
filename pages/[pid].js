import { Fragment } from "react";
import path from 'path'
import fs from 'fs/promises';

function ProductDetailPage() {
    

    return <Fragment>
        <h1>Title</h1>
        <p>Description</p>
    </Fragment>
}

export async function getStaticProps(context) {
    const {params} = context; 
    
    const productId = params.id;

    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData);

}

export default ProductDetailPage;