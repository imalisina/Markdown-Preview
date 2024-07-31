import React, { useState, useEffect } from 'react';
import * as marked from 'marked'; // Updated import
import styles from '../styles/Home.module.css';

export default function Home() {
  const [markdown, setMarkdown] = useState(`# Welcome to Markdown Previewer!

## This is a sub-heading

[GitHub](https://github.com/)

Inline \`code\`

\`\`\`
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

- List item 1
- List item 2

> Blockquote

![Image](https://via.assets.so/img.jpg?w=400&h=150)

**Bold text**
`);

  useEffect(() => {
    // Update the preview when the component mounts
    setMarkdown(markdown);
  }, []);

  return (
    <div id="markdown-previewer" className={styles.container}>
      <textarea
        id="editor"
        className={styles.editor}
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div
        id="preview"
        className={styles.preview}
        dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }} // Updated function call
      />
    </div>
  );
}
