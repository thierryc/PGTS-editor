import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

interface MarkdownEditorProps {
  textStyle: React.CSSProperties
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ textStyle }) => {
  const [markdown, setMarkdown] = useState('# Welcome to the Markdown Editor\n\nEnter your Markdown text here.\n\n## Features\n\n- Real-time preview\n- Supports basic Markdown syntax\n- Customizable typography')
  const [isEditing, setIsEditing] = useState(true)

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-end mb-4">
        <button
          className={`px-4 py-2 mr-2 ${isEditing ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
        <button
          className={`px-4 py-2 ${!isEditing ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setIsEditing(false)}
        >
          Preview
        </button>
      </div>
      {isEditing ? (
        <textarea
          className="w-full h-full p-4 border rounded"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          style={textStyle}
        />
      ) : (
        <div className="w-full h-full p-4 border rounded overflow-auto" style={textStyle}>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      )}
    </div>
  )
}

export default MarkdownEditor