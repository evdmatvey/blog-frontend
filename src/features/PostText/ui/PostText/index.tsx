import React, { FC, useEffect } from 'react';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, ghcolors } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import styles from './PostText.module.scss';

interface PostTextProps {
  text: string;
}

const PostText: FC<PostTextProps> = ({ text }) => {
  return (
    <div className={styles.root}>
      <Markdown
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <SyntaxHighlighter
                PreTag="div"
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                style={oneDark}
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}>
        {text}
      </Markdown>
    </div>
  );
};

export default PostText;
