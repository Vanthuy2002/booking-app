import express from 'express';
import cors from 'cors';
import cookie from 'cookie-parser';
import bodyParser from 'body-parser';

/**
 * @param {*} app Express
 */

const defineConfig = (app) => {
  app.use(express.json());
  app.use(express.static('public'));
  app.use(cors({ origin: true }));
  app.use(cookie());
  app.use(bodyParser.urlencoded({ extended: true }));
};

export { defineConfig };
