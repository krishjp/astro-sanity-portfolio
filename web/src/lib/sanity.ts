// path: web/src/lib/sanity.ts
import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: import.meta.env.PUBLIC_SANITY_DATASET,
    apiVersion: "2025-09-27", // Use current date
    useCdn: false,
});