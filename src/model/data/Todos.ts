import { v4 as uuidv4 } from 'uuid'

export const mock_todos =
  [
    {
      id: uuidv4(),
      name: 'Cut Grass',
      date_created: new Date().toLocaleString(),
      type: 'House Chore',
      date_due: null
    },
    {
      id: uuidv4(),
      name: 'Take Trash Out',
      date_created: new Date().toLocaleString(),
      type: 'House Chore',
      date_due: null
    },
    {
      id: uuidv4(),
      name: 'Laundry',
      date_created: new Date().toLocaleString(),
      type: 'House Chore',
      date_due: null
    },
    {
      id: uuidv4(),
      name: 'Wash Dishes',
      date_created: new Date().toLocaleString(),
      type: 'House Chore',
      date_due: null
    },
    {
      id: uuidv4(),
      name: 'Bynum`s Baby Shower',
      date_created: new Date().toLocaleString(),
      type: 'Important Dates',
      date_due: null
    },
    {
      id: uuidv4(),
      name: 'Mattie`s Birthday',
      date_created: new Date().toLocaleString(),
      type: 'Important Dates',
      date_due: null
    },
    {
      id: uuidv4(),
      name: 'UN Day Tea',
      date_created: new Date().toLocaleString(),
      type: 'Important Dates',
      date_due: null
    },
  ]