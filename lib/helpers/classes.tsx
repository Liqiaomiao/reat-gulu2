function classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ')
}

export default classes

interface Props {
    extra: string | undefined
}

interface ClassToggles {
    [K: string]: boolean
}

function scopedClassMaker(prefix: string) {
    return function (name: string | ClassToggles, options?: Props) {

        let namesObject = (typeof name === 'string') ?
            {[name]: true} :
            name

        let scoped = Object.entries(namesObject) // [[active,true],[current,true],[hello,false]]
            .filter(kv => kv[1] === true) // [[active,true],[current,true]]
            .map(kv => kv[0])
            .map(name => [prefix, name].filter(Boolean).join('-'))// [gulu-layout-active,gulu-layout-curren
            .join(' ')
        return (options && options.extra) ?
            [scoped, options && options.extra].filter(Boolean).join(' '):
            scoped
    }
}

export {scopedClassMaker}