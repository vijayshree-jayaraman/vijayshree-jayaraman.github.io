---
layout: default
title: Home
description: Home - Vijayshree Jayaraman
---

<style>
  @media (max-width: 600px) {
    .hero {
      flex-direction: column !important;
      gap: 1rem !important;
      align-items: flex-start;
    }
    .hero > div {
      min-width: 100% !important;
    }
    .hero img {
      max-width: 100% !important;
      height: auto !important;
      border-radius: 8px;
    }
  }

  .hero-inner h1 {
    margin-bottom: 0.5rem;
  }
</style>

<div class="container">
  <section class="hero" style="display: flex; align-items: center; gap: 20px;">
    <div>
      <img src="/assets/images/profile.jpeg" alt="Vijayshree Jayaraman" style="max-width:200px; height:auto; border-radius: 8px;">
    </div>

    <div class="hero-inner">
      <h1>Vijayshree Jayaraman</h1>
      <p class="lede">
        Hi, welcome to my webpage! I am currently a PhD student in Economics at the
        <a href="https://economics.illinois.edu/" target="_blank" rel="noopener noreferrer">University of Illinois Urbana-Champaign</a>.<br><br>
        Previously, I was a Research Associate at the
        <a href="https://www.cafral.org.in/" target="_blank" rel="noopener noreferrer">Centre for Advanced Financial Research and Learning, Mumbai, India</a>.
        Both my undergraduate and master's degrees in Economics are from
        <a href="https://azimpremjiuniversity.edu.in/" target="_blank" rel="noopener noreferrer">Azim Premji University</a>, and my interests include
        <strong>applied econometrics, development finance, and labour economics</strong>.
      </p>
    </div>
  </section>

  <section class="section">
    <h2>Recent Writing</h2>
    <div class="card-grid" style="display: flex; gap: 20px; align-items: flex-start;">
      <article class="card" style="flex: 1;">
        <h4>
          <a href="https://www.ideasforindia.in/topics/money-finance/financialisation-of-indian-households-trends-in-savings-and-borrowing" target="_blank" rel="noopener noreferrer">
            Financialisation of Indian households: Trends in savings and borrowing
          </a>
        </h4>
        <p>
          With Vidhya Soundararajan, Aishwarya Bhamidipati, and Twincle Halder, for Ideas for India.
          <a href="https://www.ideasforindia.in/topics/money-finance/financialisation-of-indian-households-trends-in-savings-and-borrowing-hindi" target="_blank" rel="noopener noreferrer" lang="hi">हिन्दी संस्करण</a>.
        </p>
      </article>
    </div>
  </section>

  <section class="section">
    <h2>Recent Repository</h2>
    <div class="card-grid">
      <article class="card">
        <h4>naam</h4>
        <p>
          A Stata package for consistent string encoding, ID management, and label tracking across datasets.
          <a href="https://github.com/vijayshree-jayaraman/naam" target="_blank" rel="noopener noreferrer">View Repository on GitHub</a>
        </p>
      </article>
    </div>
  </section>
</div>
