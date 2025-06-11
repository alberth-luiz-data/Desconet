import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";

export default function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
}

// miguel
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import routes from "./routes";

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         {routes.map(({ path, element }) => (
//           <Route key={path} path={path} element={element} />
//         ))}
//       </Routes>
//     </Router>
//   );
// }


