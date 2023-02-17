import { useState, useEffect } from "react"; 
import BlogList from "./Bloglist";

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('https://api.npoint.io/b87269ddd5248acc1302')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBlogs(data);
        })
    }, [])

    return (  
        <div className="home">
           {blogs && <BlogList blogs={blogs} title= "Nike Top Sneakers" handleDelete = {handleDelete} />}
        </div>
    );
}
 
export default Home;