import axios from "axios";

const url = 'https://truly-contacts.herokuapp.com/api/';

const baseURL = url;

export const $host = axios.create({
  baseURL,
});
