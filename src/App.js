

import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './Body';
import Header from './Header';
import MainContainer from './MainContainer';

import store from './utils/store';
import VideoPlayContainer from './VideoPlayContainer';
function App() {
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Body />,
      children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"/watch",
        element:<VideoPlayContainer />
      }
      
    ]
    }
  ])
  return (
    <Provider store={store}>
       <Header/>
       <div className="App">
   <RouterProvider router={appRouter} />
   
    
    
      
       
      
       
    </div>
    
    
    </Provider>
  );
}

export default App;
