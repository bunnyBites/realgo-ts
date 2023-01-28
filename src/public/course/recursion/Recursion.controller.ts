export class RecursionController {
    public static prepareOutValue = (inputValue: number): number => {
        if (inputValue > Number('19')) return Number('0');

        if (!inputValue || inputValue === Number('1')) return Number('1');

        // 5 -> 5 * 4 * 3 * 2 * 1 (when input value  = 5)
        return inputValue * RecursionController.prepareOutValue(inputValue - Number('1'));
    }

    public static prepareOutValueDesc = (inputValue: number): string => {
        if (inputValue > Number('19')) return String('0');

        if (!inputValue || inputValue === Number('1')) return String('1');

        return `${inputValue} * ${RecursionController.prepareOutValueDesc(inputValue - 1)}`;
    }
}