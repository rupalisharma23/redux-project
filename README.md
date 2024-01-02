steps for reducx

sabse pehle to app.js in the index file ko wrap karo provider se aur usme store ko bhejo
phir ek store banao jisme following steps honge
1. import configureStore from react-redux
yaha pr hum todoReducers import karenge jo ki humko kisi create slice waale page se export kiya hoga
2. export const store = configureStore({reducers:todoReducers})

ab hum reducres banaenge using slices
1. import createSlice
2. initalState define karo jo ki humara ek object hoga aur is intial state ka koi naam dena hoga
3. export const todoSlice = createSlice({
    name:'todos',
    intialState:
    reducres:{
        addTodo:(state,action)=>{
            yaha jo state hoga isme hume todo ka jo bhi current state hoga uska acces mill jayega
            payload me hum jo bhi agrument bhejenge wo hume mill jayega
        }
    }
})
4. ab hume saare reducers ko export karna hai individually jo jo needed hoga

ab hum useSelectore ki madad se current data state ko read kar sakte hai with name example
const data = useSelector(state=>state.todo)
yaha pr todo wo naame hai jo ki hume redux toolkit google crome me state waale tab par dikhta hai

agar koi action karna hai to useDispatch use karna hoga
