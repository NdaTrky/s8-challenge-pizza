import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

/* ORDERDİV BÖLÜMÜ */
const OrderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  padding: 30px;
  border: 1px solid red;
  width: 100%;
  box-sizing: border-box;
  

`;

/* HEADER (BAŞLIK) BÖLÜMÜ */
const HeaderSection = styled.header`
  background-color: red;
  color: white;
  text-align: center;
  padding: 2rem 0; 
  min-width: 167vw;
  position: absolute;
  top: 0;
  .header {
    font-size: 40px;
  }
  .home-order {
    display: flex;
    padding-left: 20rem;
  }
`;

/* CONTENT (İÇERİK) BÖLÜMÜ */
const Content = styled.div`
  .content-section {
    margin-top: 200px;
  }
  h2 {
    font-family: Barlow;
    font-size: 25px;
    font-weight: 600;
    line-height: 29.44px;
    text-align: left;
  }
  .price {
    font-family: Barlow;
    font-size: 28px;
    font-weight: 700;
    line-height: 37.47px;
    text-align: left;
  }
  .point {
    font-size: 16px;
    color: gray;
    position: relative;
    bottom: 40px;
    left: 50%;
  }
  .comment {
    font-family: Barlow;
    font-size: 16px;
    font-weight: 400;
    line-height: 28.8px;
    text-align: left;
  }
`;

const MiddleSection = styled.div`
  .size-dough {
    display: flex;
    justify-content: space-between;
    gap: 200px;
  }  
`;

/* SİZESECTION (BOYUT SEÇİMİ) BÖLÜMÜ */
const SizeSection = styled.div`
  display: flex;
  flex-direction: column;
  h4{

  }
`;

/* DOUGHSECTION (HAMUR SEÇİMİ) BÖLÜMÜ */
const DoughSection = styled.div`
  margin-left: 20px;
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  select {
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid gray;
  }
`;

/* TOPPINGSECTION (EKSTRA MALZEMELER) BÖLÜMÜ */
const ToppingsSection = styled.div`
  margin: 20px 0;
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 10px;
`;

/* NOTESECTION (SİPARİŞ NOTU) BÖLÜMÜ */
const NoteSection = styled.div`
  margin: 20px 0;
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  textarea {
    width: 50vh;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`;

/* ORDERSUMMARY (SİPARİŞ ÖZETİ) BÖLÜMÜ */
const OrderSummary = styled.div`
  margin: 30px;
  width: 20rem;
  height: 10rem;
  border: .2px solid gray;
  position: relative;
  left: 20vh;

  .total {
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    color: red;
  }
`;

/* BUTTONGROUP BÖLÜMÜ */
const ButtonGroupWrapper = styled.div`
 display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  bottom: 14vh;

  
    button {
    padding: 17px 20px;
    background-color: #ffc107;
    border: none;
    position: relative;
    
  }
`;

/* SİPARİŞ VER BUTON BÖLÜMÜ */
const SiparisVerButon = styled.button`
  background-color: #ffc107;
  color: black;
  font-size: 18px;
  padding: 20px 120px 10px;
  border: none;
  border-radius: 5px;
  position: relative;
  left: 22vh;
  bottom: 7.4vh;
  &:hover {
    background-color: #ffda44;
  }
`;

const ErrorMessage = styled.p`
  color: red;
`;

const initialOrderData = {
  size: "", //! Pizza Boyutu
  crust: "", //! Hamur Türü
  toppings: [], //! Seçilen Ek Malzemeler
  price: 0, //! Fiyat Bilgisi
  name: "" //! İsim Bilgisi
};

const Order = () => {
  const [orderData, setOrderData] = useState(initialOrderData);
  const [error, setError] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const history = useHistory(); // Pushlama işlemini yapabilmek için

  const toppings = [
    'Pepperoni',
    'Tavuk Izgara',
    'Mısır',
    'Sarımsak',
    'Ananas',
    'Sosis',
    'Soğan',
    'Sucuk',
    'Biber',
    'Kabak',
    'Kanada Jambonu',
    'Domates',
    'Jalepeno',
  ];

  useEffect(() => {
    if (orderData.size && orderData.crust && orderData.toppings.length >= 3) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [orderData]);


  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(0, prevQuantity + change));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if(orderData.name.length <3) {
        setError(prevError => ({
            ...prevError, 
            name: "İsim en az 3 harf olmalıdır."
        }));
        return;
    }
    
    axios.post("https://reqres.in/api/pizza", { ...orderData, quantity })
      .then((response) => {
        history.push("/Success");
      })
      .catch((error) => {
        console.warn(error.message);
      });
  };

  const handleChange = (event) => {
  const { value, name, type, checked } = event.target;
  
  if (name === "name") {
    
    if (value.length < 3) {
      setError(prevError => ({
        ...prevError,
        name: "İsim en az 3 harf olmalıdır."
      }));
    } else {
      setError(prevError => ({
        ...prevError,
        name: ""
      }));
    }
  }
  
  if (type === "checkbox") {
    if (checked) {
      setOrderData(prevData => ({
        ...prevData,
        toppings: [...prevData.toppings, value]
      }));
    } else {
      setOrderData(prevData => ({
        ...prevData,
        toppings: prevData.toppings.filter(topping => topping !== value)
      }));
    }
  } else if (name === "size" || name === "crust") {
    setOrderData(prevData => ({
      ...prevData,
      [name]: value
    }));
  } else {
    setOrderData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  if (name === "size" || name === "crust") {
    setError(prevError => ({
      ...prevError,
      [name]: value ? "" : "Bu alan boş bırakılamaz."
    }));
  } else if (name === "toppings") {
    setError(prevError => ({
      ...prevError,
      [name]: orderData.toppings.length < 3 ? "En az 3 malzeme seçmelisiniz." : orderData.toppings.length > 10 ? "En fazla 10 malzeme seçebilirsiniz." : ""
    }));
  }
};


  const toppingPrice = 5; 
  const basePrice = 85.50; 
  const totalPrice = basePrice + (orderData.toppings.length * toppingPrice);

  return (
    <OrderDiv>

      <HeaderSection>
        <div className="header">Teknolojik Yemekler</div>
        <p className="home-order">Anasayfa / Sipariş Ver</p>
      </HeaderSection>

      <Content>
        <div className="content-section">
          <h2>Position Absolute Acı Pizza</h2>
          <p className="price">{basePrice.toFixed(2)}₺</p>
          <p className="point">4.9 (200)</p>
          <p className="comment">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre.<br /> Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, <br />
          daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, <br />
          düzeltilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.<br /> Küçük bir pizzaya bazen pizzetta denir.
          </p>
        </div>

                <MiddleSection>
                <div className="size-dough">
                <SizeSection>
        <h3>Boyut Seç <span>*</span></h3>
        <div>
            <input type="radio" id="kucuk" name="size" value="Küçük"
            checked={orderData.size === "Küçük"}
            onChange={handleChange}
            />
            <label htmlFor="kucuk">Küçük</label>
        </div>
        <div>
            <input type="radio" id="orta" name="size" value="Orta"
            checked={orderData.size === "Orta"}
            onChange={handleChange}/>
            
            <label htmlFor="orta">Orta</label>
        </div>
        <div>
            <input type="radio" id="buyuk" name="size" value="Büyük"
            checked={orderData.size === "Büyük"}
            onChange={handleChange} />
            <label htmlFor="buyuk">Büyük</label>
        </div>
        {error.size && <ErrorMessage>{error.size}</ErrorMessage>}
        </SizeSection>


            <DoughSection>
              <h3>Hamur Seç <span>*</span></h3>
              <select name="crust" value={orderData.crust} onChange={handleChange}>
                <option value="">Hamur Seçin</option>
                <option value="ince">İnce</option>
                <option value="kalın">Kalın</option>
              </select>
              {error.crust && <ErrorMessage>{error.crust}</ErrorMessage>}
            </DoughSection>
          </div>

          <ToppingsSection>
            <h3>Ek Malzemeler</h3>
            {toppings.map((topping, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  name="toppings"
                  value={topping}
                  checked={orderData.toppings.includes(topping)}
                  onChange={handleChange}
                />
                {topping}
              </label>
            ))}
          </ToppingsSection>
          {error.toppings && <ErrorMessage>{error.toppings}</ErrorMessage>}

                <NoteSection>
        <h3 className="name">İsim:</h3>
        <input
            type="text"
            name="name"
            placeholder='İsim Bilgisi Giriniz'
            value={orderData.name}
            onChange={handleChange}
        />
        {error.name && <ErrorMessage>{error.name}</ErrorMessage>}
        <h3>Sipariş Notu</h3>
        <textarea
            name="note"
            rows="4"
            placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
            onChange={handleChange}
        />
        </NoteSection>


          <OrderSummary>
            <h3>Sipariş Toplamı</h3>
            <div className= "secimler">
                <p>Seçimler</p>
                
            </div>
            <div className="total">
              <p>Toplam </p>
              <p>{totalPrice.toFixed(2)}₺</p>
            </div>
          </OrderSummary>

          <ButtonGroupWrapper>
            <button type="button" onClick={() => handleQuantityChange(-1)}>-</button>
            <span>{quantity}</span>
            <button type="button" onClick={() => handleQuantityChange(1)}>+</button>
          </ButtonGroupWrapper>

          <SiparisVerButon disabled={!isValid} onClick={handleSubmit}>
            Sipariş Ver
          </SiparisVerButon>
        </MiddleSection>
      </Content>
    </OrderDiv>
  );
};

export default Order;
