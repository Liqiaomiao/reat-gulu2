import renderer from 'react-test-renderer';
import React from 'react'
import Button from '../button'
describe('button',()=>{
    it('是个div ', function () {
        const json = renderer.create(<Button/>).toJSON();
        console.log(json);
        expect(json).toMatchSnapshot()
    });
});