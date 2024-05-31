import Head from 'next/head';
import Link from "next/link";
import appData from "@data/app.json";

const PageBanner = ({ pageTitle, pageDesc }) => {
  const styles = {
    "parallax": {
      "backgroundImage": "url(/images/pattren-3.png)"
    }
  }
  const headTitle = `${appData.settings.siteName} - ${pageTitle}`;

  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
      <section className="banner-style-one">
        <div className="parallax" style={styles.parallax}> 
        <video autoPlay muted loop id="myVideo">
  <source src="https://video.wixstatic.com/video/11062b_d578b9d4ffba48c68d086ec29fe9e6f0/720p/mp4/file.mp4" type="video/mp4"/>
</video></div>

        <div className="container">
          <div className="row">
            <div className="banner-details">
              <h2>{pageTitle}</h2>
              <p>{pageDesc}</p>
            </div>
          </div>
        </div>
        <div className="breadcrums">
          <div className="container">
            <div className="row">
              <ul>
                <li>
                  <Link href="/">
                    <i className="fa-solid fa-house"></i>
                    <p>Home</p>
                  </Link>
                </li>
                <li className="current">
                  <p>{pageTitle}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PageBanner;
