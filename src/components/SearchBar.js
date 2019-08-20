import React, { Component } from "react";
import axios from "axios";


class SearchBar extends Component {
    state = {
        keyword: ''
    }

    onSubmitForm = (e)=>{
        e.preventDefault()

        // format axios : axios.get('',{}).then(()=>{}).catch(()=>{})
        // function utk then (jika berhasil) : (res)=>{}
        // function utk catch (jika tidak berhasil) : (err)=>{}
        axios.get(
            'https://api.unsplash.com/search/photos',
            {
                headers : {Authorization: 'Client-ID c7e14b602505d0cb0ff8ffee4822690438355e41d3a03c0b1c5344b3f9070f85'},
                params : {query : this.state.keyword}
            }   
        ).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err.message);
        })
    }

    onChangeText = (e)=>{this.setState({keyword:e.target.value})}

    render () {
        return <div>
            <h3 className='text-center mt-3'>Search Image</h3>
            <form className='form-group mt-5' onSubmit={this.onSubmitForm}>
                <input type='text' onChange={this.onChangeText} className='form-control' placeholder='Type Something'/>
            </form>
        </div>
    }
}

export default SearchBar