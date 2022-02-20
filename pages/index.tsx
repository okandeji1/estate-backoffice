/* eslint-disable @next/next/no-img-element */
import { Card, Carousel } from 'antd';
import SiteLayout from '../container/layouts/site.layout';

const { Meta } = Card;

const Home = () => {

  return (     
    <> 
      <div id="homepageContentWrapper" className="contentWrapper">
        <section
          className="homepageHero"
          title="Apartments for rent at Apartments.com">
          <div className="mainSearchWrap" id="mainSearchWrap">
            <h1 className="mainTitle" id="quickSearchMainTitle">
              Discover Your New Home
            </h1>
            <p id="quickSearchSubTitle">
              Helping 100 million renters find their perfect fit.
            </p>
            <section id="quickSearch" className="quickSearch">
              <div className="quickSearchWrapper">
                <div className="inputWrapper">
                  <input
                    data-propertystyle
                    type="text"
                    id="quickSearchLookup"
                    className="quickSearchLookup"
                    autoCorrect="false"
                    autoComplete="off"
                    placeholder="Search by Location or Point of Interest"
                    aria-label="Search by Location or Point of Interest"
                  />
                  <a
                    href="https://www.apartments.com/search/"
                    className="go"
                    title="Search apartments for rent">
                    <span>Search</span>
                  </a>
                </div>
                <p className="errorMessage">
                  You must choose a place to search
                </p>
              </div>
            </section>
          </div>
          <div
            className="geoHomepageHeroImage"
            style={{ backgroundImage: "url(/images/1680.jpg)" }}
          />
          <div className="homepage-hero-overlay" />
        </section>
        <section className="homepage-featured">
          <div className="homepage-featured-container">
            <h2>
              Explore Rentals in<span> Chicago, IL</span>
            </h2>
              {/* <Carousel style={{width: "1rem"}}>
                <Card
                className="homepage-listing js-viewAnalyticsSection"
                hoverable
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
              </Carousel> */}
            <div className="homepage-featured-list">
              <a
                className="homepage-listing js-viewAnalyticsSection"
                data-analytics-name="placard"
                title="The Residences at NewCity, 1457 N Halsted St Chicago, IL 60642"
                href="https://www.apartments.com/the-residences-at-newcity-chicago-il/wg6wcxl/">
                <div className="homepage-listing-background" />
                <div className="homepage-listing-border" />
                <div className="homepage-listing-image-container">
                  <div className="homepage-listing-image-inner">
                    <div
                      className="homepage-listing-image"
                      data-image="./the-residences-at-newcity-chicago-il-building-photo.jpg"
                      title="Building Photo - The Residences at NewCity"
                    />
                  </div>
                </div>
                {/*[if IE]>
    <div class="homepage-listing-body minheight">
    <![endif]*/}
                {/*[if !IE]>*/}
                <div className="homepage-listing-body">
                  {/*<![endif]*/}
                  <h3>The Residences at NewCity</h3>
                  <p>
                    1457 N Halsted St,
                    <br />
                    Chicago, IL 60642
                  </p>
                  <p>Studio - 2 Beds | $2,126 - $5,055</p>
                </div>
              </a>
              <a
                className="homepage-listing js-viewAnalyticsSection"
                data-analytics-name="placard"
                title="Elevate, 930 W Altgeld St Chicago, IL 60614"
                href="https://www.apartments.com/elevate-chicago-il/nzfe70p/">
                <div className="homepage-listing-background" />
                <div className="homepage-listing-border" />
                <div className="homepage-listing-image-container">
                  <div className="homepage-listing-image-inner">
                    <div
                      className="homepage-listing-image"
                      data-image="https://images1.apartments.com/i2/Mel4Hm5GU_A13jVZId0JNpI5il1Qshvtiie1_5bXZhY/117/elevate-chicago-il-building-photo.jpg"
                      title="Building Photo - Elevate"
                    />
                  </div>
                </div>
                {/*[if IE]>
    <div class="homepage-listing-body minheight">
    <![endif]*/}
                {/*[if !IE]>*/}
                <div className="homepage-listing-body">
                  {/*<![endif]*/}
                  <h3>Elevate</h3>
                  <p>
                    930 W Altgeld St,
                    <br />
                    Chicago, IL 60614
                  </p>
                  <p>Studio - 3 Beds | $1,820 - $14,435</p>
                </div>
              </a>
              <a
                className="homepage-listing js-viewAnalyticsSection"
                data-analytics-name="placard"
                title="1407 On Michigan, 1407 S Michigan Ave Chicago, IL 60605"
                href="https://www.apartments.com/1407-on-michigan-chicago-il/rq0jfy2/">
                <div className="homepage-listing-background" />
                <div className="homepage-listing-border" />
                <div className="homepage-listing-image-container">
                  <div className="homepage-listing-image-inner">
                    <div
                      className="homepage-listing-image"
                      data-image="https://images1.apartments.com/i2/wKJDfHWqbduv3ix7AVCoz_cE5RcYP6HURtWYCkhJvak/117/1407-on-michigan-chicago-il-1407-s-michigan.jpg"
                      title="1407 S. Michigan - 1407 On Michigan"
                    />
                  </div>
                </div>
                {/*[if IE]>
    <div class="homepage-listing-body minheight">
    <![endif]*/}
                {/*[if !IE]>*/}
                <div className="homepage-listing-body">
                  {/*<![endif]*/}
                  <h3>1407 On Michigan</h3>
                  <p>
                    1407 S Michigan Ave,
                    <br />
                    Chicago, IL 60605
                  </p>
                  <p>Studio - 3 Beds | $1,750 - $5,650</p>
                </div>
              </a>
              <a
                className="homepage-listing js-viewAnalyticsSection"
                data-analytics-name="placard"
                title="The Pavilion, 5441 NE NEast River Rd Chicago, IL 60656"
                href="https://www.apartments.com/the-pavilion-chicago-il/405n4nh/">
                <div className="homepage-listing-background" />
                <div className="homepage-listing-border" />
                <div className="homepage-listing-image-container">
                  <div className="homepage-listing-image-inner">
                    <div
                      className="homepage-listing-image"
                      data-image="https://images1.apartments.com/i2/-A2JjzImZo9JspuJLIixmN2prVDIDT9WigEMkYdHlwQ/117/the-pavilion-chicago-il-building-photo.jpg"
                      title="Building Photo - The Pavilion"
                    />
                  </div>
                </div>
                {/*[if IE]>
    <div class="homepage-listing-body minheight">
    <![endif]*/}
                {/*[if !IE]>*/}
                <div className="homepage-listing-body">
                  {/*<![endif]*/}
                  <h3>The Pavilion</h3>
                  <p>
                    5441 NE NEast River Rd,
                    <br />
                    Chicago, IL 60656
                  </p>
                  <p>Studio - 4 Beds | $1,090 - $2,545</p>
                </div>
              </a>
            </div>
            
            <div className="homepage-featured-actions">
              {/* TODO: color fill */}
              <button
                className="view-more-button bg-secondary">
                View More
              </button>
            </div>
          </div>
        </section>
        <section className="homepage-widget-container mortar-wrapper">
          <div className="homepage-widget-tagline">
            <h2>The #1 Site for Renters</h2>
            <p>
              Choose from over 1 million apartments, houses, condos, and
              townhomes for rent.
            </p>
          </div>
          <div className="homepage-widget clearfix">
            <div
              className="homepage-widget-image renting-simple"
              data-image="/a/d21d97/modules/homepagev2/content/images/widgets/widget_1_938.jpg"
            />
            <div className="homepage-widget-body">
              <div
                className="homepage-widget-content js-viewAnalyticsSection"
                data-analytics-name="renting_made_simple">
                <h3>Renting Made Simple</h3>
                <p>
                  Browse the highest quality listings, apply online, sign your
                  lease, and even pay your rent from any device.
                </p>
                <div className="actions">
                  <a
                    href="https://www.apartments.com/training/renters/"
                    
                    title="New! Apply, sign, and pay rent, all in one place. Find Out How."
                    className="widget-link"
                    data-ga-label="renting_made_simple">
                    <button className="btn btn-md btn-text">
                      Find Out More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="homepage-widget clearfix">
            <div
              className="homepage-widget-image list-property"
              data-image="/a/2f7b4e/modules/homepagev2/content/images/widgets/widget_list_938.jpg"
            />
            <div className="homepage-widget-body">
              <div
                className="homepage-widget-content js-viewAnalyticsSection"
                data-analytics-name="add_listing">
                <h3>Find Your Next Renter</h3>
                <p>
                  Connect with millions of renters and lease your property 100%
                  online
                </p>
                <div className="actions">
                  <a
                    href="https://www.apartments.com/advertise/industry/"
                    
                    title="List your apartment, condo, house, or townhouse on Apartments.com"
                    className="widget-link"
                    data-ga-label="add_listing">
                    <button className="btn btn-md btn-text">Get Started</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="homepage-widget clearfix">
            <div
              className="homepage-widget-image renter-tips"
              data-image="/a/fd4e2f/modules/homepagev2/content/images/widgets/widget_2_938.jpg"
            />
            <div className="homepage-widget-body">
              <div
                className="homepage-widget-content js-viewAnalyticsSection"
                data-analytics-name="tips">
                <h3>Tips for Renters</h3>
                <p>
                  Find answers to all of your renting questions with the best
                  renter’s guide in the galaxy.
                </p>
                <div className="actions">
                  <a
                    href="https://www.apartments.com/blog"
                    
                    title="Renter's Resources"
                    className="widget-link"
                    data-ga-label="tips">
                    <button className="btn btn-md btn-text">
                      Browse Articles
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="homepage-widget clearfix">
            <div
              className="homepage-widget-image mobile-apps"
              data-image="/a/01314d/modules/homepagev2/content/images/widgets/widget_3_938.jpg"
            />
            <div className="homepage-widget-body">
              <div
                className="homepage-widget-content js-viewAnalyticsSection"
                data-analytics-name="mobile_apps">
                <h3>Take Us With You</h3>
                <p>
                  <span>Keep</span>
                  <a href="https://www.apartments.com/">Apartments.com</a>
                  <span>
                    in the palm of your hand throughout your rental journey.
                  </span>
                </p>
                <div className="app-actions">
                  <a
                    href="https://itunes.apple.com/app/id319836632"
                    title="Get the Apartments.com app for iOS"
                    
                    id="appStoreAction"
                    className="appStore widget-link"
                    rel="nofollow"
                    data-ga-label="mobile_apps_iOS"
                    data-image="/a/4ce8ed/content/images/apple-badge.svg"
                  />
                  <a
                    href="https://play.google.com/store/apps/details?id=com.apartments.mobile.android"
                    
                    id="googlePlayAction"
                    title="Get the Apartments.com app for Android"
                    className="googlePlay widget-link"
                    rel="nofollow"
                    data-ga-label="mobile_apps_Android"
                    data-image="/a/fc6b2b/content/images/play.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="homepage-links mortar-wrapper">
          <div className="homepage-links-container">
            <p>
              Search over 1.1 million listings including
              <a
                href="https://www.apartments.com/"
                title="Discover your new apartment">
                apartments
              </a>
              ,
              <a
                href="https://www.apartments.com/houses/"
                title="Discover your new house">
                houses
              </a>
              ,
              <a
                href="https://www.apartments.com/condos/"
                title="Discover your new condo">
                condos
              </a>
              , and
              <a
                href="https://www.apartments.com/townhomes/"
                title="Discover your new townhome">
                townhomes
              </a>
              available for rent. You’ll find your next home, in any style you
              prefer.
            </p>
          </div>
        </section>
        <section>
          <section id="linksSection" className="linksSection mortar-wrapper">
            <div className="clearfix">
              <div className="linksColumn">
                <h3>Top Markets</h3>
                <ul>
                  <li>
                    <a
                      href="/atlanta-ga/"
                      title="Atlanta, GA Apartments for Rent">
                      Atlanta Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/austin-tx/"
                      title="Austin, TX Apartments for Rent">
                      Austin Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/baltimore-md/"
                      title="Baltimore, MD Apartments for Rent">
                      Baltimore Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/boston-ma/"
                      title="Boston, MA Apartments for Rent">
                      Boston Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/chicago-il/"
                      title="Chicago, IL Apartments for Rent">
                      Chicago Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/cincinnati-oh/"
                      title="Cincinnati, OH Apartments for Rent">
                      Cincinnati Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/dallas-tx/"
                      title="Dallas, TX Apartments for Rent">
                      Dallas Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/denver-co/"
                      title="Denver, CO Apartments for Rent">
                      Denver Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/detroit-mi/"
                      title="Detroit, MI Apartments for Rent">
                      Detroit Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/near-me/apartments-for-rent/"
                      title="Nearby Apartments for Rent">
                      Apartments Near Me
                    </a>
                  </li>
                </ul>
              </div>
              <div className="linksColumn">
                <h3>&nbsp;</h3>
                <ul>
                  <li>
                    <a
                      href="/houston-tx/"
                      title="Houston, TX Apartments for Rent">
                      Houston Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/irvine-ca/"
                      title="Apartments for Rent in Irvine CA">
                      Irvine Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/los-angeles-ca/"
                      title="Los Angeles (LA), CA Apartments for Rent">
                      Los Angeles Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a href="/miami-fl/" title="Miami, FL Apartments for Rent">
                      Miami Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/nashville-tn/"
                      title="Nashville, TN Apartments for Rent">
                      Nashville Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a href="/nj/" title="Apartments for Rent in NJ">
                      New Jersey Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a href="/new-york-ny/" title="Apartments for Rent in NYC">
                      New York City Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/orlando-fl/"
                      title="Orlando, FL Apartments for Rent">
                      Orlando Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/philadelphia-pa/"
                      title="Philadelphia, PA Apartments for Rent">
                      Philadelphia Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/near-me/cheap-apartments-for-rent/"
                      title="Nearby Cheap Apartments for Rent">
                      Cheap Apartments Near Me
                    </a>
                  </li>
                </ul>
              </div>
              <div className="linksColumn linksBorderColumn">
                <h3>&nbsp;</h3>
                <ul>
                  <li>
                    <a
                      href="/phoenix-az/"
                      title="Phoenix, AZ Apartments for Rent">
                      Phoenix Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/portland-or/"
                      title="Portland, OR Apartments for Rent">
                      Portland Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/queens-ny/"
                      title="Queens, NY Apartments for Rent">
                      Queens Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/san-antonio-tx/"
                      title="San Antonio, TX Apartments for Rent">
                      San Antonio Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/san-diego-ca/"
                      title="San Diego, CA Apartments for Rent">
                      San Diego Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/san-francisco-ca/"
                      title="San Francisco (SF), CA Apartments for Rent">
                      San Francisco Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/seattle-wa/"
                      title="Seattle, WA Apartments for Rent">
                      Seattle Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a href="/tampa-fl/" title="Tampa, FL Apartments for Rent">
                      Tampa Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/washington-dc/"
                      title="Washington DC Apartments for Rent">
                      Washington DC Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/near-me/one-bedroom-apartments/"
                      title="Nearby One Bedroom Apartments for Rent">
                      One Bedroom Apartments Near Me
                    </a>
                  </li>
                </ul>
              </div>
              <div className="linksColumn">
                <h3>Popular Searches</h3>
                <ul>
                  <li>
                    <a
                      href="/pet-friendly-apartments/"
                      title="Pet Friendly Apartments for Rent">
                      Pet Friendly Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a href="/malls/" title="Apartments Near Shopping Malls">
                      Apartments Near Malls
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/staten-island-ny/"
                      title="Apartments for Rent in Staten Island NY">
                      Staten Island Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/bronx-ny/"
                      title="Apartments for Rent in The Bronx NY">
                      Apartments in The Bronx
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/brooklyn-ny/"
                      title="Apartments for Rent in Brooklyn NY">
                      Brooklyn Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/jersey-city-nj/"
                      title="Apartments for Rent in Jersey City NJ">
                      Jersey City Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/long-island-city-ny/"
                      title="Apartments for Rent in Long Island City NY">
                      Long Island City Apartments
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/near-me/utilities-included-apartments/"
                      title="Nearby Utilities Included Apartments for Rent">
                      Utilities-Included Apartments Near Me
                    </a>
                  </li>
                </ul>
              </div>
              <div className="linksColumn linksBorderColumn">
                <h3>&nbsp;</h3>
                <ul>
                  <li>
                    <a
                      href="/houses/charlotte-nc/"
                      title="Houses for Rent in Charlotte, NC">
                      Charlotte Houses for Rent
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/houses/houston-tx/"
                      title="Houses for Rent in Houston, TX">
                      Houston Houses for Rent
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/houses/indianapolis-in/"
                      title="Houses for Rent in Indianapolis, IN">
                      Indianapolis Houses for Rent
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/houses/las-vegas-nv/"
                      title="Houses for Rent in Las Vegas, NV">
                      Las Vegas Houses for Rent
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/houses/orlando-fl/"
                      title="Houses for Rent in Orlando, FL">
                      Orlando Houses for Rent
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/houses/phoenix-az/"
                      title="Houses for Rent in Phoenix, AZ">
                      Phoenix Houses for Rent
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/houses/sacramento-ca/"
                      title="Houses for Rent in Sacramento, CA">
                      Sacramento Houses for Rent
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/houses/san-antonio-tx/"
                      title="Houses for Rent in San Antonio, TX">
                      San Antonio Houses for Rent
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/houses/san-diego-ca/"
                      title="Houses for Rent in San Diego, CA">
                      San Diego Houses for Rent
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/near-me/houses-for-rent/"
                      title="Nearby House Rentals">
                      Houses for Rent Near Me
                    </a>
                  </li>
                </ul>
              </div>
              <div className="linksColumn linksLastColumn">
                <h3>Rental-Manager Services</h3>
                <ul>
                  <li>
                    <a href="/rental-manager" title="Rental Manager Overview">
                      Rental Manager
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/rental-manager/features/list-property-for-rent"
                      title="List Your Property">
                      List Your Property For Rent
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/rental-manager/features/online-rental-applications"
                      title="Online Rental Applications">
                      Online Rental Applications
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/rental-manager/features/online-tenant-screening"
                      title="Screen Applicants">
                      Screen Applicants
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/rental-manager/features/online-leases"
                      title="Create an Online Rental Lease">
                      Create Rental Leases
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/rental-manager/features/online-rent-collection"
                      title="Automatic Rent Collection">
                      Automatic Rent Collection
                    </a>
                  </li>{" "}
                  <li>
                    <a
                      href="/rental-manager/resources"
                      title="Rental Manager Resources">
                      Rental Manager Resources
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </section>
      </div>
      </>
  );
};

Home.Layout = SiteLayout;
export default Home;
