module.exports = [
  {
    "table": "users",
    "model": "User",
    "columns": [
      {
        "name": "name",
        "type": "STRING",
        "allowNull": false,
      },
      {
        "name": "email",
        "type": "STRING",
      },
      {
        "name": "email",
        "password": "STRING",
      },
    ],
    "relations": [
      { "type": "1:n", "model": "Post" }
    ]
  },
  {
    "table": "posts",
    "model": "Post",
    "columns": [
      {
        "name": "title",
        "type": "STRING",
      },
    ],
    "relations": [
      { "type": "n:n", "model": "Tag" }
    ]
  },
  {
    "table": "tags",
    "model": "Tag",
    "columns": [
      {
        "name": "name",
        "type": "STRING",
      },
    ],
    "relations": [
      { "type": "n:n", "model": "Post" }
    ]
  }
]
