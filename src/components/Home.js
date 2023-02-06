const Home = () => {

    let paragraph = 'Working like a sicko this morning I puked on laundry';


    const handleClick = () => {
        paragraph = 'My name is Ian Conner';
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