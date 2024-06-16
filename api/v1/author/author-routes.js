const authorController = require("./author-controller");
const authorSchema = require("./author-schema");

const plugin = {
  name: "author-v1-route",
  version: "1.0.0",
  register: (server) => {
    server.route([
      {
        method: "GET",
        path: "/v1/authors",
        options: {
          tags: ["api"],
          description: "List of all authors",
          handler: authorController.getAuthors,
          validate: authorSchema.getAuthors,
        },
      },
      {
        method: "GET",
        path: "/v1/authors/{id}",
        options: {
          tags: ["api"],
          description: "Get the details of a specific author",
          handler: authorController.findById,
          validate: authorSchema.getById,
        },
      },
      {
        method: "POST",
        path: "/v1/authors",
        options: {
          tags: ["api"],
          description: "Create a new author",
          handler: authorController.create,
          validate: authorSchema.createAuthor,
        },
      },
      {
        method: "DELETE",
        path: "/v1/authors/{id}",
        options: {
          tags: ["api"],
          description: "Remove an author",
          handler: authorController.deleteById,
          validate: authorSchema.deleteById,
        },
      },
    ]);
  },
};

module.exports = plugin;
