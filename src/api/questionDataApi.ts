import axios from "axios";

const url = 'https://arcane-plateau-88908.herokuapp.com/api'

export class questionApi {
    static fetchQuestionApi() {
        return axios.get(url);
    } }
