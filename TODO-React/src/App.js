
// import Cart from './components/shopcart/Cart1';
// import Head from './components/Nav/Layout';
// import Products from './components/shopapp/part1';
// import {  useSelector } from 'react-redux/es/hooks/useSelector';
// import Home from './components/pages/Home';
// import Contact from './components/pages/Contact';
// import About from './components/pages/About';
// import Todo from './components1/Actions/todo'
// import Welcome from './components/Welcome';
// import {createBrowserRouter,RouterProvider} from 'react-router-dom';
// function App() {
//   const router=createBrowserRouter([{
//     path:'/',element:<Home/>},
//     {path:'/contact', element:<Contact/>},
//   {path:'/about',element:<About/>}])

//   const present=useSelector(state=>state.listpart.cartvis)
//   return (
//     <div>
      
//       <Head>
//       <Welcome/>

//       <Todo/>
      
//       <hr />

//       {present&&<Cart />}


//       <Products />
//       <RouterProvider router={router}/>
//     </Head>

      
//     </div>
    
//   );
// }

// export default App;
// ApI code is below mentioned for movie: uncoment it and run it
// }
// export default App;
// import Experience from "./components/Movies/Experience";
// function App(){
//   return(
//     <Experience/>

//   )

// }
// export default App;
import Todo from './components1/Actions/todo'
function App() {
  return (
    <div>
      

      <Todo/>
      

      
    </div>
    
  );
}

export default App;