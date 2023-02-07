import { useState } from "react"; 

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title:'',body:'',author:'',id:1},
        {title:'',body:'',author:'',id:2},
        {title:'',body:'',author:'',id:3}
    ]);


    const handleClick = () => {
        
        setParagraph('Working like a sicko this morning I puked on laundry');
    }

    return (  
        <div className="home">
           {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
            </div>
           ))}
        </div>
    );
}
 
export default Home;