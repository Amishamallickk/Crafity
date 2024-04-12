module.exports.validateRequestBody= function (reqBody, requiredKeys) {
    // const requiredKeys = ['category', 'name', 'description', 'image_Url', 'shop', 'price', 'discount_price', 'rating', 'total_sell', 'stock'];
    const missedKeys = [];

    requiredKeys.forEach(key => {
        if (!(key in reqBody)) {
            missedKeys.push(key);
        }
    });

    if (missedKeys.length > 0) {
        const errorMessage = `Missing keys: ${missedKeys.join(', ')}`;
        return { error: errorMessage };
    } else {
        return { success: true };
    }
}

// const validationResult = validateRequestBody(reqBody);
// if (validationResult.error) {
//     console.error(validationResult.error);
// } else {
//     console.log('Request body is valid.');
// }
