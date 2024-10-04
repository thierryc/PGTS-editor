import React from 'react'
import { Settings } from 'lucide-react'

interface SidebarProps {
  fontSize: number
  setFontSize: (size: number) => void
  lineHeight: number
  setLineHeight: (height: number) => void
  letterSpacing: number
  setLetterSpacing: (spacing: number) => void
  fontWeight: number
  setFontWeight: (weight: number) => void
  fontWidth: number
  setFontWidth: (width: number) => void
  opticalSize: number
  setOpticalSize: (size: number) => void
  fontGrade: number
  setFontGrade: (grade: number) => void
  ligatures: boolean
  setLigatures: (enabled: boolean) => void
  position: string
  setPosition: (pos: string) => void
  capitals: string
  setCapitals: (caps: string) => void
  numeric: string
  setNumeric: (num: string) => void
  alternateGlyphs: boolean
  setAlternateGlyphs: (enabled: boolean) => void
}

const Sidebar: React.FC<SidebarProps> = ({ 
  fontSize, 
  setFontSize, 
  lineHeight, 
  setLineHeight, 
  letterSpacing, 
  setLetterSpacing,
  fontWeight,
  setFontWeight,
  fontWidth,
  setFontWidth,
  opticalSize,
  setOpticalSize,
  fontGrade,
  setFontGrade,
  ligatures,
  setLigatures,
  position,
  setPosition,
  capitals,
  setCapitals,
  numeric,
  setNumeric,
  alternateGlyphs,
  setAlternateGlyphs
}) => {
  return (
    <div className="w-64 bg-white shadow-md p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <Settings className="mr-2" /> Settings
      </h2>
      
      <h3 className="text-lg font-semibold mt-6 mb-3">Basic Properties</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="fontSize" className="block text-sm font-medium text-gray-700">Font Size: {fontSize}px</label>
          <input
            type="range"
            id="fontSize"
            min="11"
            max="96"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div>
          <label htmlFor="lineHeight" className="block text-sm font-medium text-gray-700">Line Height: {lineHeight}</label>
          <input
            type="range"
            id="lineHeight"
            min="1"
            max="2"
            step="0.1"
            value={lineHeight}
            onChange={(e) => setLineHeight(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div>
          <label htmlFor="letterSpacing" className="block text-sm font-medium text-gray-700">Letter Spacing: {letterSpacing}px</label>
          <input
            type="range"
            id="letterSpacing"
            min="-2"
            max="10"
            value={letterSpacing}
            onChange={(e) => setLetterSpacing(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      <h3 className="text-lg font-semibold mt-6 mb-3">Variable Font Properties</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="fontWeight" className="block text-sm font-medium text-gray-700">Weight: {fontWeight}</label>
          <input
            type="range"
            id="fontWeight"
            min="200"
            max="900"
            value={fontWeight}
            onChange={(e) => setFontWeight(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div>
          <label htmlFor="fontWidth" className="block text-sm font-medium text-gray-700">Width: {fontWidth}%</label>
          <input
            type="range"
            id="fontWidth"
            min="75"
            max="125"
            value={fontWidth}
            onChange={(e) => setFontWidth(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div>
          <label htmlFor="opticalSize" className="block text-sm font-medium text-gray-700">Optical Size: {opticalSize}</label>
          <input
            type="range"
            id="opticalSize"
            min="8"
            max="144"
            value={opticalSize}
            onChange={(e) => setOpticalSize(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div>
          <label htmlFor="fontGrade" className="block text-sm font-medium text-gray-700">Grade: {fontGrade}</label>
          <input
            type="range"
            id="fontGrade"
            min="-200"
            max="150"
            value={fontGrade}
            onChange={(e) => setFontGrade(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mt-6 mb-3">OpenType Features</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Ligatures</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={ligatures} onChange={(e) => setLigatures(e.target.checked)} />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Position</span>
          <select 
            value={position} 
            onChange={(e) => setPosition(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          >
            <option value="normal">Normal</option>
            <option value="super">Superscript</option>
            <option value="sub">Subscript</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Capitals</span>
          <select 
            value={capitals} 
            onChange={(e) => setCapitals(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          >
            <option value="normal">Normal</option>
            <option value="small-caps">Small Caps</option>
            <option value="all-small-caps">All Small Caps</option>
            <option value="petite-caps">Petite Caps</option>
            <option value="all-petite-caps">All Petite Caps</option>
            <option value="unicase">Unicase</option>
            <option value="titling-caps">Titling Caps</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Numeric</span>
          <select 
            value={numeric} 
            onChange={(e) => setNumeric(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          >
            <option value="normal">Normal</option>
            <option value="lining-nums">Lining</option>
            <option value="oldstyle-nums">Oldstyle</option>
            <option value="proportional-nums">Proportional</option>
            <option value="tabular-nums">Tabular</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Alternate Glyphs</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={alternateGlyphs} onChange={(e) => setAlternateGlyphs(e.target.checked)} />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Sidebar