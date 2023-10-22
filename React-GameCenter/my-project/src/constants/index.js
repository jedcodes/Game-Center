import { favorite, home, tv, menu, profile } from "../assets/icons";

const navLinks = [
  { herf: "/", label: "Dashboard", icons: home },
  { herf: "/discover", label: "Discover", icons: menu },
  { herf: "/stream", label: "Stream", icons: tv },
  { herf: "/favorite", label: "Favorite", icons: favorite },
  { herf: "/profile", label: "Profile", icons: profile },
];

export { navLinks };
