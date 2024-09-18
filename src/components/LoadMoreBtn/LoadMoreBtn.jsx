import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleChangePage }) => {
  return (
    <div className={s.container}>
      <button onClick={handleChangePage} className={s.buttom}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
