import React from 'react';
import '../helpers/styles/styles.css';
import photo from '../assets/erjan.png';
import photo2 from '../assets/whom.jpg';

const MainPage = () => {
    return (
        <div className='mainpage'>
            <div className='overlays'>

                <div className='intro'>
                    <div className='intro_head'>
                        <h2>Мобилография</h2>
                        <h3>Заманбап видео тартуу жана монтаждоо практикалык программасы</h3>
                        <div className='intro_heading'>
                            <h3>100% жыйынтык менен чыгуучу жалгыз курс</h3>
                            <h4>Себеби, биз кунумдук "фишкаларды" айтуудан тышкары, кадам сайын нөлдөн тарта профессионалдуу жыйынтыкка жеткиребиз.</h4>
                        </div>
                    </div>
                    <div className='intro_img'>
                        <img src={photo} alt="author erjan" />
                    </div>
                </div>

                <div className='promo'>
                    <img src="" alt="" />
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/-yZtcB1pyxc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className='who'>
                    <h2>Бул курс кимдер үчүн?</h2>
                    <div className='whom'>
                        <div className='whom_img'>
                            <img src={photo2} alt="photo" />
                        </div>
                        <div>
                            <div className='whoms whom1'>
                                <div className='whom_number'><h3>1</h3></div>
                                <div className='whom_heading'><h4>Өзү үчүн кызыгып, тартып, жаны хобби менен алек болгусу келгендерге</h4></div>
                            </div>
                            <div className='whoms whom2'>
                                <div className='whom_number'><h3>2</h3></div>
                                <div className='whom_heading'><h4>Өз бизнеси же компаниясы үчүн мыкты видео-контент жаратууну ойлогондорго</h4></div>
                            </div>
                            <div className='whoms whom3'>
                                <div className='whom_number'><h3>3</h3></div>
                                <div className='whom_heading'><h4>Мобилография кесибин аркалап, андан жакшы киреше табууну көздөгөндөргө</h4></div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default MainPage;