import { Block } from "src/public/_shared/components/block/Block.component";

type RecursionViewPropType = {
    onChangeInput: (newInput: string) => void;
    inputValue: number;
    outputValue: number;
    outputValueDesc: string;
}

export const RecursionView: React.FC<RecursionViewPropType> = (
    props: RecursionViewPropType,
) => {
    const {
        inputValue,
        onChangeInput,
        outputValue,
        outputValueDesc
    } = props;

    const renderInputField = () => (
        <div>
            <label htmlFor="recursionInputField" className="form-label">Input:</label>
            <input
                value={inputValue}
                id="recursionInputField"
                type="text"
                onChange={(e) => onChangeInput(e.target.value)}
                className="form-control w-25"
            />
            {inputValue > Number('19') && <p className="text-danger">Please provide input less than 20</p>}
        </div>
    );

    const renderOutputIllustrationView = () => (
        <div className="my-3">
            <label htmlFor="outputValueIllustration" className="form-label">Illustration:</label>
            <textarea readOnly className="form-control w-50" id="outputValueIllustration" value={outputValueDesc} />
        </div>
    )

    const renderOutputView = () => (
        <>
            <div className="pb-2">Output: </div>
            <div className="d-inline-flex p-3 rounded bg-success text-white">
                {outputValue}
            </div>
        </>
    )

    return (
        <Block>
            <div className="container">
                {renderInputField()}
                {renderOutputIllustrationView()}
                {renderOutputView()}
            </div>
        </Block>
    )
};
