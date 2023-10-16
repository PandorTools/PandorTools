import React from 'react';
import styles from '../styles/Home.module.css';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img src="/logo.png" alt="Логотип сайта" className={styles.logo} />

                <div className={styles.authWindow}>
                    <h1 className={styles.authTitle}>Авторизация</h1>

                    <div className={styles.authInputContainer}>
                        <label htmlFor="nicknameInput" className={styles.authInputLabel}>
                            Никнейм
                        </label>
                        <div className={styles.inputWrapper}>
                            <input
                                type="text"
                                id="nicknameInput"
                                placeholder="Введите никнейм"
                                className={styles.authInput}
                            />
                            <div className={styles.tooltipWrapper}>
                                <span className={styles.icon}>i</span>
                                <span className={styles.tooltip}>Введите игровой ник, который у Вас на админке!</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.authInputContainer}>
                        <label htmlFor="passwordInput" className={styles.authInputLabel}>
                            Пароль
                        </label>
                        <div className={styles.inputWrapper}>
                            <input
                                type="password"
                                id="passwordInput"
                                placeholder="Введите пароль"
                                className={styles.authInput}
                            />
                            <div className={styles.tooltipWrapper}>
                                <span className={styles.icon}>i</span>
                                <span className={styles.tooltip}>Введите пароль, который Вам дал Следящий за Хелперами!</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.buttonsContainer}>
                        <button className={styles.loginButton}>Войти</button>
                        <button className={styles.loginButtonVk}>Авторизация через VK</button>
                    </div>

                </div>

                <p className={styles.infoText}>Данный сайт сделан для упрощения <br /> работы администрации сервера</p>
            </div>
        </div>
    );
};

export default HomePage;