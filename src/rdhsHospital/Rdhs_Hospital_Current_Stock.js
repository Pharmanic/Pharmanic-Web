import React, { Component } from 'react';
class Rdhs_Hospital_Current_Stock extends Component {
    state = { 
        isLoading:true,
        DrugStores:[]
     }

     async componentDidMount(){
         const response=await fetch('/api/rhstock');
         const body=await response.json();
         this.setState({DrugStores:body,isLoading:false})
     }

    render() { 
        const {DrugStores,isLoading}=this.state;
        if(isLoading)
            return(<div>Loading...</div>);

        return ( 
            <div>
                <h2>DrugStores</h2>
                {
                    DrugStores.map(drug=>
                        <div id={drug.batchid}>
                            {drug.expiredate}
                            {drug.quantity}
                            {drug.sr_no}
                        </div>


                    )
                }
            </div>
         );
    }
}
 
export default Rdhs_Hospital_Current_Stock;