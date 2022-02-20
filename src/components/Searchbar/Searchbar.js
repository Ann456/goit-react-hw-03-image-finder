// import { render } from '@testing-library/react';
import { Component } from 'react';
import s from './Searchbar.module.css';

class Searchbar extends Component {
    state = {
        query: '',
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.query.trim() === '') {
            alert('Введите поисковй запрос');
            return;
        }
        this.props.qwe(this.state.query);
        this.setState({query: ''})
    }
    
    handleChange = e => {
        this.setState({
            query: e.currentTarget.value.toLowerCase()
        })
    }
    render() {
        return (
            <header className={s.searchbar}>
                <form className={s.searchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={s.searchFormButton}>
                        <span className={s.searchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={s.searchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                        value={this.state.query}
                    />
                </form>
            </header>
        );
    }
};

export default Searchbar;

