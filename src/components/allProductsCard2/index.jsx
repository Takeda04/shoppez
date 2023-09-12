import { memo, useState } from "react";
import { categories } from "../../jsonData";

const index = memo(() => {
  const [buttonClasses, setButtonClasses] = useState([]);

  const handleButtonClick = () => {
    const newClass = `categorie_btn2`;

    if (buttonClasses.includes(newClass)) {
      setButtonClasses(buttonClasses.filter((cls) => cls !== newClass));
    } else {
      setButtonClasses([...buttonClasses, newClass]);
    }
  };

  return (
    <>
      {categories.map((categories, idx) => (
        <div className="categorie" key={idx}>
          <p className="categorie_title">{categories.title}</p>

          <div className="categorie_wrapper">
            <img
              src={categories.img}
              alt="praduc_img"
              className="categorie_wrapper__img"
            />
          </div>
          <button
            className={`categorie_btn1 ${idx} ${buttonClasses.join(" ")}`}
            onClick={handleButtonClick}
          >
            <img
              src={categories.icon}
              alt="icon"
              className="categorie_wrapper__btn-icon"
            />
          </button>
        </div>
      ))}
    </>
  );
});

export default index;
