import contentful, { type EntryFieldTypes } from "contentful";

type Image = {
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        size: EntryFieldTypes.Number;
        image: {
          width: EntryFieldTypes.Number;
          height: EntryFieldTypes.Number;
        };
      };
      fileName: EntryFieldTypes.Text;
      contentType: EntryFieldTypes.Text;
    };
  };
};

type Author = {
  fields: {
    firstName: EntryFieldTypes.Text;
    lastName: EntryFieldTypes.Text;
    shortBio: EntryFieldTypes.Text;
    photo: Image;
  };
};

export interface BookReview {
  contentTypeId: "bookReview";
  fields: {
    title: EntryFieldTypes.Text;
    body: EntryFieldTypes.RichText;
    slug: EntryFieldTypes.Text;
    author: EntryFieldTypes.Object<Author>;
    publishDate?: EntryFieldTypes.Date;
    bookImage?: EntryFieldTypes.Object<Image>;
  };
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
