import { communities } from "./../public/data/communities";
export const useCommunities = () => {
  return useState("communities", () => communities);
};
