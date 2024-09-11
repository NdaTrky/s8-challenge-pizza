import { useState } from 'react';
import styled from 'styled-components';

/* ORDERDİV BÖLÜMÜ */
const OrderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  padding: 20px;
  margin: 0 auto;
`;


/* HEADER (BAŞLIK) BÖLÜMÜ */
const HeaderSection = styled.header`
  background-color: red;
  color: white;
  text-align: center;
  padding:3rem;
  width: 100vw;

  .home-order {
    display: flex;
}
`;



/* CONTENT (İÇERİK) BÖLÜMÜ*/
const Content = styled.div`
  margin-top: 20px;
  
  h2 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .price {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
  .point {
    font-size: 16px;
    color: gray;
    position: relative;
    bottom: 40px;
    left: 50%;
  }
  .comment {
    font-size: 16px;
    
    
  }
`;

/* SİZESECTİON (BOYUT SEÇİMİ) BÖLÜMÜ */
const SizeSection = styled.div`
  margin: 20px 0;
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  input {
    margin-right: 10px;
  }
  label {
    margin-right: 20px;
    font-size: 16px;
  }
`;

/* DOUGHSECTİON (HAMUR SEÇİMİ) BÖLÜMÜ */
const DoughSection = styled.div`
  margin: 20px 0;
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  select {
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`;

/* TOPPINGSECTİON (EKSTRA MALZEMELER) BÖLÜMÜ */
const ToppingsSection = styled.div`
  margin: 20px 0;
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  label {
    margin-right: 15px;
    font-size: 16px;
    display: block;
    margin-bottom: 5px;
  }
  input {
    margin-right: 10px;
  }
`;

/* NOTESECTİON (SİPARİŞ NOTU) BÖLÜMÜ */
const NoteSection = styled.div`
  margin: 20px 0;
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  textarea {
    width: 100%;
    height: 80px;
    padding: 10px;
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

  h4 {
    font-size: 20px;
   }
  .total {
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    color: red;
  }
 
`;

/* BUTTONGROUP BÖLÜMÜ */
const ButtonGroupWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
padding: 10px 15px;
background-color: #ffc107;
border: none;
font-size: 18px;
    
    
    

    &:hover {
      background-color: #e0a800;
    }
  }
`;

/* SİPARİŞ VER BUTON BÖLÜMÜ */
const SiparisVerButon = styled.button`
  background-color: #ffc107;
  color: black;
  font-size: 18px;
  padding: 15px 10px;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #e0a800;
  }
`;


const initialOrderData = {
    size: "", // ! Pizza Boyutu
    crust: "", //! Hamur Türü
    toppings: [], //!Seçilen Ek Malzemeler
    price: 0, //!Fiyat Bilgisi
}

const Order = () => {
const [orderData, setOrderData] = useState(initialOrderData);
const [selectedTopping, setSelectedTopping] = useState([]);
    
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

      
    

return (
    <OrderDiv>
      <HeaderSection>
        <div>Teknolojik Yemekler</div>
        <p className="home-order">Anasayfa / Sipariş Ver</p>
        </HeaderSection>
      <Content>
        <h2>Position Absolute Acı Pizza</h2>
        <p className="price">85.50₺</p>
        <p className="point">4.9 (200)</p>
        <p className="comment">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre.<br /> Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, <br />
          daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, <br />
          düzeltilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.<br /> Küçük bir pizzaya bazen pizetta denir.
        </p>
      </Content>
      <SizeSection>
        <h3>Boyut Seç *</h3>
        <input type="radio" id="small" name="size" />
        <label htmlFor="small">Küçük</label>

        <input type="radio" id="medium" name="size" />
        <label htmlFor="medium">Orta</label>

        <input type="radio" id="large" name="size" />
        <label htmlFor="large">Büyük</label>
      </SizeSection>

      <DoughSection>
        <h3>Hamur Seç *</h3>
        <select>
          <option value="hamur-kalinligi">Hamur Kalınlığı</option>
          <option value="orta">İnce Hamur</option>
          <option value="kalin">Kalın Hamur</option>
        </select>
      </DoughSection>

      <ToppingsSection>
        <h3>Ekstra Malzemeler</h3>
        <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
       {toppings.map((item, index) => (
        <label key={index}>
            <input type="checkbox" name={item} />
            {item}
        </label>
       ))}
       </ToppingsSection>

      <NoteSection>
        <h3>Sipariş Notu</h3>
        <textarea placeholder="Siparişine eklemek istediğin bir not var mı?" />
      </NoteSection>

      <ButtonGroupWrapper>
        <button>-</button>
        <button>1</button>
        <button>+</button>
      </ButtonGroupWrapper>

      <OrderSummary>
        <h4>Sipariş Toplamı</h4>
        <p>
          Seçimler <span>25.00₺</span>
        </p>
        <p className="total">
          Toplam <span>110.50₺</span>
        </p>
      </OrderSummary>

      <SiparisVerButon>Sipariş Ver</SiparisVerButon>
    </OrderDiv>
  );
};

export default Order;
