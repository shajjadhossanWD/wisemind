import dayjs from "dayjs";
import { MetadataRoute } from "next";
import { site } from "../../site";

const staticPaths = ["/", "/about", "/service", "/portfolio", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => ({
      url: site.url + path,
      lastModified: dayjs(new Date()).format("YYYY-MM-DD"),
      changeFrequency: "weekly" as const,
    })),
  ];
}
