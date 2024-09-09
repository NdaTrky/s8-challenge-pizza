import React, { useState } from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import styled from "styled-components";


const OrderDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: black; 
`;

const Header = styled.header`
  background-color: red;
  padding: 80px 80px 70px 80px;
  color: black;
position: relative;
  top: 0;
  h1{
 
}
`;

const Content = styled.div`
  margin-top: 150px;
`;

const Order = () => {
    const [selectedToppings, setSelectedToppings] = useState([]);

     const toppings = [
        'Pepperoni',
        'Mushrooms',
        'Onions',
        'Olives',
        'Green Peppers',
        'Cheese',
        'Sausage',
        'Bacon',
        'Tomatoes',
        'Garlic',
        'Spinach',
        'Chicken'
      ];

    
  
  
  
  
  
    return (
    <OrderDiv>
      <Header>
        <h1>Teknolojik Yemekler</h1>
        <p>AnaSayfa / Sipariş Oluştur</p>
      </Header>
      <Content>
        <h2>Position Absolute Acı Pizza</h2>
        <p className="price">85.50₺</p>
        <p className="point">4.9 (200)</p> 
        <p>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.<br/> Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, <br/>  daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, <br/> düzeltilmiş mayalı buğray bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.<br/>  Küçük bir pizzaya bazen pizetta denir. </p>
      </Content>
      <div>
        <h3>Boyut Seç *</h3>
        <input type="radio" id="size" name='size' />
        <label htmlFor="small">Küçük</label>
        
        <input type="radio" id="medium" name='size' />
        <label htmlFor="small">Orta</label>
        
        <input type="radio" id="large" name='size' />
        <label htmlFor="small">Büyük</label>
      </div>

      <div>
        <h3>Hamur Seç *</h3>
        <select>
            <option value="hamur-kalinligi">Hamur Kalınlığı</option>
            <option value="orta">İnce Hamur</option>
            <option value="kalin">Kalın Hamur</option>
        </select>
      </div>

      
    <div>
            <h3>Ekstra Malzemeler</h3>
            <label>
    <input type="checkbox" name="pepperoni" value="Bisiklet"/>Pepperoni
        </label>
        <label>
    <input type="checkbox" name="domates" value="Bisiklet"/>Domates
        </label>
        <label>
    <input type="checkbox" name="biber" value="Bisiklet"/>Biber
        </label>
        <label>
    <input type="checkbox" name="ananas" value="Bisiklet"/>Ananas
        </label>
        <label>
    <input type="checkbox" name="tavukIzgara" value="Bisiklet"/>Tavuk Izgara
        </label>
        </div>
    
        <div>
        <h3>Sipariş Notu</h3>
        <input type="text" name='siparis-notu' placeholder='Siparişine eklemek istediğin bir not var mı?' />
      </div>
    
<hr />
    <div>
       <ButtonGroup>
          <Button color="primary">-</Button>
          <Button color="primary">1</Button>
          <Button color="primary">+</Button>
        </ButtonGroup>
        </div>

   
<div>
    <h4>Sipariş Toplamı</h4>
    <p>Seçimler 25.00₺</p>
    <p>Toplam 110.50₺</p>
</div>
    
    </OrderDiv>
  );
}

export default Order;
