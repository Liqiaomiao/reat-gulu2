let importAll = (requireContent) => {
    return requireContent.keys().forEach(requireContent);
};
try{
    importAll(require.context('../icons/', true, /\.svg$/))

}catch (e) {

}
