import { Layout, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import MyButton from "../components/MyButton";
import  {auth, logaut}  from "../store/authSlice";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import { selectIsAuth } from "../store/authSlice";
import { useEffect } from "react";
import { useAuth } from "../hooks/authHook";
// import isUserAuth from '../store/userSlice'

const { Header, Content, Footer } = Layout;

// const items = new Array(5).fill(null).map((_, index) => ({
//   key: index + 1,
//   label: `nav ${index + 1}`,
// }));

export default function MainLayout(): JSX.Element {
const dispatch = useDispatch();
const navigate = useNavigate();

const {data, isAuth} = useAuth();
// const isAuth = useSelector(selectIsAuth);
// const userData: {} | null = useSelector(state => state.auth);

console.log(isAuth);
console.log(data);



// const data = useSelector(state => state.auth);
// console.log('Data: ', data);
// console.log('isAuth: ', data.isAuth);

  function handleClick(): void {
    dispatch(logaut());
    localStorage.removeItem('token');
    navigate("/",  { replace: true })
  }

useEffect(()=>{
  // const userData: {} | null = useSelector(state => state.auth);
},[isAuth])



  return (
    <Layout style={{ width: "1400px", minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
        <div className="demo-logo" />
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        /> */}
        
        {isAuth ? 
        <>
        <h3 style={{ color: "GrayText" }}>{data.username}</h3> 
        <MyButton onClick={handleClick}>Выйти</MyButton>
        </>
         : ''}
      </Header>
      <Content style={{ padding: "2rem 2rem" }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        AlexZ Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}


