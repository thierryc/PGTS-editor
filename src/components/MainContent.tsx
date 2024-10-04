import React from 'react'
import MarkdownEditor from './MarkdownEditor'

interface MainContentProps {
  activeTab: string
  fontSize: number
  lineHeight: number
  letterSpacing: number
  fontWeight: number
  fontWidth: number
  opticalSize: number
  fontGrade: number
  ligatures: boolean
  position: string
  capitals: string
  numeric: string
  alternateGlyphs: boolean
}

const MainContent: React.FC<MainContentProps> = ({ 
  activeTab, 
  fontSize, 
  lineHeight, 
  letterSpacing,
  fontWeight,
  fontWidth,
  opticalSize,
  fontGrade,
  ligatures,
  position,
  capitals,
  numeric,
  alternateGlyphs
}) => {
  const baseSize = fontSize / 16 // Convert px to rem

  const textStyle = {
    fontSize: `${baseSize}rem`,
    lineHeight: lineHeight,
    letterSpacing: `${letterSpacing}px`,
    fontWeight: fontWeight,
    fontStretch: `${fontWidth}%`,
    fontOpticalSizing: 'auto',
    fontVariationSettings: `"opsz" ${opticalSize}, "GRAD" ${fontGrade}`,
    fontFeatureSettings: `
      ${ligatures ? '"liga" on' : '"liga" off'},
      ${capitals !== 'normal' ? `"${capitals}" on` : ''},
      ${numeric !== 'normal' ? `"${numeric}" on` : ''},
      ${alternateGlyphs ? '"salt" on, "ss01" on' : ''}
    `,
    fontVariantNumeric: numeric !== 'normal' ? numeric : 'normal',
    fontVariantCaps: capitals !== 'normal' ? capitals : 'normal',
    verticalAlign: position !== 'normal' ? position : 'baseline',
  }

  return (
    <div className="flex-1 p-8 overflow-y-auto" style={textStyle}>
      {activeTab === 'headings' && (
        <div className="space-y-8">
          <h1 style={{ ...textStyle, fontSize: `${baseSize * 5}rem` }} className="font-bold">Hero Display</h1>
          <h1 style={{ ...textStyle, fontSize: `${baseSize * 3.75}rem` }} className="font-bold">Heading 1</h1>
          <h2 style={{ ...textStyle, fontSize: `${baseSize * 3}rem` }} className="font-semibold">Heading 2</h2>
          <h3 style={{ ...textStyle, fontSize: `${baseSize * 2.25}rem` }} className="font-semibold">Heading 3</h3>
          <h4 style={{ ...textStyle, fontSize: `${baseSize * 1.875}rem` }} className="font-semibold">Heading 4</h4>
          <h5 style={{ ...textStyle, fontSize: `${baseSize * 1.5}rem` }} className="font-semibold">Heading 5</h5>
        </div>
      )}
      {activeTab === 'paragraph' && (
        <div className="space-y-8">
          <p className="leading-relaxed">
            This is an example paragraph showcasing the typographic scale for body text. It demonstrates the font size, line height, letter spacing, and variable font properties used for regular content. The paragraph is designed to be easily readable and visually appealing, maintaining a balance between text density and white space.
          </p>
          <div className="bg-gray-200 p-4 rounded">
            <h3 style={{ ...textStyle, fontSize: `${baseSize * 1.25}rem` }} className="font-semibold mb-2">Spacing Example</h3>
            <p className="mb-4">This box demonstrates spacing between elements.</p>
            <p>Notice the margin between paragraphs and the padding around the container.</p>
          </div>
          <p>
            OpenType Features Demo:
            <br />
            Ligatures: office, affiliate
            <br />
            Numerics: 0123456789
            <br />
            Capitals: ABCDEFGHIJKLMNOPQRSTUVWXYZ
            <br />
            Position: x<sup>2</sup> + y<sub>1</sub>
            <br />
            Alternate Glyphs: a g y &amp;
          </p>
        </div>
      )}
      {activeTab === 'markdown' && (
        <MarkdownEditor textStyle={textStyle} />
      )}
    </div>
  )
}

export default MainContent