import { useState, useEffect } from 'react';
import Container from './components/Container/Container';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import ErrorNotification from './components/ErrorNotification/ErrorNotification';
import imagesAPI from './services/pixabay-api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [alt, setAlt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [totalImages, setTotalImages] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;
    const getImages = () => {
      setIsLoading(true);

      return imagesAPI
        .fetchImages(query, page)
        .then(({ hits, total }) => {
          if (query === ' ') {
            toast.info('🔥 Enter valid query.');
            return;
          }

          if (total === 0) {
            toast.dark('😞 Nothing was found. Enter another query.');
            return;
          }

          if (page === 1) {
            toast(`✨ ${total} images was found.`);
          }

          setImages(images => [...images, ...hits]);
          setTotalImages(total - images.length);
        })
        .catch(error => {
          setError(`Something is wrong. ${error}`);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, query]);

  const handleFormSubmit = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setTotalImages(0);
    setError(null);
  };

  const handleChangePage = () => {
    setPage(page => page + 1);
  };

  const onLoadMore = () => {
    handleChangePage();
    scrollTo();
  };

  const scrollTo = () => {
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.clientHeight - 150,
        behavior: 'smooth',
      });
    }, 1000);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onOpenModal = e => {
    const { source } = e.target.dataset;
    const { alt } = e.target;

    setLargeImageURL(source);
    setAlt(alt);

    toggleModal();
  };

  return (
    <Container>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery
        query={query}
        page={page}
        images={images}
        onOpenModal={onOpenModal}
      />
      {isLoading && <Loader />}
      {totalImages > 11 && <Button onLoadMore={onLoadMore} />}
      {showModal && (
        <Modal largeImageURL={largeImageURL} alt={alt} onClose={toggleModal} />
      )}
      {error && <ErrorNotification message={error} />}
      <ToastContainer />
    </Container>
  );
}
