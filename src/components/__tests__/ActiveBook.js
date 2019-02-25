import React from 'react';
import { shallow, mount } from 'enzyme';
import { ActiveBook } from '../ActiveBook';
import { addComment, addNoteToBook } from '../../actions';

describe('<ActiveBook />', () => {
    it('Renders without crashing', () =>{
        const bookData ={
            title: "Harry Potter",
            author: "J.K Rowling",
            bookCover: "image",
            notes: []
        }
        const match = {
            params: {
                id: 8716
            }
        };
        const dispatch = jest.fn();
        mount( <ActiveBook book={bookData} match={match} dispatch={dispatch}/>)
    });
    it("Renders the title", () => {
        const dispatch = jest.fn();
        const bookData ={
            title: "Harry Potter",
            author: "J.K Rowling",
            bookCover: "image",
            notes: []
        }
        const match = {
            params: {
                id: 8716
            }
        };
        const wrapper = mount( <ActiveBook book={bookData} match={match} dispatch={dispatch}/>)
        expect(wrapper.contains(<h1>{bookData.title}</h1>)).toEqual(true);
    });
    it("Count 3 Dispatches after Submit event", () => {
        const dispatch = jest.fn();
        const bookData ={
            bookId: 1,
            title: "Harry Potter",
            author: "J.K Rowling",
            bookCover: "image",
            notes: []
        }
        const match = {
            params: {
                id: 8716
            }
        };
        const comment = {
            currentPage: 12,
            body: "Best part of series",
            date: "12 Jul 18"
        };
        const mockEvent = {
            preventDefault: jest.fn(),
            target: {
                notes: comment.body,
                bookmarkPage: comment.currentPage
            }
        };
        const wrapper = mount( <ActiveBook book={bookData} match={match} dispatch={dispatch}/>);
        wrapper.find('form').simulate('submit', mockEvent);
        expect(dispatch.mock.calls.length).toBe(3);

    })
});