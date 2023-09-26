import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css"

function Edit() {
  // Define state variables to store input values
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [tagCategory, setTagCategory] = useState("");

  // Event handler to handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;

    // Use the input field's ID to determine which state variable to update
    if (id === "inputField") {
      setPostTitle(value);
    } else if (id === "textField") {
      setPostBody(value);
    } else if (id === "tagField") {
      setTagCategory(value);
    }
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Do something with the captured data, e.g., send it to an API
    console.log("Post Title:", postTitle);
    console.log("Post Body:", postBody);
    console.log("Tag/Category:", tagCategory);

    // Clear the form fields
    setPostTitle("");
    setPostBody("");
    setTagCategory("");
  };

  return (
    <div>
      <Link to={"/"}>Create</Link>
      <h1 className="name">Edit Post</h1> 
      <div className="contain">
        <form onSubmit={handleSubmit}>
          <div className="input">
            <input
              type="text"
              id="inputField"
              placeholder="Post Title"
              value={postTitle}
              onChange={handleInputChange}
            />
          </div>
          <div className="input">
            <textarea
              id="textField"
              placeholder="POST BODY"
              value={postBody}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="field">
            <input
              type="text"
              id="tagField"
              placeholder="TAG /CATEGORY"
              value={tagCategory}
              onChange={handleInputChange}
            />
          </div>
         
          <button type="submit" className="btn">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
