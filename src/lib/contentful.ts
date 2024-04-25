import contentful, { type EntryFieldTypes } from "contentful";

type Author = {
  contentTypeId: "author";
  fields: {
    firstName: EntryFieldTypes.Text;
    lastName: EntryFieldTypes.Text;
    shortBio: EntryFieldTypes.Text;
    photo: EntryFieldTypes.AssetLink;
  };
};

export interface BookReview {
  contentTypeId: "bookReview";
  fields: {
    title: EntryFieldTypes.Text;
    body: EntryFieldTypes.RichText;
    publishDate: EntryFieldTypes.Date;
    bookImage: EntryFieldTypes.AssetLink;
    slug: EntryFieldTypes.Text;
    author: EntryFieldTypes.EntryLink<Author>;
  };
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
