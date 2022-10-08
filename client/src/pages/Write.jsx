import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { useRef } from "react";

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const valueRef = useRef(null);

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/posts/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add">
      <div className="content">
        <input
          id="title"
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editContainer">
          <ReactQuill
            // style={{ width: widthHook }}
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
            ref={valueRef}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              checked={cat === "art"}
              onChange={(e) => setCat(e.target.value)}
              type="radio"
              name="cat"
              value="art"
              id="art"
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input
              checked={cat === "science"}
              onChange={(e) => setCat(e.target.value)}
              type="radio"
              name="cat"
              value="science"
              id="science"
            />
            <label htmlFor="art">Science</label>
          </div>
          <div className="cat">
            <input
              checked={cat === "technology"}
              onChange={(e) => setCat(e.target.value)}
              type="radio"
              name="cat"
              value="technology"
              id="technology"
            />
            <label htmlFor="art">Technology</label>
          </div>
          <div className="cat">
            <input
              checked={cat === "cinema"}
              onChange={(e) => setCat(e.target.value)}
              type="radio"
              name="cat"
              value="cinema"
              id="cinema"
            />
            <label htmlFor="art">Cinema</label>
          </div>
          <div className="cat">
            <input
              checked={cat === "design"}
              onChange={(e) => setCat(e.target.value)}
              type="radio"
              name="cat"
              value="design"
              id="design"
            />
            <label htmlFor="art">Design</label>
          </div>
          <div className="cat">
            <input
              checked={cat === "food"}
              onChange={(e) => setCat(e.target.value)}
              type="radio"
              name="cat"
              value="food"
              id="food"
            />
            <label htmlFor="art">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
