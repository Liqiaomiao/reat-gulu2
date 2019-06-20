import classes from '../classes'
describe('classes',()=>{
   it('接受1个class',()=>{
       const result = classes('a');
       expect(result).toEqual('a')
   })
});