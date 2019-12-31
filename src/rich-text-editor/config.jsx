export const RichTextEditorSampleOrder = [
    { 'path': 'rich-text-editor/tools', 'component': 'Overview', 'type': 'update', 'name': 'Overview', 'description': 'This demo describes basic and advanced features of the react rich text editor control (WYSIWYG HTML Editor) with all its tools and functionalities.', 'order': '01', 'category': 'Rich Text Editor', 'api': '{"RichTextEditorComponent":["Inject","toolbarSettings","showCharCount","actionBegin","actionComplete","maxLength","appendTo"] }' },
    { 'path': 'rich-text-editor/rich-text-editor', 'component': 'Default', 'name': 'Default Functionalities', 'description': 'This demo shows how to render react rich text editor (WYSIWYG HTML editor) control with a minimum configuration setting.', 'order': '01', 'category': 'Rich Text Editor', 'api': '{"RichTextEditorComponent":["Inject","appendTo"] }' },
    { 'path': 'rich-text-editor/image', 'component': 'ImageSample', 'name': 'Image', 'description': 'This demo explains how to insert images with a blob or base64 format, link to the images, image upload, rotate left/right, and more in react WYSIWYG HTML Editor', 'order': '01', 'category': 'Rich Text Editor', 'api': '{"RichTextEditorComponent":["Inject","quickToolbarSettings","toolbarClick","appendTo","getRange"] }' },
    { 'path': 'rich-text-editor/inline', 'component': 'Inline', 'name': 'Inline', 'description': 'This demo shows inline WYSIWYG HTML editor that is displayed when selecting the content or simply focusing on the content inside the react Rich Text Editor.', 'order': '01', 'category': 'Rich Text Editor', 'api': '{"RichTextEditorComponent":["Inject","inlineMode","toolbarSettings","format","fontFamily","appendTo","dataBind"] }' },
    { 'path': 'rich-text-editor/paste-cleanup', 'component': 'PasteCleanupRTE', 'name': 'Paste from MS Word', 'order': '01', 'description': 'This demo explains how to clean up HTML when pasting a content from Microsoft Word, Visual Studio Code, Visual Studio, or a web page in react Editor.', 'category': 'Rich Text Editor', 'api': '{"RichTextEditorComponent":["Inject","value","appendTo","pasteCleanupSettings"] }' },
    { 'path': 'rich-text-editor/iframe', 'component': 'IFrame', 'name': 'IFrame', 'description': 'This demo shows how to render a classic react rich text editor (iframe editor) that was designed by using the iframe element covering all tool functionalities.', 'order': '01', 'category': 'Rich Text Editor', 'api': '{"RichTextEditorComponent":["Inject","height","iframeSettings","toolbarSettings","actionBegin","actionComplete","appendTo"] }' },
    { 'path': 'rich-text-editor/print', 'component': 'Print', 'name': 'Print', 'description': 'This demo sample shows how to print the content of the react rich text editor (HTML editor) with styles and formatting using the print module.', 'order': '01', 'category': 'Rich Text Editor', 'api': '{"RichTextEditorComponent":["Inject","toolbarSettings","print","appendTo"] }' },
    { 'path': 'rich-text-editor/ajax-load', 'component': 'AjaxContent', 'name': 'Ajax Content', 'description': 'This demo shows how to load the content to the editor from external sources like external pages andfiles using the AJAX library in react Editor.', 'order': '01', 'category': 'Rich Text Editor', 'api': '{"RichTextEditorComponent":["Inject","value","appendTo"] }' },
    { 'path': 'rich-text-editor/resize-editor', 'component': 'ResizableEditor', 'name': 'Resizable Editor', 'order': '01', 'description': 'This demo explains how to render a resizable react Editor that allows resizing an editor and viewing its content with an enlarging or shrunk scale.', 'category': 'Rich Text Editor', 'api': '{"RichTextEditorComponent":["Inject","appendTo","enableResize"] }' },
    { 'path': 'rich-text-editor/api', 'component': 'RTEApi', 'name': 'API', 'order': '01', 'description': 'This demo covers important APIs of the react rich text editor such as content length, HTML encoding, read-only, retrieve the selected content, and more.', 'category': 'Rich Text Editor', 'api': '{"RichTextEditorComponent":["Inject","showCharCount","maxLength","appendTo","readonly","enabled","enableHtmlEncode","value","getSelection","selectAll"] }' },
    { 'path': 'rich-text-editor/client-side-events', 'component': 'RTEEvents', 'name': 'Events', 'description': 'This demo explains client-side events of react Text Editor that is triggered on editing and formatting operations with an event tracer.', 'order': '01', 'category': 'Rich Text Editor', 'api': '{"RichTextEditorComponent":["Inject","toolbarSettings","created","actionBegin","actionComplete","focus","blur","change","toolbarClick","appendTo"] }' },
    { 'path': 'rich-text-editor/blog-posting', 'component': 'Forums', 'name': 'Use Case', 'description': 'The Rich Text Editor is used in most real-time applications. The react rich text editor example shows how to design a forum application in react application.', 'order': '01', 'category': 'Rich Text Editor', 'api': '{"RichTextEditorComponent":["Inject","placeholder","value","dataBind","refresh","appendTo"] }' },
    { 'path': 'rich-text-editor/auto-save', 'component': 'AutoSave', 'name': 'Auto Save', 'description': 'This demo shows how to autosave the content of the editor with customized time intervals and retrieve the saved content in react Rich Text Editor.', 'order': '01', 'category': 'Rich Text Editor', 'api': '{"RichTextEditorComponent":["Inject","placeholder","saveInterval","enablePersistance","toolbarSettings","appendTo"] }' },
    { 'path': 'rich-text-editor/types', 'component': 'Type', 'name': 'Type', 'description': 'This demo demonstrates different types and behaviors of a toolbar used in the react Editor such as expand/collapse, multirow, and floating.', 'order': '02', 'category': 'Toolbar', 'api': '{"RichTextEditorComponent":["Inject","floatingToolbarOffset","toolbarSettings","actionBegin","actionComplete","dataBind","appendTo"] }' },
    { 'path': 'rich-text-editor/insert-emoticons', 'component': 'InsertEmoticons', 'name': 'Insert Emoticons', 'description': 'This demo demonstrates how to insert emoticons into the rich content in react Rich Text Editor using a custom tool in the editor toolbar.', 'order': '03', 'category': 'Custom Tool', 'api': '{"RichTextEditorComponent":["Inject","toolbarSettings","value","created","appendTo"] }' },
    { 'path': 'rich-text-editor/insert-special-characters', 'component': 'InsertSpecialCharacters', 'name': 'Insert Special Characters', 'description': 'The demo demonstrates how to add special characters or symbols into the rich content in react Rich Text Editor using a custom toolbar command.', 'order': '03', 'category': 'Custom Tool', 'api': '{"RichTextEditorComponent":["Inject","toolbarSettings","value","created","appendTo"] }' },
    { 'path': 'rich-text-editor/markdown-editor', 'component': 'MarkDown', 'name': 'Overview', 'description': 'This demo covers all supported features and functionalities of the react Markdown editor, which  is another mode of the react Rich Text Editor.', 'order': '04', 'category': 'Markdown Editor', 'api': '{"RichTextEditorComponent":["Inject","toolbarSettings","height","created","disableToolbarItem","enableToolbarItem","editorMode","appendTo"] }' },
    { 'path': 'rich-text-editor/markdown-editor-preview', 'component': 'Preview', 'name': 'Preview', 'description': 'This demo shows how to render a react Markdown editor with LIVE preview for markdown content editing using a third-party library, "marked js".', 'order': '04', 'category': 'Markdown Editor', 'api': '{"RichTextEditorComponent":["Inject","toolbarSettings","height","created","disableToolbarItem","enableToolbarItem","editorMode","actionBegin","appendTo"] }' },
    { 'path': 'rich-text-editor/markdown-editor-custom-format', 'component': 'CustomFormat', 'name': 'Custom Format', 'description': 'This demo explains how to convert markdown content (with the custom format) to valid HTML markup using Markdown-to-HTML of the markdown parser in react.', 'order': '04', 'category': 'Markdown Editor', 'api': '{"RichTextEditorComponent":["Inject","toolbarSettings","height","created","disableToolbarItem","enableToolbarItem","editorMode","formatter","appendTo"] }' },
    { 'path': 'rich-text-editor/tribute', 'component': 'TributeJs', 'name': 'Tribute JS', 'description': 'This demo shows how to integrate Mention library like Tribute JS within the react HTML text editor to get the autocomplete popup with a suggestion list.', 'order': '05', 'category': 'Third-parties Integration', 'api': '{"RichTextEditorComponent":["created","placeholder"] }' }
];