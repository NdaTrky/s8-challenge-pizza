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
  padding: 15px;
  border: 1px solid red;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  left: 30vw;

  @media (max-width:768px) {
    left:0; 
    padding: 8px;
    width:100%;
  }
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


@media (max-width: 768px) {
    min-width: 100%;
    padding: 1rem 0;
    
    .header {
      font-size: 30px;
    }

    .home-order {
      padding-left: 0;
      justify-content: center;
    }
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
  @media (max-width: 768px) {
    .content-section {
      margin-top: 100px;
    }

    h2 {
      font-size: 20px;
    }

    .price {
      font-size: 22px;
    }

    .point {
      font-size: 14px;
      bottom: 20px;
    }

    .comment {
      font-size: 14px;
      line-height: 22px;
    }
  }
`;

const MiddleSection = styled.div`
  .size-dough {
    display: flex;
    justify-content: space-between;
    gap: 200px;
    
  }  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

/* SİZESECTION (BOYUT SEÇİMİ) BÖLÜMÜ */
const SizeSection = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: column;
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
  @media (max-width: 768px) {
    margin-left: 0;

    select {
      width: 100%;
    }
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
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    label {
      flex: 1 0 30%;
    }
  }
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
  @media (max-width: 768px) {
    textarea {
      width: 100%;
    }
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
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    left: 0;
    margin: 10px 0;
    padding: 10px;

    .total {
      font-size: 14px;
      flex-direction: column;
      text-align: center;
    }
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
  span {
    font-size: 20px;
    margin: 0 10px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    bottom: 0;

    button {
      width: 100%;
      padding: 15px;
    }

    span {
      font-size: 18px;
    }
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
 
  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
    font-size: 16px;
    left: 0;
    bottom: 0;
  }
`;


const ErrorMessage = styled.p`
  color: red;
`;

const initialOrderData = {
  size: "", //! Pizza Boyutu
  crust: "", //! Hamur Türü
  toppings: [], //! Seçilen Ek Malzemeler
  name: "" //! İsim Bilgisi
};

const Order = () => {
    const [orderData, setOrderData] = useState(initialOrderData);
    const [error, setError] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const history = useHistory();
  
    const toppings = [
      "Mantar",
      "Sosis",
      "Zeytin",
      "Biber",
      "Sarımsak",
      "Soğan",
      "Jalapeno",
      "Közlenmiş Domates",
      "Pastırma",
      "Mozzarella"
    ];

    const validateForm = () => {
      let validationErrors = {};
      if (orderData.name.length < 3) {
        validationErrors.name = "İsim en az 3 harf olmalıdır.";
      }
      if (orderData.toppings.length <= 4) {
        validationErrors.toppings = "En az 4 malzeme seçmelisiniz.";
      } else if (orderData.toppings.length > 10) {
        validationErrors.toppings = "En fazla 10 malzeme seçebilirsiniz.";
      }
      if (!orderData.size) {
        validationErrors.size = "Bu alan boş bırakılamaz.";
      }
      if (!orderData.crust) {
        validationErrors.crust = "Bu alan boş bırakılamaz.";
      }
      setError(validationErrors);
      setIsValid(Object.keys(validationErrors).length === 0);
    };
  
    const handleQuantityChange = (change) => {
      setQuantity((prevQuantity) => Math.max(1, prevQuantity + change)); 
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      validateForm(); 
      if (!isValid) return;
  
      axios.post("https://reqres.in/api/pizza", { ...orderData, quantity })
        .then((response) => {
            console.log("siparis özeti:", response.data);
            history.push("/Success");
        })
        .catch((error) => {
          console.warn(error.message);
        });
    };
  
    const handleChange = (event) => {
      const { value, name, type, checked } = event.target;
  
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
      } else {
        setOrderData(prevData => ({
          ...prevData,
          [name]: value
        }));
      }
  
      validateForm();
    };
  
    const toppingPrice = 5; 
    const basePrice = 85; 
    const selectedToppingsPrice = orderData.toppings.length * toppingPrice;  
    const totalPrice = (basePrice + selectedToppingsPrice) * quantity; 
    
    return (
      <form onSubmit={handleSubmit}>
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
          </Content>
  
          <MiddleSection>
            <div className="size-dough">
              <SizeSection>
                <h3>Boyut Seç <span>*</span></h3>
                <div>
                  <input type="radio" id="kucuk" name="size" value="Küçük"
                    checked={orderData.size === "Küçük"}
                    onChange={handleChange}
                    data-cy="size-kucuk"
                  />
                  <label htmlFor="kucuk">Küçük</label>
                </div>
                <div>
                  <input type="radio" id="orta" name="size" value="Orta"
                    checked={orderData.size === "Orta"}
                    onChange={handleChange}
                    data-cy="size-kucuk"
                  />
                  <label htmlFor="orta">Orta</label>
                </div>
                <div>
                  <input type="radio" id="buyuk" name="size" value="Büyük"
                    checked={orderData.size === "Büyük"}
                    onChange={handleChange}
                    data-cy="size-buyuk"
                  />
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
              {error.toppings && <ErrorMessage>{error.toppings}</ErrorMessage>}
            </ToppingsSection>
  
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
              <div className="secimler">
                <p>Seçimler: {selectedToppingsPrice.toFixed(2)}₺</p>
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
  
            <SiparisVerButon type="submit" disabled={!isValid}>
              Sipariş Ver
            </SiparisVerButon>
          </MiddleSection>
        </OrderDiv>
      </form>
    );
};

export default Order;