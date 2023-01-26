import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useSelector } from "react-redux";
import styles from "../styles/Success.module.css";

function Success() {
  const imageUrl = useSelector((state) => state.imageUrl.value);

  return (
    <main className={styles.main_container}>
      <span className="material-symbols-outlined">check_circle</span>
      <h2 className={styles.heading}>Uploaded Successfully!</h2>
      <Image
        src={imageUrl}
        alt="uploaded_image"
        width={337.92}
        height={224.32}
        style={{ borderRadius: "12px" }}
      />
      <div className={styles.link_container}>
        <span className={styles.image_link}>{imageUrl.slice(0, 38)}.....</span>
        <CopyToClipboard text={imageUrl}>
          <button className={styles.copy_link_btn}>Copy Link</button>
        </CopyToClipboard>
      </div>
    </main>
  );
}

export default Success;
