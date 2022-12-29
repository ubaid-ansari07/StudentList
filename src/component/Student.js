import { Component } from "react";

export default class Student extends Component{
    constructor(){
        super();
        this.state={
            arr:[
                {Sno:1,Name:"Ubaid Ansari",Roll:101,Branch:"CS",DateOfJoining:"2020"},
                {Sno:2,Name:"Nematullah Ansari",Roll:102,Branch:"CS",DateOfJoining:"2021"},
                {Sno:3,Name:"Shubham Joshi",Roll:103,Branch:"BCA",DateOfJoining:"2020"},
                {Sno:4,Name:"Nitesh bagora",Roll:104,Branch:"EC",DateOfJoining:"2018"},
                {Sno:5,Name:"Chetan Malviya",Roll:105,Branch:"EC",DateOfJoining:"2018"},
                {Sno:6,Name:"Satish Pal",Roll:106,Branch:"IT",DateOfJoining:"2019"},
                {Sno:7,Name:"Aman Maourya",Roll:107,Branch:"BA",DateOfJoining:"2022"},
                {Sno:8,Name:"Bharat Sharma",Roll:108,Branch:"IT",DateOfJoining:"2019"},
                {Sno:9,Name:"Neeraj Oon",Roll:109,Branch:"BA",DateOfJoining:"2015 "},
                {Sno:10,Name:"Aviral Joshi",Roll:110,Branch:"CS",DateOfJoining:"2021"},
                {Sno:11,Name:"Vinay Sharma",Roll:111,Branch:"BCA",DateOfJoining:"2022"},
                {Sno:12,Name:"Aradhya Sharma",Roll:112,Branch:"BCA",DateOfJoining:"2022"},
            ],
            filteredArr:[
                {Sno:1,Name:"Ubaid Ansari",Roll:101,Branch:"CS",DateOfJoining:"2020"},
                {Sno:2,Name:"Nematullah Ansari",Roll:102,Branch:"CS",DateOfJoining:"2021"},
                {Sno:3,Name:"Shubham Joshi",Roll:103,Branch:"BCA",DateOfJoining:"2020"},
                {Sno:4,Name:"Nitesh bagora",Roll:104,Branch:"EC",DateOfJoining:"2018"},
                {Sno:5,Name:"Chetan Malviya",Roll:105,Branch:"EC",DateOfJoining:"2018"},
                {Sno:6,Name:"Satish Pal",Roll:106,Branch:"IT",DateOfJoining:"2019"},
                {Sno:7,Name:"Aman Maourya",Roll:107,Branch:"BA",DateOfJoining:"2022"},
                {Sno:8,Name:"Bharat Sharma",Roll:108,Branch:"IT",DateOfJoining:"2019"},
                {Sno:9,Name:"Neeraj Oon",Roll:109,Branch:"BA",DateOfJoining:"2015"},
                {Sno:10,Name:"Aviral Joshi",Roll:110,Branch:"CS",DateOfJoining:"2021"},
                {Sno:11,Name:"Vinay Sharma",Roll:111,Branch:"BCA",DateOfJoining:"2022"},
                {Sno:12,Name:"Aradhya Sharma",Roll:112,Branch:"BCA",DateOfJoining:"2022"},
            ]
        }
        this.branchs=[...new Set(this.state.arr.map(obj=>obj.Branch))]
        this.dates=[...new Set(this.state.arr.map(obj=>obj.DateOfJoining))]
    }
    
    filtered=()=>{
        let branch=document.getElementById('branch').value;
        let date=document.getElementById('date').value;
        if(branch === 'all' && date === 'all'){
            this.setState({filteredArr:this.state.arr})
        }
        else if(branch === 'all' && date !== 'all'){
            let arr=[];
            this.state.arr.filter(obj=>obj.DateOfJoining == date).map(filteredObj=>{arr.push(filteredObj)})
            this.setState({filteredArr:arr})
        }
        else if(branch !== 'all' && date === 'all'){
            let arr=[];
            this.state.arr.filter(obj=>obj.Branch == branch).map(filteredObj=>{arr.push(filteredObj)})
            this.setState({filteredArr:arr})
        }
        else{
            let arr=[];
            this.state.arr.filter(obj=>obj.Branch == branch && obj.DateOfJoining== date).map(filteredObj=>{arr.push(filteredObj)})
            this.setState({filteredArr:arr})
        }

    }  
    render(){
        return(<>
            <div className="container text-center mt-5">
               <div className="row">
                <div className="col-md-3 m-auto">
                    <div className="form-group">
                        <select className="form-select" onChange={this.filtered} id="branch">
                            <option value="all">All</option>
                            {this.branchs.map(obj=>{
                                return <option key={obj} value={obj}>{obj}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="col-md-3 m-auto">
                    <div className="form-group m-auto">
                        <select className="form-select" onChange={this.filtered} id="date">
                        <option value="all">All</option>
                        {this.dates.map(obj=>{
                                return <option key={obj} value={obj}>{obj}</option>
                            })}
                        </select>
                    </div>
                </div>
               </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>Name</th>
                            <th>Roll</th>
                            <th>Branch</th>
                            <th>Date of Joining</th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.state.filteredArr.map((obj,index)=>{
                                return (
                                    <tr key={index}>
                                <td>{obj.Sno}</td>
                                <td>{obj.Name}</td>
                                <td>{obj.Roll}</td>
                                <td>{obj.Branch}</td>
                                <td>{obj.DateOfJoining}</td>
                                </tr>
                                )
                            })}
                    </tbody>
                </table>
                
            </div>
        </>)
    }
}