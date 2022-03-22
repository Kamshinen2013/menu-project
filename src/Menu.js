import React from 'react';

const Menu = ({items}) => {
  return <main className='section-center'>
        {items.map((menuItem)=>{
          const {id, title, img, desc, price} = menuItem;
          return <article key={id} className='menu-item'>
              <img src={img} alt={title} className='photo'/>
              <div className='itm-info'>
                <header>
                  <h4>{title}</h4>
                  <h4> ₦{price}</h4>
                  </header>
                  <p className='item-text'>{desc}</p>
              </div>
          </article>
          
        })}
  </main>
};

export default Menu;
