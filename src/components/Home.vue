<template>
  <div>
    <div class="jumbotron text-center bg-dark text-light top-header">
        <a href="https://iteam.ru/" target="_blank"><img src="../assets/logo.png" class="img-fluid"></a>
        <h1 class="display-4 mt-5">База знаний &laquo;Русский менеджмент 2018&raquo;</h1>
        <h3>58 мастер-классов, 170+ часов обучающего видео</h3>
        <hr class="my-4" style="background-color:#555;">
        <h3 class="mt-4"><span class="font-weight-bold">Самые нужные мастер-классы в одной библиотеке</span><br>Горячие цены для самых быстрых:</h3>
        <div id="countdown1" class="my-4 font-weight-bold"></div>
        <h1><small style="font-size:70%;"><del>128&thinsp;000 рублей</del></small> <span class="badge badge-success">49&thinsp;000~</span></h1>
        <a class="btn btn-danger btn-lg font-weight-bold mt-4" :href="paymentUrl" role="button">ПОЛУЧИТЬ СЕЙЧАС</a>
    </div>

    <div class="container-fluid">

        <div class="container text-center my-5">
            <div class="row">
                <div class="col">
                    <h2>Незаменимые знания для собственников бизнеса и топ-менеджеров</h2>
                    <h4>Курсы развивают следующие навыки:</h4>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-sm-4">
                    <div class="card bg-light">
                        <div class="card-body">
                            <i class="material-icons md-48 font-weight-bold text-danger mb-2" style="font-size: 4em;">trending_up</i>
                            <p>Создания стратегии и стратегического управления</p>
                        </div>
                    </div>    
                </div>
                <div class="col-sm-4">
                    <div class="card bg-light">
                        <div class="card-body">
                            <i class="material-icons md-48 font-weight-bold text-danger mb-2" style="font-size: 4em;">business_center</i>
                            <p>Построения системы управления бизнес-процессами</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card bg-light">
                        <div class="card-body">
                            <i class="material-icons md-48 font-weight-bold text-danger mb-2" style="font-size: 4em;">mood</i>
                            <p>Совершенствования системы мотивации сотрудников компании</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm-6">
                    <div class="card bg-light">
                        <div class="card-body">
                            <i class="material-icons md-48 font-weight-bold text-danger mb-2" style="font-size: 4em;">school</i>
                            <p>Организации контроллинга, управления эффективностью</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card bg-light">
                        <div class="card-body">
                            <i class="material-icons md-48 font-weight-bold text-danger mb-2" style="font-size: 4em;">star_border</i>
                            <p>Формирования профессиональной управленческой команды</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row bg-dark my-5 cards-header">
            <div class="col">
                <div class="container my-5">
                    <div class="row text-center">
                        <div class="col">
                            <h2>Получите VIP-доступ к полной базе знаний по управлению:</h2>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-lg-4 col-md-6 mb-3">
                            <div class="card h-100 border-light shadow">
                                <div class="card-header bg-dark text-light"><p class="font-weight-bold m-0 text-accent">Создайте корпоративную библиотеку для обучения персонала</p></div>
                                <div class="card-body">
                                    <p class="card-text"><strong>Готовая корпоративная библиотека</strong> для обучения и развития сотрудников: более 140 часов видео-курсов по управлению на вашем корпоративном сервере.</p>
                                    <p class="card-text">Сотрудники поймут, как устроена система управления компанией, появится четкое видение, как управлять компанией в разы эффективнее.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-3">
                            <div class="card h-100 border-light shadow">
                                <div class="card-header bg-dark text-light"><p class="font-weight-bold m-0 text-accent">Внедрите комплект готовых шаблонов и документов для упрощения работы</p></div>
                                <div class="card-body">
                                    <p class="card-text">Практично. Доступно. Объясняем сложные вещи простым понятным языком без заумных терминов.</p>
                                    <p class="card-text">Минимум теории - максимум кейсов и примеров из практики российских компаний.</p>
                                    <p class="card-text"><strong>Готовые рабочие шаблоны, документы и инструкции.</strong> Внедряйте сразу!</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 mb-3">
                            <div class="card h-100 border-light shadow">
                                <div class="card-header bg-dark text-light"><p class="font-weight-bold m-0 text-accent">Разработайте индивидуальные программы для развития ТОП-менеджеров</p></div>
                                <div class="card-body">
                                    <p class="card-text"><strong>Занимаетесь подготовкой кадрового резерва?</strong></p>
                                    <p class="card-text">По отзывам наших участников, такую информацию не дают на программах MBA. На материалах iTeam обучаются сотрудники российских и международных консалтинговых компаний.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container my-5">
            <div class="row text-center mt-5">
                <div class="col">
                    <h2 class="font-weight-bold">ЭТО ТОГО СТОИТ</h2>
                    <h4>58 практических мастер-классов в Базе знаний:</h4>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col">

                    <div class="card shadow-lg">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/img/unlim/mk_1.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/landing/template/nalogovyi-gambit.html" target="_blank">
                                            <span class="badge badge-dark">1</span>&nbsp;Налоговый гамбит. Как взаимодействовать с налоговой, чтобы не попасть в зону риска
                                        </a>
                                    </h5>
                                    <p>Любая компания может попасть в зону налогового риска. Доначисления налоговиков могут разрушить бизнес, казавшийся нерушимым. Бабурина Ирина — эксперт по налоговой безопасности, расскажет на мастер-классе:</p>
                                    <ul>
                                        <li>как правильно выстроить отношения с налоговиками и не сообщать о себе лишней информации;</li>
                                        <li>как использовать примеры из судебной практики по налоговым спорам в своих интересах.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/landing/template/img/mk30.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/landing/template/fin-uchet-vnedrenie.html" target="_blank">
                                            <span class="badge badge-dark">2</span>&nbsp;Внедрение управленческого финансового учета: шаг за шагом
                                        </a>
                                    </h5>
                                    <p>Подробно рассмотрены все этапы проекта внедрения системы управленческого финансового учета: <strong>готовый пошаговый алгоритм проектирования</strong> и внедрения автоматизированной системы управленческого финансового учета.</p>
                                    <strong>Дополнительные материалы:</strong>
                                    <ul>
                                        <li>презентация в формате PDF;</li>
                                        <li>видеозапись мастер-класса.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/landing/template/img/mk_uchet.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/landing/template/fin-uchet-systema-podderzhki-resheniy.html" target="_blank">
                                            <span class="badge badge-dark">3</span>&nbsp;Управленческий финансовый учет: система поддержки решений
                                        </a>
                                    </h5>
                                    <p>
                                        Как провести аудит финансовой системы?<br>
                                        Как изменить систему учёта, чтобы получать внятную информацию о бизнесе?<br>
                                        Как избежать типичных ошибок, совершаемых многими управленцами при создании системы управленческого финансового учёта? <strong>Готовое практическое руководство к действию.</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/landing/template/img/marketing_plan.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/landing/template/razrabatyvaem-plan-marketinga-na-2018-god.html" target="_blank">
                                            <span class="badge badge-dark">4</span>&nbsp;Разрабатываем план маркетинга на 2018 год
                                        </a>
                                    </h5>
                                    <p>Маркетинг — это прежде всего ваша стратегия продаж. Именно поэтому, после определения целей компании, в первую очередь создается план маркетинга. Только после этого формируются планы продаж, производства, закупок и все остальные. На мастер-классе мы подробно рассматриваем порядок разработки плана маркетинга компании.</p>
                                    <p><strong>Дополнительные материалы:</strong> комплект готовых шаблонов, презентация PDF и видеозапись.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/landing/template/img/mk1.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/landing/template/stavim-celi-kompanii-na-2018-god.html" target="_blank">
                                            <span class="badge badge-dark">5</span>&nbsp;Ставим цели компании на 2018 год
                                        </a>
                                    </h5>
                                    <p>Планирование любого уровня начинается с постановки правильных целей. Как организовать работу управленческой команды для определения целей компании на год? Как провести продуктивное обсуждение и оформить результаты работы? Вы разобрались с целями, что делать дальше?</p>
                                    <p><strong>Дополнительные материалы:</strong> регламент рабочей сессии по определению целей, презентация и готовый шаблон документа «Цели компании на 2018 год».</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/landing/template/img/korobka_analiz.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/landing/template/strategicheskii-analiz-problem-kompanii.html" target="_blank">
                                            <span class="badge badge-dark">6</span>&nbsp;Стратегический анализ проблем компании
                                        </a>
                                    </h5>
                                    <p>Не знаете, с чего начать разработку стратегии компании? Начните с этого мастер-класса! В программе: анализ внутренних и внешних ограничений и рисков, построение карты проблемной области и определение главных стратегических проблем компании.</p>
                                    <p><strong>Дополнительно:</strong> готовый комплект рабочих материалов.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/landing/template/img/%D0%A3%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0%D0%BC%D0%B8%20(9).png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/landing/template/11practic_tehobuchenija_uprdengami.html" target="_blank">
                                            <span class="badge badge-dark">7</span>&nbsp;Практики делятся опытом: как эффективно управлять денежными средствами
                                        </a>
                                    </h5>
                                    <p>
                                        «О чем бы вы ни говорили, речь всегда идет о деньгах ...» . Как эффективно управлять финансами компании, если это ваша обязанность?<br>
                                        Как выбрать эффективную стратегию управления деньгами? Как обеспечить наличие денег на счетах для проведения платежей?<br>
                                        На мастер-классе разбираем кейсы компаний из разных сфер деятельности.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/img/unlim/mk_8.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/learn/webinar/secret_weapon_2" target="_blank">
                                            <span class="badge badge-dark">8</span>&nbsp;Измените подход к мотивации ваших сотрудников
                                        </a>
                                    </h5>
                                    <p>
                                        Кнут и пряник далеко не самые эффективные методы управления людьми.<br>
                                        Есть новый альтернативный подход к вовлечению людей в трудовую деятельность, который основан на многочисленных исследованиях в области психологии и практике организаций.<br>
                                        Возьмите на вооружение опыт компаний, сумевших добиться выдающихся результатов благодаря эффективному использованию энергии и интеллекта своих сотрудников.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/img/unlim/mk_9.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/learn/webinar/mysli-globalno-dejstvuj-lokalno" target="_blank">
                                            <span class="badge badge-dark">9</span>&nbsp;Мысли глобально, действуй локально
                                        </a>
                                    </h5>
                                    <p>
                                        Увидеть, каким станет наше будущее, не так уж сложно. Ведь будущее живет с нами уже сегодня. Все, что будет определять жизнь людей через 10-20 лет, существует в настоящее время в виде тенденций, инновационных проектов, прорывных технологий, опытных образцов продукции будущего. Нам остается только представить, каким станет наш мир, когда все это войдет в нашу жизнь как повседневная реальность.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/img/unlim/mk_10.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/learn/webinar/offset-investment" target="_blank">
                                            <span class="badge badge-dark">10</span>&nbsp;Окупаются ли ваши инвестиции в развитие? Считаем и анализируем
                                        </a>
                                    </h5>
                                    <p>
                                        Как научится анализировать эффективность инвестиций в развитие бизнеса? Как правильно учитывать инвестиционные расходы? Как управлять инвестиционной деятельностью, чтобы добиваться поставленных целей: критерии, инструменты, выводы?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/img/unlim/mk_11.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/learn/webinar/indirect-cost-allocation" target="_blank">
                                            <span class="badge badge-dark">11</span>&nbsp;Методы распределения косвенных расходов
                                        </a>
                                    </h5>
                                    <p>
                                        Какие расходы следует относить на продукты и в какой пропорции? Это темы непрекращающихся дискуссий между финансистами, маркетологами и производственниками. Как определять драйверы разнесения расходов? Какие методы разнесения расходов применимы в тех или иных ситуациях?<br>
                                        Разбираем проверенные инструменты: как на практике реализовать методы распределения косвенных расходов.                                            
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/img/unlim/mk_12.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/learn/webinar/project_man" target="_blank">
                                            <span class="badge badge-dark">12</span>&nbsp;Управление проектами: суть дела
                                        </a>
                                    </h5>
                                    <p>
                                        Проектный менеджмент перегружен множеством понятий и методов, мало применимых в практике большинства компаний. Излишнее усложнение этой области управления является серьезным препятствием для большинства менеджеров. На мастер-классе разберем простую и практически применимую концепцию управления проектами, которую сможет применить любая компания.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/img/unlim/mk_13.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/learn/webinar/improve_business" target="_blank">
                                            <span class="badge badge-dark">13</span>&nbsp;Как улучшить бизнес-процессы компании
                                        </a>
                                    </h5>
                                    <p>
                                        Всё, что производит компания, все её продукты и услуги – это результаты бизнес-процессов, то есть последовательность определенных действий с запланированным итогом. Поэтому так важно улучшать бизнес-процессы компании, добиваясь стабильности результатов, большей продуктивности и большей отдачи на затраченные ресурсы. Ответ на вопрос: “Что можно улучшить прямо сейчас, чтобы компания работала эффективнее?”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/img/unlim/mk_14.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/learn/webinar/kak-vyjavit-skrytye-strategicheskie-problemy" target="_blank">
                                            <span class="badge badge-dark">14</span>&nbsp;Как выявить скрытые стратегические проблемы после проведенного анализа
                                        </a>
                                    </h5>
                                    <p>
                                        Дается методика работы управленческой команды по проведению всестороннего анализа стратегических проблем и выявлению направлений, имеющих потенциал развития для компании. 
                                        <strong>Рассматривается практический пример проведения такого анализа.</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/img/unlim/mk_15.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/learn/webinar/org_change_architecture" target="_blank">
                                            <span class="badge badge-dark">15</span>&nbsp;Архитектура организационных изменений
                                        </a>
                                    </h5>
                                    <p>
                                        В проведении организационных изменений есть определенная логика и последовательность, такая же, как при строительстве здания. Нарушение этой логики ведет к неудачам в проектах организационного развития.<br>
                                        Как проводить организационные изменения в компании правильно? Из каких обязательных этапов должен состоять процесс изменения структуры? Вы получите <strong>конкретную практическую методику, отработанную на десятках реальных проектов.</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/img/unlim/mk_16.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/learn/webinar/fast_company" target="_blank">
                                            <span class="badge badge-dark">16</span>&nbsp;Быстрая компания. Как сделать изменения постоянными
                                        </a>
                                    </h5>
                                    <p>
                                        В быстро меняющемся мире компания должна меняться теми же темпами, с которыми происходят изменения в окружающей среде. Это условие выживания. Расскажем, <strong>в каких направлениях необходимо развивать систему управления компанией,</strong> чтобы она стала способна своевременно реагировать на изменения в окружающем мире и быстро проводить необходимые изменения.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/img/unlim/mk_17.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/learn/webinar/organization" target="_blank">
                                            <span class="badge badge-dark">17</span>&nbsp;Организация как система
                                        </a>
                                    </h5>
                                    <p>
                                        Мастер-класс дает основные принципы построения системы управления компанией. Эта модель лежит в основе всех методов и управленческих технологий, применяемых экспертами iTeam при решении задач организационного развития. Этот мастер-класс полезен тем, кто обладает системным мышлением и хочет дойти до понимания сути механизмов управления организациями.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/img/unlim/mk_18.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/learn/webinar/target" target="_blank">
                                            <span class="badge badge-dark">18</span>&nbsp;Целевое управление. BSC, KPI, контроллинг
                                        </a>
                                    </h5>
                                    <p>
                                        Система целевого управления обеспечивает концентрацию усилий всех сотрудников и подразделений компании на достижении ее стратегических целей.<br>
                                        Как преобразовать компанию, плывущую по течению, в целенаправленную систему? Что позволит всей команде действовать результативно и эффективно, как ракета, летящая к цели?                                            
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/img/unlim/mk_19.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/learn/webinar/thrift" target="_blank">
                                            <span class="badge badge-dark">19</span>&nbsp;Как предвидеть и преодолевать кризисы управления
                                        </a>
                                    </h5>
                                    <p>
                                        Все компании рано или поздно сталкиваются с кризисами управления. Закономерности развития организации имеют прямую аналогию с жизненным циклом человека: от младенчества до старости.<br>
                                        Зная эти закономерности, вы можете понимать, <strong>что конкретно нужно делать для вывода компании на новый уровень развития,</strong> какой должна быть последовательность шагов, и почему нужно действовать именно так.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/img/unlim/mk_20.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/learn/webinar/strategicheskij-analiz-trendov" target="_blank">
                                            <span class="badge badge-dark">20</span>&nbsp;Стратегический анализ трендов
                                        </a>
                                    </h5>
                                    <p>
                                        Как повлияют на положение компании изменения в политике, экономике, технологиях, обществе?<br>
                                        Как выявлять и анализировать значимые для бизнеса изменения в ходе разработки стратегии компании?<br>
                                        В качестве примеров мы рассматриваем ряд действующих сегодня трендов и обсуждаем их влияние на деятельность российских компаний.                                            
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/img/unlim/mk_21.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/learn/webinar/strategicheskij-vybor" target="_blank">
                                            <span class="badge badge-dark">21</span>&nbsp;Как осуществляется стратегический выбор и принимаются стратегические решения
                                        </a>
                                    </h5>
                                    <p>Как принимать стратегические решения? Какие факторы необходимо учитывать при разработке долгосрочной стратегии развития организации? Как стимулировать креативность при поиске нестандартных решений?</p>
                                    <p><strong>Готовая методика работы управленческой команды по проведению стратегического анализа и выработке ключевых стратегических решений.</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/img/unlim/mk_22.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/learn/webinar/s-chego-nachat-vnedrenie-sistemy-upravlenija-protsessami" target="_blank">
                                            <span class="badge badge-dark">22</span>&nbsp;С чего начать внедрение системы управления процессами?
                                        </a>
                                    </h5>
                                    <p>Мастер-класс освещает вопросы, возникающие в самом начале работы по внедрению процессно-ориентированного подхода к управлению компанией:</p>
                                    <ul>
                                        <li>Как организовать работу команды проекта?</li>
                                        <li>Как определить цель и результаты проекта?</li>
                                        <li>Как разработать план проекта?</li>
                                        <li>Как избежать риски неудачи в таком проекте?</li>
                                        <li>Как организовать управление проектом?</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/img/unlim/mk_23.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/learn/webinar/maturity-of-processes" target="_blank">
                                            <span class="badge badge-dark">23</span>&nbsp;Что такое зрелость процессов и как ее измерять?
                                        </a>
                                    </h5>
                                    <p>
                                        Внедряя процессный подход, необходимо иметь инструмент измерения уровня развития процессов, над совершенствованием которых работают управленцы. Таким инструментом является методика оценки зрелости процессов.<br>
                                        На мастер-классе разберем наиболее эффективный <strong>метод тестирования зрелости процессов, который просто применить в деятельности любой компании.</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/img/unlim/mk_24.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/learn/webinar/manage-risks" target="_blank">
                                            <span class="badge badge-dark">24</span>&nbsp;Что значит управлять рисками и как это делается на практике?
                                        </a>
                                    </h5>
                                    <p>
                                        Каждое наше действие сопряжено с потенциальным риском. Никто не ощущает этого острее, чем предприниматели, собственники компаний. Как управлять рисками компании? Как измерить уровень рисков? Как подойти к созданию системы управления рисками и как организовать эту систему? Как работают методы управления рисками на практике?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/img/unlim/mk_25.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/learn/webinar/kpi_experience" target="_blank">
                                            <span class="badge badge-dark">25</span>&nbsp;Опыт применения KPI: причины успехов и несбывшихся ожиданий
                                        </a>
                                    </h5>
                                    <p>
                                        <strong>Результаты глубокого исследования опыта применения KPI</strong> в компаниях России, Белоруссии и Украины, с результатами которого мы знакомим вас на мастер-классе. Для чего внедряют KPI?С какими трудностями сталкиваются? Оправдываются ли ожидания от внедрения KPI? Какие факторы способствуют успеху внедрения KPI?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/img/unlim/mk_26.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/learn/webinar/organizations-culture" target="_blank">
                                            <span class="badge badge-dark">26</span>&nbsp;Диагностика и изменение организационной культуры
                                        </a>
                                    </h5>
                                    <p>
                                        Что такое организационная культура и почему так важно управлять культурой компании?<br>
                                        Как влияют национальные особенности сотрудников на корпоративную культуру?<br>
                                        Как диагностировать организационную культуру?Как определить, какая организационная культура подходит именно вашей компании? Как проводить изменения культуры компании?                                            
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/img/unlim/mk_27.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/learn/webinar/spiralnaja-dinamika-instrument-strategii" target="_blank">
                                            <span class="badge badge-dark">27</span>&nbsp;Спиральная динамика&nbsp;&mdash; инструмент стратегии
                                        </a>
                                    </h5>
                                    <p>
                                        Спиральная динамика – это теория, объясняющая закономерности формирования человеческих ценностей. Наиболее важная для управленцев грань этой теории – закономерности развития организаций. Разобравшись можно понять, почему заканчиваются неудачами попытки организационных изменений, почему не приживаются те или иные нововведения, какие условия необходимы для безболезненного перехода на новый уровень развития компании.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/img/unlim/mk_28.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/learn/webinar/pozitsionirovanie-kompanii-na-rynke" target="_blank">
                                            <span class="badge badge-dark">28</span>&nbsp;Позиционирование компании на рынке
                                        </a>
                                    </h5>
                                    <p>
                                        Позиционирование компании на рынке – ключевой компонент стратегии. Мастер-класс дает методику разработки позиционирования и практические рекомендации по нахождению сильной дифференцирующей позиции, которая позволит выделить компанию среди множества конкурентов. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2 d-none d-md-block">
                                    <img src="https://iteam.ru/img/unlim/mk_29.png" class="img-fluid">
                                </div>
                                <div class="col-md-10">
                                    <h5 class="card-title font-weight-bold text-accent">
                                        <a href="https://iteam.ru/learn/webinar/inzhenernyj-podhod-k-sozdaniju-sistemy-upravlenija-protsessa" target="_blank">
                                            <span class="badge badge-dark">29</span>&nbsp;Инженерный подход к созданию системы управления процессами
                                        </a>
                                    </h5>
                                    <p>
                                        Разбираем 10 основных типичных ошибок, которые допускают  управленцы при попытках добиться управляемости бизнес-процессов. На практике работаем с подробной дорожной картой, для  успешного применения процессного подхода в управлении компанией.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card shadow-lg mt-2">
                        <div class="card-body text-center">
                            <a data-toggle="collapse" href="#collapseFulllist" data-target="#collapseFulllist" role="button" aria-expanded="false" aria-controls="collapseFulllist">
                                <h3>И еще +29 самых полезных мастер-классов</h3>
                                <button class="btn btn-lg btn-dark mb-0">СМОТРЕТЬ ПОЛНЫЙ ПЕРЕЧЕНЬ</button>
                            </a>
                            <div class="collapse text-left mt-4" id="collapseFulllist">
                                <ol>
                                    <li>ПРАКТИКА ПОСТРОЕНИЯ КОРПОРАТИВНОЙ КУЛЬТУРЫ</li>
                                    <li>СТРАТЕГИЯ ДЛЯ «ЧАЙНИКОВ»</li>
                                    <li>ДВА ПОДХОДА К ВНЕДРЕНИЮ БИЗНЕС-ПРОЦЕССОВ</li>
                                    <li>ТИПИЧНЫЕ ОШИБКИ ВНЕДРЕНИЯ БИЗНЕС-ПРОЦЕССОВ</li>
                                    <li>КАК ПРЕОДОЛЕТЬ СОПРОТИВЛЕНИЕ ИЗМЕНЕНИЯМ</li>
                                    <li>НАЛОГОВЫЙ ГАМБИТ. КАК ВЗАИМОДЕЙСТВОВАТЬ С НАЛОГОВОЙ, ЧТОБЫ НЕ ПОПАСТЬ В ЗОНУ РИСКА</li>
                                    <li>ВНЕДРЕНИЕ УПРАВЛЕНЧЕСКОГО ФИНАНСОВОГО УЧЕТА: ШАГ ЗА ШАГОМ</li>
                                    <li>УПРАВЛЕНЧЕСКИЙ ФИНАНСОВЫЙ УЧЕТ: СИСТЕМА ПОДДЕРЖКИ РЕШЕНИЙ</li>
                                    <li>РАЗРАБОТКА ПЛАНОВ И БЮДЖЕТОВ КОМПАНИИ НА 2018 ГОД</li>
                                    <li>РАЗРАБОТКА ПОКАЗАТЕЛЕЙ KPI</li>
                                    <li>РАЗРАБАТЫВАЕМ ПЛАН МАРКЕТИНГА НА 2018 ГОД</li>
                                    <li>СТАВИМ ЦЕЛИ КОМПАНИИ НА 2018 ГОД</li>
                                    <li>СТРАТЕГИЧЕСКИЙ АНАЛИЗ ПРОБЛЕМ КОМПАНИИ</li>
                                    <li>ПРАКТИКИ ДЕЛЯТСЯ ОПЫТОМ: КАК ЭФФЕКТИВНО УПРАВЛЯТЬ ДЕНЕЖНЫМИ СРЕДСТВАМИ</li>
                                    <li>ТЕХНОЛОГИЯ ОБУЧЕНИЯ УПРАВЛЕНЦЕВ. СЕМЬ ПРОБЛЕМ — ОДНО РЕШЕНИЕ</li>
                                    <li>11 ЭФФЕКТИВНЫХ ПРАКТИК ДЛЯ ОРГАНИЗАЦИИ КОМАНДНОЙ РАБОТЫ В ВАШЕМ БИЗНЕСЕ</li>
                                    <li>КАК СОЗДАТЬ СИСТЕМУ УПРАВЛЕНИЯ ПРОЦЕССАМИ ЗА 4 МЕСЯЦА</li>
                                    <li>УПРАВЛЯТЬ ПО-НАСТОЯЩЕМУ</li>
                                    <li>КАК ОРГАНИЗОВАТЬ ПЛАНИРОВАНИЕ В КОМПАНИИ ОТ СТРАТЕГИЧЕСКОГО ДО ОПЕРАТИВНОГО УРОВНЯ</li>
                                    <li>ИЗМЕНИТЕ ПОДХОД К МОТИВАЦИИ ВАШИХ СОТРУДНИКОВ</li>
                                    <li>ЧЕМУ И КАК НУЖНО ОБУЧАТЬ РУКОВОДИТЕЛЕЙ</li>
                                    <li>КАК ПРАВИЛЬНО РАССЧИТАТЬ СЕБЕСТОИМОСТЬ ПРОДУКТОВ И УСЛУГ</li>
                                    <li>КАК СОЗДАЕТСЯ СТРАТЕГИЯ. КРАТКОЕ РУКОВОДСТВО ПО ПРОЕКТИРОВАНИЮ БУДУЩЕГО</li>
                                    <li>ЧТО ТАКОЕ ROI И КАК РАССЧИТАТЬ ОТДАЧУ НА ИНВЕСТИЦИИ</li>
                                    <li>УПРАВЛЕНИЕ СТРАТЕГИЕЙ КОМПАНИИ С ПОМОЩЬЮ СБАЛАНСИРОВАННОЙ СИСТЕМЫ ПОКАЗАТЕЛЕЙ (BSC)</li>
                                    <li>РАЗРАБОТКА СТРАТЕГИИ ШАГ ЗА ШАГОМ</li>
                                    <li>МЫСЛИ ГЛОБАЛЬНО, ДЕЙСТВУЙ ЛОКАЛЬНО</li>
                                    <li>ОКУПАЮТСЯ ЛИ ВАШИ ИНВЕСТИЦИИ В РАЗВИТИЕ? СЧИТАЕМ И АНАЛИЗИРУЕМ</li>
                                    <li>ЧЕМ ДОЛЖЕН ЗАНИМАТЬСЯ ФИНАНСОВЫЙ ДИРЕКТОР?</li>
                                    <li>МЕТОДЫ РАСПРЕДЕЛЕНИЯ КОСВЕННЫХ РАСХОДОВ</li>
                                    <li>ЧТО ДОЛЖЕН ЗНАТЬ КАЖДЫЙ РУКОВОДИТЕЛЬ О ФИНАНСАХ</li>
                                    <li>УПРАВЛЕНИЕ ПРОЕКТАМИ: СУТЬ ДЕЛА</li>
                                    <li>КАК НАЙТИ И УКРЕПИТЬ САМОЕ СЛАБОЕ ЗВЕНО В ЦЕПИ ПРОЦЕССОВ</li>
                                    <li>КАК УЛУЧШИТЬ БИЗНЕС-ПРОЦЕССЫ КОМПАНИИ</li>
                                    <li>ПОСТАВЬТЕ ДИАГНОЗ СВОЕМУ БИЗНЕСУ</li>
                                    <li>КАК СОЗДАТЬ СИСТЕМУ KPI. ПРИМЕНЕНИЕ ПОКАЗАТЕЛЕЙ ДЕЯТЕЛЬНОСТИ ДЛЯ МОТИВАЦИИ СОТРУДНИКОВ</li>
                                    <li>КАК ВЫЯВИТЬ СКРЫТЫЕ СТРАТЕГИЧЕСКИЕ ПРОБЛЕМЫ ПОСЛЕ ПРОВЕДЕННОГО АНАЛИЗА</li>
                                    <li>АРХИТЕКТУРА ОРГАНИЗАЦИОННЫХ ИЗМЕНЕНИЙ</li>
                                    <li>БЫСТРАЯ КОМПАНИЯ. КАК СДЕЛАТЬ ИЗМЕНЕНИЯ ПОСТОЯННЫМИ</li>
                                    <li>ОРГАНИЗАЦИЯ КАК СИСТЕМА</li>
                                    <li>ЦЕЛЕВОЕ УПРАВЛЕНИЕ. BSC, KPI, КОНТРОЛЛИНГ</li>
                                    <li>КАК НАЙТИ МИССИЮ КОМПАНИИ</li>
                                    <li>ЧТО ДОЛЖЕН ЗНАТЬ КАЖДЫЙ РУКОВОДИТЕЛЬ О МАРКЕТИНГЕ. КАК СТАТЬ ЛОКАЛЬНЫМ МОНОПОЛИСТОМ НА ЦЕЛЕВОМ РЫНКЕ</li>
                                    <li>УПРАВЛЕНИЕ ИЗМЕНЕНИЯМИ: ИНЖЕНЕРНЫЙ ПОДХОД</li>
                                    <li>ЧТО ДОЛЖЕН ЗНАТЬ КАЖДЫЙ РУКОВОДИТЕЛЬ О МОТИВАЦИИ СОТРУДНИКОВ</li>
                                    <li>КАК ПРЕДВИДЕТЬ И ПРЕОДОЛЕВАТЬ КРИЗИСЫ УПРАВЛЕНИЯ</li>
                                    <li>СТРАТЕГИЧЕСКИЙ АНАЛИЗ ТРЕНДОВ</li>
                                    <li>КАК ОСУЩЕСТВЛЯЕТСЯ СТРАТЕГИЧЕСКИЙ ВЫБОР И ПРИНИМАЮТСЯ СТРАТЕГИЧЕСКИЕ РЕШЕНИЯ</li>
                                    <li>С ЧЕГО НАЧАТЬ ВНЕДРЕНИЕ СИСТЕМЫ УПРАВЛЕНИЯ ПРОЦЕССАМИ?</li>
                                    <li>ЧТО ТАКОЕ ЗРЕЛОСТЬ ПРОЦЕССОВ И КАК ЕЕ ИЗМЕРЯТЬ?</li>
                                    <li>ЧТО ЗНАЧИТ УПРАВЛЯТЬ РИСКАМИ И КАК ЭТО ДЕЛАЕТСЯ НА ПРАКТИКЕ?</li>
                                    <li>ОПЫТ ПРИМЕНЕНИЯ KPI: ПРИЧИНЫ УСПЕХОВ И НЕСБЫВШИХСЯ ОЖИДАНИЙ</li>
                                    <li>ДИАГНОСТИКА И ИЗМЕНЕНИЕ ОРГАНИЗАЦИОННОЙ КУЛЬТУРЫ</li>
                                    <li>ПРАКТИКУМ ПО ВНЕДРЕНИЮ ПРОЦЕССНОГО ПОДХОДА</li>
                                    <li>ЧТО ТАКОЕ ПРАВИЛЬНАЯ ОРГАНИЗАЦИОННАЯ СТРУКТУРА И КАК ЕЕ ПОСТРОИТЬ</li>
                                    <li>СПИРАЛЬНАЯ ДИНАМИКА – ИНСТРУМЕНТ СТРАТЕГИИ</li>
                                    <li>ПОЗИЦИОНИРОВАНИЕ КОМПАНИИ НА РЫНКЕ</li>
                                    <li>ИНЖЕНЕРНЫЙ ПОДХОД К СОЗДАНИЮ СИСТЕМЫ УПРАВЛЕНИЯ ПРОЦЕССАМИ</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="row my-5 purchase-bg">
            <div class="col">
                <div class="container my-5">
                    <div class="row text-center">
                        <div class="col">
                            <h2 class="font-weight-bold">Уже решили?</h2>
                            <h3>Готовая база знаний &laquo;Русский менеджмент&raquo;</h3>
                            <h3 class="mt-4">Специальная цена до 31.07.18</h3>
                            <div id="countdown2" class="my-4 font-weight-bold"></div>
                            <p><a class="btn btn-danger btn-lg font-weight-bold" :href="paymentUrl" role="button">ПОЛУЧИТЬ ПРЯМО СЕЙЧАС</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row text-center mt-5">
            <div class="col">
                <h2>База знаний&nbsp;&mdash; это лучшие инвестиции в&nbsp;развитие персонала</h2>
            </div>
        </div>
        <div class="row mt-4 mb-5">
            <div class="col">
                <table class="table table-striped table-borderless table-responsive">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col" class="bg-success text-light">База знаний &laquo;Русский менеджмент&raquo;</th>
                            <th scope="col"></th>
                            <th scope="col" class="bg-danger text-light">Стандартный корпоративный тренинг</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="font-weight-bold bg-dark text-light">Скольких сотрудников вы сможете обучить за те же деньги?</td>
                            <td>500+ человек. Всю компанию, без ограничений.</td>
                            <td class="table-success"><i class="material-icons md-48 font-weight-bold text-success">check</i></td>
                            <td>1 тренинг-день для команды не более 10 человек.</td>
                            <td class="table-danger"><i class="material-icons md-48 font-weight-bold text-danger">clear</i></td>
                        </tr>
                        <tr>
                            <td class="font-weight-bold bg-dark text-light">Вы можете сами выстроить систему обучения и развития?</td>
                            <td>Конечно. Для каждого сотрудника вы можете подобрать обучающий материал.</td>
                            <td class="table-success"><i class="material-icons md-48 font-weight-bold text-success">check</i></td>
                            <td>Система обучения одинаковая для всех, кто посещает тренинг.</td>
                            <td class="table-danger"><i class="material-icons md-48 font-weight-bold text-danger">clear</i></td>
                        </tr>
                        <tr>
                            <td class="font-weight-bold bg-dark text-light">Можно ли повторить материал и пройти тренинг заново?</td>
                            <td>Вы можете сколько угодно раз использовать мастер-классы для обучения новых сотрудников.</td>
                            <td class="table-success"><i class="material-icons md-48 font-weight-bold text-success">check</i></td>
                            <td>Тренинг проводится только один раз, чтобы повторить придется оплачивать снова.</td>
                            <td class="table-danger"><i class="material-icons md-48 font-weight-bold text-danger">clear</i></td>
                        </tr>
                        <tr>
                            <td class="font-weight-bold bg-dark text-light">Уровень экспертности тренера</td>
                            <td>Александр Кочнев - эксперт-практик  с опытом  работы в управленческом консалтинге более 15 лет.</td>
                            <td class="table-success"><i class="material-icons md-48 font-weight-bold text-success">check</i></td>
                            <td>Приглашенный тренер чаще всего является специалистом только по обучению персонала. Не является экспертом в предметной области.</td>
                            <td class="table-danger"><i class="material-icons md-48 font-weight-bold text-danger">clear</i></td>
                        </tr>
                        <tr>
                            <td class="font-weight-bold bg-dark text-light">Удобство обучения</td>
                            <td>Вы обучаете персонал так, как хотите, когда и где угодно: в офисе, даете задание на дом, делаете выездную тренинг-сессию.</td>
                            <td class="table-success"><i class="material-icons md-48 font-weight-bold text-success">check</i></td>
                            <td>Формат и время обучение стандартное и согласовывается с тренером.</td>
                            <td class="table-danger"><i class="material-icons md-48 font-weight-bold text-danger">clear</i></td>
                        </tr>
                        <tr>
                            <td class="font-weight-bold bg-dark text-light">Результат обучения</td>
                            <td>Вы можете сколько угодно повторять материал до тех пор, пока не получите результат.</td>
                            <td class="table-success"><i class="material-icons md-48 font-weight-bold text-success">check</i></td>
                            <td>Результат не всегда измерим и очевиден. Повторить тренинг для закрепления нельзя.</td>
                            <td class="table-danger"><i class="material-icons md-48 font-weight-bold text-danger">clear</i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="container my-5">
            <div class="row">
                <div class="col">
                    <div class="card shadow-lg">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-3 d-none d-md-block">
                                    <img src="https://iteam.ru/landing/template/img/kochnev.jpg" class="img-fluid rounded">
                                </div>
                                <div class="col-md-9">
                                    <h5 class="font-weight-bold">Александр Кочнев</h5>
                                    <p>Лучший, по мнению многих, специалист по управлению компанией</p>
                                    <p>Управляющий партнер консалтинговой компании iTeam, кандидат технических наук, член Российской ассоциации управления проектами.</p>
                                    <p>Опыт работы в управленческом консалтинге более 15 лет. Руководитель многих консалтинговых проектов в компаниях различных отраслей: заводы, торговые сети, банки, предприятия сферы услуг, многопрофильные холдинги, государственные учреждения регионального и федерального уровня.</p>
                                    <a data-toggle="collapse" href="#collapseExample" data-target="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"><h5>Индивидуальная программа обучения и развития для ваших сотрудников</h5></a>
                                    <div class="collapse" id="collapseExample">
                                        <div class="card card-body mt-3">
                                            Дополнительно к&nbsp;комплекту база знаний &laquo;Русский менеджмент&raquo; вы&nbsp;можете заказать консультацию Александра Кочнева по&nbsp;внедрению обучающей видеотеки и&nbsp;разработке индивидуальной системы обучения и&nbsp;развития для ваших сотрудников.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row bg-dark my-5 top-header">
            <div class="col">
                <div class="container my-5">
                    <div class="row text-light text-center">
                        <div class="col">
                            <h2 class="font-weight-bold">Летний безлимит 2018</h2>
                            <h3>Готовая база знаний “Русский менеджмент”</h3>
                            <h3 class="mt-4">Специальная цена до 31.07.18</h3>
                            <div id="countdown3" class="my-4 font-weight-bold"></div>
                            <p><a class="btn btn-danger btn-lg font-weight-bold" :href="paymentUrl" role="button">ПОЛУЧИТЬ СЕЙЧАС</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container my-5">
            <div class="row text-center">
                <div class="col">
                    <h2>FAQ</h2>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">На какое время дается доступ к корпоративной библиотеке?</a>
                                <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Возможна ли оплата в рассрочку?</a>
                                <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Вы&nbsp;принимаете карты стран СНГ?</a>
                            </div>
                        </div>
                        <div class="col-md-8 mt-2 mt-md-0">
                            <div class="tab-content" id="v-pills-tabContent">
                                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <div class="card">
                                        <div class="card-body">
                                            <p>Доступ бессрочный. Вы оплачиваете доступ только один раз и используете материалы постоянно.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <div class="card">
                                        <div class="card-body">
                                            <p>Оплата в рассрочку возможна на индивидуальных условиях. Напишите нам на <a href="mailto:info@iteam.ru">info@iteam.ru</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                    <div class="card">
                                        <div class="card-body">
                                            <p>Да, мы&nbsp;принимаем карты, выпущенные на&nbsp;территории Украины, Беларуси, Казахстана и&nbsp;ряда других стран. Список всех стран и&nbsp;вариантов оплаты можно <a href="https://www.walletone.com/ru/merchant/payments/#country=RU&amp;section=cash" target="_blank">увидеть по&nbsp;ссылке</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row text-center mt-5">
            <div class="col">
                <h2>Отзывы наших участников</h2>
            </div>
        </div>
        <div class="row text-center mt-4">
            <div class="col-lg-4 col-md-6">
                <h5 class="mb-3">Александр Красный, &laquo;ГаРус&raquo;</h5>
                <div class="embed-responsive embed-responsive-16by9 mb-4">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Rp4Jh-DP7is" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <h5 class="mb-3">Александр Соловьев, &laquo;FIS&raquo;</h5>
                <div class="embed-responsive embed-responsive-16by9 mb-4">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/U4QFO0ILnmE" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <h5 class="mb-3">Геннадий Черкасов, &laquo;Миг Плюс&raquo;</h5>
                <div class="embed-responsive embed-responsive-16by9 mb-4">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/C2MVqTRj40w" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <h5 class="mb-3">Яна Ходак, &laquo;МК&nbsp;Практик&raquo;</h5>
                <div class="embed-responsive embed-responsive-16by9 mb-4">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/rlzpDK1my58" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <h5 class="mb-3">...</h5>
                <div class="embed-responsive embed-responsive-16by9 mb-4">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/MS8oCP5dIjc" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <h5 class="mb-3">...</h5>
                <div class="embed-responsive embed-responsive-16by9 mb-4">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/WWzZ19ZCCE8" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card my-1">
                        <div class="card-body">
                            <p class="mb-2">Вашу компанию я считаю одной из самых сильных на рынке консалтинговых услуг в нашей стране. Мне нравится, что вы затрагиваете широкий диапазон управленческих проблем и освещаете их достаточно качественно и глубоко. В публикациях вашей компании я нахожу для себя много полезного, поскольку всегда интересно знакомиться с опытом профессионалов, учиться у них.</p>
                            <footer class="blockquote-footer">С пожеланиями успехов и процветания, Борисюк Юрий Александрович Консультант по управлению, Доктор технических наук</footer>
                        </div>
                    </div>
                    <div class="card my-1">
                        <div class="card-body">
                            <p class="mb-2">Мне очень нравится цикл мастер-классов, которые Вы ведете. Лично я, ранее являясь руководителем фабрики, начал менять свои подходы к управлению, в т.ч. благодаря информации получаемой от Вас. Она как-то отзывалась с тем, что я делал и наблюдал на фабрике. С тех пор у меня зародилась мысль как же малоэффективна промышленная способность России и как огромен потенциал и как это можно реализовать. Лично знакомясь с проблемами разных предприятий (иногда друзья приглашают как эксперта) я вижу, как многое можно сделать, как увеличить и результативность и эффективность.</p>
                            <footer class="blockquote-footer">Дрягин Олег Борисович</footer>
                        </div>
                    </div>
                    <div class="card my-1">
                        <div class="card-body">
                            <p class="mb-2">Да, мне нравятся Ваши мастер-классы, очень системный подход, владение материалом на высоком уровне и, безусловно, чувствуется большой практический опыт в тех вопросах, которые рассматриваются. Что касается нового. Т.к. бизнес-процессы для меня тема известная, то абсолютно новое найти, наверное, очень сложно. Меня привлекает то, что профессионализм и высокий уровень профессионального владения предметом у Александра, позволяет мне по другому посмотреть на уже знакомые вещи. С моей точки зрения, это очень важно, и нужно, на известные тебе вещи взглянуть по новому, т.к. в процессе операционной работы очень часто глаз "замыливается" и ты перестаешь видеть, на самом деле, очевидные вещи.</p>
                            <footer class="blockquote-footer">Удачного дня, Елена Федаш, Директор по персоналу, Корпорация "АТБ", г.Днепропетровск.</footer>
                        </div>
                    </div>
                    <div class="card my-1">
                        <div class="card-body">
                            <p class="mb-2">
                                    Понравилось:
                                    <ol>
                                        <li>Практическая ориентация информации;</li>
                                        <li>Структурирование и прозрачность мастер-класса;</li>
                                        <li>Освещение тем, которые не затрагиваются в классических схемах обучения;</li>
                                        <li>Виден опыт лектора в исполнении того, о чем идет речь;</li>
                                        <li>Доступность данного материала;</li>
                                    </ol>
                                    В ближайшее время планирую структурировать текущие бизнес процессы в своей организации.                                    
                            </p>
                            <footer class="blockquote-footer">С уважением, Григорий Барановский</footer>
                        </div>
                    </div>
                    <div class="card my-1">
                        <div class="card-body">
                            <p class="mb-2">При всей компактности излагаемого материала, наличие самого необходимого, и самое главное даётся рабочий инструмент на примерах. Не многие учебные программы  отличаются этим. Я уже посмотрел несколько мастер-классов А. Кочнева, и могу сказать, что материал хорошо структурирован, излагается доступно и внятно. Большое спасибо. Я рекомендовал эти мастер-классы своим сотрудникам.</p>
                            <footer class="blockquote-footer">Бородавкин А.В.</footer>
                        </div>
                    </div>
                    <div class="card my-1">
                        <div class="card-body">
                            <p class="mb-2">Александр, большое спасибо за новые знания. Моя сфера деятельности - образование, но, проецируя с бизнес-разговора по теме на свою отрасль, получила неоценимую помощь. Многое упорядочилось, еще больше открылось. Еще раз огромное спасибо. С нетерпением буду ждать дальнейшего обучения. Подписалась на Ваш твиттер, фэйсбук, видеоканал. Посмотрю все видеозаписи. Думаю, пригодятся в решении проблем тех проектов, которыми занимаюсь.Удачи Вам.</p>
                            <footer class="blockquote-footer">Елена Гончарова</footer>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="row text-center mt-5 bg-dark py-5 text-light">
            <div class="container mb-5">
                <div class="row">
                    <div class="col">
                        <h2 class="mb-3">Скачать список всех мастер-классов</h2>
                        <Grform 
                            campaign_token="nDrX"
                        />
                    </div>
                </div>
            </div>
        </div>
    
    </div>

  </div>

</template>

<script src="./home.js"></script>

<style>
h1,
h2,
h3,
.text-accent {
  font-family: "Noto Serif", serif;
}

.top-header {
  background-image: url("../assets/bg_top.jpg");
  background-size: cover;
}

.cards-header {
  background-image: url("../assets/bg_2.jpg");
  background-size: cover;
}
.purchase-bg {
  background-image: url("../assets/bg_3.jpg");
  background-size: cover;
}
</style>
