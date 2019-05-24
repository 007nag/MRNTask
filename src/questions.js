import React,{Component} from 'react';
import $ from 'jquery';
import './question.css';
import ReactDOM from 'react-dom';
import Result from './result';
class  Que extends Component
{

    constructor(props)
    {
        super(props);
        this.state={
          qq:[], //total questions
          quest:[], //questions selectced based on difficulty
          
        }
        this.onTimer= this.onTimer.bind(this);
    }
    componentDidMount()
    {
      this.onTimer(60);
      fetch('/users').then(res=>res.json()).then(qq=>this.setState({qq})).then(()=>
      {
        var k=0;
      var t=this.props.difficulty;
      var f=[];
      for(k=0;k<this.state.qq.length;k++)
      {
        if(this.state.qq[k].t===t)
        {
          f.push(this.state.qq[k]);
        }
      }
     console.log(f);
    for (var i = f.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = f[i];
      f[i] = f[j];
      f[j] = temp;
  }
  this.setState({quest:f});
  console.log(f);
 
    });
     }
      fun(a,b)
     {
      ReactDOM.render(<Result selans={a} ques={b}/>,document.getElementById('root'));

     }
     myfunc(u,v)
     {
      $("#"+u+" input").addClass("white").removeClass("green");
      $('#'+v).addClass("green").removeClass("white");
     }
    
 onTimer(p) {
  $('#mycounter').html(p);
  p=p-1;
  if (p < 0) {
    $( "#submitbtn" ).trigger( "click" );
  }
  else {
    setTimeout(()=>{this.onTimer(p)}, 1000);
  }
}
    render(){
      let selans=["","","","",""];
        return (<div id="questioncontainer">
          <div id="timer">You have <span id="mycounter"></span> seconds left!!</div>
          {this.state.quest.map((n,i)=> {
             var y="ques"+i;
              if(i<5){
                return ( <div id={y}>
                  <p style={{backgroundColor:'#94fc13'}}><h2>{n.q}</h2></p><br/>
                  <input type="button" value={n.o1} id={y+1} className="white" onClick={(e)=>{
                    selans[i]=e.target.value;
                    this.myfunc(y,y+1)}}/><br/>
                <input type="button" value={n.o2} id={y+2} className="white" onClick={(e)=>{
                    selans[i]=e.target.value;
                    this.myfunc(y,y+2)}}/><br/>
                <input type="button" value={n.o3} id={y+3} className="white" onClick={(e)=>{
                    selans[i]=e.target.value;
                    this.myfunc(y,y+3)}}/><br/>
                <input type="button" value={n.o4} id={y+4} className="white" onClick={(e)=>{
                    selans[i]=e.target.value;
                    this.myfunc(y,y+4)}}/><br/>
                 </div>);
              }
              else
              {
                return null;
              }
           
          }
            )}
        <button id="submitbtn" onClick={()=>{
          var x=[];
          for(var i=0;i<5;i++)
          {
            x[i]=this.state.quest[i];
          }
          this.fun(selans,x)}}>SUBMIT</button></div>);
    }
 
}

export default Que;