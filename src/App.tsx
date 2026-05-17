/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PatternBoard from "./components/PatternBoard";
import PatternFourPanels from "./components/PatternFourPanels";
import CommonAnimals from "./components/CommonAnimals";
import OtherPatterns from "./components/OtherPatterns";
import CreativeCanvas from "./components/CreativeCanvas";
import TransformationResult from "./components/TransformationResult";
import SavePostcard from "./components/SavePostcard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/pattern-1" replace />} />
        
        {/* Page 1: Interactive hover pattern */}
        <Route 
          path="/pattern-1" 
          element={
            <PatternBoard 
              nextPath="/pattern-2"
              title="Shidong Miao"
              chineseTitle="施洞苗"
              bottomTextFirst="游方"
              bottomTextLast="叙智"
            />
          } 
        />

        {/* Page 2: The Four Panels Pattern (Previously Page 3) */}
        <Route 
          path="/pattern-2" 
          element={
            <PatternFourPanels 
                nextPath="/pattern-1"
            />
          } 
        />

        {/* Page 3: Common Animals Details */}
        <Route 
          path="/animals" 
          element={<CommonAnimals />} 
        />

        {/* Page 4: Other Patterns */}
        <Route 
          path="/other-patterns" 
          element={<OtherPatterns />} 
        />

        {/* Page 5: Creative Canvas */}
        <Route 
          path="/creative" 
          element={<CreativeCanvas />} 
        />

        {/* Page 6: Transformation Result */}
        <Route 
          path="/transformation-result" 
          element={<TransformationResult />} 
        />

        {/* Page 7: Save Postcard */}
        <Route 
          path="/save-postcard" 
          element={<SavePostcard />} 
        />
      </Routes>
    </Router>
  );
}
