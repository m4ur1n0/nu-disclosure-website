import React, { ReactNode } from 'react'

interface Props {
  className : string;
  title : string;
  children : ReactNode | string;
}

const ParagraphSection = ({className, title, children} : Props) => {
  // Default class names
  const defaultClassName = 'paragraph-section-container';
  const defaultTitleClassName = 'paragraph-title';
  const defaultContentClassName = 'paragraph-content';

  // Merge default classes with user-provided classes
  const mergedClassName = `${defaultClassName} ${className}`;
  const mergedTitleClassName = `${defaultTitleClassName} ${className}-title`;
  const mergedContentClassName = `${defaultContentClassName} ${className}-content`;

  return (
    <div className={mergedClassName}>
      <h1 className={mergedTitleClassName}>{title}</h1>
      <p className={mergedContentClassName}>{children}</p>
    </div>
  )
}

export default ParagraphSection;
