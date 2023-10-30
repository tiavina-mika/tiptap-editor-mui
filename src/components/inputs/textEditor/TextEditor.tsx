/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { Theme, jsx } from "@emotion/react";
import {
  useEditor,
  FloatingMenu,
  BubbleMenu,
  EditorContent
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { css } from "@emotion/css";
import { useTheme } from "@mui/material";

const classes = {
  input: (theme: Theme) => ({
    borderRadius: 6,
    border: "1px solid " + theme.palette.grey[800],
    padding: 6
  })
};
const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    }
  })
];

const content = "<p>Hello World 2!</p>";

const TextEditor = () => {
  const theme = useTheme();

  const editor = useEditor({
    content,
    editorProps: {
      attributes: {
        class: css(classes.input(theme))
      }
    },
    extensions: [
      // StarterKit,
      ...extensions
    ]
  });

  return (
    <>
      {editor && <FloatingMenu>This is the floating menu</FloatingMenu>}
      {editor && <BubbleMenu>This is the bubble menu</BubbleMenu>}
      <EditorContent editor={editor} />
      <MenuBar editor={editor} />
    </>
  );
};

export default TextEditor;
