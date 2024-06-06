"use client";
import { useRouter } from "@/navigation";
import React from "react";

type Props = {};

const LocalePage = (props: Props) => {
  const router = useRouter();
  return router.push("/home");
};

export default LocalePage;
