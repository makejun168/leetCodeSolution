let maxIndex = [7, 5, 3, 2].reduce((accumulator, currentValue, currentIndex) => {
    // console.log('a',accumulator);
    // console.log(currentValue);
    console.log('index ', currentIndex);
    if (currentIndex === 1) {
        return accumulator > currentValue ? {
            value: accumulator,
            index: 0
        } : {
                value: currentValue,
                index: currentIndex
            }
    }
    return accumulator.value > currentValue ? accumulator : {
        value: currentValue,
        index: currentIndex
    };
})