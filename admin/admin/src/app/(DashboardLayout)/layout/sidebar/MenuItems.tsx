import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Home",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    navlabel: true,
    subheader: "Tools",
  },
  {
    id: uniqueId(),
    title: "Add phrases",
    icon: IconTypography,
    href: "/utilities/phrases",
  },
  {
    id: uniqueId(),
    title: "Add themes",
    icon: IconCopy,
    href: "/utilities/themes",
  },
  {
    navlabel: true,
    subheader: "Data",
  },
  {
    id: uniqueId(),
    title: "phrases",
    icon: IconMoodHappy,
    href: "/phrases",
  },
  {
    id: uniqueId(),
    title: "themes",
    icon: IconAperture,
    href: "/themes",
  },

  {
    navlabel: true,
    subheader: "Auth",
  },
  {
    id: uniqueId(),
    title: "Login",
    icon: IconLogin,
    href: "/authentication/login",
  },
];

export default Menuitems;
