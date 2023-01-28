import { useCallback, useState } from "react";
import { RecursionView } from "./Recursion.component.view";
import { RecursionController } from './Recursion.controller';

export const Recursion: React.FC = () => {
    const [input, setInput] = useState<number>(Number('0'));

    // useCallback is used as arrow function can be re-rendered again and again.
    // To know more about useCallback, check -> https://reactjs.org/docs/hooks-reference.html#usecallback
    const onChangeInput = useCallback((newInput: string) => {
        if (Number(newInput)) { setInput(Number(newInput)); return; };

        setInput(Number('0'));
    }, [])

    const getOutValue = useCallback(() => RecursionController.prepareOutValue(input), [input]);
    const getOutValueDesc = useCallback(() => RecursionController.prepareOutValueDesc(input), [input]);

    return (
        <RecursionView
          inputValue={input}
          onChangeInput={onChangeInput}
          outputValue={getOutValue()}
          outputValueDesc={getOutValueDesc()}
        />
    )
}
