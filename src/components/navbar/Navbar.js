import React, { useState } from "react";
import RightMenu from "./RightMenu";
import { Drawer, Button } from "antd";

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <nav className="menuBar">
      <div className="logo">
        <a href="/">
          ATools<span>.</span>
        </a>
      </div>
      <div className="menuCon">
        <div className="rightMenu">
          <RightMenu />
        </div>
        <Button className="barsMenu" onClick={() => setShowDrawer(true)}>
          <span className="barsBtn"></span>
        </Button>
        <Drawer title="Basic Drawer" width={240} placement="right" closable={false} onClose={() => setShowDrawer(false)} visible={showDrawer}>
          <RightMenu />
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
