export const isMobile = () => {
    return window.innerWidth <= 599;
};

export const errorParser = (errors) => {
    const unknownError = 'Some error occurred';
    console.error(errors);

    if (Array.isArray(errors) && errors.length) {
        const err = errors[0]?.message ? errors[0].message : unknownError;
        return typeof err === 'string' ? err : unknownError;
    } else if (typeof errors === 'object' && Object.keys(errors)[0] !== undefined) {
        const err = errors[Object.keys(errors)[0]];
        return typeof err === 'string' ? err : unknownError;
    }

    return unknownError;
}