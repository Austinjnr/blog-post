import { useState } from "react"; 
import BlogList from "./Bloglist";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'AIR JORDAN 1 CHICAGO',body:'',author:'Phil Knight',id:1},
        {title:'NIKE BLAZER MID',body:'',author:'',id:2},
        {title:'NIKE AIR MAX 95',body:'',author:'',id:3},
        {title:'NIKE AIR FORCE 1 LOW',body:'',author:'',id:4},
        {title:'NIKE AIR TRAINER 1',body:'',author:'',id:5},
        {title:'NIKE CORTEZ',body:'',author:'',id:6},
        {title:'NIKE AIR ZOOM TEMPO NEXT%',body:'',author:'',id:7},
        {title:'NIKE DUNK SB LOW',body:'',author:'',id:8},
        {title:'SACAI X NIKE VAPORWAFFLE',body:'',author:'',id:9},
        {title:'NIKE AIR MAX PENNY 1',body:'',author:'',id:10}  
    ]);

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (  
        <div className="home">
          <BlogList blogs={blogs} title= "Nike Top Sneakers" handleDelete = {handleDelete} />
        </div>
    );
}
 
export default Home;