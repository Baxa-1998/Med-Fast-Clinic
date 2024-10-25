import React from 'react';
import './description.scss';
import Image from 'next/image';

export default function Description() {
  return (
    <section className="description">
      <div className="description__img">
        <Image width={412} height={412} src={'/assets/doctor.png'} alt="doctor" />
        <h3>
          Захаров Терентий <br />
          <span>Александрович</span>
        </h3>
      </div>
      <div className="description__info">
        <h2>
          Клиника «Med Fast Clinic»: <span>опытные врачи, <br /> хорошие условия и доступные цены</span> 
        </h2>
        <p>
          Алкогольная и наркотическая зависимость – одна из основных возможных причин смерти во всех
          странах. Чтобы освободиться от проблемы, <br /> больной должен получить профессиональную помощь.
          Наркологическая клиника «Запоям – нет» в Москве работает с пациентами, независимо <br /> от
          степени тяжести их состояния, и разрабатывает индивидуальное эффективное лечение, которое
          гарантированно избавит от аддиктивного <br /> состояния.
        </p>
        <h3>Выбор клиники</h3>
        <p>
          Зависимость – это психическое заболевание, при котором у человека происходит расстройство
          воли, мешающее справиться с компульсивной <br /> тягой к этанолу. Справиться с ним
          самостоятельно, не обращаясь к наркологу, можно только на первой стадии алкоголизма. Но
          при развитии <br /> абстиненции, когда психологическая тяга осложняется физической, требуется
          обратиться в центр помощи зависимым. <br /> Квалифицированные врачи принимают пациентов в крупных
          и маленьких городах в государственных и платных наркологических клиниках. <br /> Если учреждение
          имеет лицензию, оно обязано опираться при лечебном процессе на клинические рекомендации
          Минздрава, в которые <br /> входит описание всех доказавших действенность и безопасность методов.
        </p>
        <h4>
        Но в коммерческих центрах терапия проходит:

        </h4>
        <ul>
          <li>Анонимно</li>
          <li>C обеспечением высокого уровня комфорта</li>
          <li>C применением современных методик и хороших препаратов</li>
        </ul>
        <p>Кроме приемного отделения и стационара, в частных наркологических клиниках есть реабилитационный центр и служба выезда специалистов <br /> на дом. Помощь оказывается круглосуточно, при этом пациент может связаться с медиком в любое время суток для получения дополнительной информации о лечении.
        </p>
      </div>
    </section>
  );
}
