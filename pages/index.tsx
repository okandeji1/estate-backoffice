/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Card, Carousel, Divider } from "antd";
import MiniHeader from "../components/mini-header.component";
import AppButton from "../components/app-button.component";
import DefaultLayout from "../container/layouts/default.layout";
import styled from "@emotion/styled";
import SliderShow from "../components/slider-show.component";
import SliderCard from "../components/slider-card.component";
import { AgentCountIcon, BuyGuideIcon, SellGuideIcon } from "../public/icons";

const { Meta } = Card;

const Home = () => {
  const Router = useRouter();

  useEffect(() => {
    // HACK: assert the page url is pointing to the correct path
    if (Router.pathname !== "/") {
      Router.replace("/");
    }
  }, []);

  return (
    <>
      <div className="border-none">
        <MiniHeader />
        <Card
          className="flex flex-col justify-between items-center w-full h-full border-none"
          style={{ background: "#e5e7eb" }}>
          <h3 className="flex justify-center items-center w-full text-2xl font-light text-black py-4">
            Ready for change? Let us help you.
          </h3>
          <div className="flex flex-col md:flex-row items-center">
            <CardStyled className="flex flex-col justify-center items-center md:w-96 h-80">
              <div className="min-h-1/4 flex items-center justify-center">
                <img src="/images/buy.png" alt="" />
              </div>
              <div className="flex flex-col pt-4 text-center">
                <h2 className="text-xl font-semibold text-black">Buy</h2>
                <p className="max-w-2xl font-light mb-4 text-base">
                  With thousands of properties for sale on our site, we can help
                  you find your space.
                </p>
                <div className="flex justify-center mb-8">
                  <AppButton>Start your search</AppButton>
                </div>
              </div>
            </CardStyled>
            <CardStyled className="flex flex-col justify-center items-center md:w-96 h-80">
              <div className="min-h-1/4 flex items-center justify-center">
                <img src="/images/rent.png" alt="" />
              </div>
              <div className="flex flex-col pt-4 text-center">
                <h2 className="text-xl font-semibold text-black">Rent</h2>
                <p className="max-w-2xl font-light mb-4 text-base">
                  Find a rental space that you’ll love or advertise your rental
                  property on our site.
                </p>
                <div className="flex justify-center">
                  <div className="flex flex-col md:flex-row mb-8">
                    <AppButton>Find rentals</AppButton>
                    <AppButton>List rentals</AppButton>
                  </div>
                </div>
              </div>
            </CardStyled>
            <CardStyled className="flex flex-col justify-center items-center md:w-96 h-80">
              <div className="min-h-1/4 flex items-center justify-center">
                <img src="/images/sell.png" alt="" />
              </div>
              <div className="flex flex-col pt-4 text-center">
                <h2 className="text-xl font-semibold text-black">Sell</h2>
                <p className="max-w-2xl font-light mb-4 text-base">
                  Advertise with us and have your property seen by millions of
                  people.
                </p>
                <div className="flex justify-center mb-8">
                  <AppButton>Sell your property</AppButton>
                </div>
              </div>
            </CardStyled>
          </div>
        </Card>
        <section className="flex flex-col justify-center items-center bg-white">
          <h1 className="text-2xl font-extrabold text-black">
            Featured Property
          </h1>
          <ImgContainerStyled>
            {/* <Carousel autoplay effect="scrollx"> */}
            <div className="img-card">
              <ImgStyled
                src="/images/bg.jpg"
                alt="property"
                className="radius-1"
              />
              <div className="text-center pt-1">
                <h5>Property Advice</h5>
                <p>All your property related advice.</p>
              </div>
            </div>
            <div className="img-card">
              <ImgStyled
                src="/images/1680.jpg"
                alt="property"
                className="radius-1"
              />
              <div className="text-center pt-1">
                <h5>Neighbourhoods</h5>
                <p>Get to know SA&apos;s best neighbourhoods.</p>
              </div>
            </div>
            <div className="img-card">
              <ImgStyled
                src="/images/bg.jpg"
                alt="property"
                className="radius-1"
              />
              <div className="text-center pt-1">
                <h5>Bond calculator</h5>
                <p>Calculate your monthly repayment easily.</p>
              </div>
            </div>
            {/* </Carousel> */}
          </ImgContainerStyled>
          <ImgContainerStyled>
            {/* <Carousel autoplay effect="scrollx"> */}
            <div className="img-card">
              <ImgStyled
                src="/images/1680.jpg"
                alt="property"
                className="radius-1"
              />
              <div className="text-center pt-1">
                <h5>Property Advice</h5>
                <p>All your property related advice.</p>
              </div>
            </div>
            <div className="img-card">
              <ImgStyled
                src="/images/bg.jpg"
                alt="property"
                className="radius-1"
              />
              <div className="text-center pt-1">
                <h5>Neighbourhoods</h5>
                <p>Get to know SA&apos;s best neighbourhoods.</p>
              </div>
            </div>
            <div className="img-card">
              <ImgStyled
                src="/images/1680.jpg"
                alt="property"
                className="radius-1"
              />
              <div className="text-center pt-1">
                <h5>Bond calculator</h5>
                <p>Calculate your monthly repayment easily.</p>
              </div>
            </div>
            {/* </Carousel> */}
          </ImgContainerStyled>
        </section>
        <GuideSectionStyled>
          <div>
            <h3>No more guessing</h3>
            <p>
              Whether you&apos;re buying, selling, renting or investing, find
              useful information in our step by step guides.
            </p>
          </div>
          <SliderShow>
            <SliderCard
              borderColor="#41098B"
              textColor="#FE8B00"
              icon={<img src="/images/buy-guide.png" alt="property" />}
              value="Buying"
            />

            <SliderCard
              borderColor="#41098B"
              textColor="#FE8B00"
              icon={<img src="/images/rent-guide.png" alt="property" />}
              value="Renting"
            />
            <SliderCard
              borderColor="#41098B"
              textColor="#FE8B00"
              icon={<img src="/images/sell-guide.png" alt="property" />}
              value="Selling"
            />
          </SliderShow>
        </GuideSectionStyled>
      </div>
    </>
  );
};

const CardStyled = styled(Card)`
  height: 25rem;
  width: 100%;
  /* border-style: none; */
`;

const ImgContainerStyled = styled.div`
  max-width: 64rem;
  height: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .img-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 14.5em;
    margin: auto 1em 0.75em 1em;
    justify-content: flex-start;
    width: 93.33333333%;
    max-width: 22em;
  }

  h5 {
    font-size: 1rem;
    font-weight: 600;
    display: block;
    color: black;
  }

  p {
    color: black;
    font-size: 0.75rem;
    font-weight: 300;
    margin: 1px 0 26px;
    line-height: 1.5;
  }
  @media only screen and (min-width: 600px) {
    flex-direction: row;

    h5,
    p {
      text-align: left;
    }

    .img-card {
      align-items: flex-start;
      width: 30%;
    }
  }
`;

const ImgStyled = styled.img`
  height: 15rem;
  margin-bottom: 1rem;
  @media only screen and (min-width: 600px) {
    height: 15rem;
    width: 20rem !important;
  }
`;

const GuideSectionStyled = styled.section`
  display: flex;
  flex-direction: column;

  div {
    max-width: 100vw;
    text-align: left;
    padding: 0 17px;
    width: 500px;
    margin: auto;
  }

  h3 {
    font-size: 1.3758rem;
    font-weight: 600;
    color: #000;
    text-align: center;
    margin: 0 auto 25px;
    max-width: 75%;
  }
`;

Home.Layout = DefaultLayout;
export default Home;
