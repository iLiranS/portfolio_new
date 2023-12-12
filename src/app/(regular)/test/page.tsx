import { allPreCodeToHighlighted } from '@/components/Editor/Renderer/rendererFunctions'
import React from 'react'

const page = () => {
const previewContent="<h1>My Editor</h1>\n<p>To view this page as a render view, visit <a title=https://lirans-draft-editor.vercel.app/render href=\"https://lirans-draft-editor.vercel.app/render\" target=\"_blank\" rel=\"noopener noreferrer\">here</a></p>\n<h3>Features:<div class='w-full h-[0.1rem] bg-foreground/10'></div></h3>\n<ul>\n<li dir = \"auto\">Headings 1-6</li>\n<li dir = \"auto\">Quote</li>\n<li dir = \"auto\">Dot list</li>\n<li dir = \"auto\">Num list</li>\n<li dir = \"auto\">Code blocks</li>\n<li dir = \"auto\">Inline styling : <strong>Bold</strong>, <em>Italic</em>, Underline, <code>Monospace</code></li>\n<li dir = \"auto\">Image &amp; link inserting (url only) into text.</li>\n<li dir = \"auto\">seperator line</li>\n</ul>\n<h3>Examples :<div class='w-full h-[0.1rem] bg-foreground/10'></div></h3>\n<h5>Quote</h5>\n<blockquote>This is a quote</blockquote>\n<h5>Lists</h5>\n<ul>\n<li dir = \"auto\">Dot list</li>\n<ul>\n<li dir = \"auto\">Dot list 2</li>\n<ul>\n<li dir = \"auto\">Dot list 3 (max)</li>\n</ul>\n</ul>\n</ul>\n<p>there is also num list</p>\n<ol>\n<li dir = \"auto\">num list</li>\n<ol>\n<li dir = \"auto\">num list 2</li>\n<ol>\n<li dir = \"auto\">num list 3</li>\n</ol>\n</ol>\n</ol>\n<h5>Code block<div class='w-full h-[0.1rem] bg-foreground/10'></div></h5>\n<p>the code block is not highlighted in the editor, but can be highlighted when you render it (explanation below).</p>\n<pre>//this is a code block</pre>\n<pre>console.log(\"hello world\");</pre>\n<p>for inline code, <code>use monospace</code></p>\n<h5>Images &amp; links<div class='w-full h-[0.1rem] bg-foreground/10'></div></h5>\n<p>To add an image, select text to be an alt and click on the image button.</p>\n<p><div className='relative w-full aspect-video RTEImageContainer grid place-items-center bg-red-200'>\n        <img className='w-auto max-w-full' loading='lazy' src=https://i.ibb.co/WBHKj5X/best-text-editors-1024x512.webp alt=example/>\n    </div></p>\n<p>to insert link, simply paste it, or select a text and click on the link icon, <a title=https://github.com/iLiranS href=\"https://github.com/iLiranS\" target=\"_blank\" rel=\"noopener noreferrer\">my github</a></p>\n<p>there are also undo and redo buttons, alongside some keyboard shortcuts.</p>\n<h3>Tech stack :<div class='w-full h-[0.1rem] bg-foreground/10'></div></h3>\n<ul>\n<li dir = \"auto\">Next.js</li>\n<li dir = \"auto\">Draft.js + Draftjs-to-html</li>\n<li dir = \"auto\">cheerio</li>\n<li dir = \"auto\">highlight.js</li>\n<li dir = \"auto\">Shadcn + next themes</li>\n<li dir = \"auto\">Tailwind</li>\n<li dir = \"auto\">Typescript</li>\n<li dir = \"auto\">React icons</li>\n</ul>\n<h3>How to use the editor:<div class='w-full h-[0.1rem] bg-foreground/10'></div></h3>\n<ol>\n<li dir = \"auto\">make sure to copy the editor file, the editor styles, Shadcn, and initialize theme and css variables. (If you don't want to use shadcn or css variables, you can customize it with some work).</li>\n<li dir = \"auto\">Create a component of which you will render the Editor inside and give it basic styles as width and height.</li>\n<li dir = \"auto\">Create a react ref to forward to the editor and content state to store the content. (optionally) : give the editor initial content in a form of <code>RawDraftContentState</code>, useful for editing existing forms.</li>\n<li dir = \"auto\">When you are done with editing the form, use the <code>getContent</code> function to convert it to html string and save it how you want to.</li>\n<li dir = \"auto\">when you want to <strong>render </strong>the html string, use the <code>allPreCodeToHighlighted</code> function on the string, then you can render it as <code>dangerouslySetInnerHTML</code>.</li>\n</ol>\n<h3>Notes<div class='w-full h-[0.1rem] bg-foreground/10'></div></h3>\n<ul>\n<li><strong>Unfortunately</strong>, this editor will not work well in mobile, because Draft.js mobile pairing is bad (selection problems).</li>\n<li>To use the seperator line, simply write <code>\"-\"</code> three times.</li>\n<li>Using num list or dot list one after another without anything in between will cause weird behavior in rendering them, so simply seperate them using text or empty row in between.</li>\n<li><strong>I recommend</strong> saving a JSON and an HTML versions of the editor if you need to edit it in the future, because as mentioned, you can give initial draft to the editor and it requires the JSON format. you can instead, switch to working with JSON only and convert it to html when rendering the page, but it will be more server heavy.</li>\n</ul>\n"
    const transformedHTML = allPreCodeToHighlighted(previewContent);
    return (
    <div className='data' dangerouslySetInnerHTML={{__html:transformedHTML}}/>
  )
}

export default page