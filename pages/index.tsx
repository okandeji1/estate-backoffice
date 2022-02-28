/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Card, Carousel, Divider } from "antd";
import MiniHeader from "../components/mini-header.component";
import AppButton from "../components/app-button.component";
import DefaultLayout from "../container/layouts/default.layout";
import styled from "@emotion/styled";

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
        <Card className="flex flex-col justify-between items-center w-full h-full border-none bg-gray-400">
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
        <section>
          <h1>Featured Property</h1>
          <ImgContainerStyled>
            <Carousel autoplay effect="scrollx">
              <ImgStyled
                src="/images/1680.jpg"
                alt="property"
                className="radius-1"
              />
              <ImgStyled
                src="/images/bg.jpg"
                alt="property"
                className="radius-1"
              />
              <ImgStyled
                src="/images/1680.jpg"
                alt="property"
                className="radius-1"
              />
              <ImgStyled
                src="/images/1680.jpg"
                alt="property"
                className="radius-1"
              />
              <ImgStyled
                src="/images/1680.jpg"
                alt="property"
                className="radius-1"
              />
            </Carousel>
          </ImgContainerStyled>/
        </section>
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
  width: 100%;
  max-width: 100%;
  height: auto;
  padding: 2rem;
`;

const CarouselStyled = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  padding: 2rem;
`;

const ImgStyled = styled.img`
  height: 25rem;
  @media only screen and (min-width: 600px) {
    height: 20rem;
    width: 20rem !important;
  }
`;

Home.Layout = DefaultLayout;
export default Home;
