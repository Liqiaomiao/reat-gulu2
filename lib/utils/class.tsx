function scopedClassMaker(prefix:string) {
    return function (...args: any[]) {
        return [...args].filter(Boolean).map((item)=>{
            return `${prefix}-${item}`
        }).join(' ');
    }
}
export {scopedClassMaker}