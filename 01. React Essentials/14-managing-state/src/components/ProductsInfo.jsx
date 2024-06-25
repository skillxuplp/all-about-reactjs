export default function ProductsInfo ({productId, productName, productDescription, productImage, productPrice}) {
    return (
        <li style = {{margin: "10px", padding: "10px"}}>
            <div>
                <img src = {productImage} alt = {productName} title = {productName} style = {{width: "195px"}} />
                Product Id: {productId} <br />
                Product Name: {productName} <br />
                Product Description: {productDescription ? productDescription : '' } <br />
                Product Price: {productPrice}
            </div>
        </li>
    );
}