import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import { mount } from 'enzyme'
describe('icon', () => {
    it('xxx',() => {
        const json = renderer.create(<Icon name={'wechat'}/>).toJSON();
        expect(json).toMatchSnapshot()
    })
    it('onclick fn被调用',()=>{
        const fn = jest.fn();
        const component = mount(<Icon name={'alipay'} onClick={fn}/>);
        console.log(component.find('svg'));
        component.find('svg').simulate('click');
        expect(fn).toBeCalled()
    })
});