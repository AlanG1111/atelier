import React from "react";
import {
  Price,
  PriceBlock,
  PriceContainer,
  PriceElement,
  PriceTitle,
} from "./styles";

const Prices = () => {
  return (
    <div className='main-content' id='prices'>
      <h2>НАШІ ЦІНИ</h2>
      <PriceContainer>
        <PriceBlock>
          <PriceElement>
            <PriceTitle>
              Вкоротити джинси зі збереженням потертого низу
            </PriceTitle>
            <Price>від 100</Price>
          </PriceElement>
          <PriceElement>
            <PriceTitle>Вшити джинси по шву сидіння</PriceTitle>
            <Price>від 100</Price>
          </PriceElement>
          <PriceElement>
            <PriceTitle>Штопання джинсів, один фрагмент</PriceTitle>
            <Price>від 100</Price>
          </PriceElement>
          <PriceElement>
            <PriceTitle>Вкоротити рукава піджака з двома петельками</PriceTitle>
            <Price>від 100</Price>
          </PriceElement>
          <PriceElement>
            <PriceTitle>Замінити застібку “блискавку” в джинсах</PriceTitle>
            <Price>від 100</Price>
          </PriceElement>
          <PriceElement>
            <PriceTitle>Вкоротити штани швом із прихованим зрізом</PriceTitle>
            <Price>від 100</Price>
          </PriceElement>
        </PriceBlock>
        <PriceBlock>
          <PriceElement>
            <PriceTitle>Вкоротити класичні штани зі стрічкою</PriceTitle>
            <Price>від 100</Price>
          </PriceElement>
          <PriceElement>
            <PriceTitle>Вшити піджак по рельєфах зі шліцами</PriceTitle>
            <Price>від 100</Price>
          </PriceElement>
          <PriceElement>
            <PriceTitle>Пришити ґудзик на виріб</PriceTitle>
            <Price>від 100</Price>
          </PriceElement>
          <PriceElement>
            <PriceTitle>
              Замінити застібку-блискавку в сукні на підкладці
            </PriceTitle>
            <Price>від 100</Price>
          </PriceElement>
          <PriceElement>
            <PriceTitle>Ремонт розрізу на спідниці</PriceTitle>
            <Price>від 100</Price>
          </PriceElement>
          <PriceElement>
            <PriceTitle>Вкоротити низ прямої сукні</PriceTitle>
            <Price>від 100</Price>
          </PriceElement>
        </PriceBlock>
      </PriceContainer>
    </div>
  );
};

export default Prices;
