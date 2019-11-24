interface Props {
    extra: string | undefined
}
function scopedClassMaker(prefix:string) {
    return function x(name?:string,options?:Props) {
        let classResult = [prefix,name].filter(Boolean).join('-')
        if(options && options.extra){
            return [classResult,options.extra].filter(Boolean).join(' ');
        }else{
            return classResult;
        }

    }
}
export {scopedClassMaker}