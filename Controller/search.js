// const axios = require('axios');

import axios from "axios";
const clientId = 'e5ff54cb01e04a4a9473188639c61c3c';
const clientSecret = '40b012e63f8d42fdb15cce980550fbdd';

const getAccessToken = async() =>{
    try {
        const tokenResponse = await axios({
            method: 'post',
            url: 'https://accounts.spotify.com/api/token',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + new Buffer.from(clientId + ':' + clientSecret).toString('base64')
              },
              data: 'grant_type=client_credentials'
        });

        return tokenResponse.data.access_token
    } catch (error) {
        console.error(error);
    }
}
 const searchTrack = async(query, accessToken)=>{
    try {
        const searchResponse = await axios({
            method: 'get',
            url: `https://api.spotify.com/v1/search?q=${query}&type=track`,
            headers:{
                'Authorization': 'Bearer ' + accessToken
            }
        })
        return searchResponse.data.tracks.items
    } catch (error) {
        console.error(error);
    }
 }
export const searchContent = async(req, res) =>{
    const accessToken = await getAccessToken();
    const tracks = await searchTrack(req.params.query, accessToken);
    res.json(tracks)
    
}