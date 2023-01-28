import React from 'react';
import { ImgProvider } from '../../core/provider/Image.provider';
import { Block } from '../_shared/components/block/Block.component';

export const BigO: React.FC = () => {

    const renderHighlightedO = () => (
        <span className="text-info">O</span>
    )
    const renderBigOIntroSection = () => (
        <div className="d-flex align-items-center flex-column">
            <div className="h3 card-title">What is Big
              {" "}
              {renderHighlightedO()}
              ?
            </div>
            <p className="lead">
                Big {renderHighlightedO()} notation is a tool which helps us to analyse the cost of the code.
                The defination for this notation can get very complecated,
                but for now let just say it is the ratio of the total number of operations for a given input.
                You can check how many single operations are performed in a single function or a block for
                which you want to check the Big {renderHighlightedO()}.
            </p>
            <img src={ImgProvider.bigOChart} alt="big-o-img" className="img-fluid" />
        </div>
    );

    return (
        <Block>
            <div className="card">
                <div className="card-body">
                    {renderBigOIntroSection()}
                </div>
                <div className="card-footer">
                    As you can see from the graph, with the increase in the elements the operation increases
                    high above. Such cases are the examples for worst code performance.
                </div>
            </div>
        </Block>
    )
}