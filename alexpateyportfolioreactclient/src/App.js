import React, { useState } from "react";
import Constants from "./utilities/Constants";
import PostCreateForm from "./components/PostCreateForm";
import PostUpdateForm from "./components/PostUpdateForm";
import { Navbar } from "./components/Navbar";
import Portfolio from "./components/Portfolio";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [showingCreateNewPostForm, setShowingCreateNewPostForm] = useState(false);
  const [postCurrentlyBeingUpdated, setPostCurrentlyBeingUpdated] = useState(null);

  function getPosts() {
    const url = Constants.API_URL_GET_ALL_POSTS;

    fetch(url, {
      method: "GET"
    })
    .then(response => response.json())
    .then(postsFromServer => {
      console.log(postsFromServer);
      setPosts(postsFromServer);
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
  }

  return (
    <div>
      <Portfolio/>
      {/* <div className="container">
        <div className="row min-vh-100">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            {(showingCreateNewPostForm === false && postCurrentlyBeingUpdated === null) && (
              <div>
                <h1 className="text-center">Alex Patey Portfolio</h1>
                <div className="mt-5">
                  <button onClick={getPosts} className="btn btn-primary btn-lg w-100">Get Posts from server</button>
                  <button onClick={() => setShowingCreateNewPostForm(true)} className="btn btn-secondary btn-lg w-100 mt-4">Create New Post</button>
                </div>
              </div>
            )}
            
            {(posts.length > 0 && showingCreateNewPostForm === false && postCurrentlyBeingUpdated === null) && renderPostsTable()}

            {showingCreateNewPostForm && <PostCreateForm onPostCreated={onPostCreated}></PostCreateForm>}
          
            {postCurrentlyBeingUpdated !== null && <PostUpdateForm post={postCurrentlyBeingUpdated} onPostUpdated={onPostUpdated}></PostUpdateForm>}
          </div>
        </div>
      </div> */}
    </div>
  );

  function renderPostsTable() {
    console.log("in render " + [posts[0].content]);
    return(
      <div className="table-repsonsive mt-5">
        <table className="table table-bordered border-dark">
          <thead>
            <tr>
              <th scope="col">PostId (PK)</th>
              <th scope="col">Title</th>
              <th scope="col">Content</th>
              <th scope="col">CRUD Operations</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.postId}>
                <th scope="row">{post.postId}</th>
                <td>{post.title}</td>
                <td>{post.content}</td>
                <td>
                  <button onClick={() => setPostCurrentlyBeingUpdated(post)} className="btn btn-primary btn-lg mx-3 my-3">Update</button>
                  <button onClick={() => deletePost(post.postId)} className="btn btn-danger btn-lg">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-danger btn-lg w-100" onClick={() => setPosts([])}>Empty Posts</button>
      </div>
    )
  };

  function onPostCreated(createdPost) {
    setShowingCreateNewPostForm(false);

    if (createdPost == null){
      return;
    }

    alert("Post successfully created!");

    getPosts();
  };

  function onPostUpdated(updatedPost) {
    setPostCurrentlyBeingUpdated(null);

    if (updatedPost === null) {
      return;
    }

    let postsCopy = [...posts];

    const index = postsCopy.findIndex((postsCopyPost, currentIndex) => {
      if (postsCopyPost.postId === updatedPost.postId) {
        return true;
      }
    });

    if (index !== -1) {
      postsCopy[index] = updatedPost;
    }

    setPosts(postsCopy);

    alert("Post updated!");
  }

  function onPostDeleted(postIdToDelete) {

    let postsCopy = [...posts];

    const index = postsCopy.findIndex((postsCopyPost, currentIndex) => {
      if (postsCopyPost.postId === postIdToDelete) {
        return true;
      }
    });

    if (index !== -1) {
      postsCopy.splice(index, 1);
    }

    setPosts(postsCopy);

    alert("Post deleted!");
  }

  function deletePost(postIdToDelete)
  {
    const url = `${Constants.API_URL_DELETE_POST_BY_ID}/${postIdToDelete}`;

    fetch(url, {
        method: "DELETE"
      })
        .then(response => response.json())
        .then(responseFromServer => {
        console.log(responseFromServer);
        onPostDeleted(postIdToDelete);
        })
        .catch((error) => {
        console.log(error);
        alert(error);
    });
  }

}

