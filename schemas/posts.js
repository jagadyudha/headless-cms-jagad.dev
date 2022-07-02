export default {
  name: "posts",
  type: "document",
  title: "posts",
  fields: [
    {
      name: "slug",
      type: "string",
      title: "slug",
    },
    {
      name: "markdown",
      type: "markdown",
      title: "markdown",
    },
  ],
};
