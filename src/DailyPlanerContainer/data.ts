export const json = [
  {
    "date": '2024-12-25',
    "name": `Plan ${Math.floor(Math.random() * 100)}`,
    "isChecked": Math.random() < 0.5,
    "tags": [
      { "name": `${Math.floor(Math.random() * 1000)}` },
      { "name": `${Math.floor(Math.random() * 1000)}` },
      { "name": `${Math.floor(Math.random() * 1000)}` }
    ],
    "isDone": Math.random() < 0.2
  },
  {
    "date": '2024-12-24',
    "name": `Plan ${Math.floor(Math.random() * 100)}`,
    "isChecked": Math.random() < 0.5,
    "tags": [
      { "name": `${Math.floor(Math.random() * 100)}` },
      { "name": `${Math.floor(Math.random() * 100)}` }
    ],
    "isDone": Math.random() < 0.2
  },
  {
    "date": '2024-12-25',
    "name": `Plan ${Math.floor(Math.random() * 100)}`,
    "isChecked": Math.random() < 0.5,
    "tags": [
      { "name": `${Math.floor(Math.random() * 100)}` },
      { "name": `${Math.floor(Math.random() * 100)}` }
    ],
    "isDone": Math.random() < 0.2
  }
]
