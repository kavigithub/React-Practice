import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min";
import User from './components/User';
import FilterableProductTable from './components/filter-product-table/FilterableProductTable';
import Gallery from './components/gallery/Gallery';
import TodoApp from './components/todos-app/TodoApp';
import Tours from './components/tours/Tours';
import PlainCounter from './components/useStateConcpet/PlainCounter';
import UpdateObjectinsideArray from './components/useStateConcpet/UpdateObjectinsideArray';
import CompWithoutHOC from './components/HOC/CompWithoutHOC';
import CompWithHOC from './components/HOC/Item1';
import TodoAppWithDate from './components/to-do-with-dates/TodoAppWithDate';
import BuyingItem from './components/buying-list-info/BuyingItem';
import ContextBuyingItem from './components/context-api-bying-list/ContextBuyingItem';
import ReducerApp from './components/Reducer-buying-list/ReducerApp';
import MangeComp from './components/Cotrolled-Uncrolled-Comp/MangeComp';
import ContextMain from './components/Context-Component-example/ContextMain';
import CounterClik from './components/HOC/CounterClik';
import CounterHover from './components/HOC/CounterHover';
import HOCdemo from './components/HOC/UsedInHoc';
import UseMemoDemo from './components/useMemo-Callback-memo/UseMemoDemo';
import MemoHOC from './components/useMemo-Callback-memo/MemoHOC';

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];


function App() {
  return (
    <div className="App">
        {/* <User></User> */}
       {/*  <Tours /> */}
       {/* <PlainCounter></PlainCounter> */}
      {/* <FilterableProductTable products={PRODUCTS}/> */}
     {/*  <Gallery />
      <UpdateObjectinsideArray />
      <CompWithoutHOC></CompWithoutHOC>
      <CompWithHOC></CompWithHOC> */}
     {/*  <TodoApp />  */} {/* this is the best eg */}
    {/*  <TodoAppWithDate></TodoAppWithDate>  */}
   {/*  <BuyingItem></BuyingItem> */}
  {/*  <BuyingItem></BuyingItem> */}
 {/*  <ContextBuyingItem></ContextBuyingItem> */}
 <h3>What are React pure functional components?</h3>
 <a href='https://blog.logrocket.com/what-are-react-pure-functional-components/#:~:text=A%20React%20component%20is%20considered,components%20that%20extend%20the%20React.'> https://blog.logrocket.com/what-are-react-pure-functional-components/#:~:text=A%20React%20component%20is%20considered,components%20that%20extend%20the%20React.</a>
{/*  <ReducerApp></ReducerApp>

 <MangeComp></MangeComp> */}
   {/*  higher order components */}
{/*    <CounterClik secretWord={"Counter On Click"}></CounterClik>
   <CounterHover secretWord={"Counter on Hover"} ></CounterHover>
   <HOCdemo></HOCdemo> */}

   {/* useMemo | useCallback | memo */}
    {/* <UseMemoDemo></UseMemoDemo> */}
    {/* <MemoHOC></MemoHOC> */}
    <ContextMain/>
    </div>
  );
}

export default App;
