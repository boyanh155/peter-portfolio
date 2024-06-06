import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type Props = {};

const list = [
  {
    title: "Product 1",
    image: "https://via.placeholder.com/150",
    Contributors: [
      {
        name: "John Doe",
        link: "https://www.google.com",
      },
      {
        name: "Jane Doe",
        link: "https://www.google.com",
      },
    ],
  },
  {
    title: "Product 1",
    image: "https://via.placeholder.com/150",
    Contributors: [
      {
        name: "John Doe",
        link: "https://www.google.com",
      },
      {
        name: "Jane Doe",
        link: "https://www.google.com",
      },
    ],
  },
  {
    title: "Product 1",
    image: "https://via.placeholder.com/150",
    Contributors: [
      {
        name: "John Doe",
        link: "https://www.google.com",
      },
      {
        name: "Jane Doe",
        link: "https://www.google.com",
      },
    ],
  },
  {
    title: "Product 1",
    image: "https://via.placeholder.com/150",
    Contributors: [
      {
        name: "John Doe",
        link: "https://www.google.com",
      },
      {
        name: "Jane Doe",
        link: "https://www.google.com",
      },
    ],
  },
];

const LatestProduct = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 px-4 max-w-[var(--layout-max-width)] mt-2 mx-auto">
      <h4 className="text-[24px] font-medium  text-primary">Latest products</h4>
      {/*  */}
      <div className="  grid-rows-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  overflow-hidden">
        {list.map((item) => (
          <Card key={item.title} className="snap-center">
            <CardHeader>
              <CardTitle>Latest products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col">
                <img src={item.image} alt={item.title} />
                <h5>{item.title}</h5>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LatestProduct;
