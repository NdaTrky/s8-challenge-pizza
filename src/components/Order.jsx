import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Form } from 'reactstrap';

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
padding: 3rem 0; 
width: 100vw;
position: fixed; 
top: 0;
.header {
font-size: 50px;

}
 .home-order {
display: flex;
position: relative;
top: 40px;
  }
`;


/* CONTENT (İÇERİK) BÖLÜMÜ*/
const Content = styled.div`
.content-section {
margin-top:200px;
    
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
    justify-content:space-between;
    gap: 200px;
}  
`

/* SİZESECTİON (BOYUT SEÇİMİ) BÖLÜMÜ */
const SizeSection = styled.div`
display: flex;
flex-direction:column;
`;



/* DOUGHSECTİON (HAMUR SEÇİMİ) BÖLÜMÜ */
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


/* TOPPINGSECTİON (EKSTRA MALZEMELER) BÖLÜMÜ */
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


/* NOTESECTİON (SİPARİŞ NOTU) BÖLÜMÜ */
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
   display: flex;
   align-items: center;

   button {
      padding: 10px 15px;
      background-color: #ffc107;
      border: none;
      font-size: 18px;
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
const errorMessage =styled.p`
    color:red;
`


const initialOrderData = {
    size: "", // ! Pizza Boyutu
    crust: "", //! Hamur Türü
    toppings: [], //!Seçilen Ek Malzemeler
    price: 0, //!Fiyat Bilgisi
}

const Order = () => {
const [orderData, setOrderData] = useState(initialOrderData);
const [error, setError] = useState({
    size: "", // ! Pizza Boyutu
    crust: "", //! Hamur Türü
    toppings: [], //!Seçilen Ek Malzemeler
    price: 0, //!Fiyat Bilgisi

})

const [isValid, setIsValid] = useState(false);
const history = useHistory(); //! Pushlama islemini yapabilmek için.
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


      function handleSubmit(event) {
event.preventDefault();
axios.post("https://reqres.in/api/pizza", orderData)
.then((response) => {
    console.log(response.data);
    history.push("/Success")
})
.catch((error) => {
console.warn(error.message);
});
      }

function handleChange(event) {
    const{value, name} = event.target;
    setSelectedTopping({...selectedTopping, [name]: value})
}
    

return (
     <OrderDiv onSubmit={handleSubmit}>
        <HeaderSection>
        <div className ="header">Teknolojik Yemekler</div>
        <p className="home-order">Anasayfa / Sipariş Ver</p>
        </HeaderSection>
      <Content>
        <div className="content-section">
        <h2>Position Absolute Acı Pizza</h2>
        <p className="price">85.50₺</p>
        <p className="point">4.9 (200)</p>
        <p className="comment">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre.<br /> Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, <br />
          daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, <br />
          düzeltilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.<br /> Küçük bir pizzaya bazen pizetta denir.
        </p>
        </div>
      </Content>

      <MiddleSection>
      <div  className="size-dough">

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
      </div>
      </MiddleSection>

      <ToppingsSection>
        <h3>Ekstra Malzemeler</h3>
        <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
       {toppings.map((item, index) => (
        <label key={index}>
            <input type="checkbox" name={item} onChange={handleChange} />
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
          Seçimler <span className="secimler">25.00₺</span>
        </p>
        <p className="total">
          Toplam <span>110.50₺</span>
        </p>
      </OrderSummary>

      <SiparisVerButon disabled={!isValid}>Sipariş Ver</SiparisVerButon>
      
    </OrderDiv>
  );
};

export default Order;
