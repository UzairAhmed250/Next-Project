import Image from "next/image";
import "./globals.css";
import TeaImage from "../../public/tea-3541205_1920.webp"
import cardimg from "../../public/woman-686.webp"
import cardlogo from "../../public/card logo.webp"
export default function Home() {
  return (
    <>
      <div className="main-parent">
        <div className="scond-mother">
          <div className="left-div">Quest</div>
          <div className="right-div">
            <div className="links">Home</div>
            <div className="links"><a href="/about-us">About</a></div>
            <div className="links"><a href="/contact-us"> Contact Us</a></div>
            <div className="links">Courses</div>
            <div className="links">Pages</div>
            <div className="links">Blog</div>
          </div>
        </div>
      </div>
      <div className="upper-child">
        <div className="second-parent">
          <div className="temp-div">
            <div className="child-text"> Grow your skills,<br />define your future</div>
            <div className="second-child">Presenting Academy,the tech school of the future. We teach you<br />
              the right skills to be prepared for tomorrow.</div>
            <div className="buttons">
              <div className="button1">Explore Courses</div>
              <div className="button2"> Learn More</div>
            </div>
          </div>
          <div className="img"><Image src={TeaImage} alt="teaimage" height={50} width={600} />
          </div>
        </div>
      </div>

      <div className="main-child">
        <div className="dnd-area">  </div>
        <div className="h2-heading"> H2 heading module
        </div>
        <div className="main-parent-card">
          <div className="parent-card">
            <div className="card">
              <div className="card-image" >
                <div className="duration-tag"> 6hr 33m </div>
                <div className="price-tag">$ 29.00 USD</div>
                <Image src={cardimg} alt="cardimg" />
              </div>
              <div className="card-content">
                <div className="card-content-head"> Simple Logo Design
                </div>
                <div className="card-content-mid"> Lorem ipsum dolor sit amet, consectetur<br />
                  dolorili adipiscing elit. Felis donec massa<br /> aliquam id.
                </div>
                <div className="card-content-bottom">
                  <div className="card-logo">
                    <Image src={cardlogo} alt="card logo image" />
                  </div>
                  <div className="Card-author-sign"> Awasome Author
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parent-card">
            <div className="card">
              <div className="card-image" >
                <div className="duration-tag"> 6hr 33m </div>
                <div className="price-tag">$ 29.00 USD</div>
                <Image src={cardimg} alt="cardimg" />
              </div>
              <div className="card-content">
                <div className="card-content-head"> Simple Logo Design
                </div>
                <div className="card-content-mid"> Lorem ipsum dolor sit amet, consectetur<br />
                  dolorili adipiscing elit. Felis donec massa<br /> aliquam id.
                </div>
                <div className="card-content-bottom">
                  <div className="card-logo">
                    <Image src={cardlogo} alt="card logo image" />
                  </div>
                  <div className="Card-author-sign"> Awasome Author
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parent-card">
            <div className="card">
              <div className="card-image" >
                <div className="duration-tag"> 6hr 33m </div>
                <div className="price-tag">$ 29.00 USD</div>
                <Image src={cardimg} alt="cardimg" />
              </div>
              <div className="card-content">
                <div className="card-content-head"> Simple Logo Design
                </div>
                <div className="card-content-mid"> Lorem ipsum dolor sit amet, consectetur<br />
                  dolorili adipiscing elit. Felis donec massa<br /> aliquam id.
                </div>
                <div className="card-content-bottom">
                  <div className="card-logo">
                    <Image src={cardlogo} alt="card logo image" />
                  </div>
                  <div className="Card-author-sign"> Awasome Author
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parent-card">
            <div className="card">
              <div className="card-image" >
                <div className="duration-tag"> 6hr 33m </div>
                <div className="price-tag">$ 29.00 USD</div>
                <Image src={cardimg} alt="cardimg" />
              </div>
              <div className="card-content">
                <div className="card-content-head"> Simple Logo Design
                </div>
                <div className="card-content-mid"> Lorem ipsum dolor sit amet, consectetur<br />
                  dolorili adipiscing elit. Felis donec massa<br /> aliquam id.
                </div>
                <div className="card-content-bottom">
                  <div className="card-logo">
                    <Image src={cardlogo} alt="card logo image" />
                  </div>
                  <div className="Card-author-sign"> Awasome Author
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-buttom"> BUTTON </div>
      </div>

      <div className="abc">
        <div className="">abcc</div>
      </div >

    </>
  );
}
