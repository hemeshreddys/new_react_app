import React,{Component} from 'react';

class Page extends Component{
    render(){
        const pageStyle ={
            width: 100,
            height:100,
            borderColor:'white',
            borderStyle:'solid',
            borderWidth:'5px',
            borderRadius:'60px',
            backgroundColor:'#1985A1',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            fontSize:'50px'
        }
        return(
            <div style={pageStyle}>
                <i class="material-icons" style={{fontSize:'50px'}}>favorite</i>
            </div>
        );
    }
}
export default Page;