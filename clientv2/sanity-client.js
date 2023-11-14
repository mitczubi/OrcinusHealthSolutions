import { createClient } from "@sanity/client";

export default createClient({
    projectId: "gg7ipo1e",
    dataset: "production",
    apiVersion: "2023-05-03",
    useCdn: true
})