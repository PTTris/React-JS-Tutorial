import "react-pro-sidebar/dist/css/styles.css";
import { FaBars } from "react-icons/fa";
import { GiReactor } from "react-icons/gi";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

import {
    FaTachometerAlt,
    FaGem,
    FaList,
    FaGithub,
    FaRegLaughWink,
    FaHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = (props) => {
    const { collapsed, toggled, handleToggleSidebar, setCollapsed } = props;
    return (
        <>
            <ProSidebar
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    {collapsed === false ? (
                        <div
                            style={{
                                padding: "24px",
                                textTransform: "uppercase",
                                fontWeight: "bold",
                                fontSize: 14,
                                letterSpacing: "1px",
                                overflow: "hidden",
                                // textOverflow: 'ellipsis',
                                whiteSpace: "nowrap",
                            }}
                        >
                            <GiReactor size={"2rem"} />

                            <span className="ms-5">
                                PT26Coder <Link to="/" />
                            </span>
                            <FaBars
                                className="ms-4 fs-4"
                                onClick={() => setCollapsed(!collapsed)}
                            />
                        </div>
                    ) : (
                        <div
                            className="text-center mt-3"
                            style={{ height: "50px" }}
                        >
                            <FaBars
                                className="fs-4 "
                                onClick={() => setCollapsed(!collapsed)}
                            />
                        </div>
                    )}
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<FaTachometerAlt />}
                            suffix={<span className="badge red">New</span>}
                        >
                            Dashboard
                            <Link to="/admins" />
                        </MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu
                            title={"Features"}
                            // suffix={<span className="badge yellow">3</span>}
                            icon={<FaRegLaughWink />}
                        >
                            <MenuItem>
                                Quản lý Users <Link to="/admins/manage-users" />
                            </MenuItem>
                            <MenuItem>Quản lý Questions</MenuItem>
                            <MenuItem>Quản lý bài Quizs</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: "center" }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: "20px 24px",
                        }}
                    >
                        <a
                            href="https://github.com/azouaoui-med/react-pro-sidebar"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <span style={{ color: "#fff" }}>PT26 Coder</span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    );
};

export default SideBar;
