/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useState } from "react";
import { axiosIstance } from "../lib/axios";
import { useQuery } from "@tanstack/react-query";

interface Params {
  amount: number;
  category?: string;
  type?: string;
  difficulty?: string;
}

export const useQuestion = (params: Params) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["answers"],
    queryFn: async () => {
      try {
        const res = await axiosIstance.get("/api.php", {
          params,
        });
        return res.data;
      } catch (err: any) {
        console.log("error");
        throw new Error(err.message);
      }
    },
  });
  return { data, isLoading, isError };
};
