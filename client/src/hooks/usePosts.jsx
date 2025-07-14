import { useEffect, useState } from "react";
import API from "@/services/api";

const usePosts = () => {
  const [posts, setPosts] = useState([]);   
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    let isMounted = true;

    const fetchPosts = async () => {
      try {
        const res = await API.get("/posts/");
        if (isMounted) {
          setPosts(res.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchPosts();
    return () => {
      isMounted = false; 
    };
  }, []);

  return { posts, loading, error };
};

export default usePosts;
