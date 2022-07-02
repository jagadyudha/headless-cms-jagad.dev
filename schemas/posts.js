export default {
  name: "posts",
  type: "document",
  title: "posts",
  fields: [
    {
      name: "title",
      type: "string",
      title: "title",
    },
    {
      title: "slug",
      name: "slug",
      type: "slug",
      options: {
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "markdown",
      type: "markdown",
      title: "markdown",
    },
  ],
};
