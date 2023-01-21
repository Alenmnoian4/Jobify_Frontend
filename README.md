# Jobify

### Created by:

Ramon (Product Manager)
Alen (Release Manager)
Brianne (Backend Dev)
Mary (Frontend Dev)

## Description:

Jobify allows users to save all job postings, from any other site, in one central location. Just enter a few details about the job, press add, and now you have one place to view all potential applications. It saves time and burnt brain cells.

## Problem to be Addressed

Those who are searching for jobs have to save their favorite jobs on each individual website. Why remember every website you have saved jobs on, when you can add all favorite jobs to one place?

## General Idea/Purpose

A website that allows users to save their favorite job postings in one central location.

## Audience

Anyone who is job searching and applying to jobs.

### Technologies To Be Used

- HTML
- CSS
- JAVASCRIPT
- NODE.JS
- EXPRESS
- MONGODB
- REACT
- MATERIAL UI

## Components Architecture
![Architecture](https://i.imgur.com/gAmjO3q.png)

## The Route Table
| Route | Element | Loader | Action | Summary |
|-------|---------|--------|--------|---------|
| / | Home | indexLoader | | Home page will include recent posts |
| /posts | index | indexLoader |  | returns all posts|
| /posts/:id | show | postShowLoader |  | returns single post|
| /posts/create |  | | postCreateAction | creates post |
| /posts/update |  | | postUpdateAction | update post |
| /posts/delete |  | | postCeleteAction | deletes post |


## Trello Board

[TRELLO BOARD](https://trello.com/b/Uo1hPrCY/jobify)

## Wire Frames

### Desktop:

![Home](https://i.imgur.com/9ngMgvd.png)
![Create](https://i.imgur.com/dxpq2Ik.png)
![Index](https://i.imgur.com/FtGB4dC.png)

### Mobile

![Mobile Designs](https://i.imgur.com/w5eraBf.png)

## Link to Project

[Live Page](https://clever-platypus-dd3d98.netlify.app/)