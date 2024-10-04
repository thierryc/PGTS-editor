import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import TabBar from './components/TabBar'

function App() {
  const [activeTab, setActiveTab] = useState('headings')
  const [fontSize, setFontSize] = useState(16)
  const [lineHeight, setLineHeight] = useState(1.5)
  const [letterSpacing, setLetterSpacing] = useState(0)
  const [fontWeight, setFontWeight] = useState(400)
  const [fontWidth, setFontWidth] = useState(100)
  const [opticalSize, setOpticalSize] = useState(14)
  const [fontGrade, setFontGrade] = useState(0)
  const [ligatures, setLigatures] = useState(false)
  const [position, setPosition] = useState('normal')
  const [capitals, setCapitals] = useState('normal')
  const [numeric, setNumeric] = useState('normal')
  const [alternateGlyphs, setAlternateGlyphs] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar 
        fontSize={fontSize} 
        setFontSize={setFontSize}
        lineHeight={lineHeight}
        setLineHeight={setLineHeight}
        letterSpacing={letterSpacing}
        setLetterSpacing={setLetterSpacing}
        fontWeight={fontWeight}
        setFontWeight={setFontWeight}
        fontWidth={fontWidth}
        setFontWidth={setFontWidth}
        opticalSize={opticalSize}
        setOpticalSize={setOpticalSize}
        fontGrade={fontGrade}
        setFontGrade={setFontGrade}
        ligatures={ligatures}
        setLigatures={setLigatures}
        position={position}
        setPosition={setPosition}
        capitals={capitals}
        setCapitals={setCapitals}
        numeric={numeric}
        setNumeric={setNumeric}
        alternateGlyphs={alternateGlyphs}
        setAlternateGlyphs={setAlternateGlyphs}
      />
      <div className="flex-1 flex flex-col">
        <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
        <MainContent 
          activeTab={activeTab} 
          fontSize={fontSize}
          lineHeight={lineHeight}
          letterSpacing={letterSpacing}
          fontWeight={fontWeight}
          fontWidth={fontWidth}
          opticalSize={opticalSize}
          fontGrade={fontGrade}
          ligatures={ligatures}
          position={position}
          capitals={capitals}
          numeric={numeric}
          alternateGlyphs={alternateGlyphs}
        />
      </div>
    </div>
  )
}

export default App