import {useEffect, useState} from "react";
import { Button } from "antd";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  setShowAuthenticateUser,
} from "../../../store/slices/app-settings.slice";

const AuthenticateUser = dynamic(
  () => import("../../../components/authenticate-user")
);
const Header = () => {
  const dispatch = useDispatch();
  const [action, setAction] = useState<any>();
  const showAuth = (action: any) => {
    setAction(action);
    dispatch(setShowAuthenticateUser({action: action, visible: true}))
  }

  const getUsers = () => {}

  return (
    <>
      <AuthenticateUser action={action} />

    <header className=" mainHeader mortar-wrapper" id="mainHeader">
        <nav className="mainHeaderNavigation" id="mainHeaderNavigation">
          <div className="menuSection">
            <button
              id="headerMenuLink"
              type="button"
              className="dropdownToggle primary homeBtn">
              <i id="headerMeunIcon" className="storyicon hamburgerStoryIcon" />
              <span id="headerMenuLabel">Menu</span>
            </button>
            <div id="menuNavWrapper" className="menuNavWrapper">
              <div id="menuNavContainer">
                <div className="menuOpenWrapper">
                  <span id="menuHeader" className="menuHeader">
                    <i className="hamburgerBittenIcon" />
                    <span className="menuText" />
                  </span>
                  <ul id="menuNavigation" className="menuNavigation">
                    <li>
                      <a
                        href="#"
                        className="expandable"
                        data-requirelogin="false">
                        Renter Tools
                        <i className="storyicon right2StoryIcon" />
                      </a>
                      <ul className="submenu tools">
                        <li>
                          <a href="https://www.apartments.com/my-account/#FavoriteListings">
                            Favorites
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/my-account/#SavedSearches">
                            Saved Searches
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li id="menuNavLnkUserNotificationSettings">
                      <a
                        href="https://www.apartments.com/customers/"
                        rel="nofollow">
                        Rental Manager Tools
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.apartments.com/"
                        className="expandable"
                        data-requirelogin="false">
                        Apartments For Rent
                        <i className="storyicon right2StoryIcon" />
                        <i className="storyicon addStoryIcon expand-icon" />
                        <i className="storyicon minusStoryIcon expand-icon" />
                      </a>
                      <ul className="submenu properties">
                        <li>
                          <a href="https://www.apartments.com/quincy-ma/">
                            Quincy Apartments For Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/san-diego-ca/">
                            San Diego Apartments For Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/seattle-wa/">
                            Seattle Apartments For Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/austin-tx/">
                            Austin Apartments For Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/tampa-fl/">
                            Tampa Apartments For Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/hoboken-nj/">
                            Hoboken Apartments For Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/arlington-va/">
                            Arlington Apartments For Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/charleston-sc/">
                            Charleston Apartments For Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/santa-fe-nm/">
                            Santa Fe Apartments For Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/burbank-ca/">
                            Burbank Apartments For Rent
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href="https://www.apartments.com/houses/"
                        className="expandable"
                        data-requirelogin="false">
                        Homes For Rent
                        <i className="storyicon right2StoryIcon" />
                        <i className="storyicon addStoryIcon expand-icon" />
                        <i className="storyicon minusStoryIcon expand-icon" />
                      </a>
                      <ul className="submenu properties">
                        <li>
                          <a href="https://www.apartments.com/houses/milwaukee-wi/">
                            Milwaukee Homes For Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/houses/baltimore-md/">
                            Baltimore Homes For Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/houses/las-vegas-nv/">
                            Las Vegas Homes For Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/houses/minneapolis-mn/">
                            Minneapolis Homes For Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/houses/orlando-fl/">
                            Orlando Homes For Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/houses/indianapolis-in/">
                            Indianapolis Homes For Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/houses/houston-tx/">
                            Houston Homes For Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/houses/phoenix-az/">
                            Phoenix Homes For Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/houses/san-antonio-tx/">
                            San Antonio Homes For Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/houses/jacksonville-fl/">
                            Jacksonville Homes For Rent
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href="https://www.apartments.com/condos/"
                        className="expandable"
                        data-requirelogin="false">
                        Condos For Rent
                        <i className="storyicon right2StoryIcon" />
                        <i className="storyicon addStoryIcon expand-icon" />
                        <i className="storyicon minusStoryIcon expand-icon" />
                      </a>
                      <ul className="submenu properties">
                        <li>
                          <a href="https://www.apartments.com/condos/chicago-il/">
                            Chicago Condos for Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/condos/fresno-ca/">
                            Fresno Condos for Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/condos/virginia-beach-va/">
                            Virginia Beach Condos for Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/condos/dallas-tx/">
                            Dallas Condos for Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/condos/pasadena-ca/">
                            Pasadena Condos for Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/condos/ann-arbor-mi/">
                            Ann Arbor Condos for Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/condos/scottsdale-az/">
                            Scottsdale Condos for Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/condos/irvine-ca/">
                            Irvine Condos for Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/condos/jersey-city-nj/">
                            Jersey City Condos for Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/condos/new-orleans-la/">
                            New Orleans Condos for Rent
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href="https://www.apartments.com/townhomes/"
                        className="expandable"
                        data-requirelogin="false">
                        Townhomes For Rent
                        <i className="storyicon right2StoryIcon" />
                        <i className="storyicon addStoryIcon expand-icon" />
                        <i className="storyicon minusStoryIcon expand-icon" />
                      </a>
                      <ul className="submenu properties">
                        <li>
                          <a href="https://www.apartments.com/townhomes/kansas-city-mo/">
                            Kansas City Townhomes for Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/townhomes/madison-wi/">
                            Madison Townhomes for Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/townhomes/philadelphia-pa/">
                            Philadelphia Townhomes
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/townhomes/cleveland-oh/">
                            Cleveland Townhomes for Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/townhomes/tucson-az/">
                            Tucson Townhomes for Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/townhomes/tallahassee-fl/">
                            Tallahassee Townhomes for Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/townhomes/oklahoma-city-ok/">
                            Oklahoma City Townhomes for Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/townhomes/sacramento-ca/">
                            Sacramento Townhomes for Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/townhomes/lexington-ky/">
                            Lexington Townhomes for Rent
                          </a>
                        </li>
                        <li>
                          <a href="https://www.apartments.com/townhomes/baltimore-md/">
                            Baltimore Townhomes for Rent
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        id="menuNavHelpCenter"
                        
                        href="https://www.apartments.com/about/help"
                        data-requirelogin="false">
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a
                        id="menuNavLnkMobileApps"
                        
                        href="https://www.apartments.com/mobile/"
                        data-requirelogin="false">
                        Mobile Apps
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="headerSwitchLanguageWrapper mortar-wrapper">
            
          </div>
          <div className="logoSpacer" />
          <div className="logo">
            <Link href="/">
              Septem Connect
            </Link>
          </div>
          <div className="loginPrevNextWrapper">
            <div id="headerLoginSection" className="loginSection">
              <button
                className="js-headerSignUp headerSignUp"
                onClick={() => showAuth('REGISTER')}>
                Sign Up
              </button>
              <span>/</span>
              <button
                className="js-headerSignin headerSignIn"
                onClick={() => showAuth('LOGIN')}
                >
                Sign In
              </button>
            </div>
            <a
              id="headerAddProperty"
              href="javascript:void(0);"
              title="Add a Property">
              <span>Add a Property</span>
            </a>
          </div>
        </nav>
      </header>
      </>
  )
}

export default Header;