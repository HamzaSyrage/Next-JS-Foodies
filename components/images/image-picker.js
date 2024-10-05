"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ name, label }) {
  const ref = useRef();
  const [image, SetImage] = useState();

  function handleClick() {
    ref.current.click();
  }
  function handleSelect() {
    const file = ref.current.files[0];
    if (!file) {
      return;
    }

    const fr = new FileReader();
    fr.onload = () => {
      SetImage(fr.result);
    };
    fr.readAsDataURL(file);
  }
  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
          <div className={classes.preview}>
            {!image && <p>no image selected yet</p>}
            {image && <Image src={image} alt={"user image"} fill />}
          </div>
          <input
            className={classes.input}
            ref={ref}
            type="file"
            id={name}
            name={name}
            accept="image/png, image/jpg"
            onChange={handleSelect}
          />
          <button
            className={classes.button}
            onClick={handleClick}
            type="button"
          >
            pick an image
          </button>
        </div>
      </div>
    </>
  );
}
