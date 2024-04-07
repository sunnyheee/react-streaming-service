import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchPopulerMovies = () => {
  return api.get("/movie/popular");
};

export const usePopulerMoviceQuery = () => {
  return useQuery({
    queryKey: ["movie-populer"],
    queryFn: fetchPopulerMovies,
    select: (result) => result.data,
  });
};
