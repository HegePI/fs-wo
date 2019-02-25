import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Simpleblog from './SimpleBlog'

const simple = {
  title: 'React testausta',
  author: 'Hegelator',
  likes: 10000
}
const mockHandler = jest.fn()

describe('Simple blog', () => {
  test('renderöi nimikkeen', () => {

    const blog = render(
      <Simpleblog blog={simple} onClick={mockHandler} />
    )
    expect(blog.container).toHaveTextContent(
      'React testausta'
    )
  })

  test('Renderöi kirjoittajan', () => {

    const blog = render(
      <Simpleblog blog={simple} onClick={mockHandler} />
    )
    expect(blog.container).toHaveTextContent(
      'Hegelator'
    )
  })

  test('Renderöi tykkäykset', () => {

    const blog = render(
      <Simpleblog blog={simple} onClick={mockHandler} />
    )
    expect(blog.container).toHaveTextContent(
      10000
    )
  })

  it('Kun tykätään kaksi kertaa, painetaan like -nappia kahdesti', async () => {

    const blog = render(
      <Simpleblog blog={simple} onClick={mockHandler} />
    )
    const nappi = blog.getByText('like')
    fireEvent.click(nappi)
    fireEvent.click(nappi)

    expect(mockHandler.mock.calls.length).toBe(2)

  })
})