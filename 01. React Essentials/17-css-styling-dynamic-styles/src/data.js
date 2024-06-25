import Eggs from './assets/eggs.jpg';
import Scenary from './assets/scenary.jpg';
import Tree from './assets/tree.jpg';

export const PRODUCTS_INFO = [
    {
        productId: 967367353, 
        productName: "Eggs", 
        productDescription: "", 
        productImage: Eggs, 
        productPrice: "$357"
    }, 

    {
        productId: 3748596446, 
        productName: "Scenary", 
        productDescription: "", 
        productImage: Scenary, 
        productPrice: "$763"
    }, 

    {
        productId: 5476967343, 
        productName: "Tree", 
        productDescription: "", 
        productImage: Tree, 
        productPrice: "$246"
    }
];

export const EXAMPLES = {
    components: {
        title: "Components", 
        description: "Components are the building blocks of...", 
        code: `
            function welcome () {
                return <h1>Hello, Components!</h1>
            }
        `,
    }, 
    
    jsx: {
        title: "JavaScript Syntax", 
        description: "JSX is a syntax extension of JS...", 
        code: `
            <div>
                <h1>Welcome {userName}</h1>
                <p>Its time to understand about JSX</p>
            </div>
        `, 
    }, 

    props: {
        title: "Props", 
        description: "Components accept arbitrary Inputs called Props...", 
        code: `
            function welcome (props) {
                return <h1>Welcome {props.name}</h1>
            }
        `, 
    }, 

    state: {
        title: "State", 
        description: "State allows React Components to change their output over time in response...", 
        code: `
            const [isVisible, setIsVisible] = useState(false);

            function handleClick () {
                setIsVisible(true);
            }

            return (
                <div>
                    <button onClick = {handleClick}>show details</button>
                    {isVisible && <p>Amazing details!</p>}
                </div>
            );
        `, 
    }, 
};


export const USERS_DATA = {
    jonas: {
        fullName: "jonas", 
        emailAddress: "jonas@gmail.com", 
        mobileNumber: "+9156637573", 
    }, 

    james: {
        fullName: "james", 
        emailAddress: "james@gmail.com", 
        mobileNumber: "+91486894", 
    }, 

    williams: {
        fullName: "williams", 
        emailAddress: "williams@gmail.com", 
        mobileNumber: "+917484948", 
    }, 

    smith: {
        fullName: "smith", 
        emailAddress: "smith@gmail.com", 
        mobileNumber: "+919562525", 
    }, 
};