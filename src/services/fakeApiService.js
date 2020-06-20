export default class FakeApiService {
  data = [
    {
      id: 1,
      imgUrl: 'https://i2.wp.com/www.programmer-books.com/wp-content/uploads/2020/01/27558d5aafaf008.jpg?resize=200%2C262&ssl=1',
      title: 'Web Development with Node and Express',
      author: 'Ethan Brown',
      price: 34
    },
    {
      id: 2,
      imgUrl: 'https://i2.wp.com/www.programmer-books.com/wp-content/uploads/2020/01/27558d5ab52bdb7.jpg?resize=200%2C246&ssl=1',
      title: 'Web Development with Node and Express',
      author: 'Ethan Brown',
      price: 43
    }
  ]

  getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data)
      }, 500)
    })
  }
}