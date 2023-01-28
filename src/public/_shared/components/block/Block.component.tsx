import React from 'react';

interface BlockProps {
  children: React.ReactChild;
};

export const Block: React.FC<BlockProps> = (
  props: BlockProps,
) => {
  const { children } = props;

  return (
    <div className="p-5">
      {children}
    </div>
  )
}