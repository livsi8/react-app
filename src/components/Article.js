import React, { Component } from 'react';

export default class Article extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         isOpen: true,
    //     }
    //     // this.handleClick = handleClick.bind(this);
    // }

    state = {
        isOpen: true,
    }

    render(){
        const { article } = this.props;
        const body = this.state.isOpen && <section> { article.text } </section>;
        return (
            <div className='hello' style={{color: 'red'}}>
                <h2>
                    {article.title }
                    <button onClick={ this.handleClick }> { this.state.isOpen ? 'close' : 'open' } </button>
                </h2>
                { body }
                <h3>Creation Date: { (new Date(article.date)).toDateString() }</h3>
            </div>
        )
    }

    handleClick =()=> {
        console.log('---', 'clicked');
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
}

