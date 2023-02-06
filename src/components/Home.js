import { useState } from "react"; 

const Home = () => {

    const [paragraph, setParagraph] = useState('My name is Ian Conner');


    const handleClick = () => {
        
        setParagraph('Working like a sicko this morning I puked on laundry');
    }

    return (  
        <div className="home">
            <h2>Homepage</h2>
            <p>{ paragraph }</p>
            <button onClick = {handleClick}>Click Here</button>
        </div>
    );
}
 
export default Home;