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

const scopedClassMaker = (prefix: string) =>
    (name: string | ClassToggles, options?: Props) =>
        Object.entries(name instanceof Object ? name : {[name]: true}) // [[active,true],[current,true],[hello,false]]
            .filter(kv => kv[1] === true) // [[active,true],[current,true]]
            .map(kv => kv[0])
            .map(name => [prefix, name].filter(Boolean).join('-'))// [gulu-layout-active,gulu-layout-curren
            .concat(options && options.extra || [])
            .join(' ')

export {scopedClassMaker}