import { Link, Outlet } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { useState } from "react";
import { Footer } from "antd/lib/layout/layout";
const { Header } = Layout;


const Layouts = () => {
    const [pageState, setPageState] = useState("");
    
    const handleChangePage = ({key}) => {
        setPageState(key)
    }


    return (
        <>
        <Header className="header">
            <span style={{width: "100px", margin: "0", color: "white", fontSize: "25px", fontWeight: "bold"}}><Link to="/">LOGO</Link></span>
            <Menu defaultSelectedKeys={pageState} onClick={handleChangePage} mode={"horizontal"} theme={"dark"} style={{ marginRight: "80px", float: 'right'}}>
                <Menu.Item key="mycourses"><Link to="/course">МОИ КУРСЫ</Link></Menu.Item>
                <Menu.Item key="myprofile"><Link to="/profile">МОЙ ПРОФИЛЬ</Link></Menu.Item>
            </Menu>
        </Header>

        <Outlet />
        
        <Footer style={{width: "100%", textAlign: 'center', backgroundColor: "#001529", color: "white"}}>
            Все права защищены. 2022
        </Footer>
        </>
    );
};

export { Layouts };