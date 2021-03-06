import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import Media from "react-media";

const Blog = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  font-size: 18px;

  .blog-cont {
    width: 100%;
    max-width: 1400px;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 20px 0;
    color: #0067b8;
    font-size: 22px;
  }
`;

const BlogPage4 = ({}) => {
  return (
    <Media
      queries={{
        sm: "(max-width: 720px)",
      }}
    >
      {(size) => (
        <>
          <Header />
          <div style={{ position: "relative" }}>
            <img
              height={300}
              src={require("../../images/blog_images/imgpsh_fullsize_anim.jpeg")}
              alt="img"
              style={{
                position: "absolute",
                zIndex: 1,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
            <div
              style={{
                width: "100%",
                height: "300px",
                background: `url(${require("../../images/blog_images/girls.png")})`,
                filter: "grayscale(50%) blur(2px) opacity(50%)",
              }}
            />
          </div>
          <Blog>
            <div className="blog-cont">
              <div
                style={{
                  display: "flex",
                  width: "calc(100% - 40px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#f5f5f5",
                  margin: "40px 0 20px 0",
                  padding: "0 20px",
                }}
              >
                <h2
                  className="title"
                  style={{ margin: "40px 0", fontSize: "26px" }}
                >
                  Женщины в ИТ: с чего начать свой путь
                </h2>
                <div
                  style={{
                    width: "100%",
                    lineHeight: 1.5,
                    margin: "0 0 20px 0",
                  }}
                >
                  С каждым годом доля женщин в ИТ стремительно увеличивается. На
                  текущий момент количество женщин в этой нише составляет около
                  20%, в большей мере это такие должности как HR, QA Engineer,
                  Software Engineer. <br />
                  Героини нашей статьи изначально не планировали реализовывать
                  себя в сфере ИТ, каждая по-своему пришла к этой области и
                  поняла, почему она ей интересно. Но есть между ними и кое-что
                  общее, а именно желание быть в теме, развиваться вместе с
                  окружающим миром и чувствовать свой личный вклад в
                  стремительно меняющемся мире.
                </div>

                {size.sm && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "300px",
                      height: "300px",
                      background: `url(${require("../../images/blog_images/ira.jpg")}) no-repeat center`,
                      backgroundSize: "cover",
                    }}
                  />
                )}
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    margin: "20px  0",
                  }}
                >
                  {!size.sm && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        minWidth: "300px",
                        height: "300px",
                        margin: "0 20px 20px 0",
                        background: `url(${require("../../images/blog_images/ira.jpg")}) no-repeat center`,
                        backgroundSize: "cover",
                      }}
                    />
                  )}
                  <div>
                    <b>Ирина, 36 лет – Consultant CRM</b>
                    <br />
                    <br />
                    <b>С чего начался твой интерес к ИТ сфере?</b> <br />
                    <br />У меня этот интерес возник с первого класса. Уже тогда
                    я пробовала писать простые програмки на бейсике. Началось
                    всё с того, что папа подарил мне книжку. Не знаю зачем он
                    мне её подарил, но она мне очень понравилась. Если я не
                    ошибаюсь, книга называлась «Бейсик для детей.
                    <br />
                    <br />
                    <b>
                      Какое твое впечатление от курсов при Dynamics Education? В
                      каком году ты их закончила?
                    </b>
                    <br />
                    <br />Я закончила обучение осенью 2017 года; в целом
                    впечатление позитивное. Очень импонировал наш преподаватель,
                    вся группа была от него в восторге. Реальные впечатления от
                    курсов оказались лучше, чем ожидания. <br />
                    <br />
                    <b>
                      {" "}
                      Как ты считаешь какое отношение к девушкам в ИТ сфере?
                    </b>{" "}
                    <br />
                    <br />
                    Мне кажется, что стереотипы и дискриминация имеют место быть
                    в любой сфере. И зависит это только от человеческого
                    воспитания. Лично я с таким не сталкивалась. Меня всегда
                    больше волновал тот аспект, что я пришла в эту сферу без
                    достаточного опыта работы и навыков за плечами, а для меня
                    важно разбираться в том, что я делаю.
                    <br />
                    <br />
                    <b>С какими первыми сложностями ты столкнулась?</b> <br />
                    <br />
                    Отсутствие необходимых знаний.
                    <br />
                    <br />
                    <b>Чем ты увлекаешься помимо работы?</b> <br />
                    <br />
                    Активные виды спорта, такие как велосипед и лыжи. Рукоделие,
                    много всего увлекает.
                    <br />
                    <br />
                    <b>
                      Советы для тех, кто хочет освоить ИТ сферу. С чего
                      начинать?
                    </b>{" "}
                    <br />
                    <br />
                    Если есть желание работать – это главное. Я считаю, что
                    никогда не поздно попробовать. Когда я решила испытать себя
                    в ИТ, то отказалась от собственного бизнеса, магазина
                    карнавальных костюмов. Хотя все удивлялись как же так, ведь
                    вести свой собственный бизнес – это круто! <br />
                    <br /> И всё-таки осваивать ИТ сферу нужно чем раньше, тем
                    лучше. Не нужно ждать, нужно действовать. Должно быть
                    желание, но не из разряда «какие хорошие зарплаты в ИТ»,
                    должно быть желание именно работать и развиваться в этом.
                    Узнавать что-то новое. ИТ – это та сфера, которая поражает
                    своей динамикой развития. В своем собственном бизнесе я не
                    чувствовала, что развиваюсь… ну закупки, ну какие фичи новые
                    придумывать надо в плане маркетинга и на этом все, как-то
                    очень скудно. А вот в ИТ сфере всё так стремительно
                    развивается, ты постоянно должен быть в тонусе и должен
                    учится чему-то новому.
                    <br />
                    <br />
                    <b>
                      О чем ты мечтаешь? Какие вершины ещё хочешь покорить в
                      карьерном плане?
                    </b>{" "}
                    <br />
                    <br />
                    Пока что я чувствую себя джуниором и мне хочется досконально
                    изучить CRM, насколько это возможно. Хочу научится управлять
                    проектами в полном смысле этого слова. А дальше будет видно.
                    <br />
                    <br />
                  </div>
                </div>

                {size.sm && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      minWidth: "300px",
                      height: "300px",
                      background: `url(${require("../../images/blog_images/tania.jpg")}) no-repeat center`,
                      backgroundSize: "cover",
                    }}
                  />
                )}
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    margin: "20px  0",
                  }}
                >
                  {!size.sm && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        minWidth: "300px",
                        height: "300px",
                        margin: "0 20px 20px 0",
                        background: `url(${require("../../images/blog_images/tania.jpg")}) no-repeat center`,
                        backgroundSize: "cover",
                      }}
                    />
                  )}
                  <div>
                    <b>Татьяна, 26 лет – Developer</b>
                    <br />
                    <br />
                    <b>С чего начался твой интерес к ИТ сфере?</b> <br />
                    <br />
                    Видимо стоит начать с того, что по образованию я инженер
                    прочнист и два года работала по профессии, рассчитывала
                    самолёты на прочность. Работа достаточно интересная, но в
                    какой-то момент я поняла, что в я не задействую все знания,
                    которые у меня есть, даже на половину. Собственно, это
                    заставило меня остановится и оглянуться по сторонам. Окей,
                    что же сейчас развивается? Я, как и любой другой человек
                    увидела, что мы живем в цифровом веке и развивается сейчас
                    именно сфера ИТ. Где я собственно и решила применить свои
                    знания. Как сейчас чувствую, не ошиблась
                    <br />
                    <br />
                    <b>
                      Какое твое впечатление от курсов при Dynamics Education?
                    </b>
                    <br />
                    <br />
                    Обучение я закончила зимой 2018 года. На курсах было много
                    интересной и полезной информации. У нас был замечательный
                    ментор и это стало толчком для моего дальнейшего
                    самостоятельного продвижения. <br />
                    <br />
                    <b>
                      {" "}
                      Как ты считаешь какое отношение к девушкам в ИТ сфере?
                    </b>{" "}
                    <br />
                    <br />
                    Сексисткие шуточки пролетают очень часто. Но по отношению к
                    себе никакой дискриминации я не наблюдаю, все зависит от
                    твоих профессиональных качеств, даже есть некоторые плюсы
                    того, что ты девушка, потому что можно больше поспрашивать,
                    больше потупить, ребята прощают.
                    <br />
                    <br />
                    <b>С какими первыми сложностями ты столкнулась?</b> <br />
                    <br />
                    Первые сложности были связаны с плохим знанием бизнес логики
                    системы. В начале это было проблемой. Но ощущение, которые
                    возникают после преодоления препятствий незабываемые. Из
                    серии: «Я герой, я это сделала!».
                    <br />
                    <br />
                    <b>Чем ты увлекаешься помимо работы?</b> <br />
                    <br />
                    Помимо работы, как бы это не звучало пафосно, я учусь.
                    Стараюсь следить за новыми тенденциями. К примеру, пару
                    недель назад я получила сертификат с курса по «Блокчейн
                    технологиям». Помимо этого, спорт, друзья, фильмы, что
                    странно не увлекаюсь играми, но вполне возможно, что это
                    пока что.
                    <br />
                    <br />
                    <b>
                      Советы для тех, кто хочет освоить ИТ сферу. С чего
                      начинать?
                    </b>{" "}
                    <br />
                    <br />
                    Советчиков здесь много, стоит только открыть dou.ua. Cначала
                    стоит определиться, что тебе на само деле нравится, потому
                    что сфера которую привыкли называть двумя словами – ИТ, на
                    самом деле очень обширная. Поэтому сначала research на тему
                    «Что я хочу делать?», а потом уже всё остальное.
                    <br />
                    <br />
                    <b>
                      О чем ты мечтаешь? Какие вершины ещё хочешь покорить в
                      карьерном плане?
                    </b>{" "}
                    <br />
                    <br />
                    Хочу оставаться на острие ножа технологий. Сейчас
                    развивается много всего, развивается быстро, хочется не
                    потеряться в этом большом мире. Просто быть современным
                    высококлассным специалистом.
                    <br />
                    <br />
                  </div>
                </div>

                {size.sm && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      minWidth: "300px",
                      height: "300px",
                      background: `url(${require("../../images/blog_images/Nina.jpg")}) no-repeat center`,
                      backgroundSize: "cover",
                    }}
                  />
                )}
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    margin: "20px  0",
                  }}
                >
                  {!size.sm && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        minWidth: "300px",
                        height: "300px",
                        margin: "0 20px 20px 0",
                        background: `url(${require("../../images/blog_images/Nina.jpg")}) no-repeat center`,
                        backgroundSize: "cover",
                      }}
                    />
                  )}

                  <div>
                    <b>Нина, 33 лет – Project manager</b>
                    <br />
                    <br />
                    <b>С чего начался твой интерес к ИТ сфере?</b> <br />
                    <br />
                    В определённый период моей жизни большинство людей в моем
                    окружении были связанных с ИТ. По вечерам мы часто
                    собирались и обсуждали современные тенденции, новинки.
                    Именно так, мои друзья пробудили во мне интерес к этой
                    сфере.
                    <br />
                    <br />
                    <b>
                      Какое твое впечатление от курсов при Dynamics Education? В
                      каком году ты их закончила?
                    </b>
                    <br />
                    <br />
                    В мае 2016 года я закончила курсы при UDS Consulting. В
                    начале было очень сложно, я была не готова к получению
                    технической информации. Но у меня была хорошая группа
                    поддержки, другие учащиеся со мной люди, по вечерам, когда я
                    садилась выполнять задания, они отвечали на мои вопросы,
                    помогали мне. Благодаря им всё получилось. И всё же было
                    тяжело, но сомнений в выборе не было. <br />
                    <br />
                    <b>
                      {" "}
                      Как ты считаешь какое отношение к девушкам в ИТ сфере?
                    </b>{" "}
                    <br />
                    <br />
                    Мне кажется стереотипов на счёт девушек в ИТ давно уже нет.
                    При этом у девушек, на мой взгляд, более развитый
                    эмоциональный интеллект. Поэтому они часто находят лучший
                    подход с клиентами, командой, руководством. Это существенная
                    составляющая в организации команды, в её координировании. А
                    вообще не важно мужчина ты или женщина, главный стопер во
                    всём – это лень! Хочешь в чем-то разобраться – действуй!
                    <br />
                    <br />
                    <b>С какими первыми сложностями ты столкнулась?</b> <br />
                    <br />
                    Сложности были с техническим словарем. Очень много терминов,
                    словесных оборотов, которые применяться только в ИТ сфере.
                    Мне казалось, что я разговариваю на другом языке. Но
                    большинство сложностей зависят от самого человека, это
                    какие-то его страхи, которые останавливают на пути
                    реализации.ла!».
                    <br />
                    <br />
                    <b>Чем ты увлекаешься помимо работы?</b> <br />
                    <br />
                    Мне нравится пробовать себя в разных сферах. Вообще меня
                    очень вдохновляет и расслабляет рисование. Спорт, катание на
                    велосипеде по живописным местам – это определённая
                    перезагрузка для меня, после которой понимаешь, как же мир
                    прекрасен и как важно уметь радоваться жизни в её
                    ежеминутном проявлении.
                    <br />
                    <br />
                    <b>
                      Советы для тех, кто хочет освоить ИТ сферу. С чего
                      начинать?
                    </b>{" "}
                    <br />
                    <br />
                    Начинать нужно с правильной мотивации. Необходимо поставить
                    и детально расписать свои цели, как ты можешь их достичь и
                    двигаться в этом направлении. Самоорганизация, самоконтроль,
                    самоменеджмент – всё это важно. Надо также советоваться с
                    людьми, которые уже работают в этой сфере, существует
                    множество форумов, конференций, семинаров, где можно
                    поспрашивать и узнать что-то новое для себя.
                    <br />
                    <br />
                    <b>
                      О чем ты мечтаешь? Какие вершины ещё хочешь покорить в
                      карьерном плане?
                    </b>{" "}
                    <br />
                    <br />
                    Хочется просто быть полезной людям. Хочется понимать, что
                    твой труд важен. Сейчас у меня прекрасные клиенты, которые
                    ценят то, что мы делаем и я хочу, чтобы в будущем это
                    сохранилось. Чтобы ценность моей работы в команде была
                    ощутимой для меня. И, конечно же, хочется идти в ногу со
                    временем.
                    <br />
                    <br />
                  </div>
                </div>
                <div style={{ width: "100%" }}>
                  Интервью брала: Мацёха Татьяна
                  <br />
                  <br />
                  Женщины в IT: портрет, планы, мотивация. – Режим доступа:{" "}
                  <a href="https://dou.ua/lenta/articles/it-woman/">
                    Dou IT Woman
                  </a>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </Blog>
          <Footer />
        </>
      )}
    </Media>
  );
};

export default BlogPage4;
