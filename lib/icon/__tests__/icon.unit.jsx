import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import { mount } from 'enzyme'
describe('icon', () => {
    it('xxx',() => {
        const json = renderer.create(<Icon name={'wechat'}/>).toJSON();
        expect(json).toMatchSnapshot()
    })
    it('onclick',()=>{
        let n = 1;
        const fn = ()=> {
            n =2
        }
        const component = mount(<Icon name={'alipay'} onClick={fn}/>);
        console.log(component.find('svg'));
        component.find('svg').simulate('click');
        expect(n).toEqual(2)
    })
});