"use client";

import {
  Button,
  Card,
  CardSection,
  Group,
  Image,
  Text,
  Badge,
} from "@mantine/core";
import { HashIcon } from "lucide-react";
import React from "react";

type Props = {};

const list = [
  {
    title: "Product 1",
    image: "https://via.placeholder.com/150",
    status: "sold",
    Contributors: [
      {
        name: "John Doe - Developer",
        link: "https://www.google.com",
      },
      {
        name: "John Doe - BA + Designer",
        link: "https://www.google.com",
      },
    ],
  },
  {
    title: "Product 1",
    image: "https://via.placeholder.com/150",
    Contributors: [
      {
        name: "John Doe - Developer",
        link: "https://www.google.com",
      },
      {
        name: "John Doe - BA + Designer",
        link: "https://www.google.com",
      },
    ],
  },
  {
    title: "Product 1",
    image: "https://via.placeholder.com/150",
    Contributors: [
      {
        name: "John Doe - Developer",
        link: "https://www.google.com",
      },
      {
        name: "John Doe - BA + Designer",
        link: "https://www.google.com",
      },
    ],
  },
  {
    title: "Product 1",
    image: "https://via.placeholder.com/150",
    Contributors: [
      {
        name: "John Doe - Developer",
        link: "https://www.google.com",
      },
      {
        name: "John Doe - BA + Designer",
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
            <CardSection>
              <Image src={item.image} height="10vw" width="full" />
            </CardSection>
            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={600} fz="lg">
                {item.title}
              </Text>
            </Group>
            {/* BODY */}

            <Group gap={"xs"} mt="xs">
              <Text size="sm" fz="xs">
                Contributors:
              </Text>
            </Group>
            {item.Contributors.map((v) => {
              return (
                <Group gap={"xs"} mt="xs">
                  <Badge
                    leftSection={<HashIcon size={12} />}
                    key={v.name}
                    color="red"
                    className="hover:cursor-pointer text-xs"
                    onClick={() => {
                      window.open(v.link, "_blank");
                    }}
                  >
                    {v.name}
                  </Badge>
                </Group>
              );
            })}

            <Button color='red' fullWidth mt="md" radius="md">
              View demo
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LatestProduct;
