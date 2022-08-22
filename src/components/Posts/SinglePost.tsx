import classes from './SinglePost.module.css';
import ReactModal from 'react-modal';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

interface Props {
  title: string;
  text: string;
  id: number | string;
  deletePost: () => void;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// **************** DEL post

const SinglePost: React.FC<Props> = ({
  text,
  title,
  deletePost,
  modalOpen,
  setModalOpen,
}) => {
  const openModalHandler = () => {
    setModalOpen(true);
  }; // Need to lift up
  const closeModalHandler = () => {
    setModalOpen(false);
  };

  // *************** RIGHT HERE)))
  const editPostHandler = () => {};

  return (
    <Card className={classes['single-post']}>
      <h2>{title}</h2>
      <div>{text}</div>
      <div className={classes['post-footer']}>
        <h5>LIKE</h5>
        <Button onClick={editPostHandler} className={classes.btn}>
          Edit
        </Button>
        <Button onClick={openModalHandler} className={classes.btn}>
          Delete
        </Button>
      </div>

      <ReactModal
        closeTimeoutMS={500}
        isOpen={modalOpen}
        onRequestClose={closeModalHandler} // To close on overlay
        contentLabel="Modal"
        ariaHideApp={true}
        style={{
          overlay: { backgroundColor: 'rgb(0, 0, 0, 0.4)' },
          content: {
            padding: '2rem 3rem',
            margin: '1rem auto',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
            maxWidth: '40rem',
            borderRadius: '10px',
            textAlign: 'start',
            color: '#fff',
            background: '#372c31',
            bottom: 'auto',
            top: '20vh',
          },
        }}
      >
        <h2>Are you sure you want to delete the post?</h2>

        <div className={classes['modal-footer']}>
          <Button onClick={deletePost} className={classes.btn}>
            Delete
          </Button>
          <Button onClick={closeModalHandler} className={classes.btn}>
            Close
          </Button>
        </div>
      </ReactModal>
    </Card>
  );
};

export default SinglePost;
