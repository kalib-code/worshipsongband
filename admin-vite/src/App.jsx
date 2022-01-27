
import { Refine,Icons  } from "@pankod/refine";
import { DataProvider, AuthHelper } from "@pankod/refine-strapi-v4";
import routerProvider from "@pankod/refine-react-router";
import axios from "axios";

import "./styles/antd.less";

import {  API_URL } from "./constants";

import {
  Title,
  Header,
  Sider,
  Footer,
  Layout,
} from "./components/layout";

import { Login } from "./components/login";
import {SongList , SongEdit, SongCreate } from './pages/songs'
import { AlbumCreate, AlbumEdit, AlbumList } from "./pages/albums";
import { UserList } from "./pages/users";
import { OrderList } from "./pages/orders";

const TOKEN_KEY = "strapi-jwt";

function App() {

  const axiosInstance = axios.create();
  const strapiAuthHelper = AuthHelper(API_URL + "/api");
  
 

  const authProvider = {
    login: async ({ username, password }) => {
        const { data, status } = await strapiAuthHelper.login(
            username,
            password,
        );
        if (status === 200) {
            localStorage.setItem(TOKEN_KEY, data.jwt);

            // set header axios instance
            axiosInstance.defaults.headers = {
                Authorization: `Bearer ${data.jwt}`,
            };

            return Promise.resolve;
        }
        return Promise.reject;
    },
    logout: () => {
        localStorage.removeItem(TOKEN_KEY);
        return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: () => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (token) {
            axiosInstance.defaults.headers = {
                Authorization: `Bearer ${token}`,
            };
            return Promise.resolve();
        }

        return Promise.reject();
    },
    getPermissions: () => Promise.resolve(),
    getUserIdentity: async () => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (!token) {
            return Promise.reject();
        }

        const { data, status } = await strapiAuthHelper.me(token);
        if (status === 200) {
            const { id, username, email } = data;
            return Promise.resolve({
                id,
                username,
                email,
            });
        }

        return Promise.reject();
    },
};

  return (

    <Refine
            authProvider={authProvider}
            dataProvider={DataProvider(API_URL + "/api", axiosInstance)}
            routerProvider={routerProvider}
            LoginPage={Login}
            Title={Title}
            Header={Header}
            Sider={Sider}
            Footer={Footer}
            Layout={Layout}
            resources={[
              {
              name:"songs",
              list:SongList,
              edit:SongEdit,
              create:SongCreate,
              icon:<Icons.SoundOutlined />
              }, 
              {
                name:"albums",
                list:AlbumList,
                edit:AlbumEdit,
                create:AlbumCreate,
                icon:<Icons.FileAddOutlined />

              },
              {
                  name:"orders",
                  list:OrderList,
                  icon: <Icons.ShoppingOutlined />,
              },
              {
                  name:"user",
                  list:UserList,
                  icon:<Icons.UserOutlined />
              }
            
            ]}
        />
  
  )
}

export default App
