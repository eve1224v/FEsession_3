/*
=================================
1. 컴포넌트 나누기 실습
=================================


import "./App.css";
import Input from "./components/Input/Input";

function App() {
  const inputs = [
    { label: "Label", placeholder: "Placeholder" },
    { label: "Label", placeholder: "Placeholder" },
    { label: "Label", placeholder: "Placeholder" },
  ];

  return (
    <div className="app">
      {inputs.map((item, index) => (
        <Input key={index} label={item.label} placeholder={item.placeholder} />
      ))}
    </div>
  );
}

export default App;
*/

/*
=================================
2. props 실습
=================================


import Profile from "./Profile";

function App() {
  return (
    <div>
      <Profile name="지영" age={23} />
      <Profile name="해솔" age={21} />
      <Profile name="현진" age={21} />
    </div>
  );
}

export default App;
*/

/*
========================================
3. BrowserRouter, Routes, Route 실습
========================================


import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return <h1>홈 페이지</h1>;
}

function About() {
  return <h1>소개 페이지</h1>;
}

function Contact() {
  return <h1>문의 페이지</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
*/

/*
========================================
4. 중첩라우터(Outlet) 실습
========================================


import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function Home() {
  return <h1>홈 페이지</h1>;
}

function BoardLayout() {
  return (
    <div>
      <header style={{ backgroundColor: "#eee", padding: "10px" }}>
        게시판 헤더
      </header>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>

      <footer style={{ backgroundColor: "#eee", padding: "10px" }}>
        게시판 푸터
      </footer>
    </div>
  );
}

function BoardWrite() {
  return <h2>글쓰기 페이지</h2>;
}

function BoardRead() {
  return <h2>글읽기 페이지</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<BoardLayout />}>
          <Route path="write" element={<BoardWrite />} />
          <Route path="read" element={<BoardRead />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
*/

/*
========================================
5. Link, NavLink 실습
========================================
*/

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
  NavLink,
} from "react-router-dom";

function Home() {
  return <h1>홈 페이지</h1>;
}

function About() {
  return <h1>소개 페이지</h1>;
}

function Contact() {
  return <h1>문의 페이지</h1>;
}

function BoardLayout() {
  return (
    <div>
      <header style={{ backgroundColor: "#eee", padding: "10px" }}>
        <h2>게시판</h2>
        <nav style={{ display: "flex", gap: "10px" }}>
          <Link to="/board/write">글쓰기</Link>
          <Link to="/board/read">글읽기</Link>
        </nav>
      </header>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>

      <footer style={{ backgroundColor: "#eee", padding: "10px" }}>
        게시판 푸터
      </footer>
    </div>
  );
}

function BoardWrite() {
  return <h2>글쓰기 페이지</h2>;
}

function BoardRead() {
  return <h2>글읽기 페이지</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: "none",
            })}
          >
            홈!
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: "none",
            })}
          >
            소개!
          </NavLink>

          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: "none",
            })}
          >
            문의
          </NavLink>

          <NavLink
            to="/board/write"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: "none",
            })}
          >
            게시판
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/board" element={<BoardLayout />}>
            <Route path="write" element={<BoardWrite />} />
            <Route path="read" element={<BoardRead />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
