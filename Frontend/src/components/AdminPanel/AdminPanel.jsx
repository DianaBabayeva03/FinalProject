import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './AdminPanel.module.scss';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import { useDropzone } from 'react-dropzone';
import {
  useGetAllUsersQuery,
  useDeleteUserMutation,
} from '../../redux/slices/usersApiSlice';
import {
  useGetNewsQuery,
  useCreateNewsMutation,
  useUpdateNewsMutation,
  useDeleteNewsMutation,
} from '../../redux/slices/newsApiSlice';

const AdminPanel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('users');
  const { data: users, isLoading: isLoadingUsers, isError: isErrorUsers } = useGetAllUsersQuery();
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [deleteUserName, setDeleteUserName] = useState('');
  const [deleteUserMutation] = useDeleteUserMutation();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const { data: news, isLoading: isLoadingNews, isError: isErrorNews } = useGetNewsQuery();
  const [createNews] = useCreateNewsMutation();
  const [updateNews] = useUpdateNewsMutation();
  const [deleteNews] = useDeleteNewsMutation();

  const [newsForm, setNewsForm] = useState({
    id: '',
    title: '',
    content: '',
    author: '',
    date: '',
    image: '',
  });

  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (isErrorUsers) {
      toast.error('Error fetching users');
    }
    if (isErrorNews) {
      toast.error('Error fetching news');
    }
  }, [isErrorUsers, isErrorNews]);

  const handleDeleteUser = async () => {
    if (deleteUserId && deleteUserName) {
      try {
        const response = await deleteUserMutation(deleteUserId);
        if (response.error) {
          throw new Error('Network response was not ok');
        }
        toast.success('User deleted successfully');
        closeModal();
      } catch (error) {
        console.error('Error deleting user:', error);
        toast.error('An error occurred while deleting the user.');
      }
    } else {
      toast.error('User ID or name is not valid.');
    }
  };

  const handleDeleteNews = async (id) => {
    try {
      await deleteNews(id);
      toast.success('News deleted successfully');
    } catch (error) {
      console.error('Error deleting news:', error);
      toast.error('An error occurred while deleting the news.');
    }
  };

  const handleNewsSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', newsForm.title);
    formData.append('content', newsForm.content);
    formData.append('author', newsForm.author);
    formData.append('date', newsForm.date);
    if (imageFile) {
      formData.append('image', imageFile);
    }

    try {
      if (newsForm.id) {
        await updateNews({ id: newsForm.id, formData });
        toast.success('News updated successfully');
      } else {
        await createNews(formData);
        toast.success('News created successfully');
      }
      setNewsForm({
        id: '',
        title: '',
        content: '',
        author: '',
        date: '',
        image: '',
      });
      setImageFile(null);
    } catch (error) {
      console.error('Error submitting news:', error);
      toast.error('An error occurred while submitting the news.');
    }
  };

  const handleEditNews = (newsItem) => {
    setNewsForm({
      id: newsItem._id,
      title: newsItem.title,
      content: newsItem.content,
      author: newsItem.author,
      date: newsItem.date,
      image: newsItem.image,
    });
    setActiveTab('newsForm');
  };

  const openModal = (userId, userName) => {
    setDeleteUserId(userId);
    setDeleteUserName(userName);
  };

  const closeModal = () => {
    setDeleteUserId(null);
    setDeleteUserName('');
  };

  const filteredUsers = users
    ? users.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleSortUsers = () => {
    const sortedUsers = [...filteredUsers].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    return sortedUsers;
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const onDrop = useCallback((acceptedFiles) => {
    setImageFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className={styles.adminPanel}>
      <div className={styles.container}>
        <div className={styles.adminPanelBtns}>
          <button onClick={() => setActiveTab('users')}>Users</button>
          <button onClick={() => setActiveTab('packages')}>Packages</button>
          <button onClick={() => setActiveTab('news')}>News</button>
          <button onClick={() => setActiveTab('newsForm')}>Add News</button>
          <button onClick={() => navigate('/profile')}>Profile</button>
        </div>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={toggleSortOrder}>
            {sortOrder === 'asc' ? 'Sort A-Z' : 'Sort Z-A'}
          </button>
        </div>
        <div className={styles.content}>
          {activeTab === 'users' && (
            <div className={styles.usersContent}>
              <div className={styles.userOptions}></div>
              {isLoadingUsers && <p>Loading...</p>}
              {handleSortUsers().map((user) => (
                <div key={user._id} className={styles.userProfile}>
                  <h3>{user.name}</h3>
                  <span>{user.email}</span>
                  <h3>ID: {user._id}</h3>
                  <p>
                    Created At: {new Date(user.createdAt).toLocaleDateString()}
                  </p>
                  <p>
                    Updated At: {new Date(user.updatedAt).toLocaleDateString()}
                  </p>
                  <button onClick={() => openModal(user._id, user.name)}>
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'packages' && (
            <div className={styles.packagesContent}>
              <h2>Packages</h2>
            </div>
          )}
          {activeTab === 'news' && (
            <div className={styles.newsContent}>
              <h2>News</h2>
              {isLoadingNews && <p>Loading...</p>}
              {news && news.map((newsItem) => (
                <div key={newsItem._id} className={styles.newsItem}>
                  <h3>{newsItem.title}</h3>
                  {newsItem.image && <img src={newsItem.image} alt={newsItem.title} className={styles.newsImage} />}
                  <p>{newsItem.content}</p>
                  <p><b>Author:</b> {newsItem.author}</p>
                  <p><b>Date:</b> {new Date(newsItem.date).toLocaleDateString()}</p>
                  <button onClick={() => handleEditNews(newsItem)} className={styles.editButton}>
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDeleteNews(newsItem._id)} className={styles.deleteButton}>
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'newsForm' && (
            <div className={styles.newsForm}>
              <h2>{newsForm.id ? 'Edit News' : 'Add News'}</h2>
              <form onSubmit={handleNewsSubmit}>
                <input
                  type="text"
                  name="title"
                  value={newsForm.title}
                  onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
                  placeholder="Title"
                />
                <textarea
                  name="content"
                  value={newsForm.content}
                  onChange={(e) => setNewsForm({ ...newsForm, content: e.target.value })}
                  placeholder="Content"
                />
                <input
                  type="text"
                  name="author"
                  value={newsForm.author}
                  onChange={(e) => setNewsForm({ ...newsForm, author: e.target.value })}
                  placeholder="Author"
                />
                <input
                  type="date"
                  name="date"
                  value={newsForm.date}
                  onChange={(e) => setNewsForm({ ...newsForm, date: e.target.value })}
                />
                <div {...getRootProps({ className: 'dropzone' })} className={styles.dropzone}>
                  <input {...getInputProps()} />
                  {imageFile ? (
                    <p>{imageFile.name}</p>
                  ) : (
                    <p>Drag 'n' drop an image, or click to select one</p>
                  )}
                </div>
                <button type="submit">{newsForm.id ? 'Update News' : 'Add News'}</button>
              </form>
            </div>
          )}
        </div>
      </div>

      <Modal
        isOpen={deleteUserId !== null}
        onRequestClose={closeModal}
        contentLabel="Delete User Modal"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '8px',
            maxWidth: '400px',
            width: '80%',
            padding: '20px',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <h2>Are you sure you want to delete {deleteUserName}?</h2>
        <div className={styles.modalButtons}>
          <button onClick={handleDeleteUser} style={{ background: 'red' }}>
            Yes, Delete
          </button>
          <button onClick={closeModal} style={{ background: 'green' }}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AdminPanel;
