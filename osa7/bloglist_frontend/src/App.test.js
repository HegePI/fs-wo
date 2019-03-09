import React from 'react'
import { render, waitForElement } from 'react-testing-library'
//jest.mock('./services/blogs')
import App from './App'

describe('App', () => {
  it('Renderöi vain kirjautumisnäkymän, kun käyttäjä ei ole kirjautunut sisään', async () => {

    const component = render(<App />)

    component.rerender(<App />)

    console.log('moi')

    await waitForElement(() => component.getByText('kirjaudu'))

    //const login = component.container.querySelectorAll('.login')

    expect(component.container).toHaveTextContent(
      'Käyttäjätunnus'
    )
    expect(component.container).toHaveTextContent(
      'Salasana'
    )
    expect(component.container).toHaveTextContent(
      'kirjaudu'
    )
  })

  it('Renderöi blogit, kun käyttäjä on kirjautunut sisään', async () => {

    const user = {
      username: 'tester',
      token: '1231231214',
      name: 'Teuvo Testaaja'
    }
    localStorage.setItem('blogUser', JSON.stringify(user))

    const component = render(<App />)

    component.rerender(<App />)

    //const blogs = component.container.querySelectorAll('.blogs')

    //expect(blogs.length).toBe(3)

    expect(component.container).toHaveTextContent(
      'Logout'
    )
    expect(component.container).toHaveTextContent(
      'Blogs'
    )
    expect(component.container).toHaveTextContent(
      'new blog'
    )
  })
})