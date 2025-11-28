---
layout: default
title: Home
description: Home — Vijayshree Jayaraman
---

<style>
  /* Hero section stacking on mobile */
  @media (max-width: 600px) {
    .hero {
      flex-direction: column !important;
      gap: 1rem !important;
      align-items: flex-start; /* better alignment for stacked */
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

  /* Optional: add some spacing below h1 in hero */
  .hero-inner h1 {
    margin-bottom: 0.5rem;
  }
</style>

<div class="container">
  <section class="hero" style="display: flex; align-items: center; gap: 20px;">
    <!-- Image on the left -->
    <div>
      <img src="/assets/images/profile.jpeg" alt="Vijayshree Jayaraman" style="max-width:200px; height:auto; border-radius: 8px;">
    </div>

    <!-- Text on the right -->
    <div class="hero-inner">
      <h1>Vijayshree Jayaraman</h1>
      <p class="lede">
        Hi, Welcome to my webpage! I am currently a Research Associate at 
        <a href="https://www.cafral.org.in/" target="_blank" rel="noopener noreferrer">Centre for Advanced Financial Research, Mumbai, India</a>.<br><br>
        Both my undergraduate and masters in economics was from 
        <a href="https://azimpremjiuniversity.edu.in/" target="_blank" rel="noopener noreferrer">Azim Premji University</a> and my interests include 
        <strong>applied econometrics, economics of identity, and labour economics</strong>.
      </p>
    </div>
  </section>

<section class="section">
  <h2>Recent Writing</h2>
  <div class="card-grid" style="display: flex; gap: 20px; align-items: flex-start;">
    
    <article class="card" style="flex: 1; display: flex; gap: 20px;">
      
      <!-- Replace this image with the one you want -->
      <div style="flex-shrink: 0;">
        <img src="/assets/images/mgnregs.png" alt="MGNREGS Article Image" 
             style="max-width:200px; height:auto; border-radius: 8px;">
      </div>

      <div style="flex-grow: 1;">
        <h4>
          <a href="https://www.dropbox.com/scl/fi/otoowrctxsx89e13y7skd/cost_of_gender_parity_working_paper.pdf?rlkey=lxb51hq370ioy7vyoabyfif58&dl=0" 
             target="_blank" rel="noopener noreferrer">
            Is Gender Parity Costly? Evidence from Rural Local Body Elections
          </a>
        </h4>
        <p>
          This paper examines the causal effect of electing a female Gram Panchayat (GP) president on public 
          employment provision under the Mahatma Gandhi National Rural Employment Guarantee Scheme (MGNREGS). 
        </p>

        <!-- Optional Thread link (remove if not needed) -->
        <p>
          <a href="#" target="_blank" rel="noopener noreferrer">Thread (optional)</a>
        </p>
      </div>

    </article>
  
  </div>
</section>


  <section class="section">
    <h2>Recent Repository</h2>
    <div class="card-grid">
      <article class="card">
        <h4>ASUSE Cross Sections</h4>
        <p>
          Annual Survey of Unincorporated Sector Enterprises — cleaned data and scripts.  
          <a href="https://github.com/advaitmoharir/ASUSE" target="_blank" rel="noopener noreferrer">View Repository on GitHub</a>
        </p>
      </article>
    </div>
  </section>
</div>
