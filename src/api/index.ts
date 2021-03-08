
export default async (lang) => {
    const { algorithms } = require(`@constants/lang/${lang}.tsx`);
    return algorithms;
}
