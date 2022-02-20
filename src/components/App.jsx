import { Component } from 'react';
import Button from './Button';
import ImageGallery from './ImageGallery';
import Spinner from './Loader';
import Modal from './Modal';
import Searchbar from './Searchbar';

import Api from './servises/api';

class App extends Component{
  state = {
    showModal: false,
    pictureQuery: '',
    pictures: [],
    largeImageURL: '',
    currentPage: 1,
    loader: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pictureQuery !== this.state.pictureQuery) {
      this.findImages();
    }
  };

  findImages = () => {
    const { pictureQuery, currentPage } = this.state;

    this.setState({ loader: true });

    Api
      .fetchImg(pictureQuery, currentPage)
      .then(pictures => {
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...pictures],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loader: false }));
  };

  getlargeImageURL = imgUrl => {
    this.setState({
      largeImageURL: imgUrl,
    });
    this.toogleModal();
  };

  toogleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }))
  };
  
  handleFormSubmit = pictureQuery => {
    this.setState({
      pictureQuery: pictureQuery,
      page: 1,
      pictures: [],
    });
  }
  
  render() {
      return (
        <div>
          <Searchbar qwe={this.handleFormSubmit} />

          <ImageGallery
            pictures={this.state.pictures}
            imgClick={this.getlargeImageURL}
          />

          {this.state.loader && <Spinner/>}

          <Button
            btnLabel="Load more"
            handleClick={this.findImages}
            aria-label="Load more"
          />


          {/* <button type="button" onClick={this.toogleModal}> Открыть модалку</button> */}
          {this.state.showModal && (
            <Modal
              onClose={this.toogleModal}
              src={this.state.largeImageURL}
              onClick={this.toogleModal}
            >
            
            {/* <button type="button" onClick={this.toogleModal}>Закрыть</button> */}
            </Modal>)}
           
        </div>
      );
  }
}


export default App;
