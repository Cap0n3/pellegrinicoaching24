import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.pellegrinicoaching.ch/fr",
            lastModified: new Date(),
            priority: 1.0,
        },
        {
            url: "https://www.pellegrinicoaching.ch/en",
            lastModified: new Date(),
            priority: 1.0,
        },
        {
            url: "https://www.pellegrinicoaching.ch/fr/contact",
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: "https://www.pellegrinicoaching.ch/en/contact",
            lastModified: new Date(),
            priority: 0.8,
        },
    ]
}