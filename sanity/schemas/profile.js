import { defineField, defineType } from "sanity";

export default defineType({
    name: 'profile',
    title: 'Profile',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'biography',
            title: 'Home Page Biography',
            type: 'text',
        },
        {
            name: 'home_page_photo',
            title: 'Home Page Photo',
            type: 'image',
        },
        {
            name: 'about_biography',
            title: 'About Page Biography',
            type: 'text',
        },
        {
            name: 'about_page_photo',
            title: 'About Page Photo',
            type: 'image',
        }
    ],
});