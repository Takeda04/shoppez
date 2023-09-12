import { Link } from "react-router-dom";
import { reklama } from "../../jsonData";
import {
  Banner1,
  Banner2,
  muzlatgich,
  Star,
  Savat,
} from "../../assets/images/svg";
import {
  AllProductsCard1,
  AllProductsCard2,
  AllProductsCard3,
} from "../../components";
import SelectComponent from '../../UI/SelectComponent/index';

function AllProducts() {
  return (
    <>
      <div className="container">
        <Link to={"/telephone"}>Telephone</Link>
      </div>
      <section className="produc_section">
        <div className="container">
          <h2 className="produc_section__title">
            Featured Products <hr className="produc_section__title-hr" />
          </h2>
          <div className="produc">
            <AllProductsCard3 />
          </div>
        </div>
      </section>
      <section className="categorie_section">
        <div className="container">
          <h2 className="categorie_section__title">
            Categories <hr className="produc_section__title-hr" />
          </h2>
          <div className="categories">
            <AllProductsCard2 />
          </div>
        </div>
      </section>
      <section className="banner_section">
        <div className="container">
          <div className="banner_card">
            <div className="banner_card__one">
              <h2 className="banner_card__one--title">
                PORTABLE SPEAKERS COLLECTION{" "}
                <span style={{ fontWeight: "700" }}>2023</span>
              </h2>
              <img
                alt="banner"
                src={Banner1}
                className="banner_card__one--img"
              />
            </div>

            <div className="banner_card__two">
              <h2 className="banner_card__two--title">
                ALL ACCESSORIES FOR
                <span style={{ fontWeight: "700" }}> GAMERS</span>
              </h2>
              <img
                alt="banner"
                src={Banner2}
                className="banner_card__two--img"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="produc_section">
        <div className="container">
          <h2 className="produc_section__title">
            Bestsellers <hr className="produc_section__title-hr" />
          </h2>
          <div className="produc">
            <AllProductsCard3 />
          </div>
        </div>
      </section>
      <section className="reklama_section">
        <div className="container">
          <div className="reklama">
            {reklama.map((e, idx) => (
              <img key={idx} src={e.svg} alt="svg" />
            ))}
          </div>
        </div>
      </section>

      <section className="top_section">
        <div className="container">
          <div className="top">
            <h3 className="top_title">
              Top Rated <hr className="top_hr" />
            </h3>
            <div className="flex">
              <div className="top_wrapper">
                <img src={muzlatgich} alt="img" className="top_wrapper-img" />
                <div className="top_wrapper-wrap">
                  <p className="top_wrapper-wrap--description">
                    PC DELL Vostro 3910 MT, (Intel® Core™ i5-12400)
                  </p>
                  <div className="top_wrapper-wrap--wrapper">
                    <img
                      src={Star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={Star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={Star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={Star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={Star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                  </div>
                  <div className="top_wrapper-wrap--div">
                    <span className="top_wrapper-wrap--div_price">$600.00</span>
                    <button className="top_wrapper-wrap--div_icon">
                      <img src={Savat} alt="ocon" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="top_wrapper">
                <img src={muzlatgich} alt="img" className="top_wrapper-img" />
                <div className="top_wrapper-wrap">
                  <p className="top_wrapper-wrap--description">
                    PC DELL Vostro 3910 MT, (Intel® Core™ i5-12400)
                  </p>
                  <div className="top_wrapper-wrap--wrapper">
                    <img
                      src={Star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={Star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={Star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={Star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={Star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                  </div>
                  <div className="top_wrapper-wrap--div">
                    <span className="top_wrapper-wrap--div_price">$600.00</span>
                    <button className="top_wrapper-wrap--div_icon">
                      <img src={Savat} alt="ocon" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="top_wrapper">
                <img src={muzlatgich} alt="img" className="top_wrapper-img" />
                <div className="top_wrapper-wrap">
                  <p className="top_wrapper-wrap--description">
                    PC DELL Vostro 3910 MT, (Intel® Core™ i5-12400)
                  </p>
                  <div className="top_wrapper-wrap--wrapper">
                    <img
                      src={Star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={Star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={Star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={Star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={Star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                  </div>
                  <div className="top_wrapper-wrap--div">
                    <span className="top_wrapper-wrap--div_price">$600.00</span>
                    <button className="top_wrapper-wrap--div_icon">
                      <img src={Savat} alt="ocon" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="top_wrapper">
                <img src={muzlatgich} alt="img" className="top_wrapper-img" />
                <div className="top_wrapper-wrap">
                  <p className="top_wrapper-wrap--description">
                    PC DELL Vostro 3910 MT, (Intel® Core™ i5-12400)
                  </p>
                  <div className="top_wrapper-wrap--wrapper">
                    <img
                      src={Star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={Star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={Star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={Star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                    <img
                      src={Star}
                      alt="icon"
                      className="top_wrapper-wrap--wrapper_star"
                    />
                  </div>
                  <div className="top_wrapper-wrap--div">
                    <span className="top_wrapper-wrap--div_price">$600.00</span>
                    <button className="top_wrapper-wrap--div_icon">
                      <img src={Savat} alt="ocon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AllProducts;
