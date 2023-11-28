import { followers } from "../data/followers";

const latestData = followers.find((entry) => entry.year === 2023);

export const accounts = [
  {
    id: 1,
    userName: "@johnsmith",
    followers: latestData.FB,
    todayFollowers: 123,
    icon: "images/facebook.png",
    name: "facebook",
  },
  {
    id: 2,
    userName: "@johnsmith",
    followers: latestData.IG,
    todayFollowers: 123,
    icon: "images/instagram.png",
    name: "instagram",
  },
  {
    id: 3,
    userName: "@johnsmith",
    followers: latestData.X,
    todayFollowers: 123,
    icon: "images/x.png",
    name: "twitter",
  },
  {
    id: 4,
    userName: "@johnsmith",
    followers: latestData.YT,
    todayFollowers: 123,
    icon: "images/youtube.png",
    name: "youtube",
  },
];
