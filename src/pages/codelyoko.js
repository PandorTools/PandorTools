import React, { useState } from 'react';
import styles from '../styles/ArticleView.module.css';

const ArticleViewPage = () => {
    const [articles, setArticles] = useState([
        {
            title: 'Вертуализации в Lyoko:',
            content: 'Команды:<br>1. TransferLocation - Меню выбора отправки в Lyoko/Sector 5.<br> 2. Transfer - Открыть сканеры.<br>3. Scan.Start - Сканирование персонажа. <br>4. Virt.Start - Отправка персонажа в Lyoko. <br>5. DelayedScannerProcess.30/40 - Поставить таймер на отправку в Lyoko.',
            isOpen: false
        },
        {
            title: 'Пример статьи 2',
            content: 'Текст примера статьи 2...',
            isOpen: false
        }
    ]);

    const toggleArticle = (index) => {
        const newArticles = [...articles];
        newArticles[index].isOpen = !newArticles[index].isOpen;
        setArticles(newArticles);
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {articles.map((article, index) => (
                    <div key={index} className={styles.article}>
                        <h2
                            className={styles.articleTitle}
                            onClick={() => toggleArticle(index)}
                        >
                            {article.title}
                        </h2>
                        {article.isOpen &&
                            <p
                                className={styles.articleContent}
                                dangerouslySetInnerHTML={{ __html: article.content }}
                            ></p>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArticleViewPage;
