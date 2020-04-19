import React from 'react'
import { mount } from 'enzyme'
import Root from '../root'
import App from '../App';
import moxios from 'moxios';

beforeEach(() => {
    moxios.install()
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'Data 1' }, { name: 'Data 2' }]
    })
})

afterEach(() => {
    moxios.uninstall()
})

it('can fetch a list of comments from API', (done) => {
    const wrapper = mount(
        <Root>
            <App />
        </Root>
    )
    wrapper.find('.fetch-comment').simulate('click')
    moxios.wait(() => {
        wrapper.update()
        expect(wrapper.find('li').length).toEqual(2)
        done()
        wrapper.unmount()
    })

})  