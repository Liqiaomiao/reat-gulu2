function classes(...names:(string|undefined)[]) {
    return names.filter(Boolean).join(' ')
}
export default classes

interface Props {
    extra: string | undefined
}
interface ClassToggles {
    [K:string]:boolean
}
function scopedClassMaker(prefix:string) {
    return function (name:string| ClassToggles ,options?:Props) {

        let name2
        if (typeof name === 'string' || name === undefined) {
            name2 =  [prefix,name].filter(Boolean).join('-')
        }else{
            // {active:true,current:true,hello:false}
            name2 = Object.entries(name) // [[active,true],[current,true],[hello,false]]
                .filter(kv=>kv[1]  === true) // [[active,true],[current,true]]
                .map(kv=>kv[0]) // [active,current]
                .map(name=>[prefix,name].filter(Boolean).join('-')) // [gulu-layout-active,gulu-layout-curren
                .join(' ')
        }


        if(options && options.extra){
            return [name2,options && options.extra].filter(Boolean).join(' ');
        }else{
            return name2;
        }

    }
}
export {scopedClassMaker}