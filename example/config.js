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
        "name": "password",
        "type": "STRING",
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
      {
        "name": "published",
        "type": "BOOLEAN",
        "defaultValue": true,
        "allowNull": false,
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
      {
        "name": "order",
        "type": "INTEGER",
        "defaultValue": 1,
        "allowNull": false,
      },
    ],
    "relations": [
      { "type": "n:n", "model": "Post" }
    ]
  }
]
