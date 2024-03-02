import React from "react";
import img_home2 from "../assets/8.png";
import {AiFillGithub, AiFillApple, AiFillAmazonCircle, AiFillLinkedin} from 'react-icons/ai';

const Home = () => {
  //   const img_home2 = "../assets/.jpg";

  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>UIProj</h1>
          <p>One Stop Solution For All</p>
        </main>
      </div>

      <div className="home2">
        <img src={img_home2} alt="Loading..." />
        <div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who are we?</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English
          </p>
        </div>
      </div>


      <div className="home4" id="brands">
        <div>

        <h1>Brands</h1>
            <article>
                <div style={{
                    animationDelay: "0.3s"
                }}>
                    <AiFillGithub/>
                    <p>GitHub</p>
                </div>

                <div style={{
                    animationDelay: "0.5s"
                }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>

                <div style={{
                    animationDelay: "0.7s"
                }}>
                    <AiFillApple/>
                    <p>Apple</p>
                </div>

                <div style={{
                    animationDelay: "0.9s"
                }}>
                    <AiFillLinkedin/>
                    <p>LinkedIn</p>
                </div>

            </article>
        </div>
      </div>
    </>
  );
};

export default Home;
