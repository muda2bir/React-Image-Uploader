import { setImageUrl } from "@/features/imageSlice";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { setMainState } from "../features/main/mainSlice";
import style from "../styles/DropRectangle.module.css";

const DropRectangle = () => {
  const dispatch = useDispatch();

  async function uploadTheImage(base64EncodedImage) {
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      dispatch(setImageUrl(data.image_url));
      dispatch(setMainState("success"));
    } catch (error) {
      console.error(error);
    }
  }

  const onDrop = useCallback((acceptedFile) => {
    dispatch(setMainState("uploading"));
    const reader = new FileReader();
    reader.readAsDataURL(acceptedFile[0]);
    reader.onloadend = () => {
      uploadTheImage(reader.result);
    };
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <main className={style.main_container}>
        <h2 className="heading">Upload your image</h2>
        <span className={style.heading_info}>File should be Jpeg, Png,...</span>
        <div
          {...getRootProps({
            className: `${isDragActive ? `${style.drop_active}` : ""} ${
              style.drop_container
            }`,
          })}
        >
          <Image src="/image.svg" alt="Drag Image" width={115} height={90} />
          <span className={style.span}>Drag & Drop your image here</span>
        </div>
        <span className={style.span}>Or</span>
        <div className={style.btn_container}>
          <input
            {...getInputProps({
              className: `${style.upload_btn}`,
              id: "upload_btn",
            })}
          />
          <label htmlFor="upload_btn">Choose a file</label>
        </div>
      </main>
    </>
  );
};

export default DropRectangle;
