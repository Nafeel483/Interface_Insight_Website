import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VYNTARIX Solutions",
    short_name: "VYNTARIX",
    description:
      "Professional web and mobile app development services specializing in React, React Native, and UI/UX design.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2C8039",
    icons: [
      {
        src: "/icon?size=192x192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon?size=512x512",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}

