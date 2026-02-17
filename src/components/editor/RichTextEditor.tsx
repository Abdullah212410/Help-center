import React, { useEffect, useRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import CharacterCount from '@tiptap/extension-character-count';
import { EditorToolbar } from './EditorToolbar';

export interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  editable?: boolean;
  maxChars?: number;
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  placeholder = 'Start writing...',
  editable = true,
  maxChars,
}) => {
  const suppressUpdate = useRef(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2] },
      }),
      Placeholder.configure({ placeholder }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { rel: 'noopener noreferrer', target: '_blank' },
      }),
      Underline,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      ...(maxChars != null
        ? [CharacterCount.configure({ limit: maxChars })]
        : []),
    ],
    editable,
    content: value,
    onUpdate: ({ editor: ed }) => {
      if (suppressUpdate.current) return;
      onChange(ed.getHTML());
    },
  });

  // Sync external value changes (e.g. draft restore) without cursor flicker
  useEffect(() => {
    if (!editor) return;
    const current = editor.getHTML();
    if (value !== current) {
      suppressUpdate.current = true;
      editor.commands.setContent(value, { emitUpdate: false });
      suppressUpdate.current = false;
    }
  }, [value, editor]);

  // Sync editable prop
  useEffect(() => {
    if (editor) editor.setEditable(editable);
  }, [editable, editor]);

  if (!editor) return null;

  const charCount = maxChars != null ? editor.storage.characterCount.characters() : null;

  return (
    <div className="rte-wrapper rounded-xl border border-slate-200 bg-white overflow-hidden transition-all focus-within:ring-2 focus-within:ring-[#ED3B91]/30 focus-within:border-[#ED3B91]">
      {editable && <EditorToolbar editor={editor} />}
      <EditorContent editor={editor} className="rte-content" />
      {maxChars != null && (
        <div className="px-3 py-1.5 border-t border-slate-100 text-right">
          <span
            className="text-xs font-medium"
            style={{
              color:
                charCount != null && charCount > maxChars * 0.9
                  ? '#ef4444'
                  : '#94a3b8',
            }}
          >
            {charCount} / {maxChars}
          </span>
        </div>
      )}
    </div>
  );
};
