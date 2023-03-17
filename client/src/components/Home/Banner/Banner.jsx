import "./Banner.scss";
import BannerImg from "~/assets/banner-img.png";
const Banner = () => {
    return (
    <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p> Convallis interdum purus adipiscing dis parturient
                    posuere ac a quam a eleifend montes parturient posuere
                    curae tempor
                </p>
                <div className="more">
                    <div className="banner-more">Read More</div>
                    <div className="banner-more shop">Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="" />
        </div>
    </div>
    );
};

export default Banner;
