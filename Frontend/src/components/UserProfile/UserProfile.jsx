import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaLiraSign, FaShippingFast } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { setActiveContent } from '../../redux/slices/userSlice';
import styles from './UserProfile.module.scss';
import { useNavigate } from 'react-router-dom';
import { logout, setCredentials } from "../../redux/slices/authSlice";
import { useLogoutMutation, useUpdateUserMutation } from "../../redux/slices/usersApiSlice";
import { toast } from "react-toastify";
import store from '../../redux/store';
import { fetchDeclarations } from '../../redux/slices/declarationSlice';

const UserProfile = () => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const activeContent = useSelector((state) => state.user.activeContent);

  const [activeForm, setActiveForm] = useState('tenzimlemeler');

  const handleContentChange = (content) => {
    dispatch(setActiveContent(content));
    setActiveForm('tenzimlemeler'); // Reset active form to default
  };

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    console.log("Logout button clicked");
    try {
        const response = await logoutApiCall().unwrap();
        console.log("Logout response:", response);
        dispatch(logout());
        console.log("User info after logout:", store.getState().auth.userInfo); 
        navigate('/login');
        console.log("Navigating to login"); // Bu satırı ekleyin
    } catch (error) {
        console.log("Logout error:", error);
    }
  } 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
    } else {
        try {
            const res = await updateUser({
                _id: userInfo._id,
                name,
                email,
                password,
            }).unwrap();

            dispatch(setCredentials({ ...res }));
            toast.success("Profile updated successfully");
            setPassword('');
            setConfirmPassword('');
            navigate("/profile");
        } catch (error) {
            const errorMessage = error.data?.message || error.message || "An error occurred";
            toast.error(errorMessage);
        }
    }
  };

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name || '');
      setEmail(userInfo.email || '');
    }
  }, [userInfo]);

  const { loading, declarations, error } = useSelector((state) => state.declarations);

  useEffect(() => {
    dispatch(fetchDeclarations());
  }, [dispatch]);

  return (
    <div className={styles.userProfile}>
      <div className={styles.container}>
        <div className={styles.userProfileText}>
          <div className={styles.kabinet}>
            <h1>Şəxsi kabinet</h1>
            <h2>Tənzimləmələr</h2>
          </div>
          <div className={styles.balans}>
            <div className={styles.balansCard}>
              <div className={styles.balansImg}>
                <FaLiraSign />
              </div>
              <div className={styles.balansText}>
                <h5>Sifariş balansım</h5>
                <span>0 TL</span>
              </div>
            </div>
            <div className={styles.balansCard}>
              <div className={styles.balansImg}>
                <FaShippingFast />
              </div>
              <div className={styles.balansText}>
                <h5>Daşınma balansım</h5>
                <span>0.00 AZN</span>
              </div>
            </div>
          </div>
          <div className={styles.sifarishEt}>
            <button>Sifariş et</button>
          </div>
        </div>
        <div className={styles.userProfileCard}>
          <div className={styles.userProfilePanel}>
            <div className={styles.userProfileFaktura}>
              <button>Faktura əlavə et</button>
            </div>
            <div className={styles.userProfileName}>
              <div className={styles.cardImg}>
                <FaRegCircleUser />
              </div>
              <div className={styles.cardText}>
                <h5>{user.name}</h5>
                <span>{user.id}</span>
              </div>
            </div>
            <div className={styles.userProfileInformation}>
              <button onClick={() => handleContentChange('personalInformation')}>
                <IoSettingsOutline /> Şəxsi məlumatlarım
              </button>
              <button onClick={() => handleContentChange('addressisTurkey')}>
                <IoSettingsOutline /> Türkiyyə ünvanım
              </button>
              <button onClick={() => handleContentChange('myOrders')}>
                <IoSettingsOutline /> Sifarişlər
              </button>
              <button onClick={() => handleContentChange('myParcels')}>
                <IoSettingsOutline /> Bağlamalarım
              </button>
              <button onClick={() => handleContentChange('trendyolsParcels')}>
                <IoSettingsOutline /> Trendyol bağlamalarım
              </button>
              <button onClick={() => handleContentChange('balanceTl')}>
                <IoSettingsOutline /> Balans TL
              </button>
              <button onClick={() => handleContentChange('balanceAzn')}>
                <IoSettingsOutline /> Balans AZN
              </button>
              <button onClick={() => handleContentChange('courierOrder')}>
                <IoSettingsOutline /> Kuryer sifarişi
              </button>
              <button onClick={() => handleContentChange('logout')}>
                <IoSettingsOutline /> Çıxış
              </button>
            </div>
          </div>
          <div className={styles.userProfileContent}>
            {activeContent === 'personalInformation' && (
              <div className={styles.personalInformation}>
                <div className={styles.informationBtns}>
                  <button
                    onClick={() => setActiveForm('tenzimlemeler')}
                    className={activeForm === 'tenzimlemeler' ? styles.active : ''}
                  >
                    Tənzimləmələr
                  </button>
                  <button
                    onClick={() => setActiveForm('shifreYenileme')}
                    className={activeForm === 'shifreYenileme' ? styles.active : ''}
                  >
                    Şifrəni yenilə
                  </button>
                </div>
                {activeForm === 'tenzimlemeler' && (
                  <form className={styles.tenzimlemeler} action="">
                    <label>
                      <h4>Ad</h4>
                      <input type="text" />
                    </label>
                    <label>
                      <h4>Soyad</h4>
                      <input type="text" />
                    </label>
                    <label>
                      <h4>E-mail adres</h4>
                      <input type="text" />
                    </label>
                    <label>
                      <h4>Dogum tarixi</h4>
                      <input type="text" />
                    </label>
                    <button type="submit" className={styles.submitButton}>
                      {isLoading ? "Updating..." : "Yadda saxla"}
                    </button>
                  </form>
                )}
                {activeForm === 'shifreYenileme' && (
                  <form onSubmit={handleSubmit} className={styles.shifreYenileme} action="">
                    <label>
                      <h4>Yeni şifrə</h4>
                      <input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <label>
                      <h4>Şifrənin təsdiqi</h4>
                      <input 
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} />
                    </label>
                    <button type="submit" className={styles.submitButton}>
                      {isLoading ? "Updating..." : "Yadda saxla"}
                    </button>
                  </form>
                )}
              </div>
            )}
            {activeContent === 'addressisTurkey' && (
              <div className={styles.addressisTurkey}>
                <h1>Türkiyyə ünvanım</h1>
                <div className={styles.cards}>
                  <div className={styles.card}>
                    <h4>Ad Soyad</h4>
                    <span>{userInfo.name}</span>
                  </div>
                  <div className={styles.card}>
                    <h4>Türkiyə ünvanım</h4>
                    <span>LUX625736 Yakuplu, Mareşal Fevzi Çakmak Caddesi no 120 / (kargolux depo) Beylikdüzü / İstanbul</span>
                  </div>
                  <div className={styles.card}>
                    <h4>TC kimlik</h4>
                    <span>11111111111</span>
                  </div>
                  <div className={styles.card}>
                    <h4>Vergi numarası</h4>
                    <span>5241407691</span>
                  </div>
                  <div className={styles.card}>
                    <h4>İl - şehir</h4>
                    <span>İstanbul</span>
                  </div>
                  <div className={styles.card}>
                    <h4>İlce</h4>
                    <span>Beylikdüzü</span>
                  </div>
                </div>
              </div>
            )}
            {activeContent === 'myOrders' && (
              <div className={styles.myOrders}>
                <h3>Sifarişlər</h3>
              </div>
            )}
            {activeContent === 'myParcels' && (
              <div className={styles.myParcels}>
                <h2>Bağlamalarım</h2>
                {loading && <p>Yüklənir...</p>}
                {error && <p>Heç bir məlumat yoxdur.</p>}
                <ul>
                  {declarations.map((item) => (
                    <li key={item.id}>
                      <h6>{item.customerName}</h6>
                      <h6>{item.surname}</h6>
                      <h6>{item.phone}</h6>
                      <h6 className={styles.tracking}>{item.tracking}</h6>
                      <h6 className={styles.declaredValue}>{item.declared ? 'true' : 'false'}</h6>
                      <div className={styles.dropdown}>
                        <button className={styles.dropdownToggle} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Status
                        </button>
                        <ul className={styles.dropdownmenu}>
                          <li><a className={styles.dropdownitemgumruk} href="#" data-product-id={item.id}>Gömrük yoxlanışında</a></li>
                          <li><a className={styles.dropdownitemcesidleme} href="#" data-product-id={item.id}>Çeşidləmə</a></li>
                          <li><a className={styles.dropdownitemyerliAnbar} href="#" data-product-id={item.id}>Yerli anbar</a></li>
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeContent === 'trendyolsParcels' && (
              <div className={styles.trendyolsParcels}>
                <h5>Trendyol bağlamalarım</h5>
              </div>
            )}
            {activeContent === 'balanceTl' && (
              <div className={styles.balanceTl}>
                <h1>TL ilə ödəmə üsulu</h1>
                <form>
                  <label>
                    <h4>Kart Nömrəsi</h4>
                    <input type="text" placeholder="Kart nömrəsini daxil edin" />
                  </label>
                  <label>
                    <h4>Son İstifadə Tarixi</h4>
                    <input type="text" placeholder="AA/YY" />
                  </label>
                  <label>
                    <h4>CVV</h4>
                    <input type="text" placeholder="CVV" />
                  </label>
                  <button type="submit" className={styles.submitButton}>Ödə</button>
                </form>
              </div>
            )}
            {activeContent === 'balanceAzn' && (
              <div className={styles.balanceAzn}>
                <h1>AZN ilə ödəmə üsulu</h1>
                <form>
                  <label>
                    <h4>Kart Nömrəsi</h4>
                    <input type="text" placeholder="Kart nömrəsini daxil edin" />
                  </label>
                  <label>
                    <h4>Son İstifadə Tarixi</h4>
                    <input type="text" placeholder="AA/YY" />
                  </label>
                  <label>
                    <h4>CVV</h4>
                    <input type="text" placeholder="CVV" />
                  </label>
                  <button type="submit" className={styles.submitButton}>Ödə</button>
                </form>
              </div>
            )}
            {activeContent === 'courierOrder' && (
              <div className={styles.courierOrder}>
                <p>Ünvanı qeyd edin</p>
                <input type="text" placeholder='Ünvana çatmamışdan 30 dəqiqə əvvəl zəng edin zəhmət olmasa' />
                <button>Sifariş et</button>
                <div className={styles.kuryerrr}>
                  <h4>Kuryer sifarişlərim</h4>
                  <b>Sizin hələ ki kuryer sifarişiniz yoxdur.</b>
                  <p>Kuryer sifarişiniz 48 saat ərzində planlaşdırılır. Kuryerin iş saatları 10:00 - 22:00 (həftənin 6 günü)</p>
                </div>
              </div>
            )}
            {activeContent === 'logout' && (
              <div className={styles.logout}>
                <button onClick={handleLogout} >logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
