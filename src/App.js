import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Posts from './components/posts'
import Pagination from './components/pagination'
import Amount from './components/amount'


    
    const App=() => {
        const [posts, setPosts] = useState([])
        const [loading, setLoading] = useState(false)
        const [currentPage, setCurrentPage] = useState(1)
        const [postsPerPage, setPostsPerPage] = useState(10)
    
        useEffect(()=> {
          const fetchPosts = async() => {
            setLoading(true)
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')

          setPosts(res.data)
          setLoading(false)
          }

          fetchPosts();
          
        }, []);
        
        //get current posts
        const indexOfLastPost = currentPage * postsPerPage
        const indexOfFirstPost = indexOfLastPost - postsPerPage
        const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

        //set how many posts per page
        
        const updatePostsPerPage = (e)=> {
          
          let newAmount = e.target.value
          if(newAmount < 5 || ''){
            alert("Minimum results per page is set to 5. Please use the arrows to set results per page.")
            setPostsPerPage(5)
          }
          else{
            setPostsPerPage(newAmount)

          }

          

        }

        //change page
        const paginate = (pageNumber)=> setCurrentPage(pageNumber)

        return (
            <div className = 'container m3'>
                <h1 className="text-primary" style={{textShadow: '2px 2px #333', fontSize: '4rem'}}>Most Recent Posts</h1>
              <div style={{display: 'flex',flexDirection: 'row', alignItems: 'center'
}}><h3 style={{minWidth: '275px', color: 'navy'}}>Set Results Per Page:</h3>
         <Amount onChange={updatePostsPerPage}></Amount>

</div>  
         <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}></Pagination>
                <Posts posts={currentPosts} loading={loading}></Posts>
            </div>
        )
    }


export default App;
