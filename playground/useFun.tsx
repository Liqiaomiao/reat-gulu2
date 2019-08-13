import React, {useState, useEffect} from 'react';


interface Props {
    message?:any
}

const App: React.FunctionComponent<Props> = ({
    message = "default message"
}) => {
    const [n, setN] = useState(1);
    const [m, setM] = useState(2);
   //  const [user , setUser] = useState<User>(null);
    const x = () => {
        setN(n+1)
    };
    const y = () => {
        setM(m+1)
    };
    useEffect(()=>{
        console.log("mounted");
        return ()=>{
            console.log("我死了");
        }
    },[]);
    message.split("");
    return (
        <div>
            <h1>{message}</h1>
            <div>
                {n},{m}
            </div>
            <button onClick={x}>n+1</button>
            <button onClick={y}>m+1</button>
        </div>
    )

};
App.defaultProps = {
    message: 'default message'
};
App.displayName = "Lisa";
// App.propTypes = {
//     message: PropTypes.number
export   {App}
