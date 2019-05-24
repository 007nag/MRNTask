import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './question.css';
import App from './App';
class Result extends Component
{
    constructor(props)
    {
        super(props);
    this.state={
        total:0,
        res:"",
    }
    $("html, body").animate({ scrollTop: 0 }, "slow");    
}
    componentDidMount()
    {
        var x=this.props.selans;
        var y=this.props.ques;var t=0;
        console.log(x);
        console.log(y);
         t= this.state.total;
        for(var i=0;i<5;i++)
        {
            if(x[i]===y[i].a.toString())
            {
                t=t+1;
                this.setState({total:t});
            }
        }
        console.log(t);
        var z="";
        switch(t)
        {
            case 0:z="Fail";break;
            case 1:z="Poor";break;
            case 2:z="Bad";break;
            case 3:z="Good";break;
            case 4:z="Strong";break;
            case 5:z="Very Strong";break;
        }
        this.setState({res:z});
        console.log(z);
    }
    homefun()
    {
        ReactDOM.render(<App />, document.getElementById('root'));
    }
render()
{
    var x=this.props.selans;
        var y=this.props.ques;
    return (<div id="results">
<div id="home"><button onClick={this.homefun}>HOME</button></div>
        <h1>You have answered {this.state.total} questions correctly.</h1>
        <h1>Your result is {this.state.res}</h1>
        <div>
            <h1 style={{backgroundColor:'#ffc5a1',borderRadius:20}}>Answer evaluation...</h1>
            {y.map((n,i)=>{

                return (
                    <div id="eval">
                        <h3>{n.q}</h3>
                        <h4>Your Answer: {x[i]}</h4>
                        <h4>Correct Answer: {n.a}</h4>
                    </div>
                );
            })}
        </div>
        </div>);
        
        ;

}
}
export default Result;