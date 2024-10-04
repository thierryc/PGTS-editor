import React from 'react'

interface TabBarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const TabBar: React.FC<TabBarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex">
          <button
            className={`py-4 px-6 ${
              activeTab === 'headings' ? 'border-b-2 border-blue-500' : ''
            }`}
            onClick={() => setActiveTab('headings')}
          >
            Headings
          </button>
          <button
            className={`py-4 px-6 ${
              activeTab === 'paragraph' ? 'border-b-2 border-blue-500' : ''
            }`}
            onClick={() => setActiveTab('paragraph')}
          >
            Paragraph
          </button>
          <button
            className={`py-4 px-6 ${
              activeTab === 'markdown' ? 'border-b-2 border-blue-500' : ''
            }`}
            onClick={() => setActiveTab('markdown')}
          >
            Markdown Editor
          </button>
        </div>
      </div>
    </div>
  )
}

export default TabBar