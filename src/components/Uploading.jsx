import style from "../styles/Uploading.module.css";

function Uploading() {
  return (
    <main className={style.main_container}>
      <h2 className="heading">Uploading...</h2>
      <div className={style.progress_bar}>
        <div className={style.progress}></div>
      </div>
    </main>
  );
}

export default Uploading;
