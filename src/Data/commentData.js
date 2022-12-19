export let comments = [
  {
    id: 1,
    comment: "This is parent comment 1",
    author: 1,
    replies: [
      {
        id: 2,
        comment: "This is child comment 1.1",
        author: 2,
        replies: []
      },
      {
        id: 3,
        comment: "This is child comment 1.2",
        author: 1,
        replies: [
          {
            id: 4,
            comment: "This is subChild comment 1.2.1",
            author: 2,
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: 5,
    comment: "test",
    author: 1,
    replies: []
  }
];
