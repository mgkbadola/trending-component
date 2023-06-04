'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './page.module.css';

const ESArticle = ({ id, href, src, title, date }) => {
  return (
    <div id={id} className="jsx-139ea8159c69a37f">
      <a href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${href}`} className="jsx-139ea8159c69a37f">
        <div className="jsx-139ea8159c69a37f es-trending-card">
          <div style={{ position: 'relative', minWidth: '248px', height: 0 }} className="jsx-2596884976 es-image-loader-aspect-ratio">
            <img id="img-tag-trend-article-image" src={`${process.env.NEXT_PUBLIC_CDN_URL}${src}`}
              style={{ position: 'absolute', zIndex: 0, width: '100%', height: '100%', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', objectFit: 'cover' }}
              loading="eager"
              className="jsx-2596884976" />
          </div>
          <div className="jsx-139ea8159c69a37f es-trending-card-title">
            <h1 className="jsx-139ea8159c69a37f">{title}</h1>
          </div>
          <div className="jsx-139ea8159c69a37f es-trending-card-date">
            <p className="jsx-139ea8159c69a37f">{new Date(date).toLocaleString('en-US', {
              year: 'numeric',
              month: 'long',
              day: '2-digit',
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
              timeZoneName: 'short',
              timeZone: 'America/New_York'
            })}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

const QueryForm = ({ onSubmit }) => {
  const [visitId, setVisitId] = useState(0);
  const [articleId, setArticleId] = useState(0);
  const [visitIds, setVisitIds] = useState([]);
  const [articleIds, setArticleIds] = useState([]);
 
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(visitId, articleId);
  };
  
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_INTERNAL_API}/get-visits`).then(function(response){setVisitIds(response.data.visits);}).catch((err) => { })
    axios.get(`${process.env.NEXT_PUBLIC_INTERNAL_API}/get-articles`).then(function(response){setArticleIds(response.data.articles);}).catch((err) => { })
  }, []);

  const changeVisitId = (event) => {
    setVisitId(event.target.value)
  };

  const changeArticleId = (event) => {
    setArticleId(event.target.value)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='visit'>Visit ID:</label>
      <select id="visit" value={visitId} onChange={changeVisitId}>
        <option key="0" value="0">Select</option>
        {visitIds.map((visit_id) => (
          <option key={visit_id} value={visit_id}>{visit_id}</option>
        ))}
      </select>
      <br />
      <label htmlFor='article'>Article ID:</label>
      <select id="article" value={articleId} onChange={changeArticleId}>
      <option key="0" value="0">Select</option>
      {articleIds.map((article_id) => (
        <option key={article_id} value={article_id}>{article_id}</option>
      ))}
      </select>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

const TrendingArticleLoader = ({ articles, readerCount }) => {
  return (
    <div className="jsx-e43b413d557e7f60 es-trending-article-container">
      <div className="jsx-e43b413d557e7f60 es-trending-article-list-title">
        <div className="jsx-e43b413d557e7f60 es-trending-article-list-title-start">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.06212 17.3731C3.62738 17.5965 3.13511 17.206 3.22264 16.7071L4.15608 11.3864L0.193459 7.6102C-0.17687 7.25729 0.0148305 6.61204 0.510943 6.54156L6.02173 5.7587L8.47886 0.891343C8.70021 0.452886 9.29979 0.452886 9.52114 0.891343L11.9783 5.7587L17.4891 6.54156C17.9852 6.61204 18.1769 7.25729 17.8065 7.6102L13.8439 11.3864L14.7774 16.7071C14.8649 17.206 14.3726 17.5965 13.9379 17.3731L9 14.8351L4.06212 17.3731Z" fill="#F75454" />
          </svg>
          <h1 className="jsx-e43b413d557e7f60">Trending</h1>
        </div>
        <div className="jsx-e43b413d557e7f60 es-readers-count">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.875 6C7.875 7.03553 7.03553 7.875 6 7.875C4.96447 7.875 4.125 7.03553 4.125 6C4.125 4.96447 4.96447 4.125 6 4.125C7.03553 4.125 7.875 4.96447 7.875 6Z" fill="#F75454"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 6C0 6 2.25 1.875 6 1.875C9.75 1.875 12 6 12 6C12 6 9.75 10.125 6 10.125C2.25 10.125 0 6 0 6ZM6 8.625C7.44975 8.625 8.625 7.44975 8.625 6C8.625 4.55025 7.44975 3.375 6 3.375C4.55025 3.375 3.375 4.55025 3.375 6C3.375 7.44975 4.55025 8.625 6 8.625Z" fill="#F75454">
            </path>
          </svg>
          <p className="jsx-e43b413d557e7f60">{readerCount} Live Readers</p>
        </div>
      </div>
      <div className="jsx-e43b413d557e7f60 es-trending-article-list-cards-scroll">
        {articles.map((article) => (
          <ESArticle
            key={article.article_id}
            href={article.article_slug}
            src={article.cdn_slug}
            title={article.heading}
            date={article.created_on}
          />
        ))}
      </div>
    </div>
  );
};

export default function Page() {
  const [visitId, setVisitId] = useState(0);
  const [articleId, setArticleId] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [uuid, setUUID] = useState(Date.now() / 1000);
  const [articles, setArticles] = useState([]);
  const [readerCount, setReaderCount] = useState(0);

  const handleFormSubmit = (visitId, articleId) => {
    setVisitId(visitId);
    setArticleId(articleId);
    setFormSubmitted(true);
    setUUID(Date.now() / 1000)
  };
  useEffect(() => {
    
    if (formSubmitted) {
      const fetchArticles = async () => {
        try {
          await axios.get(`${process.env.NEXT_PUBLIC_INTERNAL_API}/modify-behaviour?visit_id=${visitId}&article_id=${articleId}`);
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_INTERNAL_API}/fetch-trending?visit_id=${visitId}&article_id=${articleId}`
          );
          setArticles(response.data.articleList);
          setReaderCount(response.data.count);
        } catch (error) {
          //log error
        }
      };
      fetchArticles();
    }
  }, [formSubmitted, uuid]);

  return (
    <div>
      <QueryForm onSubmit={handleFormSubmit} />
      {formSubmitted && articles.length > 0 && <TrendingArticleLoader articles={articles} readerCount={readerCount} />}
    </div>
  );
}
