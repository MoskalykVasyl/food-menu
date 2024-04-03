import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('post') || '';

  const handlSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const query = form.search.value;

    setSearchParams({ post: query });
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h1>Our news</h1>
      <form autoComplete="off" onSubmit={handlSubmit}>
        <input type="search" name="search" />
        <input type="submit" value="Search" />
      </form>
      <Link to={'/posts/new'}>Add new post</Link>
      {posts
        .filter((post) => post.title.includes(postQuery))
        .map((post) => (
          <Link key={post.id} to={`${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
    </div>
  );
};

export default BlogPage;
