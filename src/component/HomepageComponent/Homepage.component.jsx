import React, { Component, Fragment } from "react";
import "./homecomponent.css";
import { Link } from "react-router-dom";

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <section className="homepae-container">
          <div className="left">
            <div className="content">
              <h1>Welcome to Prime Video</h1>
              <p>
                Join Prime to watch the latest movies, TV shows and award-
                <br />
                winning Amazon Originals
              </p>
              <Link to="/register">Start your 30-days free trial</Link>
            </div>
          </div>
          <div className="right"></div>
        </section>
        <section className="gulabo-sithabo">
          <div className="left">
            <div className="content-gulabo">
              <h1>Gulabo Sitabo</h1>
              <p>
                Welcome to the World of Gulabo Sitabo - a quirky slice of life
                movie, where Mirza (Amitabh Bachchan), a landlord of an old
                depleted mansion and Baankey (Ayushmann Khurrana), his tenant
                are like Tom and Jerry - unique and unmatched, friend and foe,
                naughty and smart, little and large!{" "}
              </p>
              <a href="#">Click here to know more</a>
            </div>
          </div>
          <div className="right"></div>
        </section>
        <section className="entertainment">
          <div className="ent-right">
            <h1>Great Entertainment</h1>
            <p>
              With your Prime membership, you have access to exclusive Amazon
              Originals, blockbuster Bollywood movies, regional movies and more.
            </p>
            <a href="#">Get Started</a>
          </div>
        </section>
        <section className="benefits">
          <div className="benefits-left">
            <h1>One membership, many benefits </h1>
            <p>
              Your Prime membership now also includes ad-free music along with
              unlimited free, fast delivery on eligible items, exclusive access
              to deals & more.{" "}
            </p>
            <a href="#">Get started</a>
          </div>
        </section>
        <section className="fire-stick">
          <div className="fire-right">
            <h1>Even better with Fire TV Stick </h1>
            <p>
              The biggest movies and TV shows are always better on a big screen.
              Simply plug in your Amazon Fire TV Stick and stream on any HDTV.
              Press the voice button on the remote and say the name of the title
              you want to watch to find it in seconds.{" "}
            </p>
            <a href="#">Get Started</a>
          </div>
        </section>
        <section className="data-saver">
          <div className="row">
            <div className="col-md-4">
              <img src="watch-anywhere.png" alt="img" />
              <h1>Watch anywhere</h1>
              <p>
                Enjoy from the web or with the Prime Video app on your phone,
                tablet, or select Smart TVs — on up to 3 devices at once.
              </p>
            </div>
            <div className="col-md-4">
              <img src="download-and-go.jpg" alt="img" />
              <h1>Download and go</h1>
              <p>
                Watch offline on the Prime Video app when you download titles to
                your iPhone, iPad, Tablet, or Android device.
              </p>
            </div>
            <div className="col-md-4">
              <img src="data-saver.png" alt="img" />
              <h1>Data Saver</h1>
              <p>
                Control data usage while downloading and watching videos on
                select phones or tablets.
              </p>
            </div>
          </div>
        </section>
        <section className="family">
          <div className="fam-left">
            <h1>Family Friendly</h1>
            <p>
              With easy to use Parental Controls and a dedicated kids page,
              enjoy secure, ad-free kids entertainment. Kids can enjoy popular
              TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem.{" "}
            </p>
            <a href="#">Get Started</a>
          </div>
        </section>
        <section className="footer">
          <div className="items">
            <img src="footer.png" alt="" />
            <ul>
              <li>
                {" "}
                <a href="3">Terms and Privacy Notice</a>{" "}
              </li>
              <li>
                {" "}
                <a href="3">Send us feedback</a>{" "}
              </li>
              <li>
                {" "}
                <a href="3"> Help</a>
              </li>
              <li>
                <p>© 1996-2020, Amazon.com, Inc. or its affiliates</p>
              </li>
            </ul>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default HomeComponent;
