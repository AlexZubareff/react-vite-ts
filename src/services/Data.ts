export interface ITask {
  id: number;
  title: string;
  completed: string;
}

export interface ICards {
  userId: number;
  tasks: ITask[];
}

export const Cards: ICards[] = [
  {
    userId: 1,
    tasks: [
      {
        id: 1,
        title: "delectus aut autem",
        completed: "Yes",
      },
      {
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: "No",
      },
      {
        id: 3,
        title: "fugiat veniam minus",
        completed: "No",
      },
      {
        id: 4,
        title: "et porro tempora",
        completed: "Yes",
      },
      {
        id: 5,
        title:
          "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: "No",
      },
      {
        id: 6,
        title: "qui ullam ratione quibusdam voluptatem quia omnis",
        completed: "Yes",
      },
      {
        id: 7,
        title: "illo expedita consequatur quia in",
        completed: "No",
      },
      {
        id: 8,
        title: "quo adipisci enim quam ut ab",
        completed: "Yes",
      },
      {
        id: 9,
        title: "molestiae perspiciatis ipsa",
        completed: "No",
      },
      {
        id: 10,
        title: "illo est ratione doloremque quia maiores aut",
        completed: "Yes",
      },
    ],
  },
  {
    userId: 2,
    tasks: [
      {
        id: 12,
        title: "ipsa repellendus fugit nisi",
        completed: "Yes",
      },
      {
        id: 13,
        title: "et doloremque nulla",
        completed: "No",
      },
      {
        id: 14,
        title: "repellendus sunt dolores architecto voluptatum",
        completed: "Yes",
      },
      {
        id: 16,
        title: "accusamus eos facilis sint et aut voluptatem",
        completed: "No",
      },
      {
        id: 15,
        title: "ab voluptatum amet voluptas",
        completed: "Yes",
      },
      {
        id: 17,
        title: "quo laboriosam deleniti aut qui",
        completed: "No",
      },
      {
        id: 18,
        title: "dolorum est consequatur ea mollitia in culpa",
        completed: "No",
      },
      {
        id: 19,
        title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
        completed: "Yes",
      },
      {
        id: 20,
        title: "ullam nobis libero sapiente ad optio sint",
        completed: "No",
      }
    ],
  },
];



