import client from "@/sanity-client";

export async function getProfiles() {
    const query = `*[_type == "profile"]{
        "id": name,
        name,
        biography,
        "homepageUrl": home_page_photo.asset -> url,
        "aboutBiography": about_biography,
        "aboutpageUrl": about_page_photo.asset -> url,
    }`;
    const profiles = await client.fetch(query);
    return profiles;
}